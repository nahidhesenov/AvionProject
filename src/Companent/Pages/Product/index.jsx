import BrandComponent from "../../BrandComp"
import CollectionComponent from "../../CollectionComp"
import JoinComponent from "../../JoinComp"

const Product = () => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <div style={{ display: 'flex' }}>
                <div style={{ width: '50%' }}>
                    <img style={{ width: "100%" }} src="https://www.gmcompanystore.com/cdn/shop/products/CopyofWebsite_77_1080x.png?v=1677855844" alt="" />
                </div>
                <div style={{ width: '50%', display: "flex", justifyContent: 'center', alignItems: "center" }}>
                    <div style={{ width: "60%", display: 'flex', flexDirection: 'column', gap: '50px 0px' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: "15px 0px" }}>
                            <h1 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>The Dandy Chair</h1>
                            <h3 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>£250</h3>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: "15px 0px" }}>
                            <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Description</p>
                            <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.</p>
                            <ul style={{ padding: '0px 20px' }}>
                                <li style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Premium material</li>
                                <li style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Handmade upholstery</li>
                                <li style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Quality timeless classic</li>
                            </ul>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: "25px 0px" }}>
                            <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Dimensions</p>
                            <div style={{ display: 'flex', gap: "0px 30px" }}>
                                <div style={{ display: "flex", flexDirection: "column", gap: '10px 0px' }}>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Height</p>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(80, 89, 119, 1)', fontWeight: "400" }}>110cm</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: '10px 0px' }}>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Width</p>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(80, 89, 119, 1)', fontWeight: "400" }}>75cm</p>
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: '10px 0px' }}>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Depth</p>
                                    <p style={{ fontFamily: "sans-serif", color: 'rgba(80, 89, 119, 1)', fontWeight: "400" }}>50cm</p>
                                </div>
                            </div>

                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between" }}>
                            <div style={{ display: 'flex', gap: '0px 15px', width: "40%", alignItems: 'center' }}>
                                <h3 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Amount:</h3>
                                <div style={{ display: "flex", width: "50%", height: '100%', alignItems: 'center', backgroundColor: "rgba(249, 249, 249, 1)" }}>
                                    <button style={{ width: "30%", border: "none", padding: "15px", background: 'none', color: 'rgba(202, 198, 218, 1)' }}>-</button>
                                    <p style={{ width: '40%', textAlign: 'center', fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>1</p>
                                    <button style={{ width: "30%", border: "none", padding: "15px", background: 'none', color: 'rgba(202, 198, 218, 1)' }}>+</button>
                                </div>
                            </div>
                            <button style={{ padding: "20px 40px", border: 'none', backgroundColor: 'rgba(42, 37, 75, 1)', color: 'rgba(255, 255, 255, 1)', fontSize: '20px' }}>Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ margin: "100px 100px" }}>
                <h1 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>You might also like</h1>
                <CollectionComponent />
                <BrandComponent />
            </div>
            <JoinComponent />
        </div>
    )
}

export default Product