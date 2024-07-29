import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'
import Product from '../Pages/Product'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/product" element={<Product/>} />
        {/* <Route path="/productlisting" element={<Home/>} />
        <Route path="/basket" element={<Home/>} /> */}
    </Routes>
  )
}

export default RoutesComp