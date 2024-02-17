import { Routes, Route, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import css from './App.module.css';
import { Suspense, lazy } from 'react';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};
const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));
const MoviesDetailsPage = lazy(() => import('../pages/MoviesDetailsPage/MoviesDetailsPage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
// const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const App = () => {
  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={buildLinkClass}>
          Home
        </NavLink>

        <NavLink to="/movies" className={buildLinkClass}>
          Movies
        </NavLink>
      </nav>
      <Suspense>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
            <Route path="/cast" element={<MovieCast />} />
            <Route path="/reviews" element={<MovieReviews />} />
          </Route> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>{' '}
      </Suspense>
    </div>
  );
};
export default App;
