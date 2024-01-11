import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../Assets/Images/logo1.png'

interface HeaderProps {
    search: () => void;
    defSearch: (event: React.SyntheticEvent) => void;
    setSearchBox: React.Dispatch<React.SetStateAction<string>>;
    data: Array<TProduct>;
}


function Header(props: HeaderProps) {
    const { search, defSearch, setSearchBox } = props;
    return (
        <div className="grid grid-cols-6 gap-4">
            {/* <Header defSearch={defSearch} searchBox={searchBox} search={search} setSearchBox={setSearchBox} data={data} /> */}
            <div className="col-end-7 col-span-3 mt-2">
                <div className="relative flex items-center w-full h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden ">
                    <div className="grid place-items-center h-full w-12 text-red">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={search}>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" color="red" />
                        </svg>
                    </div>
                    <Form onSubmit={defSearch}>
                        <input
                            className="peer h-full w-full outline-none text-sm text-red pr-2 border-red"
                            type="search"
                            id="search"
                            placeholder="Search"
                            onChange={(event) => setSearchBox(event.target.value)}
                            onClick={search}
                            list="prodList"
                        />
                        <datalist id="prodList" >
                            {props.data.map((pItems, key) => (
                                <option value={pItems.title} key={key} />
                            ))}
                        </datalist>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default Header;