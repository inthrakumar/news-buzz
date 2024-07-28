import React from 'react';
import NewsCarousel from "@/app_components/NewsCarousel";
import { fetchTopNews } from '@/hooks/news_api';
import { useQuery } from "react-query";
import NewsList from "@/app_components/NewsList";
import { TopNews } from '@/types/types';
import { AuthStore } from '@/store/auth';
import { PageContainerStore } from '@/store/page_holder';
function Home() {
    const country_code = AuthStore((state) => state.country_code);
    const { isLoading, isError, data } = useQuery<TopNews | null>("top_news", () => fetchTopNews(country_code), {
        cacheTime: 21600000,
        staleTime: 21600000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    const Refresh_fn = PageContainerStore((state) => state.resetCounters);
    Refresh_fn();
    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading top news</div>}
            {data && (
                <>
                    <NewsCarousel top_news={data} />
                    <NewsList topnews={data} />
                </>
            )}
        </main>
    );
}

export default Home;
