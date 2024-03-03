import { createContext, useCallback, useMemo, useState } from "react";



export const ProductsContext = createContext();

const ProductsContextProvider = ({children}) => {


const [filterObject , setFilterObject]  = useState({
  page:1,
  limit:12,
  name: "",
  brand: ""
})






const [productList , setProductList] = useState([]);
const [cartItems , setCartItems] = useState([])
const [selectedProduct , setSelectedProduct] = useState({});

const totalPrice =  useMemo(() => {
  return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
} , [cartItems])







return(
  <ProductsContext.Provider value = {{
    filterObject,
    setFilterObject,
    productList,
    setProductList,
    cartItems,
    setCartItems,
    totalPrice,
    selectedProduct,
    setSelectedProduct
  }}
>
  {children}

  </ProductsContext.Provider>
  
);



}


export default ProductsContextProvider;