import {useEffect, useContext} from 'react'

import {useFetch, useLocalStorage} from 'Hooks'
import {CurrentUserContext} from 'Contexts'

export const useAuthentication = apiUrl => {
  const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)
  const [token, setToken] = useLocalStorage('token')
  const [currentUserState, dispatch] = useContext(CurrentUserContext)

  const doFetchReturnFunc = user => {
    dispatch({type: 'LOADING'})
    doFetch({
      method: 'post',
      data: {user},
    })
  }

  useEffect(() => {
    if (!response) return

    setToken(response.user.token)
    dispatch({type: 'SET_AUTHORIZED', payload: response.user})
  }, [dispatch, response, setToken])

  return [{isLoading, error, token, currentUserState}, doFetchReturnFunc]
}
