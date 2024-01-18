import './App.css';
import instance from './Services/instance';
import { useEffect, useState } from 'react';
import ProductsCategory from './Components/ProductsCategory';
import Home from './Components/Home';
import ProductReview from './Components/ProductReview';
import { Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { availableCategories, dataStore } from './Redux/productsSlice';
import Cart from './Components/Cart';
import { itemsCart } from './functions';
import { selectData } from './Redux/productsSlice';

function App() {
  const [categoriesList, setCatList] = useState<Array<string>>([]);
  const [allProducts, setAllProducts] = useState<Array<TProduct>>([]);

  const dispatch = useAppDispatch()
  const allProductRedux = useAppSelector(selectData)

  const allData = async () => {
    try {
      const res = await instance.get<Array<TProduct>>('');
      dispatch(dataStore(res.data));
      setAllProducts(res.data);
    }
    catch (error) {
    }
  }

  function categoryList() {
    let temCatList: Array<string> = []
    allProductRedux.forEach((dat) => {
      if (!temCatList.includes(dat.category)) {
        temCatList.push((dat.category));
      }
    })
    setCatList(temCatList)
    dispatch(availableCategories(temCatList));
  }

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    console.log("Cart Updated")
  }, [itemsCart])

  useEffect(() => {
    categoryList();
  }, [allProductRedux]);


  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home allProducts={allProducts} />} />
            {categoriesList.map((title) => (
              <Route path={title.replace(/\s/g, '-')} element={<ProductsCategory allData={allData} />} />))}
            <Route path='/product-review' element={<ProductReview />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;