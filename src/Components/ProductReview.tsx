import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { similarProduct } from "../Redux/searchSlice";
import Rating from 'react-rating-stars-component';
import { selectData } from "../Redux/productsSlice";
import { selectSearch } from "../Redux/searchSlice";

function ProductReview() {
    const location = useLocation();
    const [product, setProduct] = useState<Array<TProduct>>([]);
    const [storeCategory, setStoreCategory] = useState('');
    var [similar, setSimilar] = useState<Array<TProduct>>();
    const [manual, setManual] = useState(false);
    const navigate = useNavigate();
    const allProductRedux = useAppSelector(selectData)
    const simData = useAppSelector(selectSearch)
    const dispatch = useAppDispatch();
    function productReview(item: number) {
        navigate('/product-review', { state: item });
        setManual(!manual);
    }

    function getData() {
        const dataReview = allProductRedux.filter((item) => item.id === location.state);
        setProduct(dataReview);
    }

    function categoryList() {
        //console.log("Main", data);
        product.forEach((dat) => {
            if (!storeCategory.includes(dat.category)) {
                //console.log("exists");
                //console.log("Category", storeCategory);
                setStoreCategory((dat.category));
            }
        })
    }

    function similarProducts() {
        const filt = allProductRedux.filter((item) => item.category === storeCategory && item.id !== location.state)
        dispatch(similarProduct(filt))
        setSimilar(filt);
    }

    useEffect(() => {
        getData()
        window.scrollTo(0, 0)
        categoryList()
        console.log("CHAL RAHA")
    }, [manual]);

    useEffect(() => {
        categoryList();
    }, [product]);

    useEffect(() => {
        similarProducts();
        // console.log("YE BHI CHAL RAHA")
    }, [storeCategory, allProductRedux, similar]);

    return (
        <>
            <div className="flex w-full h-screen" >
                <div className="w-5/6">
                    {product.map((data, key) => (
                        <section className="relative product-info pt-12 px-3">
                            <div className="items-center flex flex-wrap content-center">
                                <div className="w-full md:w-4/12 px-4 ">
                                    <img alt="..." className=" w-4/6 rounded-lg shadow-lg " src={data.image} />
                                </div>
                                <div className="w-full md:w-8/12 px-4">
                                    <div className="md:pr-12 font-medium">
                                        <h3 className="text-2xl text-left font-semibold">{data.title}</h3>
                                        <p className="text-md text-left leading-relaxe text-gray-400 hover:text-red-600 cursor-pointer">
                                            {data.category.toUpperCase()}
                                        </p>
                                    </div>
                                    <div className="w-full md:w-8/12 mt-5">
                                        <p className="text-xl text-start">${data.price}</p>
                                    </div>
                                    <div className="w-full md:w-8/12 mt-5 text-start">
                                        <p className="text-lg">PRODUCT DESCRIPTION: </p>
                                        <p className="text-md">{data.description}</p>
                                    </div>
                                    <div className="w-full md:w-8/12 mt-5 text-start">
                                        <h4><Rating count={5} value={data.rating.rate} size={28} edit={false} /></h4>
                                    </div>
                                    <div className="w-full md:w-8/12 mt-5 text-start">
                                        <button type="button" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-md text-sm px-5 py-2.5 text-center me-2 mb-2">Add To Cart</button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="flex-1 flex flex-col shadow-sm shadow-red overflow-y-scroll ">
                    <div className="my-2 text-red-600">SIMILAR PRODUCTS</div>
                    <hr />
                    <div>
                        {simData.map((data, key) => (
                            <div key={key} className="w-5/6 mx-5 my-3 rounded-2xl overflow-hidden shadow-md shadow-red-600">
                                <img className="w-full h-40 object-scale-down cursor-pointer px-3 pt-2" onClick={() => productReview(data.id)} src={data.image} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div onClick={() => productReview(data.id)} className="mb-2 cursor-pointer">{data.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
export default ProductReview;