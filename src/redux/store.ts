import { configureStore } from '@reduxjs/toolkit';
import top_news from './slices/top_news';
export const store = configureStore({
  reducer: { topnews: top_news },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
