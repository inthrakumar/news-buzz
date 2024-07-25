import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './app_components/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './context/themeprovider';
import { QueryClient, QueryClientProvider } from 'react-query';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);
const queryclient = new QueryClient();
function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryclient} >
        <RouterProvider router={router} />
      </QueryClientProvider >
    </ThemeProvider >

  );
}

export default App;
