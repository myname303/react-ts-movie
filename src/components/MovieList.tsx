import React from 'react';
import styled from 'styled-components';
import { IMovie } from '../types';
import { makeImagePath } from '../api';
import { motion } from 'framer-motion';

interface MovieListProps {
    movies: IMovie[];
    onMovieClick: (id: number) => void;
}

const MovieContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    max-width: 1200px;
    margin: 0 auto;
    padding: 30px;
`;

const MovieItem = styled(motion.div)`
    cursor: pointer;
    border-radius: 15px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #444;
    padding: 15px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    }
`;

const MovieImage = styled(motion.img)`
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-bottom: 15px;
`;

const MovieTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    text-align: center;
    margin: 10px 0;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`;

const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
    return (
        <MovieContainer
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: 0.3, // Adjusts the delay for sequential animation
                    },
                },
            }}
        >
            {movies.map((movie, index) => (
                <MovieItem
                    key={movie.id}
                    onClick={() => onMovieClick(movie.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.3, duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, y: 20 },
                        visible: { opacity: 1, y: 0 },
                        hover: { scale: 1.05, transition: { type: 'spring', stiffness: 200 } },
                    }}
                    whileHover="hover"
                >
                    {movie.poster_path ? (
                        <MovieImage
                            src={makeImagePath(movie.poster_path)}
                            alt={movie.title}
                        />
                    ) : (
                        <div>No Image Available</div>
                    )}
                    <MovieTitle>{movie.title}</MovieTitle>
                </MovieItem>
            ))}
        </MovieContainer>
    );
};

export default MovieList;
