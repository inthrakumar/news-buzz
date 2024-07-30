import axios from 'axios';
import env from '../env';
import { TopNews } from '@/types/types';
import Country from '../pages/Country';
const currentDate = new Date();
const fourdayAgoDate = new Date(
  currentDate.getTime() - 24 * 4 * 60 * 60 * 1000
);
const fourdayAgoYear = fourdayAgoDate.getFullYear();
const fourdayAgoMonth = String(fourdayAgoDate.getMonth() + 1).padStart(2, '0');
const fourdayAgoDay = String(fourdayAgoDate.getDate()).padStart(2, '0');
const fourdayAgoDateISO = `${fourdayAgoYear}-${fourdayAgoMonth}-${fourdayAgoDay}`;

// Fetch top news
const fetchTopNews = async (country_code: string | null): Promise<TopNews> => {
  try {
    const code = country_code?.toLowerCase();
    const response = await axios.get(
      `https://api.worldnewsapi.com/top-news?source-country=${country_code}&language=en&date=${fourdayAgoDateISO}`,
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
  try {
    const code = country_code?.toLowerCase();
    const currentDate = new Date();
    const sevendayAgoDate = new Date(
      currentDate.getTime() - 10 * 24 * 60 * 60 * 1000
    );
    const sevendayAgoYear = sevendayAgoDate.getFullYear();
    const sevendayAgoMonth = String(sevendayAgoDate.getMonth() + 1).padStart(
      2,
      '0'
    );
    const sevendayAgoDay = String(sevendayAgoDate.getDate()).padStart(2, '0');
    const sevendayAgoDateISO = `${sevendayAgoYear}-${sevendayAgoMonth}-${sevendayAgoDay}`;

    console.log(`Fetching news for category: ${category}, country: ${code}`);

    const response = await axios.get(
      `https://api.worldnewsapi.com/search-news?earliest-publish-date=${sevendayAgoDateISO}&categories=${category}&number=20&source-countries=${code}`,
      {
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );

    console.log(`Response for category ${category}:`, response.data);

    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }

  return {};
};

const Country_News = async (country: string | null) => {
  console.log('hit');
  try {
    const currentDate = new Date();
    const sevendayAgoDate = new Date(
      currentDate.getTime() - 24 * 10 * 60 * 60 * 1000
    );
    const sevendayAgoYear = sevendayAgoDate.getFullYear();
    const sevendayAgoMonth = String(sevendayAgoDate.getMonth() + 1).padStart(
      2,
      '0'
    );
    const Country = country?.toLowerCase();
    const sevendayAgoDay = String(sevendayAgoDate.getDate()).padStart(2, '0');
    const sevendayAgoDateISO = `${sevendayAgoYear}-${sevendayAgoMonth}-${sevendayAgoDay}`;
    console.log(sevendayAgoDateISO);
    const response = await axios.get(
      `https://api.worldnewsapi.com/search-news?earliest-publish-date=${sevendayAgoDateISO}&text=${Country}&number=50`,
      {
        headers: {
          'x-api-key': env.world_news_api,
        },
      }
    );
    if (response && response.data) {
      return response.data;
    }
  } catch (error) {
    console.error(error);
  }

  return {};
};

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
    if (response && response.data) {
      return response.data.news[0];
    }
  } catch (error) {
    console.error(error);
  }

  return {};
};

export { fetchTopNews, CategoryNews, Country_News, UrlNews };
