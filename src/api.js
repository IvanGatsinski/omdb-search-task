const API_KEY = "apikey=c04f12e7";
const BASE_URL = `http://www.omdbapi.com/?${API_KEY}`;

export const fetchMovies = async (query) => {
  const response = await fetch(`${BASE_URL}&s=${query}`);
  const { Search } = await response.json();
  return Search;
};

export const fetchMovieById = async (query) => {
  const response = await fetch(`${BASE_URL}&i=${query}`);
  const movie = await response.json();
  return movie;
};
