import React from "react";
import intensLogo from "../../../assets/img/intens-logo.png";
import "../styles/Logo.less";

const Logo = () => {
    return (
        <div className="logo">
            <img alt="intens-logo" src={intensLogo} />
        </div>
    )
}

export default Logo;