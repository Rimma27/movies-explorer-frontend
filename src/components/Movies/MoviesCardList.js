import React from "react";
import MoviesCard from "./MoviesCard";
import { films } from "../../utils/constans";

function MoviesCardList({ onFilmLike }) {
    return (
        <div className="films">
            {films.map((film) => (
                <MoviesCard
                    film={film}
                    name={film.name}
                    image={film.image}
                    duration={film.duration}
                    like={film.like}
                />)
            )}
            <button className="films__more">Ещё</button>
        </div>
    )
}

export default MoviesCardList;