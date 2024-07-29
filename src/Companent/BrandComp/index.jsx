import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ParkIcon from '@mui/icons-material/Park';

const BrandComponent = () => {
  const arr = [
    {
      id: 1,
      icon: <LocalShippingIcon />,
      text: "Next day as standard",
      description: "Order before 3pm and get your order the next day as standard"
    },
    {
      id: 2,
      icon: <CheckCircleOutlineIcon />,
      text: "Made by true artisans",
      description: "Handmade crafted goods made with real passion and craftmanship"
    },
    {
      id: 3,
      icon: <CreditCardIcon />,
      text: "Unbeatable prices",
      description: "For our materials and quality you won’t find better prices anywhere"
    },
    {
      id: 4,
      icon: <ParkIcon />,
      text: "Recycled packaging",
      description: "We use 100% recycled to ensure our footprint is more manageable"
    }
  ]

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "100px 0px" }}>
      <h1 style={{ fontWeight: "400", fontFamily: "system-ui", textAlign: "center", color: 'rgba(42, 37, 75, 1)' }}>What makes our brand different</h1>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        {
          arr.map(({ id, icon, text, description }) => {
            return <div style={{ width: '23%', height: '35vh', boxSizing: 'border-box', backgroundColor: "rgba(249, 249, 249, 1)", display: "flex", justifyContent: "center", alignItems: 'center' }} key={id}>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "70%" }}>
                {icon}
                <h2 style={{ fontFamily: "system-ui", fontWeight: "400", color: "rgba(42, 37, 75, 1)" }}>{text}</h2>
                <p style={{ fontFamily: "system-ui", fontSize: '20px', color: "rgba(42, 37, 75, 1)" }}>{description}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
}

export default BrandComponent