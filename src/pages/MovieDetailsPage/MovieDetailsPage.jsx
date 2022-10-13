import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from 'services/api';

export const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovies] = useState(null);

    useEffect(() => {
        getMovieDetails(id)
            .then(setMovies);
    }, [id]);


    return (
    <>
            {movie && (
                <div>
                    <img src={movie.poster_path} alt="" />
                    <h1>{movie.title}</h1>
                    <p>User score: {movie.vote_average}</p>
                    <h2>Overview</h2>
                    <p>{movie.overview}</p>
                    <h2>Genres</h2>
                    {/* {Object.keys(movie.genres).map(({ name, id }) => {
                        <p key={id}>{name}</p>
                    })} */}
                    
                </div>
            
        )}
        </>
    )
}