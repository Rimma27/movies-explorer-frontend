import React from "react";
import Auth from "../Auth/Auth";

function Register() {
    return (
        <Auth
            headerTitle="Добро пожаловать!"
            issue="Уже зарегистрированы?"
            sign="/signin"
            entry="Войти"
        >
            <label className="auth__label">Имя
                <input className="auth__input"
                    value={"Виталий"}
                    required />
            </label>
            <label className="auth__label">E-mail
                <input className="auth__input"
                    value="pochta@yandex.ru|"
                    required />
            </label>
            <label className="auth__label">Пароль
                <input className="auth__input"
                    type="password"
                    value="••••••••••••••"
                    style={{
                        color: '#EE3465',
                        marginBottom: 10
                    }}
                    required />
                    <h2 className="auth__validation">Что-то пошло не так...</h2>
            </label>
            <button type="submit" className="auth__submit">Зарегистрироваться</button>
        </Auth>
    )
}

export default Register;