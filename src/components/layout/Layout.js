import React from "react";
import { Content } from "antd/lib/layout/layout";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Home from "../../pages/home/Home";
import Services from "../../pages/services/Services";
import Values from "../../pages/values/Values";
import Projects from "../../pages/projects/Projects";
import Contact from "../../pages/contact/contact";
import Family from "../../pages/family/Family";
import Clients from "../../pages/clients/Clients";
import AboutUs from "../../pages/aboutUs/AboutUs";

const Layout = () => {
    return (
        <>
            <Header />
            <Content>
                <Home />
                <Services />
                <Values />
                <Projects />
                <Contact />
                <Family />
                <Clients />
                <AboutUs />
            </Content>
            <Footer />
        </>
    );
};

export default Layout;