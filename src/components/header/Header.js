import React, { useEffect } from "react";
import { RiSearch2Line } from 'react-icons/ri';
import { AiOutlineUser, AiOutlineShoppingCart } from 'react-icons/ai';

const Header = (props) => {

    useEffect(() => { }, [props])


    return (
        <header className="App-header">
            <div
                className="header-container"
            >
                <div className="logo-div">
                    <img src="https://via.placeholder.com/185x58" alt="" />
                </div>
                <div className="search-bar-div">
                    <input type="text" className="header-search-bar" placeholder="¿Qué estás buscando?" />
                    <RiSearch2Line className="search-icon" />
                </div>
                <div className="right-div">
                    <div className="login-div">
                        <AiOutlineUser className="login-icon" />
                        <p className="login-label">Mi cuenta</p>
                    </div>
                    <div className="minicart-div">
                        <AiOutlineShoppingCart className="cart-icon" />
                        {localStorage.getItem('cart')
                            ? <p className="minicart-item">{localStorage.getItem('cart')}</p>
                            : null}
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header;