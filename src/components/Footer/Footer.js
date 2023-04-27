import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
           
                <div className="footer__links">
                    <Link className="footer__link" to="https://practicum.yandex.ru/">Яндекс.Практикум</Link>
                    <Link className="footer__link" to="https://github.com/Rimma27">Github</Link>
                </div>
                <h3 className="footer__copyright">© 2020</h3>
          
        </footer>
    )
};
export default Footer;