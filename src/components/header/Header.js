import React, { useState } from "react";
import { Drawer, Button } from 'antd';
import Logo from "./component/Logo";
import Menu from "./component/Menu";
import IconHome from "../../assets/img/icon-home.png";
import "./styles/Header.less";
import "./styles/Responsive.less";

const Header = () => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <header>
                <div className="container">
                    <div className="navbar">
                        <Logo />
                        <div className="menu-regular">
                            <Menu />
                        </div>
                        <div className="menu-drawer">
                            <Button type="light" onClick={showDrawer}>
                                ☰
                            </Button>
                            <Drawer
                                placement="top"
                                closable={false}
                                onClose={onClose}
                                visible={visible}
                            >
                                <Menu />
                            </Drawer>
                        </div>
                    </div>
                    <img src={IconHome} alt="icon-home" />
                </div>
            </header>
        </>
    )
}

export default Header;