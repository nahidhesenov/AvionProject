import { Link } from 'react-router-dom'

const ElementLink = () => {
  return (
    <div style={{ display: "flex", justifyContent: 'space-between', width: '60%' }}>
      <Link to={"/productlisting"} style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>All products</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Plant pots</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Ceramics</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Tables</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Chairs</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Crockery</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Tableware</Link>
      <Link style={{fontFamily:'sans-serif', textDecoration:"none" , color:"gray"}}>Cutlery</Link>
    </div>
  )
}

export default ElementLink