import React from 'react';
import NewsCarousel from "@/app_components/NewsCarousel";
import { fetchTopNews } from '@/hooks/news_api';
import { useQuery } from "react-query";
import NewsList from "@/app_components/NewsList";
import { TopNews } from '@/types/types';
import { AuthStore } from '@/store/auth';
function Home() {
    const country_code = AuthStore((state) => state.country_code);
    const { isLoading, isError, data } = useQuery<TopNews | null>("top_news", () => fetchTopNews(country_code), {
        cacheTime: 21600000,
        staleTime: 21600000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading top news</div>}
            {data && (
                <>
                    <NewsCarousel top_news={data} />
                    <NewsList title="TopNews" topnews={data} />
                </>
            )}
        </main>
    );
}

export default Home;
