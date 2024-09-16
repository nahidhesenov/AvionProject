import { Link } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ProductListing = () => {


    const collectionArr = [
        {
            id: 1,
            img: "https://onepieceapparel.com/wp-content/uploads/2023/10/Anime-Gear-5-Luffy-Graphic-T-shirt-Men-s-Woman-Clothing-100-Cotton-Short-Sleeve-T.webp",
            text: "The Dandy chair",
            price: "£250"
        },
        {
            id: 2,
            img: "https://lunar-merch.b-cdn.net/onepiececlothing.com/media/51/Ha170f830bc8a45d08989fd2272aff303a.webp",
            text: "Rustic Vase Set",
            price: "£155"
        },
        {
            id: 3,
            img: "https://onepiece.b-cdn.net/wp-content/uploads/2023/11/213.jpg",
            text: "The Silky Vase",
            price: "£125"
        },
        {
            id: 4,
            img: "https://onepiece.b-cdn.net/wp-content/uploads/2024/02/238.jpg",
            text: "The Lucy Lamp",
            price: "£399"
        },
        {
            id: 5,
            img: "https://onepieceapparel.com/wp-content/uploads/2023/10/Anime-Gear-5-Luffy-Graphic-T-shirt-Men-s-Woman-Clothing-100-Cotton-Short-Sleeve-T.webp",
            text: "The Dandy chair",
            price: "£250"
        },
        {
            id: 6,
            img: "https://lunar-merch.b-cdn.net/onepiececlothing.com/media/51/Ha170f830bc8a45d08989fd2272aff303a.webp",
            text: "Rustic Vase Set",
            price: "£155"
        },
        {
            id: 7,
            img: "https://onepiece.b-cdn.net/wp-content/uploads/2023/11/213.jpg",
            text: "The Silky Vase",
            price: "£125"
        },
        {
            id: 8,
            img: "https://onepiece.b-cdn.net/wp-content/uploads/2024/02/238.jpg",
            text: "The Lucy Lamp",
            price: "£399"
        },
        {
            id: 9,
            img: "https://onepieceapparel.com/wp-content/uploads/2023/10/Anime-Gear-5-Luffy-Graphic-T-shirt-Men-s-Woman-Clothing-100-Cotton-Short-Sleeve-T.webp",
            text: "The Lucy Lamp",
            price: "£399"
        }
    ]



    return (
        <div>
            <div className="joinContainer" style={{ height: "30vh", display: "flex", alignItems: 'end' }}>
                <h1 style={{ margin: "30px 50px", fontFamily: 'sans-serif', fontWeight: "100", color: 'rgba(255, 255, 255, 1)' }}>All products</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                <div style={{ width: "25%", display: "flex", justifyContent: "end" }}>
                    <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "50px", margin: "20px 0px" }}>
                        <div>
                            <h3 style={{ margin: "10px 0px", fontFamily: 'sans-serif', fontWeight: "100" }}>Product type</h3>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Furniture" />
                                <FormControlLabel control={<Checkbox />} label="Homeware" />
                                <FormControlLabel control={<Checkbox />} label="Sofas" />
                                <FormControlLabel control={<Checkbox />} label="Homeware" />
                                <FormControlLabel control={<Checkbox />} label="Light fittings" />
                                <FormControlLabel control={<Checkbox />} label="Accessories" />
                            </FormGroup>
                        </div>
                        <div>

                            <h3 style={{ margin: "20px 0px", fontFamily: 'sans-serif', fontWeight: "100" }}>Price</h3>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="0 - 100" />
                                <FormControlLabel control={<Checkbox />} label="101 - 250" />
                                <FormControlLabel control={<Checkbox />} label="250 +" />
                            </FormGroup>
                        </div>
                        <div>
                            <h3 style={{ margin: "20px 0px", fontFamily: 'sans-serif', fontWeight: "100" }}>Designer</h3>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox />} label="Robert Smith" />
                                <FormControlLabel control={<Checkbox />} label="Liam Gallagher" />
                                <FormControlLabel control={<Checkbox />} label="Biggie Smalls" />
                                <FormControlLabel control={<Checkbox />} label="Thom Yorke" />
                            </FormGroup>
                        </div>
                    </div>
                </div>
                <div style={{ width: '75%', display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: 'space-between' }}>
                    {
                        collectionArr.map(({ id, img, text, price }) => {
                            return <Link to={"/product"} style={{ width: '30%', display: "flex", flexDirection: "column", gap: '20px', textDecoration: "none" }} key={id}>
                                <div style={{ height: "80%" }}>
                                    <img style={{ width: '100%', height: '100%', objectFit: "cover" }} src={img} alt="" />
                                </div>
                                <h3 style={{ fontWeight: "400", fontFamily: "system-ui", color: "rgba(42, 37, 75, 1)" }}>{text}</h3>
                                <p style={{ fontFamily: "system-ui", color: "rgba(42, 37, 75, 1)" }}>{price}</p>
                            </Link>
                        })
                    }
                    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                        <Link to={"/productlisting"} style={{ color: "rgba(42, 37, 75, 1)", textAlign: "center", fontWeight: "400", fontFamily: "system-ui", width: "20%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 1)", fontSize: "20px", textDecoration: "none" }}>Load more</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductListing