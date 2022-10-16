import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from 'services/api';

const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

export const MovieDetailsPage = () => {
    const [movie, setMovies] = useState(null);
        
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();


    useEffect(() => {
        getMovieDetails(id)
            .then(setMovies);
    }, [id]);

    const goBack = () => navigate(-1);
    const isCastPage = location.pathname.includes('cast');
    const isReviewsPage = location.pathname.includes('reviews');

    const catsLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
    const reviewsLink = isReviewsPage ? `/movies/${id}` : `/movies/${id}/reviews`;

    return (
    <>
            {movie && (
                <div>
                    <button onClick={goBack}>Go back</button>
                    <div>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
                    <h1>{movie.title}</h1>
                    <p>User score: {movie.vote_average.toFixed(1)}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p>{movie.genres.map(({name})=>name).join(', ')}</p>
                    </div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <NavLink to={catsLink}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink to={reviewsLink}>Reviews</NavLink>
                        </li>
                    </ul>
                          <Outlet />

                </div>
        )}
        </>
    )
}