import axios from "axios";

const API_KEY = '688b72699ca330044e2cd0625f24cfe3';
const BASE_URL = 'https://api.themoviedb.org/3/'

export const getTrendingMovie = async () => {
  const response = await axios.get(
    `${BASE_URL}trending/movie/day?api_key=${API_KEY}`
  );
  return response.data;
};

export const getSearchMovie = async (query) => {
    const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${query}`
    );
    return response.data;
}

export const getMovieDetails = async (id) => {
    const response = await axios.get(
        `${BASE_URL}movie/${id}?api_key=${API_KEY}`
    );
    return response.data;
}


// export const getTrending = async (page) => {
//   const response = await axios.get(
//     `${BASE_URL}trending/movie/day?api_key=${API_KEY}&page=${page}`
//   );
//   return response.data;
// };