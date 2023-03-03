import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";

function Movies () {
    return(
        <>
        <Header />
        <SearchForm />
        <MoviesCardList />
        </>
    )
}

export default Movies;