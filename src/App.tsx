import './App.css';
import instance from './Services/instance';
import logo from './Assets/Images/logo1.png'
import { ReactNode, useEffect, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import Product from './Components/Product';
import Banner from './Components/Banner';
import { jewData, menData, elecData, wData } from './CommonFunctions/calls';
import NoProduct from './Components/NoProdFound';

function App() {
  const [data, setData] = useState<Array<TProduct>>([]);
  const [catList, setCatList] = useState<ReactNode[]>([]);
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
    setData(filter);
    setShowData(true);
    setShowProduct(false);
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
      menData(data);
    }
    else if (id === 1) {
      console.clear();
      jewData(data);
      // setShowData(false);
      // setShowProduct(true);
    }
    else if (id === 2) {
      console.clear();
      // setChoiced(data);
      elecData(data);
    }
    else if (id === 3) {
      console.clear();
      wData(data);
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
      <div className="bg-white text-white border border-light-subtle shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
        <div className="flexMain">
          <div className="flex1">
            <Button className="whiteLink siteLink p-3"
              onClick={() => menuToggle()}
              style={{ backgroundColor: 'white' }}
            ><i className="fas fa-bars me-2"></i>
              MENU</Button>
          </div>
          <div className="flex2 text-center">
            <div className="flex justify-center items-center"><a href="http://localhost:3000"><img src={logo} alt="Logo"
              height="50%" width="50%" /></a></div>
          </div>
          <div className="flex1">
            <div className="col text-start">
              <Form className="search-box">
                <i className="fa-solid fa-magnifying-glass searchh"
                  onClick={search}
                ></i>
                <input style={{ verticalAlign: '4px', width: '80%' }} type="search" name="focus" placeholder="Search"
                  id="search-input" list="textt" onChange={event => setSearch(event.target.value)} />
                <datalist id="textt">
                  {data.map((pItems, key) => (
                    <option value={pItems.title} key={key} />
                  ))}
                </datalist>
              </Form>
            </div>
          </div>
        </div>
      </div >
      {showData && <Banner />}
      {showData && <div className="container" style={{ justifyContent: 'center' }}>
        <article className="post" style={{ padding: '20px' }}>
          <div className="col-md-12 align-content-center">
            <div className="d-flex row" id="valuess">
              {data.map((pItems, key) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card card-style w-100 my-2 center shadow">
                    <div className="my-2">
                      <img src={pItems.image} className="img-fluid imagee card-img-top" alt='banner img' />
                    </div>
                    <div className="justifyy card-body d-flex flex-column text-center">
                      <p className="card-text" key={key} style={{ overflow: 'hidden', height: '24px', fontSize: 'medium', }}><b>{pItems.title}</b></p>
                      <h5 className="text-center">${pItems.price}</h5>
                      <p className="card-text" style={{ overflow: 'hidden', height: '75px', fontSize: 'small' }}>{pItems.description}</p>
                    </div>
                    <a href="#!" className="btn btn-dark card-style cart">Add to cart</a>
                    <a href="#!" className="btn btn-light card-style cart my-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
      }
      {showProduct && <Product jData={choiced[0]} />}
      {showMenu && <div id="menuHolder" className="drawMenu">
        <div id="menuDrawer">
          <div className="p-4 border-bottom">
            <div className='row'>
              <div className="col text-end ">
                <i className="fas fa-times crosss" typeof="btn"
                  onClick={removedrawer}
                ></i>
              </div>
            </div>
          </div>
          <div>
            <p className="nav-menu-item cursor-pointer" onClick={() => productAll()}>All Products</p>
            {catList.map((obj, key: unknown) => (<p id={key as string} className="nav-menu-item cursor-pointer"
              onClick={() => productChoice(key as number)}
            >{obj}</p>))}
          </div>
        </div>
      </div >}
      {showError && <NoProduct />}
      {/* <h1 className="text-3xl font-bold text-red-500 underline text-center">Hello world!</h1>  */}
      {/* <ProductCard aList={catList} /> */}
    </>
  );
}

export default App;