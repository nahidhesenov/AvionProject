import { Link } from 'react-router-dom'

const ElementLink = () => {
  return (
    <div style={{ display: "flex", justifyContent: 'space-between', width: '30%' }}>
      <Link to={"/productlisting"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>All products</Link>
      <Link to={"/about"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>About us</Link>
      <Link to={"/contact"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Contact</Link>
      <Link to={"/services"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Services</Link>
    </div>
  )
}

export default ElementLink