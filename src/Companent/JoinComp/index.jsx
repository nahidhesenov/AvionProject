import { useState } from 'react'
import "./style.css";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Input } from '@mui/material';


const JoinComponent = () => {


    const [data, setData] = useState({
        email: '',
        status: 'initial',
    });


    return (
        <div className='joinContainer' style={{ height: "60vh", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent:"space-between", alignItems: "center", width: '40%', height: "40%" }}>
                <h1 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Join the club and get the benefits</h1>
                <p style={{ fontFamily: "sans-serif", color: "rgba(255, 255, 255, 1)", fontWeight: "400" ,textAlign:"center"}}>Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop up stores and more</p>
                <div style={{ display: 'flex', gap: '20px' }}>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <CheckCircleIcon sx={{ color: 'white', fontSize: 'medium' }} />
                        <p style={{ fontFamily: "sans-serif", color: "rgba(255, 255, 255, 1)", fontWeight: "400" }}>Exclusive offers</p>
                    </div>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <CheckCircleIcon sx={{ color: 'white', fontSize: 'medium' }} />
                        <p style={{ fontFamily: "sans-serif", color: "rgba(255, 255, 255, 1)", fontWeight: "400" }}>Free events</p>
                    </div>
                    <div style={{ display: 'flex', gap: "10px" }}>
                        <CheckCircleIcon sx={{ color: 'white', fontSize: 'medium' }} />
                        <p style={{ fontFamily: "sans-serif", color: "rgba(255, 255, 255, 1)", fontWeight: "400" }}>Large discounts</p>
                    </div>
                </div>
                <form style={{ width: "100%" ,display:'flex',justifyContent:'center' }} id="demo">
                    <Input
                        sx={{ '--Input-decoratorChildHeight': '50px' , width:"75%" , backgroundColor:"rgba(255, 255, 255, 1)",padding:'10px'}}
                        placeholder="your@email.com"
                        type="email"
                        required
                        value={data.email}
                        onChange={(event) =>
                            setData({ email: event.target.value, status: 'initial' })
                        }
                        error={data.status === 'failure'}
                    />
                    <button
                        type="submit"
                        style={{backgroundColor:"rgba(42, 37, 75, 1)",color:"rgba(255, 255, 255, 1)" ,width:'20%',border:'none'}}
                    >
                        Sign up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default JoinComponent