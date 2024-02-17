import axios from "axios"
const baseUrl = 'https://api.themoviedb.org/3';

const API_key = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxY2Q0N2Y0MmM5NDBjNTA2MWI3OWFmY2E0MTdmNDdlNCIsInN1YiI6IjY1Y2QxYzhjYTIxN2MwMDE2M2JjYzBiYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cCOY5HXJiNIhLowP2N4-JT88ep-WX5e5-zCi0vvN27s"

const options = {
  headers: {	
    Authorization: `Bearer ${API_key}`
  }
};

export const fetchTrendingMovies =  async()  => {
  const { data } = await axios(`${baseUrl}/trending/movie/day`, options) 
  return data;
}
