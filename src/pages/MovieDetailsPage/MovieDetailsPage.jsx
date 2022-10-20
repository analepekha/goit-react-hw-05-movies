import { useState, useEffect } from "react";
import { NavLink, Outlet, useParams, useNavigate, useLocation } from "react-router-dom";
import { getMovieDetails } from 'services/api';
import { Loader } from 'components/Loader/Loader';


const IMG_URL = 'https://image.tmdb.org/t/p/w500/';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

const MovieDetailsPage = () => {
    const [movie, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('idle');
   
    const { id } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from || "/movies";
    // console.log(location);
    console.log(movie);

     useEffect(() => {
        const fetchMoviesDetails = async () => {
        setLoading(true);

      try {
        setStatus(Status.PENDING)
          const data = await getMovieDetails(id);
          console.log(data);

        setStatus(Status.RESOLVED);
          setMovies(data);
          console.log(data);
      } catch (error) {
        console.log(error);
        setStatus(Status.REJECTED);
      } finally {
        setLoading(false);
      }
    };
    fetchMoviesDetails();
  }, [id]);
    

    const goBack = () => navigate(from);
    const isCastPage = location.pathname.includes('cast');
    const isReviewsPage = location.pathname.includes('reviews');

    const catsLink = isCastPage ? `/movies/${id}` : `/movies/${id}/cast`;
    const reviewsLink = isReviewsPage ? `/movies/${id}` : `/movies/${id}/reviews`;

    return (
        <>
            {status === Status.PENDING && loading && <Loader />}
            {status === Status.REJECTED && <p>Oops, something went wrong... Reload the page</p>}

            {movie && (
                <div>
                    <button onClick={goBack}>Go back</button>
                    <div>
                    <img src={`${IMG_URL}${movie.poster_path}`} alt={movie.title} />
                    <h1>{movie.title} ({movie.release_date.slice(0,4)})</h1>
                    <p>User score: {movie.vote_average.toFixed(1)}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    <p>{movie.genres.map(({name})=>name).join(', ')}</p>
                    </div>
                    <p>Additional information</p>
                    <ul>
                        <li>
                            <NavLink state={{ from }} to={catsLink}>Cast</NavLink>
                        </li>
                        <li>
                            <NavLink  state={{ from }} to={reviewsLink}>Reviews</NavLink>
                        </li>
                    </ul>
                          <Outlet />

                </div>
        )}
        </>
    )
}

export default MovieDetailsPage;