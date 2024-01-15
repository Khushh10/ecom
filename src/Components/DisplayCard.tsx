import Rating from 'react-rating-stars-component';
import { addNumToCart } from '../functions';
import { useAppSelector } from '../store/hooks';
import { useEffect, useState } from 'react';
interface DisplayCardProps {
    pItems: TProduct
    productReview(item: number): void;
    key: number;
}
function DisplayCard(props: DisplayCardProps) {
    const { pItems, productReview } = props;
    const sData = useAppSelector((state) => state.products.value)
    const cart: Array<number> = [];
    function handleAddToCart(item: number) {
        addNumToCart();
        cart.push(item);
        console.log("Items index in cart: ", cart);
        localStorage.setItem('cart', JSON.stringify(cart));
    }
    return (
        <div className="xl:w-1/4 lg:w-1/3 md:w-1/2 sm:w-1/2 pr-4 pl-4 flex">
            <div className="relative flex flex-col min-w-0 break-words border bg-white border-1 border-red-300 rounded-3xl w-full my-2 center shadow">
                <div className="my-2 cursor-pointer" onClick={() => { productReview(pItems.id) }}>
                    <img src={pItems.image} className="max-w-full h-auto imagee w-full rounded rounded-t" alt='banner img' />
                </div>
                <div className=" justify-center flex-auto p-6 flex flex-col text-center">
                    <p className="mb-0 cursor-pointer" onClick={() => { productReview(pItems.id) }} style={{ overflow: 'hidden', height: '24px', fontSize: 'medium' }}>
                        <b>{pItems.title}</b>
                    </p>
                    <h5 className="text-center">${pItems.price}</h5>
                    <p className="mb-0" style={{ overflow: 'hidden', height: '75px', fontSize: 'small' }}>
                        {pItems.description}
                    </p>
                </div>
                <div className="flex items-center justify-center my-2">
                    <h5><Rating count={5} value={pItems.rating.rate} size={24} edit={false} /></h5><br />
                </div>
                <button type="button" onClick={() => { handleAddToCart(pItems.id) }} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-4">Add To Cart</button>
            </div>
        </div >
    );
};

export default DisplayCard;