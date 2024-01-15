import Banner from './Banner';
import Header from './Header';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import DisplayCard from './DisplayCard';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { dataStore } from '../Redux/productsSlice';
import NoProductFound from './NoProductFound';
import { itemsCart } from '../functions';
interface ProductListProps {
    allProducts: Array<TProduct>
    searchBox: string;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
}

function ProductCard(props: ProductListProps) {
    const { searchBox, setSearchBox, allProducts } = props;
    const navigate = useNavigate()
    const sData = useAppSelector((state) => state.products.value)
    const dispatch = useAppDispatch()
    const [showError, setShowError] = useState(false)

    function productReview(item: number) {
        navigate('/product-review', { state: item });
    }

    useEffect(() => {
        if (searchBox === '') {
            setShowError(false);
            dispatch(dataStore(allProducts));
        }
    }, [searchBox])

    const search = async () => {
        let filter = sData.filter((item) => item.title.toLowerCase().includes(searchBox.toLowerCase()));
        if (filter.length === 0) {
            setShowError(true);
        } else {
            dispatch(dataStore(filter));
            setShowError(false);
        }
    }
    const defSearch = (event: React.SyntheticEvent) => {
        event.preventDefault();
        search();
    }

    useEffect(() => {
        return () => {
            dispatch(dataStore(allProducts));
        }
    }, [])

    return (
        <>
            <div className="w-5/6 fixed top-0 z-50 bg-white">
                <div className="flex justify-end">
                    <Header search={search} defSearch={defSearch} setSearchBox={setSearchBox} data={sData} />
                </div>
            </div>
            {!showError && <div className='my-5'>
                <div>
                    <Banner />
                </div>
                <div className="container mx-auto sm:px-4" style={{ justifyContent: 'center' }}>
                    <article className="post" style={{ padding: '20px' }}>
                        <div className="md:w-full pr-4 pl-4 content-center">
                            <div className="flex flex-wrap " id="valuess">
                                {sData.map((pItems, key) => (
                                    <DisplayCard pItems={pItems} productReview={productReview} key={key} />
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>}
            {showError && <NoProductFound />}
        </>
    );
}

export default ProductCard;