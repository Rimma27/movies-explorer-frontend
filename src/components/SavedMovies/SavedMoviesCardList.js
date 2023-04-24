import React from "react";
import { savedFilms } from "../../utils/constans";
import MoviesCard from "../Movies/MoviesCard";

function SavedMoviesCardList() {
    return (
        <div className="films">
            {savedFilms.map((film) => (
                <MoviesCard
                    film={film}
                    name={film.name}
                    image={film.image}
                    duration={film.duration}
                    like={film.like}
                />)
            )}
        </div>
    )
}

export default SavedMoviesCardList;