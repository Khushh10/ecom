import Rating from 'react-rating-stars-component';
import Banner from './Banner';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import DisplayCard from './DisplayCard';
interface ProductListProps {
    data: Array<TProduct>
    menuToggle: () => void;
    setShowProduct: React.Dispatch<React.SetStateAction<boolean>>;
    setShowError: React.Dispatch<React.SetStateAction<boolean>>;
    setShowData: React.Dispatch<React.SetStateAction<boolean>>;
    setData: React.Dispatch<React.SetStateAction<TProduct[]>>;
    allData: () => void;
    searchBox: string;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
}
function ProductList(props: ProductListProps) {
    const { data, menuToggle, setShowProduct, setShowError, setShowData, setData, allData, searchBox, setSearchBox } = props;
    const navigate = useNavigate();
    function productReview(item: string) {
        navigate('/product-review', { state: item });
    }

    useEffect(() => {
        if (searchBox === '') {
            allData();
            setShowProduct(false);
            setShowData(true);
            setShowError(false);
        }
    }, [searchBox])

    return (
        <>
            <Banner />
            <div className="container mx-auto sm:px-4" style={{ justifyContent: 'center' }}>
                <article className="post" style={{ padding: '20px' }}>
                    <div className="md:w-full pr-4 pl-4 content-center">
                        <div className="flex flex-wrap " id="valuess">
                            {data.map((pItems, key) => (
                                <DisplayCard pItems={pItems} productReview={productReview} key={key}/>
                            ))}
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default ProductList;