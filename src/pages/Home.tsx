import NewsCarousel from "@/app_components/NewsCarousel";
import { fetchTopNews } from '@/hooks/news_api';
import { useQuery } from "react-query";
import NewsList from "@/app_components/NewsList";
function Home() {
    const { isLoading, error, data } = useQuery("top_news", fetchTopNews, {
        cacheTime: 21600000,
        staleTime: 21600000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });

    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            <NewsCarousel top_news={data} />
            <NewsList topnews={data} />
        </main>
    );
}

export default Home;
