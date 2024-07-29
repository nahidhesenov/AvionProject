

const SmallideaComponent = () => {
    return (
        <div style={{ height: "60vh", display: "flex", gap: "20px", margin: "50px 0px", justifyContent: "space-between" }}>
            <div style={{ width: '50%', backgroundColor: "rgba(42, 37, 75, 1)", display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                <div style={{ width: '70%', height: "70%", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                        <h1 style={{ fontFamily: "sans-serif", color: 'rgba(255, 255, 255, 1)', fontWeight: "400" }}>It started with a small idea</h1>
                        <p style={{ fontFamily: "sans-serif", color: "rgba(255, 255, 255, 1)", fontWeight: "400" }}>A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
                    </div>
                    <div>
                        <button style={{ color: "white", width: "35%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 0.15)", fontSize: "20px" }}>View collection</button>
                    </div>
                </div>
            </div>
            <div style={{ width: '50%' }}>
                <img style={{width:"100%" ,height:"100%" , objectFit: "cover"}} src="https://c1.wallpaperflare.com/preview/753/976/863/apparel-clothing-fashion-hangers.jpg" alt="" />
            </div>
        </div>
    )
}

export default SmallideaComponent