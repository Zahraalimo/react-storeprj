import {Navigate,Route,Routes} from 'react-router-dom'
import Chekout from "./pages/Chekout"
import DetailesProduct from "./pages/DetailesProduct"
import PageNotFound from "./pages/PageNotFound"
import ProductsPage from "./pages/ProductsPage"
import ProductsProvider from './context/ProductContext'
import CartProvider from './context/CartContext'
import Layout from './layout/Layout'

function App() {
  
  return ( 
  <CartProvider>
    <ProductsProvider>
      <Layout>
        <Routes>
        <Route path="/" element={<Navigate to="/products" replace />} /> 
        <Route path="/products" element={<ProductsPage />} /> 
        <Route path="/products:id" element={<DetailesProduct />} />
        <Route path="/chekout" element={<Chekout />} />  
        <Route path="*" element={<PageNotFound />} /> 

      </Routes> 

      </Layout>
        
    </ProductsProvider>
  </CartProvider> 
    


    

  
        
    
    
    
  )
}
export default App
