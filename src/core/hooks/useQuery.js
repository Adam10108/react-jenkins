import { useState, useEffect } from 'react'
import * as R from 'ramda'

function useQuery(model) {
  const [data, setData] = useState([])

  /// Loading
  const [isLoading, setIsLoading] = useState(false)
  const [isRefetch, setIsRefetch] = useState(false)

  const reloadData = () => {
    setIsRefetch(!isRefetch)
  }

  const fetchData = async () => {
    setIsLoading(true)
    try {
      const resp = await model()
      await setData(R.values(R.path(['data'], resp)))
    } catch (err) {
      setData(null)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [isRefetch])

  const result = { data, isLoading, setIsLoading, reloadData }

  return result
}

export default useQuery
