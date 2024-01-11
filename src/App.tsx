import './App.css';
import instance from './Services/instance';
import { useContext, useEffect, useState } from 'react';
import CategoryChoice from './Components/CategoryChoice';
import NoProduct from './Components/NoProdFound';
import MenuDrawer from './Components/MenuDrawer';
// import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import Sample from './Components/Sample';
import SiteLoader from './Components/Loader';
import ProductReview from './Components/ProductReview';
import SampleMenu from './SampleComponents/SampleMenu';
// import CommonCard from './Components/CommonCard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Components/Layout';
function App() {
  const [showSel, setShowSel] = useState('ALL PRODUCTS');
  const [data, setData] = useState<Array<TProduct>>([]);
  const [catList, setCatList] = useState<Array<string>>([]);
  const [product, setProduct] = useState<Array<TProduct>>([]);
  const [showMenu, setShowMenu] = useState(false);
  const [showData, setShowData] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showError, setShowError] = useState(false);
  const [res, setRes] = useState<Array<TProduct>>([]);
  const [curState, setCurState] = useState(true);
  const [selectedItem, setSelectedItem] = useState('');
  const [searchBox, setSearchBox] = useState('');
  const [showHeader, setShowHeader] = useState(true);

  const allData = async () => {
    try {
      const res = await instance.get<Array<TProduct>>('');
      // console.log("All Products: ", res.data);
      setData(res.data);
    }
    catch (error) {
      console.log("Error:", error);
    }
  }

  const categoryList = () => {
    // console.log("Main", data);
    data.forEach((dat) => {
      if (catList.includes(dat.category)) {
        // console.log("exists");
      }
      else {
        catList.push((dat.category));
        console.log(catList);
      }
    })
  }

  const noProductHandle = async () => {
    setShowError(false);
    try {
      if (curState) {
        // allData();
        setShowData(true);
      } else {
        setShowProduct(true);
      }
    } catch (error) {
      console.log("Error:", error);
      localStorage.setItem('allData', JSON.stringify(data));
    }
  }

  function menuToggle() {
    setShowMenu(true);
    // console.log(data);
    categoryList();
  }

  function removedrawer() {
    // console.log("YEASS");
    setShowMenu(false);
  }

  const defaultSets = async (filteredData: Array<TProduct>) => {
    try {
      setProduct(filteredData);
      setShowProduct(true);
      setShowData(false);
      setShowError(false);
      setRes(filteredData);
      setCurState(false);
      setSearchBox('');
    }
    catch (error) {
      console.log("Default set error: ", error);
    }
  }

  const productChoice = async (id?: number) => {
    setSearchBox('');
    setProduct([]);
    setShowData(false);
    setShowProduct(true);
    switch (id) {
      case 0:
        {
          const filteredData = data.filter((item) => item.category === catList[0]);
          console.log(catList);
          console.log(filteredData);
          await defaultSets(filteredData); // Assuming defaultSets is an asynchronous function
          break;
        }
      case 1:
        {
          const filteredData = data.filter((item) => item.category.includes(catList[1]));
          console.log(filteredData);
          await defaultSets(filteredData);
          break;
        }
      case 2:
        {
          const filteredData = data.filter((item) => item.category.includes(catList[2]));
          console.log(filteredData);
          await defaultSets(filteredData);
          break;
        }
      case 3:
        {
          const filteredData = data.filter((item) => item.category.includes(catList[3]));
          console.log(filteredData);
          await defaultSets(filteredData);
          break;
        }
    }
  }


  const productAll = () => {
    console.log("Data AA RAHA");
    setShowData(true);
    setShowProduct(false);
    setCurState(true);
  }

  const search = async () => {
    let filter = data.filter((item) => item.title.includes(searchBox));
    if (filter.length === 0) {
      setShowError(true);
      setShowData(false);
      setShowProduct(false);
    } else {
      setData(filter);
      setShowError(false);
      setShowData(true);
      setShowProduct(false);
    }
  }
  const defSearch = (event: React.SyntheticEvent) => {
    event.preventDefault();
    search();
  }

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    setShowHeader(true);
    categoryList();
  }, [data]);

  return (
    <>
      {/* {/* <Sample/> */}
      {/* <Header menuToggle={menuToggle} search={search} setSearch={setSearch} data={data} defSearch={defSearch} /> */}
      {/* 
      {showData && <ProductCard data={data} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} removedrawer={removedrawer} searchBox={searchBox} setSearchBox={setSearchBox} />}
      {showProduct && <CategoryChoice data={product} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} setProduct={setProduct} res={res} removedrawer={removedrawer} searchBox={searchBox} setSearchBox={setSearchBox} />}
      {showMenu && <MenuDrawer catList={catList} productAll={productAll} productChoice={productChoice} removedrawer={removedrawer} showSel={showSel} setShowSel={setShowSel} selectedItem={selectedItem}
        setSelectedItem={setSelectedItem} />}
      {showError && <NoProduct setShowData={setShowData} setShowProduct={setShowProduct} noProductHandle={noProductHandle} allData={allData} />} */}


      {/* <SiteLoader/> */}
      {/* <ProductReview data={data}/> */}

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout showHeader={showHeader} setShowHeader={setShowHeader} searchBox={searchBox} defSearch={defSearch} catList={catList} productAll={productAll} productChoice={productChoice} showSel={showSel} setShowSel={setShowSel} selectedItem={selectedItem} setSelectedItem={setSelectedItem} data={data} setSearchBox={setSearchBox} search={search} />}>
              <Route index element={<ProductCard data={data} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              <Route path="/men's-clothing" element={< CategoryChoice data={product} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} setProduct={setProduct} res={res} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              <Route path="/women's-clothing" element={< CategoryChoice data={product} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} setProduct={setProduct} res={res} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              <Route path="/electronics" element={< CategoryChoice data={product} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} setProduct={setProduct} res={res} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              <Route path="/jewelery" element={< CategoryChoice data={product} menuToggle={menuToggle} setShowProduct={setShowProduct} setShowData={setShowData} setShowError={setShowError} allData={allData} setData={setData} setProduct={setProduct} res={res} searchBox={searchBox} setSearchBox={setSearchBox} />} />
              <Route path='/product-review' element={<ProductReview setShowHeader={setShowHeader} />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;