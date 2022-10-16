import { HomePage } from "pages/HomePage/HomePage";
import { MoviesPage } from "pages/Movies/MoviesPage";
import { MovieDetailsPage } from "pages/MovieDetailsPage/MovieDetailsPage";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Layout/>} >
          <Route index element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:id" element={<MovieDetailsPage />} >
            <Route path="cast" element={ <Cast/>} />
            <Route path="reviews" element={<Reviews/> } /> */
          </Route> 
        </Route>
        <Route path="*" element={<HomePage />} />
      </Routes>

    </div>
  );
};
