"use client";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/CartSlice";



const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(clearCart());
    }
    return(
        <div>
            <button className="border-2 border-white rounded-lg bg-black text-white m-2 p-2" onClick={handleClick}>Clear Cart</button>
            <div className="flex justify-center">
                <div className="w-1/3">            
                    {cartItems.map((items) => (<div key={items} className="border border-black rounded-md m-4 p-4 text-center bg-orange-200 font-bold text-xl">{items}</div>))}
                </div>
            </div>
        </div>
    )
}

export default Cart;