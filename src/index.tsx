import React from "react";
import ReactDOM from "react-dom/client";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import "./App.css";
import CubeApp from "./components/cube/CubeApp.tsx";
import Home from "./components/Home.tsx";
import Questions from "./components/questions/Questions.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import Container from '@mui/material/Container';
import theme from "./theme.ts";
import MaterialUI from "./components/MaterialUI.tsx";

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
      }
  ]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{my:4}}>
          <RouterProvider router={router} />
        </Box>
      </Container>
    </ThemeProvider>
  </React.StrictMode>
);
