import ImageComponent from '../../ImgComp'
import BrandComponent from '../../BrandComp'
import CollectionComponent from '../../CollectionComp'
import SmallideaComponent from '../../SmallideaComp'
import JoinComponent from '../../JoinComp'

const Home = () => {
  return (
    <div style={{ display: "flex", flexDirection: 'column' }}>
      <ImageComponent />
      <div style={{ margin: "auto 100px" }}>
        <BrandComponent />
        <CollectionComponent />
        <SmallideaComponent />
      </div>
      <JoinComponent />
    </div>
  )
}

export default Home