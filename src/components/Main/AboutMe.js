import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.svg";

function AboutMe({ children }) {
    return (
        <>
            <div className="author">
                <h2 className="author__name">Виталий</h2>
                <h3 className="author__about">Фронтенд-разработчик, 30 лет</h3>
                <h4 className="author_description">
                    Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена <br /> 
                    и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С <br /> 
                    2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-<br /> 
                    разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
                </h4>
                <Link to="https://github.com/Rimma27" className="author__github">Github</Link>
                <img className="author__avatar" src={avatar} alt="Мой аватар" />
            </div>
            {children}
        </>
    )
}
export default AboutMe;