const BASE_URL = "http://www.omdbapi.com";
const API_KEY = "c04f12e7";

export const fetchMovies = async (params) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&s=${params}`);
  const { Search } = await response.json();
  return Search;
};

export const fetchMovieById = async (params) => {
  const response = await fetch(`${BASE_URL}/?apikey=${API_KEY}&i=${params}`);
  const movie = await response.json();
  return movie;
};
