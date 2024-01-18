import { useEffect } from "react";
import { useAppSelector } from "../store/hooks";
import CartEmpty from "./CartEmpty";
import { itemsCart } from "../functions";
function Cart() {
    const cartItems = useAppSelector((state) => state.cart.value)
    const cartNum = useAppSelector((state) => state.cart.items)
    function cartAdd() {
        fetch('https://fakestoreapi.com/carts', {
            method: "POST",
            body: JSON.stringify(
                {
                    userId: 5,
                    date: '2020-02-03',
                    products: [{ productId: 5, quantity: 1 }, { productId: 1, quantity: 5 }]
                }
            )
        })
            .then(res => res.json())
            .then(json => console.log(json))
    }
    useEffect(() => {
        console.log("Recieved Carts: ");
        cartAdd()
    }, []);

    return (
        <div>
            {/* {cartI.map((item) => (
                <div>{item.title}</div>
            ))} */}
            No of items in cart: {cartNum}
            {!cartItems && <CartEmpty />}
        </div>
    );
};

export default Cart;