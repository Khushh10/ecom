import './App.css';
import instance from './Services/instance';
import { useEffect, useState } from 'react';
import CategoryChoice from './Components/CategoryChoice';
// import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import ProductReview from './Components/ProductReview';
// import CommonCard from './Components/CommonCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { dataStore, chosenCategory } from './Redux/productsSlice';
import Cart from './Components/Cart';

function App() {
  const [showSel, setShowSel] = useState('ALL PRODUCTS');
  const [catList, setCatList] = useState<Array<string>>([]);
  const [allProducts, setAllProducts] = useState<Array<TProduct>>([]);
  const [res, setRes] = useState<Array<TProduct>>([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [searchBox, setSearchBox] = useState('');

  const dispatch = useAppDispatch()
  const sData = useAppSelector((state) => state.products.value)

  const allData = async () => {
    try {
      const res = await instance.get<Array<TProduct>>('');
      //console.log("All Products: ", res.sData);
      dispatch(dataStore(res.data));
      setAllProducts(res.data);
    }
    catch (error) {
      //console.log("Error:", error);
    }
  }

  const categoryList = () => {
    //console.log("Main", sData);
    sData.forEach((dat) => {
      if (catList.includes(dat.category)) {
        //console.log("exists");
      }
      else {
        catList.push((dat.category));
        //console.log("categories:", catList);
      }
    })
  }

  const defaultSets = async (filteredData: Array<TProduct>) => {
    try {
      // setProduct(filteredData);
      setRes(filteredData);
      setSearchBox('');
      dispatch(chosenCategory(filteredData));
    }
    catch (error) {
      console.log("Default set error: ", error);
    }
  }

  const productChoice = async (id?: number) => {
    setSearchBox('');
    allData();
    switch (id) {
      case 0:
        {
          const filteredData = allProducts.filter((item) => item.category === catList[0]);
          //console.log(catList);
          //console.log(filteredData);
          defaultSets(filteredData);
          break;
        }
      case 1:
        {
          const filteredData = allProducts.filter((item) => item.category.includes(catList[1]));
          //console.log(filteredData);
          defaultSets(filteredData);
          break;
        }
      case 2:
        {
          const filteredData = allProducts.filter((item) => item.category.includes(catList[2]));
          //console.log(filteredData);
          defaultSets(filteredData);
          break;
        }
      case 3:
        {
          const filteredData = allProducts.filter((item) => item.category.includes(catList[3]));
          //console.log(filteredData);
          defaultSets(filteredData);
          break;
        }
    }
  }

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    categoryList();
  }, [sData]);

  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout productChoice={productChoice} showSel={showSel} setShowSel={setShowSel} selectedItem={selectedItem} setSelectedItem={setSelectedItem} catList={catList} />}>
              <Route index element={<ProductCard allProducts={allProducts} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              {catList.map((title) => (
                < Route path={title.replace(/\s/g, '-')} element={< CategoryChoice res={res} searchBox={searchBox} setSearchBox={setSearchBox} />} />))}
              <Route path='/product-review' element={<ProductReview />} />
              <Route path='/cart' element={<Cart />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;