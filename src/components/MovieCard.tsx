import React from 'react';
import styled from 'styled-components';
import { makeImagePath } from '../api';
import { motion } from 'framer-motion';
import { IMovie } from '../types';

interface MovieCardProps {
    movie: IMovie;
    onClick: () => void;
    initial?: any;
    animate?: any;
    transition?: any;
}

const Card = styled(motion.div)`
    cursor: pointer;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Poster = styled.img`
    width: 100%;
    display: block;
`;

const MovieCard: React.FC<MovieCardProps> = ({ movie, onClick, initial, animate, transition }) => {
    return (
        <Card
            whileHover={{ scale: 1.05 }}
            onClick={onClick}
            initial={initial}
            animate={animate}
            transition={transition}
        >
            <Poster src={makeImagePath(movie.poster_path)} alt={movie.title} />
        </Card>
    );
};

export default MovieCard;
