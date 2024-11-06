import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Router from './Router';

// Load Google Fonts in index.html or add a @font-face import if needed
const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Roboto:wght@300;400;500;700&display=swap');

    body {
        margin: 0;
        font-family: 'Poppins', 'Roboto', sans-serif;
        background-color: #1d1d1d;
        color: #fff;
        line-height: 1.6;
    }

    h1, h2, h3, h4, h5, h6 {
        font-family: 'Poppins', sans-serif;
        font-weight: 600;
    }

    p, span, div, a, li {
        font-family: 'Roboto', sans-serif;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
