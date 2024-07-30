import React from 'react'
import { useQuery } from 'react-query'
import { Country_News } from '@/hooks/news_api';
import { AuthStore } from '@/store/auth';
import { Category } from '@/types/types';
import CategoryNewsList from '../app_components/CategoryNewsList';
import Loading from '@/app_components/state_components/Loading';
import Error from '@/app_components/state_components/Error';
function Country() {

    const country = AuthStore((state) => state.country);
    const { isLoading, isError, data } = useQuery<Category | null>(`${country}`, () => Country_News(country!.toLowerCase()), {
        cacheTime: 21600000,
        staleTime: 21600000,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
    });
    console.log(data);
    return (
        <main className="min-w-full flex-grow flex flex-col justify-center items-center pt-5">
            {isLoading && <div><Loading /></div>}
            {isError && <div><Error errorMessage="Error in Loading the news" /></div>}
            {data && (
                <CategoryNewsList title={country} topnews={data} />
            )}
        </main>
    )
}

export default Country
