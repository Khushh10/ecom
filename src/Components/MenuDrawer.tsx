import { useEffect } from 'react';
import logo from '../Assets/Images/logo1.png'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
interface MenuProps {
  catList: string[];
  productChoice: (id: number) => void;
  showSel: string;
  setShowSel: React.Dispatch<React.SetStateAction<string>>;
}

const MenuDrawer = (props: MenuProps) => {
  const { showSel, setShowSel, productChoice, catList } = props
  return (
    <div id="menuHolder" className="drawMenu">
      <div id="menuDrawer">
        <div className="p-3 border-b">
          <div className='flex flex-wrap '>
            <div className="relative flex-grow max-w-full flex-1">
              <a className="flex justify-center items-center" href="http://localhost:3000">
                <img src={logo} alt="Logo" height="90%" width="100%" />
              </a>
            </div>
          </div>
        </div>
        <div>
          <Link to="/">
            <p className={`nav-menu-item cursor-pointer ${showSel === 'ALL PRODUCTS' ? 'active' : ''}`}
              onClick={() => { setShowSel('ALL PRODUCTS') }}
            >All Products</p></Link>
          {catList.map((obj, key) => (
            <Link to={obj.replace(/\s/g, '-')}>
              <p key={key} className={`nav-menu-item cursor-pointer ${showSel === obj ? 'active' : ''}`}
                onClick={() => { productChoice(key); setShowSel(obj); }}>
                {obj.toUpperCase()}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;
