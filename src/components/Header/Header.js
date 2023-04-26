import React from "react";
import { NavLink, Outlet, Link } from "react-router-dom";
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import menu from '../../images/icon_menu.svg';

function Header({ setMenuActive }) {
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
                <nav className="nav">
                    <NavLink to="/movies" className={({ isActive }) => `${isActive ? "nav__films nav__films_active" : "nav__films"}`}>Фильмы</NavLink>
                    <NavLink to="/saved-movies" className={({ isActive }) => `${isActive ? "nav__films nav__films_active" : "nav__films"}`}>Сохранённые фильмы</NavLink>
                </nav>
                <Link to="/profile" className="account">
                    <h2 className="account__text">Аккаунт</h2>
                    <img className="account__img" src={account} alt="Аккаунт" />
                </Link>
                <Outlet />
            </header>
        )
    }
    else {
        return (
            <>
                <header className="header">
                    <img className="header__logo" src={logo} alt="Логотип" />
                        <button type="button" className="header__burger" onClick={setMenuActive}>
                            <img src={menu} alt="Меню" />
                        </button>
                    <Outlet />
                </header>

            </>
        )
    }
}

export default Header;