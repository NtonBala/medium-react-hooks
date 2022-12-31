import {useEffect, useContext} from 'react'

import {useFetch, useLocalStorage} from 'Hooks'
import {PATHS} from 'API'
import {CurrentUserContext} from 'Contexts'

export const CurrentUserChecker = ({children}) => {
  const [{response}, doFetch] = useFetch(PATHS.currentUser)
  const [, setCurrentUser] = useContext(CurrentUserContext)
  const [token] = useLocalStorage('token')

  useEffect(() => {
    if (!token) {
      setCurrentUser(state => ({
        ...state,
        isLoggedIn: false,
      }))

      return
    }

    setCurrentUser(state => ({
      ...state,
      isLoading: true,
    }))
    doFetch()
  }, [setCurrentUser, doFetch, token])

  useEffect(() => {
    if (!response) return

    setCurrentUser(state => ({
      ...state,
      currentUser: response.user,
      isLoading: false,
      isLoggedIn: true,
    }))
  }, [response, setCurrentUser])

  return children
}
