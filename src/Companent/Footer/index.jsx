import { Input } from "@mui/material"
import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {


    const [data, setData] = useState({
        email: '',
        status: 'initial',
    });
    return (
        <div style={{ backgroundColor: "rgba(42, 37, 75, 1)" }}>
            <div style={{ margin: "auto 100px", display: "flex", flexDirection: 'column' }}>
                <div style={{ margin: '50px 0px', display: "flex", justifyContent: 'space-between' }}>
                    <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Menu</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>New arrivals</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Best sellers</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Recently viewed</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Popular this week</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>All products</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Categories</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Crockery</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Furniture</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Homeware</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Plant pots</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Chairs</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Crockery</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: 'column', gap: '10px' }}>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Our company</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>About us</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Vacancies</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Contact us</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Privacy</h3>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Returns policy</h3>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "40%" }}>
                        <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Join our mailing list</h3>
                        <form style={{ display: 'flex' }} id="demo">
                            <Input
                                sx={{ '--Input-decoratorChildHeight': '50px', width: "75%", backgroundColor: "rgba(255, 255, 255, 0.15)", color: "rgba(255, 255, 255, 1)", padding: '10px' }}
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
                                style={{ backgroundColor: "rgba(255, 255, 255, 1)", color: "rgba(42, 37, 75, 1)", width: '20%', border: 'none' }}
                            >
                                Sign up
                            </button>
                        </form>
                    </div>
                </div>
                <hr style={{ borderColor: "rgba(78, 77, 147, 1)" }} />
                <div style={{ padding: "30px 0px",display:'flex',justifyContent:"space-between" }}>
                    <h3 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>Copyright 2022 Avion LTD</h3>
                    <div style={{display:'flex',gap:'20px'}}>
                    <LinkedInIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    <FacebookIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    <InstagramIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    <TelegramIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    <TwitterIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    <PinterestIcon style={{color:'rgba(255, 255, 255, 1)', cursor:'pointer'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer