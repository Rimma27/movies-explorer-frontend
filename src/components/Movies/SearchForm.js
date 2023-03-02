import React from "react";
import search from '../../images/find.jpg';

function SearchForm() {
    return (
        <>
            <form className="search" placeholder="Фильм">
                <button type="submit" className="search__button">
                    <img src={search} alt="Поиск" />
                </button>
            </form>
        </>
    )
}

export default SearchForm;