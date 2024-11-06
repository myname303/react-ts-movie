import React, { useState } from 'react';
import { useQuery } from 'react-query';
import { getPopular, getMovie } from '../api';
import MovieList from '../components/MovieList';
import NavBar from '../components/NavBar';
import Modal from '../components/Modal';
import { IMovie, IMovieDetails } from '../types';
import styled from "styled-components";

const Title = styled.h1`
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  margin: 30px 0;
  font-family: 'Poppins', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const HomePage: React.FC = () => {
    const { data, isLoading } = useQuery<{ results: IMovie[] }>('popularMovies', getPopular);
    const [selectedMovie, setSelectedMovie] = useState<IMovieDetails | null>(null);

    const handleMovieClick = async (id: number) => {
        try {
            const movieDetails = await getMovie(id);
            setSelectedMovie(movieDetails);
            console.log(movieDetails);
        } catch (error) {
            console.error('Failed to fetch movie details:', error);
        }
    };

    const handleCloseModal = () => {
        setSelectedMovie(null);
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <NavBar />
            <Title>Popular Movies</Title>
            <MovieList movies={data?.results || []} onMovieClick={handleMovieClick} />
            {selectedMovie && (
                <Modal movie={selectedMovie} onClose={handleCloseModal} />
            )}
        </div>
    );
};

export default HomePage;
