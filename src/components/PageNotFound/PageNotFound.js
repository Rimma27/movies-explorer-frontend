import React from 'react';
import { useNavigate } from 'react-router-dom';

function PageNotFound() {
    const navigate = useNavigate(); 

    function goBack() {
        navigate(-1);
    }
    return (
        <>
            <h2 className="not-found__title">404</h2>
            <h3 className="not-found__subtitle">Страница не найдена</h3>
            <button onClick={goBack} className="button">Назад</button>
        </>
    )
}

export default PageNotFound;