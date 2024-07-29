import Logo from './Logo'
import Search from './Search'
import Basket from './Basket'
import Login from './Login'
import ElementLink from './ElementLink'

const NavBar = () => {

  return (
    <div style={{margin:"0px 10px"}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' ,margin:'15px 0px' }}>
        <Search />
        <Logo />
        <div style={{ display: "flex",gap:"10px" }}>
          <Basket />
          <Login />
        </div>
      </div>
      <hr style={{border:'1px solid rgba(0, 0, 0, 0.1)'}} />
      <div style={{display:'flex',justifyContent:"center",margin:'15px 0px'}}>
        <ElementLink />
      </div>
    </div>
  )
}

export default NavBar