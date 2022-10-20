import { MoviesSearchForm } from "components/MoviesSearchForm/MoviesSearchForm";
import { SearchMoviesList } from "components/SearchMoviesList/SearchMoviesList";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { getSearchMovie } from 'services/api';
import { Loader } from 'components/Loader/Loader';


const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
} 

const MoviesPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(Status.IDLE);

    // const [searchQuery, setSearchQuery] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get('query') ?? '';


    useEffect(() => {
        const fetchQueryMovie = async () => {
                        setLoading(true);

            try {
                setStatus(Status.PENDING);

                const data = await getSearchMovie(query);
                console.log(data);
                setStatus(Status.RESOLVED);
                setMovies(data.results)
            
            } catch (error) {
                console.log(error);
                setStatus(Status.REJECTED);
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
            {status === Status.PENDING && loading && <Loader />}
            {status === Status.REJECTED && <p>Oops, something went wrong... Reload the page</p>}

            <MoviesSearchForm  onSubmit={onFormSubmit} />
            {movies && <SearchMoviesList movies={movies} />}
        </div>
    )
}

export default MoviesPage;