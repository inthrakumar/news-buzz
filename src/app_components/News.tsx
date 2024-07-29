import { Id_News } from '@/types/types';
import React from 'react';
import '@fontsource-variable/faustina';
import { Card, CardContent, CardDescription, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';

type News = {
    news: Id_News;
};

function News({ news }: News) {
    return (
        <Card className="flex flex-col gap-6 font-Faustina p-6 shadow-lg rounded-lg dark:text-white">
            <CardHeader className="flex flex-col items-center pb-4 border-b">
                <CardTitle>
                    <span className="text-[42px] max-lg:text-[36px] max-sm:text-[20px] leading-tight m-0 mb-4 font-bold break-words text-center">
                        {news.title}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardDescription className="text-center">
                <span className="mb-5 text-[20px] font-semibold max-lg:text-[18px] break-words text-gray-700 max-sm:text-[18px] dark:text-white">
                    {news.summary}
                </span>
            </CardDescription>
            <CardContent className="flex flex-col gap-6">
                <div className="w-full">
                    <img
                        src={news.image}
                        alt="news image"
                        className="w-full h-auto max-h-[280px] object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                </div>

                <div className="w-full max-sm:text-[16px] text-lg font-normal leading-relaxed text-gray-800 dark:text-white">
                    {news.text}
                </div>
                <a href={news.url} className="w-full text-left text-black dark:text-white text-[16px] hover:underline max-sm[6px] break-words">
                    {news.url}
                </a>
            </CardContent>
            <CardFooter className="flex justify-between items-center w-full pt-4 border-t text-gray-600 dark:text-white">
                <span className="text-sm max-sm:text-[12px]">Author: {news.author}</span>
                <span className="text-sm max-sm:text-[12px]">Date: {news.publish_date}</span>
            </CardFooter>
        </Card>
    );
}

export default News;
