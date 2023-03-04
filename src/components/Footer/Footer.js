import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</div>
            <div className="footer__basement">
                <div className="footer__links">
                    <Link className="footer__link" to="">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="https://github.com/Rimma27">Github</Link>
                </div>
                <h3 className="footer__copyright">© 2020</h3>
            </div>
        </footer>
    )
};
export default Footer;