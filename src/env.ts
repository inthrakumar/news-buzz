const env = {
  world_news_api: String(import.meta.env.WORLD_NEWS_API_KEY),
  geo_api_key: String(import.meta.env.GEOAPIFY_API_KEY),
} as const;

export default env;
