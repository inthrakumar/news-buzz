import { TopNews } from '@/types/newsarticle';
import NewsCard from './NewsCard';
import { News } from '../types/newsarticle';

type NewsListProps = { topnews: TopNews | undefined };

function NewsList({ topnews }: NewsListProps) {
    if (!topnews || topnews.length === 0) {
        return <div>No top news available.</div>;
    }
    return (
        <section className='flex flex-col w-full mt-1 gap-2'>
            <div className='text-2xl font-roboto p-1 m-2 border-l-2 border-yellow-500 border-solid text-nowrap max-sm:text-[14px] max-lg:text-[1rem] w-fit'>
                <span>TopNews</span>
            </div>
            <div className='flex flex-col gap-5 mt-3 w-full'>
                {topnews.map((news) => (
                    <NewsCard key={news.news[2].id} news={news.news[2]} />
                ))}
            </div>
        </section>
    );
}

export default NewsList;
