import axios from 'axios';
import env from '../env';
import { TopNews } from '@/types/types';

const fetchTopNews = async (country_code: string | null): Promise<TopNews> => {
  try {
    const response = await axios.get(
      `https://api.worldnewsapi.com/top-news?source-country=${country_code}&language=en&`,
      {
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );

    if (response && response.data && response.data.top_news) {
      return response.data.top_news;
    }
  } catch (error) {
    console.error(error);
  }

  return {} as TopNews;
};

const CategoryNews = async (country_code: string | null, category: string) => {
  let response;
  const currentDate = new Date();
  const oneDayAgoDate = new Date(currentDate.getTime() - 24 * 60 * 60 * 1000);
  const oneDayAgoYear = oneDayAgoDate.getFullYear();
  const oneDayAgoMonth = String(oneDayAgoDate.getMonth() + 1).padStart(2, '0');
  const oneDayAgoDay = String(oneDayAgoDate.getDate()).padStart(2, '0');
  const oneDayAgoDateISO = `${oneDayAgoYear}-${oneDayAgoMonth}-${oneDayAgoDay}`;
  try {
    const url = `https://api.worldnewsapi.com/search-news`;
    response = await axios.get(url, {
      params: {
        'earliest-public-data': oneDayAgoDateISO,
        categories: category,
        'source-countries': country_code,
        'x-api-key': env.world_news_api,
      },
    });
    if (response && response.data && response.data.articles) {
      return response.data;
    }
  } catch (error) {
    return {};
  }
};
export { fetchTopNews };
