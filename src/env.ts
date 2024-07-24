const env = {
  world_news_api: import.meta.env.VITE_WORLD_NEWS_API_KEY,
  geo_api_key: import.meta.env.VITE_GEOAPIFY_API_KEY,
} as const;

export default env;
