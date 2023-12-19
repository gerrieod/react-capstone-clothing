import { createContext, useState , useEffect } from "react";

import PRODUCTS from "../shopdata.json"

//create the context you need and export
export const ProductContext = createContext({
    products: [],
})

//create the provider you need and export
export const ProductsProvider = ({children}) =>{

    const [products, setProducts] = useState(PRODUCTS)
    const value = {products};
    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}