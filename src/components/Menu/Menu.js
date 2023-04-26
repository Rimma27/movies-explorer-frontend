import React from "react";
import { NavLink } from "react-router-dom";
import account from "../../images/account.svg";
import exit from "../../images/close.svg";

function Menu({ active, setActive }) {
    return (
        <div className={active ? "menu menu_active" : "menu"}  >
            <div className="blur" />
            <div className="menu__content">
                <button className="menu__exit" onClick={() => setActive(false)}>
                    <img className="menu__exit-img" src={exit} alt="Закрыть" />
                </button>
                <ul className="menu__ul">
                    <li className="menu__li">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}
                            onClick={() => setActive(false)}>Главная</NavLink>
                    </li>
                    <li className="menu__li">
                        <NavLink to="/movies" className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}
                            onClick={() => setActive(false)}>Фильмы</NavLink>
                    </li>
                    <li className="menu__li">
                        <NavLink to="/saved-movies" className={({ isActive }) => `${isActive ? "menu__link menu__link_active" : "menu__link"}`}
                            onClick={() => setActive(false)}>Сохранённые фильмы</NavLink>
                    </li>
                </ul>
                <NavLink to="/profile" className="menu-account" onClick={() => setActive(false)}>
                    <h2 className="menu-account__text">Аккаунт</h2>
                    <img className="menu-account__img" src={account} alt="Аккаунт" />
                </NavLink>
            </div>
        </div>
    )
}

export default Menu;