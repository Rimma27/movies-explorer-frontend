import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import menu from '../../images/icon_menu.svg';

function Header() {
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1280;
    React.useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    if (width >= breakpoint) {
        return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип" />
                <nav className="menu">
                    <NavLink to="/movies" className={({ isActive }) => `${isActive ? "menu__films menu__films_active" : "menu__films"}`}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className="menu__films">Сохранённые фильмы</NavLink>
                </nav>
                <div className="account">
                    <h2 className="account__text">Аккаунт</h2>
                    <img className="account__img" src={account} alt="Аккаунт" />
                </div>
                <Outlet />
            </header>
        )
    }
    else {
        return (
            <header className="header">
                <img className="header__logo" src={logo} alt="Логотип" />
                <button className="header__burger">
                    <img src={menu} alt="Меню" />
                </button>
                <Outlet />
            </header>
        )
    }
}

export default Header;