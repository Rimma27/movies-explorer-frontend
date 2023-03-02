import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
            <button className="navbar__register">Регистрация
                <Link to='sign-up'></Link>
            </button>
            <button className="navbar__login">Войти
                <Link to='sign-in'></Link>
            </button>
        </div>
    )
}

export default NavBar;