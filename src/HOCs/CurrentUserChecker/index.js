import {useEffect, useContext} from 'react'

import {useFetch, useLocalStorage} from 'Hooks'
import {PATHS} from 'API'
import {CurrentUserContext} from 'Contexts'

export const CurrentUserChecker = ({children}) => {
  const [{response}, doFetch] = useFetch(PATHS.currentUser)
  const [, dispatch] = useContext(CurrentUserContext)
  const [token] = useLocalStorage('token')

  useEffect(() => {
    if (!token) {
      dispatch({type: 'SET_UNAUTHORIZED'})

      return
    }

    dispatch({type: 'LOADING'})
    doFetch()
  }, [dispatch, doFetch, token])

  useEffect(() => {
    if (!response) return

    dispatch({type: 'SET_AUTHORIZED', payload: response.user})
  }, [dispatch, response])

  return children
}
