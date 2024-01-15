import { useEffect, useState } from 'react';
import Banner from './Banner';
import { useNavigate } from 'react-router';
import Header from './Header';
import DisplayCard from './DisplayCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { chosenCategory } from '../Redux/productsSlice';
import NoProductFound from './NoProductFound';
interface ProductProps {
    res: Array<TProduct>;
    searchBox: string;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
}
function Product(props: ProductProps) {
    const { res, searchBox, setSearchBox } = props
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cData = useAppSelector((state) => state.products.chosenCat)
    const [showError, setShowError] = useState(false)

    function productReview(item: number) {
        navigate('/product-review', { state: item });
    }

    useEffect(() => {
        if (searchBox === '') {
            dispatch(chosenCategory(res))
            setShowError(false);
        }
    }, [searchBox, res])

    useEffect(() => {
        return () => {
            dispatch(chosenCategory(res));
        }
    }, [])
    const search = async () => {
        let filter = cData.filter((item) => item.title.toLowerCase().includes(searchBox.toLowerCase()));
        if (filter.length === 0) {
            setShowError(true);
        } else {
            dispatch(chosenCategory(filter));
            setShowError(false);
        }
    }
    const defSearch = (event: React.SyntheticEvent) => {
        event.preventDefault();
        search();
    }

    return (
        <>
            <div className="w-5/6 fixed top-0 z-50 bg-white">
                <div className="flex justify-end">
                    <Header search={search} defSearch={defSearch} setSearchBox={setSearchBox} data={cData} />
                </div>
            </div>
            {!showError && <div>
                <div>
                    <Banner />
                </div>
                <div>
                    <div className="container mx-auto sm:px-4 subpixel-antialiased" style={{ justifyContent: 'center' }}>
                        <article className="post" style={{ padding: '20px' }}>
                            <div className="md:w-full pr-4 pl-4 content-center">
                                <div className="flex flex-wrap " id="valuess">
                                    {cData.map((pItems, key) => (
                                        <DisplayCard pItems={pItems} productReview={productReview} key={key} />
                                    ))}
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </div>}
            {showError && <NoProductFound />}
        </>
    );
}

export default Product;
