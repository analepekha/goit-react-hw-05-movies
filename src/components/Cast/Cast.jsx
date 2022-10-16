import { useEffect } from 'react';
import { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { getMovieCast } from 'services/api';
import { CastItem } from './CastItem';


export const Cast = () => {
    const [cast, setCast] = useState(null);

    const { id } = useParams();
    const navigate = useNavigate();



    useEffect(() => {
        const fetchCast = async () => {
            if (!id) {
        return;
      }
      try {
        const data = await getMovieCast(id);
        setCast(data);
      } catch (error) {
          console.log(error);
      } finally {
      }
    };
    fetchCast();
    }, [id])

    console.log(cast);
    

    return (
        <ul>
            {cast && <CastItem cast={cast.cast}/>}
        </ul>
    )
    
  };

    