import './App.css';
import instance from './Services/instance';
import { useEffect, useState } from 'react';
import Product from './Components/Product';
import NoProduct from './Components/NoProdFound';
import MenuDrawer from './Components/MenuDrawer';
import Header from './Components/Header';
import ProductCard from './Components/ProductCard';
import CommonCard from './Components/CommonCard';
function App() {
  const [showSel, setShowSel] = useState('ALL PRODUCTS');
  const [data, setData] = useState<Array<TProduct>>([]);
  const [catList, setCatList] = useState<Array<string>>([]);
  const [product, setProduct] = useState<Array<TProduct>>([]);
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
    // console.log("YEASS");
    setShowMenu(false);
  }

  const productChoice = (id: number) => {
    setProduct([]);
    switch (id) {
      case 0:
        {
          const filteredData = data.filter((item) => item.category === `men's clothing`);
          setShowSel('MEN\'S CLOTHING');
          setProduct(filteredData);
          // console.clear();
          console.log(filteredData);
          setShowProduct(true);
          setShowData(false);
          setShowError(false);
          break;
        }
      case 1:
        {
          const filteredData = data.filter((item) => item.category.includes(`jewelery`));
          setShowSel('JEWELERY');
          setProduct(filteredData);
          // console.clear();
          console.log(filteredData);
          setShowProduct(true);
          setShowData(false);
          setShowError(false);
          break;
        }
      case 2:
        {
          const filteredData = data.filter((item) => item.category.includes(`electronics`));
          setShowSel('ELECTRONICS');
          setProduct(filteredData);
          // console.clear();
          console.log(filteredData);
          setShowProduct(true);
          setShowData(false);
          setShowError(false);
          break;
        }
      case 3:
        {
          const filteredData = data.filter((item) => item.category.includes(`women's clothing`));
          setShowSel('WOMEN\'S CLOTHING');
          setProduct(filteredData);
          // console.clear();
          console.log(filteredData);
          setShowProduct(true);
          setShowData(false);
          setShowError(false);
          break;
        }
    }

  }

  const productAll = () => {
    console.log("Data AA RAHA");
    setShowData(true);
    setShowProduct(false);
  }

  useEffect(() => {
    allData();
    categoryList();
  }, []);

  useEffect(() => {
    if (searchh === '') {
      setShowProduct(false);
      setShowData(true);
      allData();
      setShowError(false);
    }

  }, [searchh])

  return (
    <>
      <Header menuToggle={menuToggle} search={search} setSearch={setSearch} data={data} />
      {showData && <ProductCard data={data} />}
      {showProduct && <Product data={product} />}
      {showMenu && <MenuDrawer catList={catList} productAll={productAll} productChoice={productChoice} removedrawer={removedrawer} showSel={showSel} setShowSel={setShowSel} />}
      {showError && <NoProduct />}
    </>
  );
}

export default App;