import {ReactNode, useEffect } from "react";

const ProductCard = (aList:ReactNode[]) => {
    useEffect(() => {
        console.log("Dataaaa",aList);
    })
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 d-flex">
            {/* <div className="card card-style w-100 my-2 center shadow">
                <div className="my-2">
                    <img src={pItems.image} className="img-fluid imagee card-img-top" alt='banner img' />
                </div>
                <div className="justifyy card-body d-flex flex-column text-center">
                    <p className="card-text" key={key} style={{ overflow: 'hidden', height: '24px', fontSize: 'medium', }}><b>{pItems.title}</b></p>
                    <h5 className="text-center">${pItems.price}</h5>
                    <p className="card-text" style={{ overflow: 'hidden', height: '75px', fontSize: 'small' }}>{pItems.description}</p>
                </div>
                <a href="#!" className="btn btn-dark card-style cart">Add to cart</a>
                <a href="#!" className="btn btn-light card-style cart my-2"><i className="fas fa-heart fa-lg text-secondary px-1"></i></a>
            </div> */}
        </div>
    );
};

export default ProductCard