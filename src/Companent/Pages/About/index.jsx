import BrandComponent from '../../BrandComp'
import JoinComponent from '../../JoinComp'

const About = () => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <div style={{ width: '80%', height: "80%", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "50px" }}>
              <h1 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>From a studio in London to a global brand with
                over 400 outlets</h1>
              <h2 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</h2>
              <h2 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</h2>
            </div>
            <div>
              <button style={{ width: "35%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 1)", fontSize: "20px" }}>Get in touch</button>
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <img style={{ width: '100%', objectFit: "cover" }} src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50%" }}>
          <img style={{ width: '100%', objectFit: "cover" }} src="https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: 'center' }}>
          <div style={{ width: '80%', height: "80%", display: 'flex', flexDirection: 'column', justifyContent: "space-between" }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: "50px" }}>
              <h1 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Our service isn’t just personal, it’s actually
              hyper personally exquisite</h1>
              <h2 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>When we started Avion, the idea was simple. Make high quality furniture affordable and available for the mass market.</h2>
              <h2 style={{ fontFamily: "sans-serif", fontWeight: "400" }}>Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique become the hotbed for the London interior design community.</h2>
            </div>
            <div>
              <button style={{ width: "35%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 1)", fontSize: "20px" }}>Get in touch</button>
            </div>
          </div>
        </div>
      </div>
      <div style={{ margin: "auto 100px" }}>
        <BrandComponent />
      </div>
      <JoinComponent />
    </div>
  )
}

export default About