import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function MoviesCard({ film, name, duration, image }) {
    // const currentUser = useContext(CurrentUserContext);
    // const isLiked = film.likes.some(i => i._id === currentUser._id);
    // const filmLikeButtonClassName = (`${isLiked ? 'film__like film__like_active' : 'film__like'}`);

    return (
        <div className="film">
            <h2 className="film__name">{name}</h2>
            <h3 className="film__duration">{duration}</h3>
            <button type="button" className="{filmLikeButtonClassName}"></button>
            <img className="film__img" alt="Аватар фильма" src={image} />
        </div>
    )
}

export default MoviesCard;