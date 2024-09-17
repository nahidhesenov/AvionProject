import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Basket from '../Pages/Basket'
import ProductListing from '../Pages/ProductListing'
import Services from '../Pages/ServicesPage'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/services" element={<Services/>} />
    </Routes>
  )
}

export default RoutesComp