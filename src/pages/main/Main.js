import React from "react";
import Home from "./components/home/Home";
import Services from "./components/services/Services";
import Values from "./components/values/Values";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/contact";
import AboutUs from "./components/aboutUs/AboutUs";
import Clients from "./components/clients/Clients"
import Family from "./components/family/Family";

const Main = () => {
    return (
        <>
            <Home />
            <Services />
            <Values />
            <Projects />
            <Contact />
            <AboutUs />
            <Clients />
            <Family />
        </>
    )
}

export default Main;