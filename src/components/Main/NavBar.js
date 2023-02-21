import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    return (
        <div className="navbar">
            {location.pathname === '/sign-in' &&
                <Link to='sign-up' className="navbar__item">Регистрация</Link>
            }
            {location.pathname === '/sign-up' &&
                <Link to='sign-in' className="navbar__item">Войти</Link>
            }
        </div>
    )
}

export default NavBar;