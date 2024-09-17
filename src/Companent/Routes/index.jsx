import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'
import Basket from '../Pages/Basket'
import ProductListing from '../Pages/ProductListing'
import Services from '../Pages/ServicesPage'
import About from '../Pages/About'
import Contact from '../Pages/Contact'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/basket" element={<Basket/>} />
        <Route path="/productlisting" element={<ProductListing/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
    </Routes>
  )
}

export default RoutesComp