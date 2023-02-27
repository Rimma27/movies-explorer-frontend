import React from "react";
import Promo from "./Promo";
import Block from "./Block";
import AboutProject from "./AboutProject";
import Techs from "./Techs";
import AboutMe from "./AboutMe";
import Footer from "../Footer/Footer";

function Main() {
return(
    <div className="main">
    <Promo />
    <Block component={AboutProject} />
    <Block component={Techs} />
    <Block component={AboutMe} />
    <Footer />
    </div>
)
}

 export default Main;