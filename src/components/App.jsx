import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("./Layout/Layout"));
const HomePage = lazy(() => import("pages/HomePage/HomePage"));
const MovieDetailsPage = lazy(() => import("pages/MovieDetailsPage/MovieDetailsPage"));
const MoviesPage = lazy(() => import("pages/Movies/MoviesPage"));
const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));
const Cast = lazy(() => import("./Cast/Cast"));
const Reviews = lazy(() => import("./Reviews/Reviews"));


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
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
