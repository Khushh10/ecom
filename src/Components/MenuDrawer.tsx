import logo from '../Assets/Images/logo1.png'
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { categoriesRedux } from '../Redux/productsSlice';

const MenuDrawer = () => {
  const categoriesList = useAppSelector(categoriesRedux)
  return (
    <div id="menuHolder" className="drawMenu">
      <div id="menuDrawer">
        <div className="p-3 border-b">
          <div className='flex flex-wrap'>
            <div className="relative flex-grow max-w-full flex-1">
              <a className="flex justify-center items-center" href="http://localhost:3000">
                <img src={logo} alt="Logo" height="90%" width="100%" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <NavLink className={'menu-drawer'} to="/" >
            All Products</NavLink>
          {categoriesList.map((obj) => (
            <NavLink className={'menu-drawer'} to={obj.replace(/\s/, '-')} >
              {obj.toUpperCase()}
            </NavLink>
          ))}
        </div>
      </div>
    </div >
  );
}

export default MenuDrawer;
