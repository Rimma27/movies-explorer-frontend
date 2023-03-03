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
                    onFilmLike={onFilmLike}
                />)
            )}
            <MoviesCard />
            <div className="films__more">Ещё</div>
        </div>
    )
}

export default MoviesCardList;