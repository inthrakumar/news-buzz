import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { News } from '@/types/types';
import "@fontsource/poppins";
import fallback from '/fallbackpic.jpg'

type NewsCardProps = { news: News };

function NewsCard({ news }: NewsCardProps) {
    const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
        event.currentTarget.src = fallback;
    };
    return (
        <section className='w-full h-[280px] max-sm:h-[230px]'>
            <Link to={`/news/${news.id}`} className='w-full h-full'>
                <div className='flex justify-center items-center w-full h-full'>
                    <Card className='flex w-[90%]  max-sm:w-[95%] h-full'>
                        <CardContent className='pb-3 max-sm:p-0 w-1/2 h-full'>
                            <img
                                src={news.image}
                                alt="news image"
                                onError={handleError}
                                className='object-cover w-full h-full transition-transform duration-300 hover:scale-105'
                            />
                        </CardContent>
                        <CardContent className='w-1/2 p-4 flex flex-col justify-between'>
                            <div className='text-[1rem] max-sm:text-[12px] max-lg:text-[14px] font-poppins overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                                {news.title}
                            </div>
                            <div className='text-[1rem] max-sm:text-[12px] max-lg:text-[14px] font-poppins overflow-hidden text-ellipsis' style={{ display: '-webkit-box', WebkitLineClamp: 5, WebkitBoxOrient: 'vertical' }}>
                                {news.summary}
                            </div>
                            <div className='grid grid-flow-col auto-cols-max justify-end text-sm max-sm:text-[10px] max-lg:text-[12px] overflow-hidden'>
                                <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{news.author}</span>
                                <span className='overflow-hidden text-ellipsis whitespace-nowrap'>{news.publish_date}</span>
                            </div>

                        </CardContent>
                    </Card>
                </div>
            </Link>
        </section>
    );
}

export default NewsCard;
