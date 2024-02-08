import {Link, useParams } from "react-router-dom"
import { useProductsDetails } from "../context/ProductContext";

import{SiOpenproject} from "react-icons/si"
import{IoMdPricetag} from "react-icons/io"
import{FaArrowLeft} from "react-icons/fa"

import Loader from "../components/Loader";
import styles from "./DetailesProduct.module.css"

function DetailesProduct() {
  const{id}=useParams();
  const productDetails = useProductsDetails(+id)
  if(!productDetails) return <Loader/>
  return (
    <div className={styles.container}>
      <img src={productDetails.image} alt={productDetails.title} />
      <div className={styles.information}>
        <h3 className={styles.title}>{productDetails.title}</h3>
        <p>{productDetails.description}</p>
        <p><SiOpenproject/>{productDetails.category}</p>
        <div>
          <span><IoMdPricetag/>{productDetails.price}$</span>
          <Link to = "/prodcts"><FaArrowLeft/><span>Back to Shop</span></Link>
        </div>

      </div>
    </div>
  )
}

export default DetailesProduct