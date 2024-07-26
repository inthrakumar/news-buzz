const env = {
  world_news_api: import.meta.env.VITE_WORLD_NEWS_API_KEY,
  weather_api_key: import.meta.env.VITE_WEATHER_API,
  location_api_key: import.meta.env.VITE_LOCATION_API,
} as const;

export default env;
