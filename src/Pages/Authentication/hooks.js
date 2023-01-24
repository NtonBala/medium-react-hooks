import {useEffect, useContext} from 'react'

import {useFetch, useLocalStorage} from 'Hooks'
import {CurrentUserContext} from 'Contexts'

export const useAuthentication = apiUrl => {
  const [{isLoading, response, error}, doFetch] = useFetch(apiUrl)
  const [token, setToken] = useLocalStorage('token')
  const [currentUserState, setCurrentUserState] = useContext(CurrentUserContext)

  const doFetchReturnFunc = user => {
    setCurrentUserState(state => ({
      ...state,
      isLoading: true,
    }))
    doFetch({
      method: 'post',
      data: {user},
    })
  }

  useEffect(() => {
    if (!response) return

    setToken(response.user.token)
    setCurrentUserState(state => ({
      ...state,
      isLoggedIn: true,
      isLoading: false,
      currentUser: response.user,
    }))
  }, [response, setCurrentUserState, setToken])

  return [{isLoading, error, token, currentUserState}, doFetchReturnFunc]
}
