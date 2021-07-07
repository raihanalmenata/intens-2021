import React from "react";
import Logo from "./Logo";
import "./Header.less";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="navbar">
                    <Logo />
                    <ul type="square">
                        <li>Products</li>
                        <li>Contact</li>
                        <li>About</li>
                    </ul    >
                </div>
            </div>
        </header>
    )
}

export default Header;