import React from "react";
import { Content } from "antd/lib/layout/layout";
import Header from "../header/Header";
import Home from "../../pages/home/Home";

const Layout = () => {
    return (
        <>
            <Header />
            <Content>
                <Home />
            </Content>
        </>
    );
};

export default Layout;