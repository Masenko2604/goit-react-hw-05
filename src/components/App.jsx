import { Routes, Route, NavLink } from "react-router-dom";
import clsx from 'clsx';
import HomePages from "path/to/pages/HomePages";
import MovieCast from "path/to/pages/MovieCast";
import MovieReviews from "path/to/pages/MovieReviews";
import MoviesDetailsPage from "path/to/pages/MoviesDetailsPage";
import MoviesPage from "path/to/pages/MoviesPage";
import NotFound from "path/to/pages/NotFound";
import css from './App.module.css';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

export const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>
        <NavLink to="/about" className={buildLinkClass}>
          About
        </NavLink>
        <NavLink to="/products" className={buildLinkClass}>
          Products
        </NavLink>
      </nav>
  
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/movieCast" element={<MovieCast />} />
        <Route path="/movieReviews" element={<MovieReviews />} />
        <Route path="/moviesDetailsPage" element={<MoviesDetailsPage />} />
        <Route path="/MoviesPage" element={<MoviesPage />} />
        <Route path="*" element={<NotFound />} />

      </Routes>
    </div>
  );
};


