import { MoviesSearchForm } from "components/MoviesSearchForm/MoviesSearchForm";
import { SearchMoviesList } from "components/SearchMoviesList/SearchMoviesList";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';



export const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    // const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';


    useEffect(() => {
        const fetchQueryMovie = async () => {
            try {
                const data = await getSearchMovie(query);
                console.log(data);
                setMovies(data.results)
            
            } catch (error) {
                console.log(error);
            }
        }
        if (query) {
            fetchQueryMovie()
        };
    },[query])
    
    const onFormSubmit = (searchQuery) => {
        // if (searchQuery === this.state.searchQuery) {
        //   toast.error('Oops... Something went wrong, repeat your query!')
        // }
        setSearchParams({query: searchQuery });
        setMovies([]);
      }

    return (
        <div>
            <MoviesSearchForm  onSubmit={onFormSubmit} />
            {movies && <SearchMoviesList movies={movies} />}
        </div>
    )
}