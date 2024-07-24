import { useState, useEffect } from 'react';
import axios from 'axios';
import env from '../env';

const useCarousel = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios({
          url: 'https://api.worldnewsapi.com/top-news?source-country=us&language=en&date=2024-05-29',
          method: 'GET',
          headers: {
            'x-api-key': env.world_news_api,
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    };

    fetchNews();
  }, []);

  return news;
};

export default useCarousel;
