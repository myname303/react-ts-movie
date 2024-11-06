import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  background-color: #333;
`;

const NavButton = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 18px;
  padding: 10px 20px;
  border: 1px solid white;
  border-radius: 5px;
  &:hover {
    background-color: #555;
  }
`;

const NavBar: React.FC = () => {
    return (
        <Nav>
            <NavButton to="/">Popular Movie</NavButton>
            <NavButton to="/coming-soon">Coming Soon</NavButton>
            <NavButton to="/now-playing">Now Playing</NavButton>
        </Nav>
    );
};

export default NavBar;
