import { Route, Routes } from 'react-router'
import Home from '../Pages/Home'

const RoutesComp = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/product" element={<Home/>} />
        <Route path="/productlisting" element={<Home/>} />
        <Route path="/basket" element={<Home/>} /> */}
    </Routes>
  )
}

export default RoutesComp