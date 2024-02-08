import { createContext, useReducer } from "react"
const initialState = {}
const cardContext = createContext()
function CardProvider() {
    const [state,dispatch] = useReducer(reducer,initialState)
  return (
    <div>CardProvider</div>
  )
}

export default CardProvider