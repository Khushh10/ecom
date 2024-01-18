import { useEffect, useState } from 'react';
import Banner from './Banner';
import { useNavigate, useLocation } from 'react-router';
import Header from './Header';
import DisplayCard from './DisplayCard';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { chosenCategory } from '../Redux/productsSlice';
import NoProductFound from './NoProductFound';
import { selectData } from '../Redux/productsSlice';
import { selectCategory } from '../Redux/productsSlice';
import { categoriesRedux } from '../Redux/productsSlice';

interface ProductProps {
    allData: () => Promise<void>
}
function ProductsCategory(props: ProductProps) {
    const [searchBox, setSearchBox] = useState('');
    const { allData } = props
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const cData = useAppSelector(selectCategory)
    const allProductRedux = useAppSelector(selectData)
    const [showError, setShowError] = useState(false)
    const location = useLocation()
    const categoriesList = useAppSelector(categoriesRedux)

    function productReview(item: number) {
        navigate('/product-review', { state: item });
    }

    function categoryData() {
        console.log("LOCATIONNNN", location.pathname.replace(/\-/, ' ').slice(1))

        categoriesList.forEach((titleee) => {
            if (titleee === location.pathname.replace(/\-/g, ' ').slice(1)) {
                console.log("Titleeee", titleee)
                let filter = allProductRedux.filter((item) => item.category === titleee)
                dispatch(chosenCategory(filter))
                // navigate(titleee.replace(/\s/, '-'))
            }
        })
    }

    const search = () => {
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

    useEffect(() => {
        categoryData()
    }, [location.pathname])


    useEffect(() => {
        if (searchBox === '') {
            // dispatch(chosenCategory(res))
            categoryData()
            setShowError(false);
        }
    }, [searchBox])

    useEffect(() => {
        allData();
    }, [])

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

export default ProductsCategory;
