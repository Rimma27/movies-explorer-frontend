import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../images/line.svg';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <img src={line} alt="Линия" />
            <h3 className="footer__copyright">© 2020</h3>
            <div className="footer__links">
                <Link to="">Яндекс.Практикум</Link>
                <Link to="https://github.com/Rimma27">Github</Link>
            </div>
        </footer>
    )
};
export default Footer;