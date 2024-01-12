import logo from '../Assets/Images/logo1.png';
import { Link } from 'react-router-dom';
const SampleMenu = () => {
    return (
        <div id="menuHolder" className="drawMenu">
            <div id="menuDrawer">
                <div className="p-3 border-b">
                    <div className='flex flex-wrap '>
                        <div className="relative flex-grow max-w-full flex-1 px-4 text-end ">
                            <a className="flex justify-center items-center" href="http://localhost:3000">
                                <img src={logo} alt="Logo" height="90%" width="100%" />
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                <Link to='/'><p className="nav-menu-item cursor-pointer" >All Products</p></Link>
                <Link to='/men'><p className="nav-menu-item cursor-pointer" >MEN</p></Link>
                <Link to='/women'><p className="nav-menu-item cursor-pointer" >Women</p></Link>
                <Link to='/electronics'><p className="nav-menu-item cursor-pointer" >Electronics</p></Link>
                <Link to='/jewelery'><p className="nav-menu-item cursor-pointer" >Jewelery</p></Link>

                </div>
            </div>
        </div>
    );
}

export default SampleMenu;