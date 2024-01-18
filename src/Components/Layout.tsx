import { Outlet } from "react-router-dom";
import MenuDrawer from "./MenuDrawer";

const Layout = () => {
    return (
        <>
            <div className="flex w-full h-screen" >
                <div className="w-1/6 bg-gray-200">
                    <MenuDrawer />
                </div>
                <div className="flex-1 bg-white">
                    <Outlet />
                </div>
            </div>
        </>
    );
};

export default Layout;
