import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Register/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import PageNotFound from '../PageNotFound/PageNotFound';
import Menu from '../Menu/Menu';

function App() {
  const [menuActive, setMenuActive] =useState(false);
  const handleMenuActive = () => {
    setMenuActive(true);
  }
  // const [width, setWidth] = React.useState(window.innerWidth);
  // const breakpoint = 768;
  // React.useEffect(() => {
  //     const handleResizeWindow = () => setWidth(window.innerWidth);
  //     window.addEventListener("resize", handleResizeWindow);
  //     return () => {
  //         window.removeEventListener("resize", handleResizeWindow);
  //     };
  // }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies setMenuActive={handleMenuActive}/>} />
        <Route path="/saved-movies" element={<SavedMovies setMenuActive={handleMenuActive}/>} />
        <Route path="/profile" element={<Profile setMenuActive={handleMenuActive}/>} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Menu active={menuActive} setActive={setMenuActive}>
        {/* {(width >= breakpoint) ? (setMenuActive(false)) : (setMenuActive(true)) } */}
      </Menu>
    </div>
  );
}
export default App;
