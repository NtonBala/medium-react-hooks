import {useState, useEffect, useCallback} from 'react'
import axios from 'axios'

export const useFetch = url => {
  const baseUrl = 'https://conduit.productionready.io/api'
  const [isLoading, setIsLoading] = useState(false)
  const [response, setResponse] = useState(null)
  const [error, setError] = useState(null)
  const [options, setOptions] = useState({})

  const doFetch = useCallback((options = {}) => {
    setOptions(options)
    setIsLoading(true)
  }, [])

  useEffect(() => {
    if (!isLoading) return

    axios(baseUrl + url, options)
      .then(res => {
        setResponse(res.data)
      })
      .catch(err => {
        setError(err.response.data)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [isLoading, options, url])

  return [{isLoading, response, error}, doFetch]
}
