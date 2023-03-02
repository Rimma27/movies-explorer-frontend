import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";

function Portfolio() {
    return (
        <>
            <h2 className="portfolio">Портфолио</h2>
            <ul className="portfolio-links">
                <li className="portfolio-li">
                    <Link to="" className="portfolio-link">
                        <h2 className="portfolio-link__title">Статичный сайт</h2>
                        <img src={arrow} alt="Стрелка" />
                    </Link>
                </li>
                <li className="portfolio-li">
                    <Link to="" className="portfolio-link">
                        <h2 className="portfolio-link__title">Адаптивный сайт</h2>
                        <img src={arrow} alt="Стрелка" />
                    </Link>
                </li>
                <li className="portfolio-li">
                    <Link to="" className="portfolio-link">
                        <h2 className="portfolio-link__title">Одностраничное приложение</h2>
                        <img src={arrow} alt="Стрелка" />
                    </Link>
                </li>
            </ul>
        </>
    )
}
export default Portfolio;