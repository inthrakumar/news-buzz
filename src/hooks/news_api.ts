import axios from 'axios';
import env from '../env';
import { TopNews } from '@/types/types';

// Calculate the date for one day ago
const currentDate = new Date();
const oneDayAgoDate = new Date(currentDate.getTime() - 24 * 4 * 60 * 60 * 1000);
const oneDayAgoYear = oneDayAgoDate.getFullYear();
const oneDayAgoMonth = String(oneDayAgoDate.getMonth() + 1).padStart(2, '0');
const oneDayAgoDay = String(oneDayAgoDate.getDate()).padStart(2, '0');
const oneDayAgoDateISO = `${oneDayAgoYear}-${oneDayAgoMonth}-${oneDayAgoDay}`;

// Fetch top news
const fetchTopNews = async (country_code: string | null): Promise<TopNews> => {
  try {
    const response = await axios.get(
      `https://api.worldnewsapi.com/top-news?source-country=${country_code}&language=en&date=${oneDayAgoDateISO}`,
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

// Fetch category news
const CategoryNews = async (country_code: string | null, category: string) => {
  try {
    const response = await axios.get(
      'https://api.worldnewsapi.com/search-news',
      {
        params: {
          'earliest-public-data': oneDayAgoDateISO,
          categories: category,
          'source-countries': country_code,
        },
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );

    if (response && response.data && response.data.articles) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }

  return {};
};

// Fetch news by URL
const UrlNews = async (id: number | undefined) => {
  try {
    const response = await axios.get(
      'https://api.worldnewsapi.com/retrieve-news',
      {
        params: {
          ids: id,
        },
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );
    console.log(response);
    if (response && response.data) {
      console.log(response.data.news);
      return response.data.news[0];
    }
  } catch (error) {
    console.error(error);
  }

  return {};
};

export { fetchTopNews, CategoryNews, UrlNews };
