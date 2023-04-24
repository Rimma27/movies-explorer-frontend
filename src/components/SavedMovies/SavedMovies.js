import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies() {
    return (
        <>
            <Header />
            <SearchForm />
            <SavedMoviesCardList />
            <Footer />
        </>
    )
}

export default SavedMovies;