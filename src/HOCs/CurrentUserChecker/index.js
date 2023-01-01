import {useEffect, useContext} from 'react'

import {useFetch, useLocalStorage} from 'Hooks'
import {PATHS} from 'API'
import {CurrentUserContext} from 'Contexts'

export const CurrentUserChecker = ({children}) => {
  const [{response}, doFetch] = useFetch(PATHS.currentUser)
  const [, setCurrentUserState] = useContext(CurrentUserContext)
  const [token] = useLocalStorage('token')

  useEffect(() => {
    if (!token) {
      setCurrentUserState(state => ({
        ...state,
        isLoggedIn: false,
      }))

      return
    }

    setCurrentUserState(state => ({
      ...state,
      isLoading: true,
    }))
    doFetch()
  }, [setCurrentUserState, doFetch, token])

  useEffect(() => {
    if (!response) return

    setCurrentUserState(state => ({
      ...state,
      currentUser: response.user,
      isLoading: false,
      isLoggedIn: true,
    }))
  }, [response, setCurrentUserState])

  return children
}
