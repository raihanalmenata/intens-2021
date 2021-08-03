// import { Link } from 'react-router-dom';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Menu.less";

const Menu = () => {
    return (
        <div className="Menu">
            <ul>
                <Link to="/product"><li> Products </li></Link>
                <a href="#contact"><li> Contact </li></a>
                <a href="#about"><li> About </li></a>
            </ul>
        </div>
    )
}

export default Menu;