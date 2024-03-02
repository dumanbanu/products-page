import { createContext, useState } from "react";



export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {


const [filterObject , setFilterObject]  = useState({
  page:1,
  limit:12,
  name: "",
  brand: ""
})


const [productList , setProductList] = useState([])


return(
  <ProductsContext.Provider value = {{
    filterObject,
    setFilterObject,
    productList,
    setProductList
  }}
>
  {children}

  </ProductsContext.Provider>
  
);



}


export default ProductsContextProvider;