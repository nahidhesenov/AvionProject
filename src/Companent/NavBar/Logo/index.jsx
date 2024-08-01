import { Link } from "react-router-dom"

const Logo = () => {
  return (
    <Link to={"/"} style={{color:'black',textDecoration:"none"}}>
        <h2 style={{fontFamily:'sans-serif',margin:'0', fontWeight:"100" }}>Avion</h2>
    </Link>
  )
}

export default Logo