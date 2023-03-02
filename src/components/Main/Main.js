import React from "react";
import Promo from "./Promo";
import Block from "./Block";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Footer from "../Footer/Footer";

function Main() {
    return (
        <div className="main">
            <Promo />
            <Block name="О проекте">
                <AboutProject />
            </Block>
            <Block style={{ background: '#F5F5F5' }} name="Технологии">
                <Techs />
            </Block>
            <Block name="Студент">
                <AboutMe>
                    <Portfolio />
                </AboutMe>
            </Block>
            <Footer />
        </div>
    )
}

export default Main;