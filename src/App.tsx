import './App.css';
import instance from './Services/instance';
import { useEffect, useState } from 'react';
import Product from './Components/Product';
import Banner from './Components/Banner';
import { menData, elecData, wData } from './CommonFunctions/calls';
import NoProduct from './Components/NoProdFound';
import MenuDrawer from './Components/MenuDrawer';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';

function App() {
  const [data, setData] = useState<Array<TProduct>>([]);
  const [catList, setCatList] = useState<Array<string>>([]);
  const [choiced, setChoiced] = useState<Array<TProduct>>([]);
  const [searchh, setSearch] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const [showData, setShowData] = useState(true);
  const [showProduct, setShowProduct] = useState(false);
  const [showError, setShowError] = useState(false);
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

  const search = async () => {
    let filter = data.filter((item) => item.title.includes(searchh));
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

  const categoryList = () => {
    // console.log("Main", data);
    data.forEach((dat) => {
      if (catList.includes(dat.category)) {
        // console.log("exists");
      }
      else {
        catList.push((dat.category));
        // console.log(catList);
      }
    })
  }

  function menuToggle() {
    setShowMenu(true);
    // console.log(data);
    categoryList();
  }

  function removedrawer() {
    // console.log("YES");
    setShowMenu(false);
  }

  const productChoice = (id: number) => {
    if (id === 0) {
      // setChoiced(data);
      console.clear();
      menData(data, choiced);
    }
    else if (id === 1) {
      data.forEach((dat: TProduct) => {
        if (dat.category === 'jewelery') {
          setChoiced(data);
          console.log("Jewelery Data", data);
        }
      })
      // setShowData(false);
      // setShowProduct(true);
    }
    else if (id === 2) {
      console.clear();
      choiced.pop();
      // setChoiced(data);
      elecData(data, choiced);
    }
    else if (id === 3) {
      console.clear();
      wData(data, choiced);
    }
  }

  const productAll = () => {
    console.log("Data AA RAHA");
    setShowData(true);
    setShowProduct(false);
  }

  useEffect(() => {
    categoryList();
  }, []);

  useEffect(() => {
    allData();
  }, []);

  useEffect(() => {
    if (searchh === '') {
      setShowProduct(false);
      setShowData(true);
      allData();
    }

  }, [searchh])


  return (
    <>
      <Header menuToggle={menuToggle} search={search} setSearch={setSearch} data={data} />
      {showData && <Banner />}
      {showData && <ProductCard data={data} />}
      {showProduct && <Product jData={choiced} title={''} price={''} description={''} category={''} image={''} />}
      {showMenu && (<MenuDrawer catList={catList} productAll={productAll} productChoice={productChoice} removedrawer={removedrawer} />)}
      {showError && <NoProduct />}
    </>
  );
}

export default App;