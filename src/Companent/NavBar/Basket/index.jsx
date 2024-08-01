import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from 'react-router-dom';

const Basket = () => {
    return (
        <Link to={"/basket"} style={{color:'black'}}>
            <AddShoppingCartIcon />
        </Link>
    )
}

export default Basket