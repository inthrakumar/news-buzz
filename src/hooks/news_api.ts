import axios from 'axios';
import env from '../env';
import type { TopNews } from '@/types/newsarticle';

const fetchTopNews = async (): Promise<TopNews> => {
  let response: any;

  try {
    response = await axios.get(
      'https://api.worldnewsapi.com/top-news?source-country=us&language=en',
      {
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );
  } catch (error) {
    console.error(error);
    return [];
  }

  if (response && response.data && response.data.top_news) {
    return response.data.top_news;
  }

  return [];
};

export { fetchTopNews };
