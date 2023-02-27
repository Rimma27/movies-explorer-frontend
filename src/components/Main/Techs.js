import React from "react";

function Techs() {
    return (
        <>
        <h2 className="techs-title">7 технологий</h2>
        <h3 className="techs-subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</h3>
        <ul className="techs-grid">
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
        </>
    )
}
export default Techs;