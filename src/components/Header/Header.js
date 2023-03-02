import React from "react";
import { NavLink } from "react-router-dom";
import logo from '../../images/logo.svg';
import account from '../../images/account.jpg';

function Header() {
    return (
        <header className="header">
            <img img className="header__logo" src={logo} alt="Логотип" />
            <nav className="menu">
                <NavLink to="/movies" className="menu__films">Фильмы</NavLink>
                <NavLink to="/saved-movies" className="menu__films">Сохранённые фильмы</NavLink>
            </nav>
            <div className="account">
                <h2 className="account__text">Аккаунт</h2>
                <img className="account__img" src={account} alt="Аккаунт" />
            </div>
        </header>
    )
}

export default Header;