import { Loader } from 'components/Loader/Loader';
import { TrendyMoviesList } from 'components/TrendyMoviesList/TrendyMoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovie } from 'services/api';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
}

const HomePage = () => {
    const [trendyMovies, setTrendyMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(Status.IDLE);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                setStatus(Status.PENDING);
                const data = await getTrendingMovie();
                console.log(data.results);
                setStatus(Status.RESOLVED);
                setTrendyMovies(data.results)
            } catch (error) {
                console.log(error);
                setStatus(Status.REJECTED);
            } finally {
                setLoading(false);
      }
        }
        fetchMovies();
    },[setTrendyMovies])

    return (
        <>
            {status === Status.PENDING && loading && <Loader />}
            {status === Status.REJECTED && <p>Oops, something went wrong... Reload the page</p>}
            <h2>Trending Movies</h2>
            {trendyMovies && <TrendyMoviesList movies={trendyMovies}/>} 
        </>
    )

}

export default HomePage;

