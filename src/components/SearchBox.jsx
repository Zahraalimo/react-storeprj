import {createQueryObj } from "../helpers/helper"
import {ImSearch} from "react-icons/im"
import styles from "./SearchBox.module.css"

function SearchBox({search,setSearch,setQuery}) {
    const searchHandler=()=>{
        setQuery((query)=>createQueryObj(query,{search:search}))
        console.log("search")
      }
  return (
    <div className={styles.searchBox}>
      <input type="text" placeholder="Search..." 
      value={search} onChange={e=> setSearch(e.target.value.toLowerCase().trim())}/>
      <button onClick={searchHandler}><ImSearch /></button>
    </div>
  )
}

export default SearchBox