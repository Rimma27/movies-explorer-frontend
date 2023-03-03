import React from "react";
import search from '../../images/find.jpg';
import filter from '../../images/filterON.jpg';

function SearchForm() {
    return (
        <div className="search">
            <form className="search__form" >
                <input className="search__input" placeholder="Фильм"></input>
                <button type="button" className="search__button">
                    <img src={search} alt="Поиск" />
                </button>
            </form>
            <h2 className="search__shortFilms">Короткометражки</h2>
            <button type="button" className="search__filter">
                <img src={filter} alt="Фильтр" />
                </button> 
        </div>
    )
}

export default SearchForm;