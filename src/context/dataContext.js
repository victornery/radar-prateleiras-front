import { useState, useEffect, createContext, useContext } from 'react'
import firebase from '../vendor/firebase/clientApp'

export const DataContext = createContext()

export default ({ children }) => {
  const [data, setData] = useState(null)
  const [loadingData, setLoadingData] = useState(true)

  useEffect(() => {
    // Listen authenticated user
    let loadDataBase = null
    try {
      loadDataBase = firebase
        .database()
        .ref()
        .on(
          'value',
          snapshot => {
            if (!loadingData) setLoadingData(true)
            setData(snapshot.val())
          },
          error => {
            throw Error(error)
          }
        )
    } catch (error) {
    } finally {
      setLoadingData(false)
    }

    return () => loadDataBase()
  }, [])

  return (
    <DataContext.Provider value={{ data, setData, loadingData }}>
      {children}
    </DataContext.Provider>
  )
}

// Custom hook that shorhands the context!
export const useData = () => useContext(DataContext)
