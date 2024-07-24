import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './app_components/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './context/themeprovider';
import { Provider } from 'react-redux';
import { store } from "./redux/store"
import { Store } from 'lucide-react';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {
  return (

    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Provider store={store}>      <RouterProvider router={router} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
