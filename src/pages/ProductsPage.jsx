import { useEffect, useState } from "react"
import { useProducts } from "../context/ProductContext"


import styles from "./ProductsPage.module.css"
import Card from "../components/Card"
import Loader from "../components/Loader"
import { categoryProducts, initialParams, searchProduct } from "../helpers/helper"
import { useSearchParams } from "react-router-dom"
import SearchBox from "../components/SearchBox"
import SideBar from "../components/SideBar"



function ProductsPage() {
  const products = useProducts();
  
  const [displayed,setDisplayed] = useState([]);
  const[search,setSearch]=useState("");
  const[query,setQuery] =useState({});
  const [searchParams,setSearchParams] = useSearchParams()
  
  useEffect(()=>{
    setDisplayed(products);
    setQuery(initialParams(searchParams))

  },[products]);

  useEffect(()=>{ 
    setSearchParams(query)
    setSearch(query.search || "")
    let finalproducts = searchProduct(products,query.search)
    finalproducts=categoryProducts(finalproducts,query.category)
    setDisplayed(finalproducts)  
  },[query])

  
  

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className={styles.container}>
        <div className={styles.products}>
          {!displayed.length && <p><Loader/></p> }
          {displayed.map(p => <Card key={p.id} data={p} />)}

        </div>
        <SideBar query={query} setQuery={setQuery} />
        
      </div>
    </>
    
  )
}

export default ProductsPage