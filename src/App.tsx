import './App.css';
import instance from './Services/instance';
import bannerD from './Assets/Images/bannerrrr.png';
import logo from './Assets/Images/logo1.png'
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState<{ title: string, price: string, description: string, image: string }[]>([]);
  const [searchh, setSearch] = useState('');
  const allData = async () => {
    try {
      const res = await instance.get<{ title: string, price: string, description: string, image: string }[]>('');
      console.log(res.data);
      setData(res.data);
    }
    catch (error) {
      console.log(error);
    }
  }

  const search = async () => {
    let filter = data.filter((item) => item.title.includes(searchh));
    setData(filter);
  }

  useEffect(() => { allData() }, []);

  useEffect(() => {
    if(searchh === ''){
      allData();
    }

  }, [searchh])

  return (
    <>
      <div className="bg-white text-white border border-light-subtle shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
        <div className="flexMain">
          <div className="flex1">
            <button className="whiteLink siteLink p-3"
            // onClick={() => menuToggle()}
            ><i className="fas fa-bars me-2"></i>
              MENU</button>
          </div>
          <div className="flex2 text-center">
            <div><a href="http://localhost:3000"><img src={logo} alt="Logo"
              height="50%" width="50%" /></a></div>
          </div>
          <div className="flex1">
            <div className="col text-start">
              <form className="search-box">
                <i className="fa-solid fa-magnifying-glass searchh"
                  onClick={search}
                ></i>
                <input style={{ verticalAlign: '4px', width: '80%' }} type="search" name="focus" placeholder="Search"
                  id="search-input" list="textt" onChange={event => setSearch(event.target.value)} />
                <datalist id="textt">
                </datalist>
              </form>
            </div>
          </div>
        </div>
      </div >
      <div id="menuHolder">
        <div id="menuDrawer">
          <div className="p-4 border-bottom">
            <div className='row'>
              <div className="col text-end ">
                <i className="fas fa-times crosss" role="btn"
                // onClick="menuToggle()"
                ></i>
              </div>
            </div>
          </div>
          <div>
            <a href="/" className="nav-menu-item"
            // onClick="dataDisplay()"
            ><i className="fas fa-home me-3"></i>All
              Products</a>
            <a href="/" className="nav-menu-item"
            // onClick="maleClothes()"
            ><i className="fa fa-male me-3"
            // onClick="maleClothes()"
            ></i>Male Clothing</a>
            <a href="/" className="nav-menu-item"
            // onClick="femaleClothes()"
            ><i className="fa fa-female me-3"></i>Female
              Clothing</a>
            <a href="/" className="nav-menu-item"
            // onClick="Electricc()"
            ><i
              className="fa fa-microchip me-3"></i>Electronics</a>
            <a href="/" className="nav-menu-item"
            // onClick="Jewellery()"
            ><i className="fa fa-diamond me-3"></i>Jewelery</a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          <div className="col-md-12 mt-4">
            <div className="container" id="banner">
              <img src={bannerD} alt="Banner Dikh Raha Hai" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>

      <div className="container" style={{ justifyContent: 'center' }}>
        <article className="post" style={{ padding: '20px' }}>
          <div className="col-md-12 align-content-center">
            <div className="d-flex row" id="valuess">
              {data.map((pItems) => (
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex">
                  <div className="card card-style w-100 my-2 center shadow">
                    <div className="my-2">
                      <img src={pItems.image} className="img-fluid imagee card-img-top" alt='banner img' />
                    </div>
                    <div className="justifyy card-body d-flex flex-column text-center">
                      <p className="card-text" style={{ overflow: 'hidden', height: '24px', fontSize: 'medium', }}><b>{pItems.title}</b></p>
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
    </>
  );
}

export default App;
