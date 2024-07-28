import { useQuery } from 'react-query';
import { UrlNews } from '@/hooks/news_api';
import { useParams } from 'react-router-dom';
import News from '@/app_components/News';
import { Id_News } from '@/types/types';

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
        return <div>Loading...</div>;
    }

    if (isError) {
        return <div>Error loading news.</div>;
    }

    if (!data) {
        return <div>No news available.</div>;
    }
    console.log(data);

    return (
        <div className='w-full h-full mt-6 max-md:mt-4 max-sm:mt-2'>
            <News news={data} />
        </div>
    );
}

export default NewsPage;
