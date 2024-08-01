
const Basket = () => {

  const collecArr = [
    {
      id: 1,
      img: "https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5eeYrsyWQt2nA8OTjPnWoI7JFL0DR951eww7O1MaUdNOKQEXiNBhsrDNHOfXfUgw6u-vRUp7AcN2m05dBuluLs55rrexQ-eb~CwBtCdDH5kjzvFD1Qw8o2UtXiYoHpUA4HEoHFJ30n7YkziDxlZ00ssZIOs1dvUwI5Brnyfpzebh8S90~JnpwJ3RG0iWNUs5JSYftFqxZKAfyr8HRVSt5uIgkpPA03kv~JAZIJbzPaQhymN99vhkwqXzt1l4JqVKdKm-sddD2AkEaCfV20RrJkpnJLKRrWj6YDp5aJVQwFrwwEIdi~6~DyeIP~zd~TSWmPzW5vIDhiTsnJuNneTOw__",
      text: "The Dandy chair",
      descripton: "A timeless ceramic vase with a tri color grey glaze.",
      price: "£250"
    },
    {
      id: 2,
      img: "https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoULpJtNV2TEAfMLihyYvN-6HMEj0rg9rY5ESZM8tloVUh4qWTj-VkaluYaxMdBet2M2c9RHJFE3qOme31kup8MqcDnDH-~IeQgxVJFeXP72cPpq~uRbfGyj-DNMSP74rSFz7Q496eZ2b9Jrz1UeBCul6Ayxhrv1CxzWtAqZOYugBOXyqyN4GDhQO~st2gwwbfIlh8outwfWZBCmtJ5hqvqdkh3PAX-RS5S9iXw5rnb3F~2veXxT3xT1ONwVDAHhmrTm6POIu97LAUHz4hwRdkjdjs82kuQcecHAjlDDv5B4UOm3cMml-3~04m7GGmVUJ3pQd07CyoaQM3ErGUmh4g__",
      text: "Rustic Vase Set",
      descripton: "Beautiful and simple this is one for the classics collections",
      price: "£155"
    },
    {
      id: 3,
      img: "https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNva3HFuIajEG6BlYmOfbg6j0~Li2gHCpfv2lhfzbznsuVaR7BFh17yrvpYK9GDRg5GuiX58~a7mBPdb~2tncKMRKIA475tJpd5mi2FextHOPWQNDQGwleL8JKF3xEpjDFiBbeDXFMo3m2VyrZ43B~RJlp8UEUsJ2szge~3MArzq1SwpC-piBw2rkMIfxbqw89HygtnHuC1WzTzYIq3Bs6QxNG-TxEwOlttjEPl6uks~0je4yY4~R3g0jtx9HIsu8SKQSNSjNxgdyWR0KWe5gW4NEIvGyTocVp1NSuZX97l1C1fGDp32MNNINlfQBLHoGzT8ntYj5AsBgWrfQ6nYZQ__",
      text: "The Silky Vase",
      descripton: "A timeless ceramic vase with a tri color grey glaze.",
      price: "£125"
    },
    {
      id: 4,
      img: "https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMb4jjk6egEU9RJmHU~imIg0ULfO~ihg8uIkbuGjsKSpIwFaxIzfowM0JENM-wq3Lt13ht6LXWUNwp06yjIYFpM~wslnFC04rZhGdBkONutlLkuORS1t6SnvtsQTkIka4XyBv4LB16e5Wuxf74SZciTT4WLhB6hIV1FQPwnPsb5ptqFUJLrZOyJTSt5pLO2WxrVZW1vDb~Q4x8v-0x8L1RhwV1c8PIiwK1MPdymnVxKAo8ca9-NG6BFRJwsaS-zDR2X5omVvySM58kJ85whE1~nUf0z4-DBRAA6CE8M6e4FMRByeipikFxMiXb-cY9wD4Fp6Dy-7w7Dc03KGysgn~w__",
      text: "The Lucy Lamp",
      descripton: "Beautiful and simple this is one for the classics collections",
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