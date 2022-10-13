import { useState } from "react";

export const MoviesSearchForm = ({ onSubmit }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleChange = e => setSearchQuery(e.currentTarget.value.toLowerCase());  

    const handleSubmit = e => {
    e.preventDefault();

    if (searchQuery.trim() === '') {
      alert('Opps...Try again!');
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    onChange={handleChange}
                    value={searchQuery}
                />
                <button type="submit">Search</button>
            </form>
    )
}