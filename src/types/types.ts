// types.ts
export type News = {
  id: number;
  title: string;
  text: string;
  summary: string;
  url: string;
  image: string;
  video: string | null;
  publish_date: string;
  author: string | null;
  language: string;
  category: string;
  source_country: string;
  sentiment: number;
};

export type WeatherData = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level: number;
    grnd_level: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  rain?: {
    '1h': number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export type TopNews =
  | {
      news: News[];
    }[]
  | [];

export type Id_News = {
  author: string;
  authors: string[];
  category: string;
  id: number;
  image: string;
  language: string;
  publish_date: string;
  sentiment: number;
  source_country: string;
  summary: string;
  text: string;
  title: string;
  url: string;
  video: string | null;
};

export type C_news = {
  id: number;
  title: string;
  text: string;
  summary: string;
  url: string;
  image: string;
  video: string | null;
  publish_date: string;
  author: string;
  authors: string[];
  language: string;
  category: string;
  source_country: string;
  sentiment: number;
};

export type Category = {
  news: C_news[];
};
