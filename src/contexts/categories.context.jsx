import { createContext, useState , useEffect } from "react";

import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

//create the context you need and export
export const CategoriesContext = createContext({
    categoriesMap: [],
})

//create the provider you need and export
export const CategoriesProvider = ({children}) =>{

    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() =>{
        const getCategories = async () =>{
            const categoryMap = await getCategoriesAndDocuments();
            setCategoriesMap(categoryMap);
        }

        getCategories();
    }, []);
    const value = {categoriesMap};
    return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}