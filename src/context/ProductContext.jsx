import { createContext, useContext, useEffect } from "react"
import { useState } from "react"
import api from "../services/config"

const ProductContext = createContext();

const ProductsProvider = ({children}) => {
    const [products,setProducts]=useState([])

    const fetchProducts = async()=>{
      try{
        const response = await api.get("/products");
        setProducts(response)
      }catch(error){
        console.log(error.message)
      }
        
    };
    useEffect(()=>{
        fetchProducts();
    },[])

  return (
    <ProductContext.Provider value={products}>{children}</ProductContext.Provider>
  )
}
const useProducts=()=>{
  const products = useContext (ProductContext)
  return(products)
}
const useProductsDetails = (id)=>{
  const products =useContext(ProductContext);
  const result = products.find((products)=>products.id == id);
  return result;
}

export default ProductsProvider
export{useProducts,useProductsDetails}