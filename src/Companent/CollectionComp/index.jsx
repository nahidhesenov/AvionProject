import { Link } from "react-router-dom"


const CollectionComponent = () => {

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
        }
    ]
    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "30px", margin: "50px 0px" }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                {
                    collectionArr.map(({ id, img, text, price }) => {
                        return <Link to={"/product"} style={{ width: '23%', display: "flex", flexDirection: "column", gap: '20px', textDecoration: "none" }} key={id}>
                            <div style={{ height: "80%" }}>
                                <img style={{ width: '100%', height: '100%', objectFit: "cover" }} src={img} alt="" />
                            </div>
                            <h3 style={{ fontWeight: "400", fontFamily: "system-ui", color: "rgba(42, 37, 75, 1)" }}>{text}</h3>
                            <p style={{ fontFamily: "system-ui", color: "rgba(42, 37, 75, 1)" }}>{price}</p>
                        </Link>
                    })
                }
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <Link to={"/productlisting"} style={{ color: "rgba(42, 37, 75, 1)", textAlign: "center", fontWeight: "400", fontFamily: "system-ui", width: "20%", padding: '20px', border: "none", backgroundColor: "rgba(249, 249, 249, 1)", fontSize: "20px", textDecoration: "none" }}>View collection</Link>
            </div>
        </div>
    )
}

export default CollectionComponent