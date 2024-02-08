
const shortenText = (text) =>{
    return text.split(" ").slice(0, 3).join("");
};
const searchProduct = (products,search)=>{
    if(!search) return products;
    const searchedProducts = products.filter((p)=>
    p.title.toLowerCase().includes(search));
    return searchedProducts;
}

const categoryProducts =(products,category)=>{
    if(!category) return products;
    const filterProducts = products.filter((p)=>p.category==category);
    return filterProducts;

}

const createQueryObj = (curQuery,newQuery)=>{
    if(newQuery.category=="all"){
        const{category, ...rest} = curQuery;
        return rest;
    }
    if(newQuery.search==""){
        const{search,...rest}=curQuery;
        return rest;
    }
    return{
        ...curQuery,...newQuery
    }
}

const initialParams = searchParams=>{
    const query = {};
    const category = searchParams.get("category");
    const search = searchParams.get("search")
    if(category) query.category = category
    if(search) query.search = search
    return(query)
}
const sumProducts =(products)=>{
    const itemsCounter = products.reduce((counter,product )=>counter+product.quantity,0)
    const total = products.reduce((total,product)=>total+product. price*product.quantity,0).toFixed(2);
    return{itemsCounter,total}
}
const productQuantity=(state,id)=>{
    const index = state.selectedItem.findIndex(
        (item)=>item.id== id);
        if(index==-1){
            return0;
        }else{
            return state.selectedItem[index].quantity
        }
}
export {shortenText,
    searchProduct,
    categoryProducts,
    createQueryObj,
    initialParams,
    sumProducts,
    productQuantity
 };