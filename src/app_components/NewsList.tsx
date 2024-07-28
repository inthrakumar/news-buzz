import { TopNews } from '@/types/types';
import NewsCard from './NewsCard';
import { Button } from '@/components/ui/button';
import { PageContainerStore } from '@/store/page_holder';

type NewsListProps = { topnews: TopNews | undefined };

function NewsList({ topnews }: NewsListProps) {
    if (!topnews || topnews.length === 0) {
        return <div>No top news available.</div>;
    }
    const itemsPerPage = 5;
    const totalPages = Math.ceil(topnews.length / itemsPerPage);
    const page_num = PageContainerStore((state) => state.TopNews);

    const startIndex = (page_num - 1) * itemsPerPage;
    const finishIndex = Math.min(startIndex + itemsPerPage, topnews.length);
    console.log(startIndex, finishIndex);

    return (
        <section className='flex flex-col w-full mt-5 max-sm:mt-2 max-md:mt-3 gap-2'>
            <div className='text-3xl  font-roboto p-1 m-2 border-l-2 border-yellow-500 border-solid text-nowrap max-sm:text-[14px] max-lg:text-[1rem] w-fit'>
                <span>TopNews</span>
            </div>
            <div className='flex flex-col gap-5 mt-3 w-full'>
                {topnews.slice(startIndex, finishIndex).map((news, index) => (
                    <NewsCard key={index} news={news.news[2]} />
                ))}
            </div>
            <div className='flex justify-center mt-4'>
                {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                        key={index}
                        variant={'link'}
                        className={index + 1 === page_num ? 'text-red-400' : ''}

                        onClick={() => PageContainerStore.setState({ TopNews: index + 1 })}
                    >
                        {index + 1}
                    </Button>
                ))}
            </div>
        </section>
    );
}

export default NewsList;
