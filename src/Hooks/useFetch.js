import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

import {useLocalStorage} from 'Hooks'

export const useFetch = url => {
  const baseUrl = 'https://conduit.productionready.io/api'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})
  const [token] = useLocalStorage('token')

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) return

    const requestOptions = {
      ...options,
      headers: {
        authorization: token ? `Token ${token}` : '',
      },
    }

    axios(baseUrl + url, requestOptions)
      .then(res => {
        setResponse(res.data)
      })
      .catch(err => {
        setError(err.response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [isLoading, options, token, url])

  return [{isLoading, response, error}, doFetch]
}
