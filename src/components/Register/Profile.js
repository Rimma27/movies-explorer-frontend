import React from "react";
import Header from "../Header/Header";

function Profile({setMenuActive}) {
    return (
        <>
            <Header setMenuActive={setMenuActive} />
            <div className="profile">
                <h2 className="profile__title">Привет, Виталий!</h2>
                <form className="profile__form">
                    <label className="profile__label">Имя
                        <input className="profile__input" value="Виталий" placeholder="Имя"></input>
                    </label>
                    <label className="profile__label">E-mail
                        <input className="profile__input" value="pochta@yandex.ru" placeholder="E-mail"></input>
                    </label>
                </form>
                <button type="button" className="profile__button">Редактировать</button>
                <button type="button" className="profile__button profile__button_exit">Выйти из аккаунта</button>
            </div>
        </>
    )
}

export default Profile;