import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ParkIcon from '@mui/icons-material/Park';


const Services = () => {
    const arr = [
        {
            id: 1,
            icon: <LocalShippingIcon style={{ fontSize: "60px" }} />,
            text: "Next day as standard",
            description: "Order before 3pm and get your order the next day as standard"
        },
        {
            id: 2,
            icon: <CheckCircleOutlineIcon style={{ fontSize: "60px" }} />,
            text: "Made by true artisans",
            description: "Handmade crafted goods made with real passion and craftmanship"
        },
        {
            id: 3,
            icon: <CreditCardIcon style={{ fontSize: "60px" }} />,
            text: "Unbeatable prices",
            description: "For our materials and quality you won’t find better prices anywhere"
        },
        {
            id: 4,
            icon: <ParkIcon style={{ fontSize: "60px" }} />,
            text: "Recycled packaging",
            description: "We use 100% recycled to ensure our footprint is more manageable"
        }
    ]



    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "100px" }}>
            <h1 style={{ fontSize:"50px", fontWeight: "400", fontFamily: "system-ui", textAlign: "center", color: 'rgba(42, 37, 75, 1)' }}>Services</h1>
            <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: "space-between", gap: "20px" }}>
                {
                    arr.map(({ id, icon, text, description }) => {
                        return <div style={{ borderRadius:"10px",boxShadow:"0 5px 10px grey", width: '49%', height: '50vh', boxSizing: 'border-box', backgroundColor: "rgba(249, 249, 249, 1)", display: "flex", justifyContent: "center", alignItems: 'center' }} key={id}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "20px", width: "70%", alignItems: "center" }}>
                                {icon}
                                <h2 style={{ fontFamily: "system-ui", fontWeight: "400", color: "rgba(42, 37, 75, 1)" }}>{text}</h2>
                                <p style={{ textAlign: "center", fontFamily: "system-ui", fontSize: '20px', color: "rgba(42, 37, 75, 1)" }}>{description}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Services