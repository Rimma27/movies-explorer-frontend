import React from "react";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm";
import SavedMoviesCardList from "./SavedMoviesCardList";
import Footer from "../Footer/Footer";

function SavedMovies({setMenuActive}) {
    return (
        <>
            <Header setMenuActive={setMenuActive}/>
            <SearchForm />
            <SavedMoviesCardList />
            <Footer />
        </>
    )
}

export default SavedMovies;