import React from "react";
import search from '../../images/find.jpg';
import filter from '../../images/filterON.jpg';

function SearchForm() {
    return (
        <div className="search">
            <form className="search__form" placeholder="Фильм">
                <button type="submit" className="search__button">
                    <img src={search} alt="Поиск" />
                </button>
            </form>
            <h2 className="search__shortFilms">Короткометражки</h2>
            <button className="search__filter">
                <img src={filter} alt="Фильтр" />
                </button> 
        </div>
    )
}

export default SearchForm;