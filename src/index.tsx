import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './App.css';
import CubeApp from './components/cube/CubeApp.tsx';
import Home from './components/Home.tsx';
import Questions from './components/questions/Questions.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Container from '@mui/material/Container';
import theme from './theme.ts';
import MaterialUI from './components/MaterialUI.tsx';
import ChakraUI from './components/ChakraUI.tsx';
import Products from './components/products/Products.tsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/cube',
        element: <CubeApp />
    },
    {
        path: '/questions',
        element: <Questions />
    },
    {
        path: '/mui',
        element: <MaterialUI />
    },
    {
        path: '/chakraui',
        element: <ChakraUI />
    },
    {
        path: '/products',
        element: <Products />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container sx={{pt: 2}} maxWidth="md">
                <LinkMenu/>
                <Box sx={{ my: 4 }}>
                    <RouterProvider router={router} />
                </Box>
            </Container>
        </ThemeProvider>
    </React.StrictMode>
);

function LinkMenu() {
    const [linkMenuState, setLinkMenuState] = useState('hidden');

    function handleLinkMenu() {
        const state = linkMenuState === 'hidden' ? 'block' : 'hidden'
        setLinkMenuState(state);
    }
    
    return (
        <div className="w-36 text-center absolute top-0 left-0 z-10">
            <button onClick={handleLinkMenu} className="text-[#f50057] bg-[#1a1a1a] px-5 py-2 rounded-lg">
                X
            </button>
            <div className={"flex flex-col p-2 bg-[#121212] " + linkMenuState}>
                <a
                    href="/"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    Home
                </a>
                <a
                    href="/cube"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    CubeApp
                </a>
                <a
                    href="/questions"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    Questions
                </a>
                <a
                    href="/mui"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    Material UI
                </a>
                <a
                    href="/chakraui"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    Chakra UI
                </a>
                <a
                    href="/products"
                    className="cursor-pointer text-[#f50057] hover:underline"
                >
                    Products
                </a>
            </div>
        </div>
    );
}
