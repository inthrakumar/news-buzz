import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import type { TopNews } from '@/types/types';
import "@fontsource/roboto"
import fallback from '/fallbackpic.jpg'
import Error from '@/app_components/state_components/Error';
interface NewsCarouselProps {
    top_news: TopNews | undefined;
}

function NewsCarousel({ top_news }: NewsCarouselProps) {
    if (!top_news || top_news.length === 0) {
        return <div><Error errorMessage="Error in Loading the news" /></div>;
    }

    return (
        <Carousel
            className="w-full max-w-[100%]"
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent>
                {top_news.slice(0, 5).map((newsGroup, index) => {
                    const newsItem = newsGroup.news[2];
                    const imageUrl = newsItem.image || '';
                    const title = newsItem.title || 'No title';
                    const id = newsItem.id;
                    return (
                        <CarouselItem key={index} className="h-inherit font-roboto">
                            <Card
                                className="relative bg-cover h-[350px] max-sm:h-[300px]"
                                style={{
                                    backgroundImage: `url('${imageUrl}'),url('${fallback}')`,
                                    width: '100%',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}>
                                <div className="absolute inset-0 bg-black opacity-50"></div>
                                <CardContent className="relative flex items-end w-inherit h-[350px] justify-center p-6">
                                    <Link to={`/news/${id}`}>
                                        <span className="text-2xl max-md:text-xl text-white max-sm:text-[1rem] font-roboto font-semibold text-[#fff]">
                                            {title}
                                        </span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </CarouselItem>

                    );
                })}
            </CarouselContent>
        </Carousel>
    );
}

export default NewsCarousel;
