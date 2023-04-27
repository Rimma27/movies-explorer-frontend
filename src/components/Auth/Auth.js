import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.svg";

function Auth({ headerTitle, children, issue, sign, entry }) {
    return (
        <>
            <div className="auth-header">
                <NavLink to="/">
                    <img className="auth__logo" src={logo} alt="Логотип" />
                </NavLink>
                <div className="auth__title">{headerTitle}</div>
            </div>
            <form className="auth__form" noValidate>
                {children}
            </form>

            <div className="register__signin">
                <p className="register__signin-title">{issue}</p>
                <Link to={sign} className="register__login-link">{entry}</Link>
            </div>
            <Outlet />
        </>
    )
}

export default Auth;