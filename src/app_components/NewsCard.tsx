import React from 'react'
import { Card, CardContent, CardHeader, CardDescription } from '@/components/ui/card'
import { Link } from 'react-router-dom'
import { News } from '@/types/newsarticle'
import "@fontsource/poppins"

function NewsCard(news: News) {
    return (
        <Link to={`/news/${news.id}`}>

            <div className='flex justify-center items-center w-full h-[280px]'>
                <Card className='flex gap-0 w-[85%] items-start'>
                    <CardContent className='w-1/2 h-inherit'>
                        <img src={news.image} alt="news image" className='object-contain' />
                    </CardContent>
                    <CardContent className='w-1/2 text-[20px] max-sm:text-[12px] flex flex-col h-inherit font-poppins justify-between items-center'>
                        <div className='w-full indent-1 h-fit '>{news.title}</div>
                        <div className='w-full flex justify-end space-x-1'><span>{news.author}</span><span>{news.publish_date}</span></div>
                    </CardContent>

                </Card>
            </div >

        </Link>

    )
}

export default NewsCard
