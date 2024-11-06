import React from 'react';
import { useQuery } from 'react-query';
import { getMovie } from '../api';
import { IMovieDetails } from '../types';

interface MovieDetailProps {
    movieId: number | null;
    onClose: () => void;
}

const MovieDetail: React.FC<MovieDetailProps> = ({ movieId, onClose }) => {
    const { data, isLoading, error } = useQuery<IMovieDetails>(['movieDetail', movieId], () => getMovie(movieId!), {
        enabled: !!movieId, // Only fetch if movieId is not null
    });

    if (!movieId) return null; // Don't render if no movie ID

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error loading movie details</div>;
    console.log(data)
    return data ? (
        <div>
            <button onClick={onClose}>Close</button>
            <h2>{data.title}</h2>
            <p>{data.overview}</p>
            {/* Display other detailed movie properties */}
        </div>
    ) : null;
};

export default MovieDetail;
