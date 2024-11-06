import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { IMovieDetails } from '../types';
import { makeImagePath } from '../api';

interface ModalProps {
    movie: IMovieDetails;
    onClose: () => void;
}

const Overlay = styled(motion.div)`
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
`;

const ModalContent = styled(motion.div)`
    background: #222;
    border-radius: 15px;
    padding: 20px;
    max-width: 800px;
    width: 100%;
    max-height: 90vh; /* Limit the height of the modal */
    overflow-y: auto; /* Enable vertical scrolling */
    color: white;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: auto;
    border-radius: 10px 10px 0 0;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: transparent;
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    padding: 5px;

    &:hover {
        color: #ff5555;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;

const Section = styled.div`
    margin-top: 20px;
`;

const Tagline = styled.h4`
    font-style: italic;
    color: #ffcc00;
    margin-bottom: 10px;
`;

const DetailList = styled.ul`
    margin: 10px 0;
    padding-left: 20px;
    list-style-type: square;
`;

const DetailItem = styled.li`
    margin-bottom: 5px;
`;

const Modal: React.FC<ModalProps> = ({ movie, onClose }) => {
    return (
        <Overlay onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
                <CloseButton onClick={onClose}>
                    <svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path clipRule="evenodd" fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16ZM8.28 7.22a.75.75 0 0 0-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 1 0 1.06 1.06L10 11.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L11.06 10l1.72-1.72a.75.75 0 0 0-1.06-1.06L10 8.94 8.28 7.22Z"></path>
                    </svg>
                </CloseButton>
                <Image src={makeImagePath(movie.backdrop_path || movie.poster_path)} alt={movie.title} />
                <h2>{movie.title}</h2>
                {movie.tagline && <Tagline>"{movie.tagline}"</Tagline>}
                <p><strong>Rating:</strong> {movie.vote_average ? `${movie.vote_average.toFixed(1)} / 10` : 'No rating available'} ({movie.vote_count} votes)</p>
                <Section>
                    <h4>Overview:</h4>
                    <p>{movie.overview}</p>
                </Section>
                <Section>
                    <h4>Details:</h4>
                    <DetailList>
                        <DetailItem><strong>Release Date:</strong> {movie.release_date}</DetailItem>
                        <DetailItem><strong>Status:</strong> {movie.status}</DetailItem>
                        <DetailItem><strong>Runtime:</strong> {movie.runtime ? `${movie.runtime} minutes` : 'N/A'}</DetailItem>
                        <DetailItem><strong>Original Language:</strong> {movie.original_language.toUpperCase()}</DetailItem>
                        {movie.genres.length > 0 && (
                            <DetailItem><strong>Genres:</strong> {movie.genres.map(genre => genre.name).join(', ')}</DetailItem>
                        )}
                        <DetailItem><strong>Budget:</strong> ${movie.budget.toLocaleString()}</DetailItem>
                        <DetailItem><strong>Revenue:</strong> ${movie.revenue.toLocaleString()}</DetailItem>
                    </DetailList>
                </Section>
                {movie.production_companies.length > 0 && (
                    <Section>
                        <h4>Production Companies:</h4>
                        <DetailList>
                            {movie.production_companies.map(company => (
                                <DetailItem key={company.id}>{company.name} ({company.origin_country})</DetailItem>
                            ))}
                        </DetailList>
                    </Section>
                )}
                {movie.spoken_languages.length > 0 && (
                    <Section>
                        <h4>Spoken Languages:</h4>
                        <p>{movie.spoken_languages.map(lang => lang.name).join(', ')}</p>
                    </Section>
                )}
            </ModalContent>
        </Overlay>
    );
};

export default Modal;
