import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Layout from './app_components/Layout';
import Home from './pages/Home';
import { ThemeProvider } from './context/themeprovider';
import { QueryClient, QueryClientProvider } from 'react-query';
import Entertainment from '@/pages/Entertainment';
import Politics from '@/pages/Politics';
import NewsPage from '@/pages/NewsPage';
import Sports from '@/pages/Sports';
import Tech from '@/pages/Tech';
import Weather from '@/pages/Weather';
import Country from '@/pages/Country'
import { PageContainerStore } from '@/store/page_holder';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="entertainment" element={<Entertainment />} />
      <Route path="politics" element={<Politics />} />
      <Route path="news/:id" element={<NewsPage />} />
      <Route path="sports" element={<Sports />} />
      <Route path="tech" element={<Tech />} />
      <Route path="weather" element={<Weather />} />
      <Route path='country-news/:country_code' element={<Country />} />
    </Route>
  )
);
const queryclient = new QueryClient();
function App() {

  const Refresh_fn = PageContainerStore((state) => state.resetCounters);
  Refresh_fn();
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryClientProvider client={queryclient} >
        <RouterProvider router={router} />
      </QueryClientProvider >
    </ThemeProvider >

  );
}

export default App;
