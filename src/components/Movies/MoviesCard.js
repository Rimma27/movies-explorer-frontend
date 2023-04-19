import React from "react";

function MoviesCard({ name, duration, like, image }) {
    return (
        <div className="film">
            <img className="film__img" alt="Аватар фильма" src={image} />
            <h2 className="film__name">{name}</h2>
            <h3 className="film__duration">{duration}</h3>
            <button type="button" className={`${like ? "film__like" : "film__like film__like_inactive"}`}>
                <img src={like} alt="Лайк" />
            </button>
        </div>
    )
}

export default MoviesCard;