import React from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
    return (
        <>
            <h2 className="not-found__title">404</h2>
            <h3 className="not-found__subtitle">Страница не найдена</h3>
            <Link className="button" to="/">Назад</Link>
        </>
    )
}

export default PageNotFound;