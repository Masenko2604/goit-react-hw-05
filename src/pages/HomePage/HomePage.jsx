import { useEffect, useState } from 'react';
import MovieList from '../../components/MovieList/MovieList';
import { fetchTrendingMovies } from '../../services/api';
const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fn = async () => {
      const result = await fetchTrendingMovies();
      setMovies(result.results);
    };

    fn();
  }, []);
  return <MovieList movies={movies}></MovieList>;
};

export default HomePage;
