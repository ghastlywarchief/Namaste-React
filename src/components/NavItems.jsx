import { CART_URL } from "../utils/links";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import { useSelector } from "react-redux";
import CartSlice from "../utils/CartSlice";

const NavItems = () => {

    const cartItems = useSelector((store) => store.cart.items);
    
    return (
        <ul className="flex items-center">
            <li className="px-8 text-2xl font-semibold"><Link to="/">Home</Link></li>
            <li className="px-8 text-2xl font-semibold"><Link to="/about">About Us</Link></li>
            <li className="px-8 items-center"><Link to="/cart"><span><img className="w-10" src={CART_URL}></img><h1 className="font-bold text-lg">({cartItems.length} items)</h1></span></Link></li>
            <LoginButton />
        </ul>
    )
}

export default NavItems;