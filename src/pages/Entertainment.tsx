import React from 'react';
import { useQuery } from 'react-query';
import { CategoryNews } from '@/hooks/news_api';
import { AuthStore } from '@/store/auth';
import { Category } from '@/types/types';
import CategoryNewsList from '../app_components/CategoryNewsList';

function Entertainment() {
    const country_code = AuthStore((state) => state.country_code);
    const { isLoading, isError, data } = useQuery<Category | null>(
        ['entertainment', country_code],
        () => CategoryNews(country_code, "entertainment"),
        {
            cacheTime: 3600000,
            staleTime: 3600000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    );

    console.log(data);

    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading top news</div>}
            {data && <CategoryNewsList title='Entertainment' topnews={data} />}
        </main>
    );
}

export default Entertainment;
