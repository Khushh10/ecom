import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { useNavigate } from "react-router";
interface ProductProps {
    setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}
function ProductReview(props: ProductProps) {
    const data: Array<TProduct> = JSON.parse(localStorage.getItem('allData')!);
    const location = useLocation();
    const [product, setProduct] = useState(Array<TProduct>);
    const [storeCategory, setStoreCategory] = useState('');
    var [similar, setSimilar] = useState<Array<TProduct>>();
    const navigate = useNavigate();
    function productReview(item: string) {
        navigate('/product-review', { state: item });
    }

    function getData() {
        const dataReview = data.filter((item) => item.title.includes(location.state));
        setProduct(dataReview);
    }
    function categoryList() {
        // console.log("Main", data);
        product.forEach((dat) => {
            if (!storeCategory.includes(dat.category)) {
                // console.log("exists");
                // console.log("Category", storeCategory);
                setStoreCategory((dat.category));
            }
        })
    }


    function similarProducts() {
        const filt = data.filter((item) => item.category === storeCategory);
        setSimilar(filt);
        // console.log(similar);
    }

    useEffect(() => {
        props.setShowHeader(false);
        getData();
    }, []);

    useEffect(() => {
        similarProducts();
        categoryList();
    }, [])

    return (
        <>
            <div className="flex w-full h-screen" >
                <div className="w-5/6">
                    {product.map((data, key) => (
                        <section className="relative pt-12">
                            <div className="items-center flex flex-wrap content-center">
                                <div className="w-full md:w-4/12 px-4 ">
                                    <img alt="..." className=" w-4/6 rounded-lg shadow-lg " src={data.image} />
                                </div>
                                <div className="w-full md:w-8/12 px-4">
                                    <div className="md:pr-12">
                                        <h3 className="text-3xl font-semibold">{data.title}</h3>
                                        <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                                            {data.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    ))}
                </div>
                <div className="flex-1 flex flex-col shadow-sm shadow-red">
                    <div className="my-2 text-red-600">SIMILAR PRODUCTS</div>
                    <hr />
                    <div>
                        {similar?.map((data, key) => (
                            <div key={key} className="w-5/6 mx-5 my-3 rounded-2xl overflow-hidden shadow-md shadow-red-600">
                                <img className="w-full imagee"  onClick={() => productReview(data.title)} src={data.image} alt="Sunset in the mountains" />
                                <div className="px-6 py-4">
                                    <div onClick={() => productReview(data.title)} className="font-bold mb-2">{data.title}</div>
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