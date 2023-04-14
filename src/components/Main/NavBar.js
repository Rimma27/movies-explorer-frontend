import React from "react";
import { Link, Outlet } from "react-router-dom";

function NavBar() {
    return (
        <div className="navbar">
                <Link className="navbar__register" to='signup'>Регистрация</Link>
                <Link className="navbar__login" to='signin'>Войти</Link>
            <Outlet />
        </div>
    )
}

export default NavBar;