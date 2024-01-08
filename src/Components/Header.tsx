import React from 'react';
import { Button, Form } from 'react-bootstrap';
import logo from '../Assets/Images/logo1.png'

interface HeaderProps {
    menuToggle: () => void;
    search: () => void;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    data: Array<TProduct>;
}

function Header(props: HeaderProps) {
    return (
        <div className="bg-white text-white border border-light-subtle shadow-sm" style={{ position: 'sticky', top: 0, zIndex: 2 }}>
            <div className="flexMain">
                <div className="flex1">
                    <Button className="whiteLink siteLink p-6" onClick={props.menuToggle} style={{ backgroundColor: 'white' }}>
                        <i className="fas fa-bars me-2"></i>
                        MENU
                    </Button>
                </div>
                <div className="flex2 text-center">
                    <div className="flex justify-center items-center">
                        <a className="flex justify-center items-center" href="http://localhost:3000">
                            <img src={logo} alt="Logo" height="90%" width="90%" />
                        </a>
                    </div>
                </div>
                <div className="flex1">
                    <div className="relative flex-grow max-w-full flex-1 px-4 text-start">
                        <Form className="search-box">
                            <i className="fa-solid fa-magnifying-glass searchh" onClick={props.search}></i>
                            <input
                                style={{ verticalAlign: '4px', width: '80%' }}
                                type="search"
                                name="focus"
                                placeholder="Search"
                                id="search-input"
                                list="textt"
                                onChange={(event) => props.setSearch(event.target.value)}
                            />
                            <datalist id="textt">
                                {props.data.map((pItems, key) => (
                                    <option value={pItems.title} key={key} />
                                ))}
                            </datalist>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;