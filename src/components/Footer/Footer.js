import React from 'react';
import { Link } from 'react-router-dom';
import line from '../../images/line.svg';

function Footer() {
    return (
        <footer>
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
            <img src={line} className="footer__line" alt="Линия" />
            <div className="footer__basement">
                <h3 className="footer__copyright">© 2020</h3>
                <div className="footer__links">
                    <Link className="footer__yandex" to="">Яндекс.Практикум</Link>
                    <Link className="footer__github" to="https://github.com/Rimma27">Github</Link>
                </div>
            </div>
        </footer>
    )
};
export default Footer;