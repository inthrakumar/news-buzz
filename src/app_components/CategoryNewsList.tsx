import { Category } from '@/types/types';
import { Button } from '@/components/ui/button';
import { PageContainerStore } from '@/store/page_holder';
import CategoryNewsCard from './CategoryNewsCard';

type NewsListProps = {
    title: string,
    topnews: Category
}

function CategoryNewsList({ title, topnews }: NewsListProps) {
    if (!topnews || !topnews.news || topnews.news.length === 0) {
        return <div>No top news available.</div>;
    }

    const itemsPerPage = 5;
    const totalPages = Math.ceil(topnews.news.length / itemsPerPage);
    const page_num = PageContainerStore((state) => state.Entertainment);

    const startIndex = (page_num - 1) * itemsPerPage;
    const finishIndex = Math.min(startIndex + itemsPerPage, topnews.news.length);
    console.log(startIndex, finishIndex);

    return (
        <section className='flex flex-col w-full mt-5 max-sm:mt-2 max-md:mt-3 gap-2'>
            <div className='text-3xl font-roboto p-1 m-4 max-sm:m-2 border-l-2 border-yellow-500 border-solid text-nowrap max-sm:text-[14px] max-lg:text-[1rem] w-fit'>
                <span>{title}</span>
            </div>
            <div className='flex flex-col gap-5 mt-3 w-full'>
                {topnews.news.slice(startIndex, finishIndex).map((news, index) => (
                    <CategoryNewsCard key={index} news={news} />
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

export default CategoryNewsList;
