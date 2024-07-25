import React from 'react'
import { TopNews } from '@/types/newsarticle'
import NewsCard from './NewsCard'
import { News } from '../types/newsarticle';


function NewsList(topnews: TopNews) {
    return (
        <section className='flex flex-col w-full mt-1 gap-2'>
            <div className='text-xl font-roboto p-1 border-2 border-yellow-500 border-solid text-nowrap max-sm:text-[14px] max-lg:text-[1rem] w-fit'><span>TopNews</span></div>
            <div><NewsCard news={ } /></div>
        </section>
    )
}

export default NewsList
