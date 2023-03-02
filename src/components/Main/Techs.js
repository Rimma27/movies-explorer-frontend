import React from "react";

function Techs() {
    return (
        <div className="techs">
            <h2 className="techs_title">7 технологий</h2>
            <h3 className="techs_subtitle">На курсе веб-разработки мы освоили технологии, которые применили <br /> в дипломном проекте.</h3>
            <ul className="techs_grid">
                <li>
                    <h2 className="techs-grid__text">HTML</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">CSS</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">JS</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">React</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">Git</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">Express.js</h2>
                </li>
                <li>
                    <h2 className="techs-grid__text">mongoDB</h2>
                </li>
            </ul>
        </div>
    )
}
export default Techs;