import PropTypes from 'prop-types';
import { useState } from "react";
import { Form, Input, BtnSearch, Icon} from './MoviesSearchForm.styled';

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
        <Form onSubmit={handleSubmit}>
                <Input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search movie"
                    onChange={handleChange}
                    value={searchQuery}
                />
            <BtnSearch type="submit">
                <Icon/></BtnSearch>
        </Form>
    )
}


MoviesSearchForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
}