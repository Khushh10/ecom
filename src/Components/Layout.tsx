import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";
import Header from "./Header";
import { Form } from "react-bootstrap";
interface LayoutProps {
    catList: string[];
    productAll: () => void;
    productChoice: (id: number) => void;
    showSel: string;
    setShowSel: React.Dispatch<React.SetStateAction<string>>;
    selectedItem: string;
    setSelectedItem: React.Dispatch<React.SetStateAction<string>>;
    data: Array<TProduct>;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
    search: () => void;
    defSearch: (event: React.SyntheticEvent) => void;
    searchBox: string;
    showHeader: boolean;
    setShowHeader: React.Dispatch<React.SetStateAction<boolean>>;
}

const Layout = (props: LayoutProps) => {
    const { defSearch, showHeader, setShowHeader, searchBox, search, setSearchBox, data, catList, productAll, productChoice, showSel, setShowSel, selectedItem, setSelectedItem } = props;
    return (
        <>
            <div className="flex w-full h-screen" >
                <div className="w-1/6 bg-gray-200">
                    <MenuDrawer catList={catList} productAll={productAll} productChoice={productChoice} showSel={showSel} setShowSel={setShowSel} selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
                </div>
                <div className="flex-1 bg-white">
                    {showHeader && <Header search={search} defSearch={defSearch} setSearchBox={setSearchBox} data={data} />}
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
