import { useEffect, useState } from 'react';
import Banner from './Banner';
import Rating from 'react-rating-stars-component';
import { useNavigate } from 'react-router';
import Header from './Header';
import DisplayCard from './DisplayCard';
interface ProductProps {
    data: Array<TProduct>
    menuToggle: () => void;
    setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
    setShowError: React.Dispatch<React.SetStateAction<boolean>>;
    setShowData: React.Dispatch<React.SetStateAction<boolean>>;
    setData: React.Dispatch<React.SetStateAction<TProduct[]>>;
    setProduct: React.Dispatch<React.SetStateAction<TProduct[]>>;
    allData: () => void;
    res: Array<TProduct>;
    searchBox: string;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
}
function Product(props: ProductProps) {
    const { data, setShowProduct, menuToggle, setShowError, setShowData, setProduct, allData, res, searchBox, setSearchBox } = props;
    const navigate = useNavigate();
    function productReview(item: string) {
        navigate('/product-review', { state: item });
    }

    useEffect(() => {
        allData();
        if (searchBox === '') {
            setProduct(res)
            setShowProduct(true);
            setShowData(false);
            setShowError(false);
        }
    }, [searchBox, res, setShowProduct])

    useEffect(() => {
        allData();
    }, [])
    return (
        <>
            <Banner />
            <div>
                <div className="container mx-auto sm:px-4 subpixel-antialiased" style={{ justifyContent: 'center' }}>
                    <article className="post" style={{ padding: '20px' }}>
                        <div className="md:w-full pr-4 pl-4 content-center">
                            <div className="flex flex-wrap " id="valuess">
                                {data.map((pItems, key) => (
                                    <DisplayCard pItems={pItems} productReview={productReview} key={key} />

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
