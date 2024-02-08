import React, { createContext, useContext, useReducer } from 'react'
import { sumProducts } from '../helpers/helper';
import ProductsPage from '../pages/ProductsPage';
const initalState = {
    selectedItem :[],
     itemsCounter : 0,
     totalCounter :0,
     checkOut:false
};
const reducer =(state,action)=>{
    switch(action.type){
        case "ADD_ITEM":
            if(!state.selectedItem.find((item)=>item.id== action.payload.id)){
                state.selectedItem.push({...action.payload,quantity:1})
            }
            return{
                selectedItem:[...state.selectedItem ],
                checkOut:false,
                ...sumProducts(state.selectedItem)
            }
        case "REMOVE_ITEM": 
            const newSelectedItem = state.selectedItem.filter(
                (item)=>item.id != action.payload.id
            );
            return{
                ...state,
                selectedItem :[...newSelectedItem],
                ...sumProducts(state.newSelectedItem)
            }
        case "INCREASE":
            const index = state.selectedItem.findIndex(
                (item)=>item.id== action.payload.id
            );
            state.selectedItem[index].quantity++;
            return{
                ...state,
                ...sumProducts(state.selectedItem)
            }
            case "DECREASE":
                const indexd = state.selectedItem.findIndex(
                    (item)=>item.id== action.payload.id
                );
                state.selectedItem[indexd].quantity--;
                return{
                    ...state,
                    ...sumProducts(state.selectedItem)
                }  
            case "CHECK_OUT":
                return{
                    selectedItem :[],
                    itemsCounter : 0,
                    totalCounter :0,
                    checkOut:true,
                }  
        default:
            throw new Error("Invalid Action")
    }
     

};
const CartContext = createContext();
function CartProvider({chidren}) {
    const [state,dispatch] = useReducer(reducer,initalState);
  return (
    <CartContext.Provider value={{state , dispatch}}>{chidren}</CartContext.Provider>
  )
}
const useCart =()=>{
    const {state,dispatch} = useContext(CartContext)
    return[state,dispatch]
}

export default CartProvider;
export {useCart}   