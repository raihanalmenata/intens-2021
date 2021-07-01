import React from "react";
import Logo from "./Logo";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <Logo />
                    <ul>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contacts</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;