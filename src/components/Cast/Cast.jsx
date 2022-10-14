import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from "react-router-dom";
import { getMovieCast } from 'services/api';

export const Cast = () => {
    const { id } = useParams();
    const [cast, setCast] = useState(null);

    useEffect(() => {
        getMovieCast(id)
            .then(setCast);
    }, [id])
    console.log(id);
    return (
        <></>
    )
}