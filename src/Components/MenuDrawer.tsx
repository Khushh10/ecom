import { useEffect } from "react";

const MenuDrawer = (props: any, menuArrray: Array<string>) => {
    return (
        <div id="menuHolder" className="drawMenu">
            <div id="menuDrawer">
                <div className="p-4 border-bottom">
                    <div className='row'>
                        <div className="col text-end ">
                            <i className="fas fa-times crosss" typeof="btn"
                                onClick={props.removedrawer}
                            ></i>
                        </div>
                    </div>
                </div>
                <div>
                    <a href="/" className="nav-menu-item">All Products</a>
                    {/* {catList.map((data) => (<a href="/" className="nav-menu-item"
                    // onClick="dataDisplay()"
                    >{data}</a>))} */}
                </div>
            </div>
        </div >
    );
};
export default MenuDrawer;