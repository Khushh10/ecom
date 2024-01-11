import logo from '../Assets/Images/logo1.png'
import { Link } from 'react-router-dom';
interface MenuProps {
  catList: string[];
  productAll: () => void;
  productChoice: (id: number) => void;
  showSel: string;
  setShowSel: React.Dispatch<React.SetStateAction<string>>;
  selectedItem: string;
  setSelectedItem: React.Dispatch<React.SetStateAction<string>>
}

const MenuDrawer = (props: MenuProps) => {
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
            <p className={`nav-menu-item cursor-pointer ${props.showSel === 'ALL PRODUCTS' ? 'active' : ''}`}
              onClick={() => { props.productAll(); props.setShowSel('ALL PRODUCTS') }}
            >All Products</p></Link>
          {props.catList.map((obj, key) => (
            <Link to={obj.replace(/\s/g, '-')}>
              <p key={key} className={`nav-menu-item cursor-pointer ${props.showSel === obj ? 'active' : console.log(obj)}`}
                onClick={() => { props.productChoice(key); props.setShowSel(obj); }}>
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
