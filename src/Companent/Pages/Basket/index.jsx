
const Basket = () => {

  const collecArr = [
    {
      id: 1,
      img: "https://onepieceapparel.com/wp-content/uploads/2023/10/Anime-Gear-5-Luffy-Graphic-T-shirt-Men-s-Woman-Clothing-100-Cotton-Short-Sleeve-T.webp",
      descripton: "A timeless ceramic vase with a tri color grey glaze.",
      text: "The Dandy chair",
      price: "£250"
  },
  {
      id: 2,
      img: "https://lunar-merch.b-cdn.net/onepiececlothing.com/media/51/Ha170f830bc8a45d08989fd2272aff303a.webp",
      descripton: "Beautiful and simple this is one for the classics collections",
      text: "Rustic Vase Set",
      price: "£155"
  },
  {
      id: 3,
      img: "https://onepiece.b-cdn.net/wp-content/uploads/2023/11/213.jpg",
      descripton: "A timeless ceramic vase with a tri color grey glaze.",
      text: "The Silky Vase",
      price: "£125"
  },
  {
      id: 4,
      img: "https://onepiece.b-cdn.net/wp-content/uploads/2024/02/238.jpg",
      descripton: "Beautiful and simple this is one for the classics collections",
      text: "The Lucy Lamp",
      price: "£399"
  }
  ]



  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", background: "rgba(249, 249, 249, 1)" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: 'white', width: '90%', height: "80%" }}>
        <div style={{ width: '90%', height: "80%" }}>
          <div style={{ height: '5%', display: "flex", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Product</h3>
            </div>
            <div style={{ width: "40%", display: "flex", justifyContent: "space-between" }}>
              <h3 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Quantity</h3>
              <h3 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>Total</h3>
            </div>
          </div>
          <hr style={{ borderColor: "rgba(249, 249, 249, 1)" }} />
          <div style={{ overflow: "auto", height: "80%" }}>
            {
              collecArr.map(({ id, img, text, descripton, price }) => {
                return <div key={id} style={{ height: "40%", display: "flex", justifyContent: "space-between", margin: "10px 0px" }}>
                  <div style={{ display: "flex", gap: "20px", width: "30%" }}>
                    <div style={{ width: "40%" }}>
                      <img style={{ objectFit: "cover", width: "100%", height: "100%" }} src={img} alt="" />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: "20px", justifyContent: "center", width: "60%" }}>
                      <h2 style={{ fontFamily: "sans-serif", color: 'rgba(78, 77, 147, 1)', fontWeight: "400" }}>{text}</h2>
                      <p style={{ fontFamily: "sans-serif", color: 'rgba(78, 77, 147, 1)', fontWeight: "400" }}>{descripton}</p>
                      <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>{price}</p>
                    </div>
                  </div>
                  <div style={{ width: "40%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ display: "flex", width: "20%", height: '30%', alignItems: 'center', backgroundColor: "rgba(249, 249, 249, 1)" }}>
                      <button style={{ width: "30%", border: "none", padding: "15px", background: 'none', color: 'rgba(202, 198, 218, 1)' }}>-</button>
                      <p style={{ width: '40%', textAlign: 'center', fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>1</p>
                      <button style={{ width: "30%", border: "none", padding: "15px", background: 'none', color: 'rgba(202, 198, 218, 1)' }}>+</button>
                    </div>
                    <div>
                      <p style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>{price}</p>
                    </div>
                  </div>
                </div>
              })
            }
          </div>
          <hr style={{ borderColor: "rgba(249, 249, 249, 1)" }} />
          <div style={{ height: "15%", display: "flex", justifyContent: "space-between", margin: "20px 0px 0px 0px" }}>
            <div>
              <h4 style={{ fontFamily: "sans-serif", color: 'rgba(78, 77, 147, 1)', fontWeight: "400" }}>Taxes and shipping are calculated at checkout</h4>
            </div>
            <div style={{ width: "40%", display: "flex", justifyContent: "end" }}>
              <div style={{ width: "40%", display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ display: "flex", justifyContent: 'end', gap: "15px" }}>
                  <h2 style={{ fontFamily: "sans-serif", color: 'rgba(78, 77, 147, 1)', fontWeight: "400" }}>Subtotal</h2>
                  <h2 style={{ fontFamily: "sans-serif", color: 'rgba(42, 37, 75, 1)', fontWeight: "400" }}>£210</h2>
                </div>
                <button type="submit" style={{ backgroundColor: "rgba(42, 37, 75, 1)", color: "rgba(255, 255, 255, 1)", padding: "15px", border: 'none' }}> Go to checkout </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Basket