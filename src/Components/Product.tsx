import { useEffect, useState } from 'react';
import Banner from './Banner';
import Rating from 'react-rating-stars-component';
// interface TProps {
//     product: Array<TProduct>;
// }
function Product(props: { data: Array<TProduct> }) {
    return (
        <>
            <Banner />
            <div>
                <div className="container mx-auto sm:px-4 subpixel-antialiased" style={{ justifyContent: 'center' }}>
                    <article className="post" style={{ padding: '20px' }}>
                        <div className="md:w-full pr-4 pl-4 content-center">
                            <div className="flex flex flex-wrap " id="valuess">
                                {props.data.map((pItems, key) => (
                                    <div className="xl:w-1/4 pr-4 pl-4 lg:w-1/3 pr-4 pl-4 md:w-1/2 pr-4 pl-4 sm:w-1/2 pr-4 pl-4 flex" key={key}>
                                        <div className="relative flex flex-col min-w-0 rounded break-words border bg-white border-1 border-gray-300 card-style w-full my-2 center shadow">
                                            <div className="my-2">
                                                <img src={pItems.image} className="max-w-full h-auto imagee w-full rounded rounded-t" alt='banner img' />
                                            </div>
                                            <div className="justifyy flex-auto p-6 flex flex-col text-center">
                                                <p className="mb-0" style={{ overflow: 'hidden', height: '24px', fontSize: 'medium' }}>
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
                                            <a href="#!" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-900 text-white hover:bg-gray-900 card-style cart">
                                                Add to cart
                                            </a>
                                            <a href="#!" className="inline-block align-middle text-center select-none border font-normal whitespace-no-wrap rounded py-1 px-3 leading-normal no-underline bg-gray-100 text-gray-800 hover:bg-gray-200 card-style cart my-2">
                                                <i className="fas fa-heart fa-lg text-gray-600 px-1"></i>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </>
    );
}

export default Product;
