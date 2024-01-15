import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import CartEmpty from "./CartEmpty";
function Cart() {
    const cartItems = useAppSelector((state) => state.cart.value)
    useEffect(() => {
        console.log("Recieved Carts: ");
    }, []);

    return (
        <div>
            {/* {cartI.map((item) => (
                <div>{item.title}</div>
            ))} */}
            {cartItems && <CartEmpty />}
        </div>
    );
};

export default Cart;