import React from 'react';
import logo from '../../images/logo.svg';
import promoLogo from '../../images/promo_logo.svg';
import NavBar from './NavBar';
import { Link, Outlet } from 'react-router-dom';

function Promo() {
    return (
        <>
            <header className="promo-header">
                <img className="promo-header__logo" src={logo} alt="Логотип" />
                <NavBar />
            </header>
            <main className="promo">
                <img className="promo__logo" src={promoLogo} alt="Всемирная сеть" />
                <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
                <p className="promo__subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
                    <Link to="#aboutProject" className="promo__link">Узнать больше</Link>
                <Outlet />
            </main>
        </>
    )
}

export default Promo;