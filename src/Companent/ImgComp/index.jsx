import "./style.css";

const ImageComponent = () => {
    return (
        <div className='imgContainer' style={{ height: "80vh" }}>
            <div style={{ height: '100%', display: 'flex', justifyContent: 'end' }}>
                <div style={{ width: '40%', backgroundColor: "white", margin: '80px', display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                    <div style={{ width: '80%', height: "80%", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <h1 style={{ fontFamily: "sans-serif" ,fontWeight:"400" }}>Luxury homeware for people who love timeless design quality</h1>
                            <p style={{ fontFamily: "sans-serif" ,fontWeight:"400" }}>Shop the new Spring 2022 collection today</p>
                        </div>
                        <div>
                            <button style={{ width: "35%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 1)", fontSize: "20px" }}>View collection</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ImageComponent