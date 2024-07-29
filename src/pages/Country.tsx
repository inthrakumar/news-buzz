import React from 'react'
import { useQuery } from 'react-query'
import { Country_News } from '@/hooks/news_api';
import { AuthStore } from '@/store/auth';
import { Category } from '@/types/types';
import CategoryNewsList from '../app_components/CategoryNewsList';
function Country() {
    const country = AuthStore((state) => state.country);
    console.log(country);
    const { isLoading, isError, data } = useQuery<Category | null>("india", () => Country_News(country!.toLowerCase()), {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    console.log(data);
    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div>Loading...</div>}
            {isError && <div>Error loading top news</div>}
            {data && (
                <CategoryNewsList title={country} topnews={data} />
            )}
        </main>
    )
}

export default Country
