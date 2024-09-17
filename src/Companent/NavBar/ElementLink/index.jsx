import { Link } from 'react-router-dom'

const ElementLink = () => {
  return (
    <div style={{ display: "flex", justifyContent: 'space-between', width: '40%' }}>
      <Link to={"/productlisting"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>All products</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>About us</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Contact</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Blog</Link>
      <Link to={"/services"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Services</Link>
    </div>
  )
}

export default ElementLink