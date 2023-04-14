import React from "react";
import Auth from "../Auth/Auth";

function Login() {
    return (
        <Auth
            headerTitle="Рады видеть!"
            issue="Ещё не зарегистрированы?"
            sign="/signup"
            entry="Регистрация">

            <label className="auth__label">E-mail
                <input className="auth__input"
                    value="pochta@yandex.ru|"
                    required />
            </label>
            <label className="auth__label">Пароль
                <input className="auth__input"
                    type="password"
                    value=""
                    required />
            </label>
            <button type="submit" className="auth__submit">Войти</button>
        </Auth>
    )
}

export default Login;