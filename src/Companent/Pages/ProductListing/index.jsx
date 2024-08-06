import { Link } from "react-router-dom"
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const ProductListing = () => {


    const collectionArr = [
        {
            id: 1,
            img: "https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5eeYrsyWQt2nA8OTjPnWoI7JFL0DR951eww7O1MaUdNOKQEXiNBhsrDNHOfXfUgw6u-vRUp7AcN2m05dBuluLs55rrexQ-eb~CwBtCdDH5kjzvFD1Qw8o2UtXiYoHpUA4HEoHFJ30n7YkziDxlZ00ssZIOs1dvUwI5Brnyfpzebh8S90~JnpwJ3RG0iWNUs5JSYftFqxZKAfyr8HRVSt5uIgkpPA03kv~JAZIJbzPaQhymN99vhkwqXzt1l4JqVKdKm-sddD2AkEaCfV20RrJkpnJLKRrWj6YDp5aJVQwFrwwEIdi~6~DyeIP~zd~TSWmPzW5vIDhiTsnJuNneTOw__",
            text: "The Dandy chair",
            price: "£250"
        },
        {
            id: 2,
            img: "https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoULpJtNV2TEAfMLihyYvN-6HMEj0rg9rY5ESZM8tloVUh4qWTj-VkaluYaxMdBet2M2c9RHJFE3qOme31kup8MqcDnDH-~IeQgxVJFeXP72cPpq~uRbfGyj-DNMSP74rSFz7Q496eZ2b9Jrz1UeBCul6Ayxhrv1CxzWtAqZOYugBOXyqyN4GDhQO~st2gwwbfIlh8outwfWZBCmtJ5hqvqdkh3PAX-RS5S9iXw5rnb3F~2veXxT3xT1ONwVDAHhmrTm6POIu97LAUHz4hwRdkjdjs82kuQcecHAjlDDv5B4UOm3cMml-3~04m7GGmVUJ3pQd07CyoaQM3ErGUmh4g__",
            text: "Rustic Vase Set",
            price: "£155"
        },
        {
            id: 3,
            img: "https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNva3HFuIajEG6BlYmOfbg6j0~Li2gHCpfv2lhfzbznsuVaR7BFh17yrvpYK9GDRg5GuiX58~a7mBPdb~2tncKMRKIA475tJpd5mi2FextHOPWQNDQGwleL8JKF3xEpjDFiBbeDXFMo3m2VyrZ43B~RJlp8UEUsJ2szge~3MArzq1SwpC-piBw2rkMIfxbqw89HygtnHuC1WzTzYIq3Bs6QxNG-TxEwOlttjEPl6uks~0je4yY4~R3g0jtx9HIsu8SKQSNSjNxgdyWR0KWe5gW4NEIvGyTocVp1NSuZX97l1C1fGDp32MNNINlfQBLHoGzT8ntYj5AsBgWrfQ6nYZQ__",
            text: "The Silky Vase",
            price: "£125"
        },
        {
            id: 4,
            img: "https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMb4jjk6egEU9RJmHU~imIg0ULfO~ihg8uIkbuGjsKSpIwFaxIzfowM0JENM-wq3Lt13ht6LXWUNwp06yjIYFpM~wslnFC04rZhGdBkONutlLkuORS1t6SnvtsQTkIka4XyBv4LB16e5Wuxf74SZciTT4WLhB6hIV1FQPwnPsb5ptqFUJLrZOyJTSt5pLO2WxrVZW1vDb~Q4x8v-0x8L1RhwV1c8PIiwK1MPdymnVxKAo8ca9-NG6BFRJwsaS-zDR2X5omVvySM58kJ85whE1~nUf0z4-DBRAA6CE8M6e4FMRByeipikFxMiXb-cY9wD4Fp6Dy-7w7Dc03KGysgn~w__",
            text: "The Lucy Lamp",
            price: "£399"
        },
        {
            id: 5,
            img: "https://s3-alpha-sig.figma.com/img/a2ef/009a/842fec031ef0c247df24214e05b47e70?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q5eeYrsyWQt2nA8OTjPnWoI7JFL0DR951eww7O1MaUdNOKQEXiNBhsrDNHOfXfUgw6u-vRUp7AcN2m05dBuluLs55rrexQ-eb~CwBtCdDH5kjzvFD1Qw8o2UtXiYoHpUA4HEoHFJ30n7YkziDxlZ00ssZIOs1dvUwI5Brnyfpzebh8S90~JnpwJ3RG0iWNUs5JSYftFqxZKAfyr8HRVSt5uIgkpPA03kv~JAZIJbzPaQhymN99vhkwqXzt1l4JqVKdKm-sddD2AkEaCfV20RrJkpnJLKRrWj6YDp5aJVQwFrwwEIdi~6~DyeIP~zd~TSWmPzW5vIDhiTsnJuNneTOw__",
            text: "The Dandy chair",
            price: "£250"
        },
        {
            id: 6,
            img: "https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoULpJtNV2TEAfMLihyYvN-6HMEj0rg9rY5ESZM8tloVUh4qWTj-VkaluYaxMdBet2M2c9RHJFE3qOme31kup8MqcDnDH-~IeQgxVJFeXP72cPpq~uRbfGyj-DNMSP74rSFz7Q496eZ2b9Jrz1UeBCul6Ayxhrv1CxzWtAqZOYugBOXyqyN4GDhQO~st2gwwbfIlh8outwfWZBCmtJ5hqvqdkh3PAX-RS5S9iXw5rnb3F~2veXxT3xT1ONwVDAHhmrTm6POIu97LAUHz4hwRdkjdjs82kuQcecHAjlDDv5B4UOm3cMml-3~04m7GGmVUJ3pQd07CyoaQM3ErGUmh4g__",
            text: "Rustic Vase Set",
            price: "£155"
        },
        {
            id: 7,
            img: "https://s3-alpha-sig.figma.com/img/cd2d/4a69/fe1e8e060432bf77cee26297ca43e0e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pNva3HFuIajEG6BlYmOfbg6j0~Li2gHCpfv2lhfzbznsuVaR7BFh17yrvpYK9GDRg5GuiX58~a7mBPdb~2tncKMRKIA475tJpd5mi2FextHOPWQNDQGwleL8JKF3xEpjDFiBbeDXFMo3m2VyrZ43B~RJlp8UEUsJ2szge~3MArzq1SwpC-piBw2rkMIfxbqw89HygtnHuC1WzTzYIq3Bs6QxNG-TxEwOlttjEPl6uks~0je4yY4~R3g0jtx9HIsu8SKQSNSjNxgdyWR0KWe5gW4NEIvGyTocVp1NSuZX97l1C1fGDp32MNNINlfQBLHoGzT8ntYj5AsBgWrfQ6nYZQ__",
            text: "The Silky Vase",
            price: "£125"
        },
        {
            id: 8,
            img: "https://s3-alpha-sig.figma.com/img/4747/f0e8/ffbabae5de21ee1b8c8ca6e83dd10f51?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KMb4jjk6egEU9RJmHU~imIg0ULfO~ihg8uIkbuGjsKSpIwFaxIzfowM0JENM-wq3Lt13ht6LXWUNwp06yjIYFpM~wslnFC04rZhGdBkONutlLkuORS1t6SnvtsQTkIka4XyBv4LB16e5Wuxf74SZciTT4WLhB6hIV1FQPwnPsb5ptqFUJLrZOyJTSt5pLO2WxrVZW1vDb~Q4x8v-0x8L1RhwV1c8PIiwK1MPdymnVxKAo8ca9-NG6BFRJwsaS-zDR2X5omVvySM58kJ85whE1~nUf0z4-DBRAA6CE8M6e4FMRByeipikFxMiXb-cY9wD4Fp6Dy-7w7Dc03KGysgn~w__",
            text: "The Lucy Lamp",
            price: "£399"
        },
        {
            id: 9,
            img: "https://s3-alpha-sig.figma.com/img/f9f6/09a6/3811628ae03b0a862e160e2eae36dcdd?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BoULpJtNV2TEAfMLihyYvN-6HMEj0rg9rY5ESZM8tloVUh4qWTj-VkaluYaxMdBet2M2c9RHJFE3qOme31kup8MqcDnDH-~IeQgxVJFeXP72cPpq~uRbfGyj-DNMSP74rSFz7Q496eZ2b9Jrz1UeBCul6Ayxhrv1CxzWtAqZOYugBOXyqyN4GDhQO~st2gwwbfIlh8outwfWZBCmtJ5hqvqdkh3PAX-RS5S9iXw5rnb3F~2veXxT3xT1ONwVDAHhmrTm6POIu97LAUHz4hwRdkjdjs82kuQcecHAjlDDv5B4UOm3cMml-3~04m7GGmVUJ3pQd07CyoaQM3ErGUmh4g__",
            text: "Rustic Vase Set",
            price: "£155"
        }
    ]



    return (
        <div>
            <div className="joinContainer" style={{ height: "30vh", display: "flex", alignItems: 'end' }}>
                <h1 style={{ margin: "30px 50px", fontFamily: 'sans-serif', fontWeight: "100", color: 'rgba(255, 255, 255, 1)' }}>All products</h1>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", margin: "20px" }}>
                <div style={{ width: "25%" ,display:"flex",justifyContent:"end" }}>
                    <div style={{ width: "80%", display: "flex", flexDirection: "column", gap: "50px",margin:"20px 0px" }}>
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