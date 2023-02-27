import React from "react";
import { Link } from "react-router-dom";
import arrow from "../../images/arrow.svg";

function Portfolio() {
return(
    <ul className="portfolio">
        <li>
            <Link to="" className="portfolio__link">
                <h2>Статичный сайт</h2>
                <img src={arrow} alt="Стрелка" />
            </Link>
        </li>
        <li>
            <Link to="" className="portfolio__link">
                <h2>Адаптивный сайт</h2>
                <img src={arrow} alt="Стрелка" />
            </Link>
        </li>
        <li>
            <Link to="" className="portfolio__link">
                <h2>Одностраничное приложение</h2>
                <img src={arrow} alt="Стрелка" />
            </Link>
        </li>
    </ul>
)
}
 export default Portfolio;