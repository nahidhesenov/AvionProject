import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Basket from '../Pages/Basket'
import ProductListing from '../Pages/ProductListing'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
    </Routes>
  )
}

export default RoutesComp