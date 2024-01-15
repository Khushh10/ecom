import React from "react";
import { Outlet } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
interface LayoutProps {
    catList: Array<string>;
    productChoice: (id: number) => void;
    showSel: string;
    setShowSel: React.Dispatch<React.SetStateAction<string>>;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
}

const Layout = (props: LayoutProps) => {
    const {  catList, productChoice, showSel, setShowSel} = props;
    return (
        <>
            <div className="flex w-full h-screen" >
                <div className="w-1/6 bg-gray-200">
                    <MenuDrawer catList={catList} productChoice={productChoice} showSel={showSel} setShowSel={setShowSel} />
                </div>
                <div className="flex-1 bg-white">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
