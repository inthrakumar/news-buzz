import React from 'react'
import { useQuery } from 'react-query'
import { CategoryNews } from '@/hooks/news_api';
import { AuthStore } from '@/store/auth';
import { Category } from '@/types/types';
import CategoryNewsList from '../app_components/CategoryNewsList';
import Loading from '@/app_components/state_components/Loading';
import Error from '@/app_components/state_components/Error'

function Politics() {
    const country_code = AuthStore((state) => state.country_code);
    const { isLoading, isError, data } = useQuery<Category | null>([`politics`, country_code], () => CategoryNews(country_code, "politics"), {
        cacheTime: 3600000,
        staleTime: 3600000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div><Loading /></div>}
            {isError && <div><Error errorMessage="Error in Loading the news" /></div>}
            {data && (
                <CategoryNewsList title='Politics' topnews={data} />
            )}
        </main>
    )
}

export default Politics
