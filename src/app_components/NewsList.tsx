import React from 'react';
import { TopNews } from '@/types/newsarticle';
import NewsCard from './NewsCard';

function NewsList({ topnews }: { topnews: TopNews | undefined }) {
    if (!topnews || topnews.length === 0) {
        return <div>No top news available.</div>;
    }
    return (
        <section className='flex flex-col w-full mt-1 gap-2'>
            <div className='text-xl font-roboto p-1 border-2 border-yellow-500 border-solid text-nowrap max-sm:text-[14px] max-lg:text-[1rem] w-fit'><span>TopNews</span></div>
            <div className='flex flex-col gap-2'>
                {topnews.map((news) => (
                    <NewsCard news={news.news[2]} />
                ))}
            </div>
        </section>
    );
}

export default NewsList;
