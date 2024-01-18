import { Form } from 'react-bootstrap';
import { itemsCart } from '../functions';
import { useNavigate } from 'react-router';
import React from 'react';
import { useAppSelector } from '../store/hooks';

interface HeaderProps {
    search: () => void;
    defSearch: (event: React.SyntheticEvent) => void;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
    data: Array<TProduct>;
}

function Header(props: HeaderProps) {
    const { search, defSearch, setSearchBox } = props
    const navigate = useNavigate()
    const cartNum = useAppSelector((state) => state.cart.items)
    function addToCart() {
        navigate('/cart');
    }

    return (
        <>
            <Form className="my-3" onSubmit={defSearch}>
                <div>
                    <div className="relative w-full min-w-[200px] h-10">
                        <div className="absolute grid w-5 h-5 place-items-center text-red-500 top-2/4 right-2 -translate-y-2/4">
                            <i className="fas fa-search" aria-hidden="true" onClick={search}></i>
                        </div>
                        <input
                            type='search'
                            className="peer w-full h-full bg-transparent text-red-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-red-200 placeholder-shown:border-t-red-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-5 py-2.5 rounded-[7px] !pr-9 border-red-200 focus:border-gray-900"
                            placeholder=" "
                            list="prodList"
                            onChange={(event) => setSearchBox(event.target.value)}
                        />

                        <datalist id="prodList" >
                            {props.data.map((pItems, key) => (
                                <option onClick={search} value={pItems.title} key={key} />
                            ))}
                        </datalist>

                        <label
                            className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-red-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-red-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-red-500 peer-focus:text-red-900 before:border-red-200 peer-focus:before:!border-red-900 after:border-red-200 peer-focus:after:!border-red-900">
                            Search
                        </label>


                    </div>

                </div>
            </Form>
            <div>
                <button onClick={() => { addToCart() }} type="button" className="inline-flex items-center px-5 py-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mt-3 mx-3">
                    <i className="fa-solid fa-cart-shopping fa-lg"></i>
                    <span className="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs font-semibold text-red-800 bg-red-200 rounded-full">
                        {cartNum}
                    </span>
                </button>
            </div>
        </>
    );
}

export default Header;