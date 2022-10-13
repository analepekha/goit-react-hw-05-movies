import { TrendyMoviesList } from 'components/TrendyMoviesList/TrendyMoviesList';
import { useState, useEffect } from 'react';
import { getTrendingMovie } from 'services/api';


export const HomePage = () => {
    const [trendyMovies, setTrendyMovies] = useState([]);
    // const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const data = await getTrendingMovie();
                console.log(data.results);
                setTrendyMovies(data.results)
            } catch (error) {
                console.log(error);
            }
        }
        fetchMovies();
    },[setTrendyMovies])

    return (
        <>
            <h2>Trending Movies</h2>
            {trendyMovies && <TrendyMoviesList movies={trendyMovies}/>} 
        </>
    )

}

