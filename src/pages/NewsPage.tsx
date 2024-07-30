import { useQuery } from 'react-query';
import { UrlNews } from '@/hooks/news_api';
import { useParams } from 'react-router-dom';
import News from '@/app_components/News';
import { Id_News } from '@/types/types';
import Loading from '@/app_components/state_components/Loading';
import Error from '@/app_components/state_components/Error'

function NewsPage() {
    const { id } = useParams();
    const num_id = Number(id);

    const { isLoading, isError, data } = useQuery<Id_News | null>(
        [`news`, num_id],
        () => UrlNews(num_id),
        {
            cacheTime: 21600000,
            staleTime: 21600000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
        }
    );

    if (isLoading) {
        return <div className='w-full min-h-[50%] flex items-center justify-center'><Loading /></div>;
    }

    if (isError) {
        return <div className='w-full h-[50%] flex items-center justify-center'><Error errorMessage="Error in Loading the news" /></div>;
    }

    if (!data) {
        return <div className='w-full h-[50%] flex items-center justify-center'><Error errorMessage="No News Available" /></div>;
    }

    return (
        <div className='w-full h-full mt-6 max-md:mt-4 max-sm:mt-2'>
            <News news={data} />
        </div>
    );
}

export default NewsPage;
