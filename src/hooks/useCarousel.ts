import { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import env from '../env';

const useCarousel = async () => {
  const [news, setNews] = useState(null);

  try {
    const response: AxiosResponse = await axios({
      url: 'https://api.worldnewsapi.com/top-news?source-country=us&language=en',
      method: 'GET',
      headers: {
        'x-api-key': env.world_news_api,
      },
    });
    setNews(response.data.top_news);
  } catch (error) {
    console.error(error);
  }
  return news;
};

export default useCarousel;
