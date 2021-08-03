import React from "react";
import { Content } from "antd/lib/layout/layout";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = (Children) => {
    return (props) => (
        <>
            <Header />
            <Content>
                <Children {...props} />
            </Content>
            <Footer />
        </>
    );
};

export default Layout;