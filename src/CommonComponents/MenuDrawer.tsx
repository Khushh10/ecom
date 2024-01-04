
import { useState, useEffect } from "react";
import instance from "../Services/instance";

const MenuDrawer = (props: any) => {
    const [data, setData] = useState<{}[]>([]);

    const product = async () => {
        try {
            const res = await instance.get<{}[]>(`/categories`);
            console.log("Category", res.data);
            setData(res.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => { product() }, [])
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
                    {data.map(() => (<a href="/" className="nav-menu-item"
                    // onClick="dataDisplay()"
                    >{}</a>))}
                </div>
            </div>
        </div >
    );
}
export default MenuDrawer;