import React from "react";
import Header from "../Header/Header";
import SearchForm from "./SearchForm";
import MoviesCardList from "./MoviesCardList";
import Footer from "../Footer/Footer";

function Movies({setMenuActive}) {
    return (
        <>
            <Header setMenuActive={setMenuActive} />
            <SearchForm />
            <MoviesCardList />
            <Footer />
        </>
    )
}

export default Movies;