import { createContext, useState, useEffect } from 'react'

/* TO LOAD DATA THE FIRST TIME *
1.) ADD addCollectionAndDocuments to the import from firebase.utils.js
2.) IMPORT SHOP_DATA from from '../shop-data.js'
3.) ADD THIS useEffect statement, the the 1st parameter will be the name of the collection in firebase
    the 2nd parameter will the the JSON data object that will be added
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, [])
*/

import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js'

export const CategoriesContext = createContext({
  categoriesMap: {},
})

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({})

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments()
      setCategoriesMap(categoryMap)
    }

    getCategoriesMap()
  }, [])

  const value = { categoriesMap }
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  )
}
