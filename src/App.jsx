import './App.css'
import Products from './components/Products'
import {products} from './mocks/products.json'
import Header from './components/Header'
import { useFilters } from './hooks/useFilters'
import Cart from './components/Cart'
import { CartProvider } from './context/cart'

function App() 
{
  const {filterProducts,setFilters} = useFilters()
  const filteredProd = filterProducts(products)

  return (
    <CartProvider>
      <Header/>
      <Cart/>
      <Products products={filteredProd}/>
    </CartProvider>
  )
}

export default App
