import { useState } from "react";

interface MenuProps {
  catList: string[];
  productAll: () => void;
  productChoice: (id: number) => void;
  removedrawer: () => void;
  showSel: string;
  setShowSel: React.Dispatch<React.SetStateAction<string>>;
}

const MenuDrawer = (props: MenuProps) => {
  return (
    <div id="menuHolder" className="drawMenu">
      <div id="menuDrawer">
        <div className="p-6 border-b">
          <div className='flex flex-wrap '>
            <div className="relative flex-grow max-w-full flex-1 px-4 text-end ">
              <h3>{props.showSel}</h3>
              <i className="fas fa-times crosss" typeof="btn" onClick={props.removedrawer}></i>
            </div>
          </div>
        </div>
        <div>
          <p className="nav-menu-item cursor-pointer" onClick={()=>{props.productAll();props.setShowSel('ALL PRODUCTS')}}>All Products</p>
          {props.catList.map((obj, key) => (
            <p key={key} className="nav-menu-item cursor-pointer" onClick={() => { props.productChoice(key) }}>
              {obj}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MenuDrawer;
