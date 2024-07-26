import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import type { TopNews } from '@/types/newsarticle';
import "@fontsource/roboto"
interface NewsCarouselProps {
    top_news: TopNews | undefined;
}

function NewsCarousel({ top_news }: NewsCarouselProps) {
    if (!top_news || top_news.length === 0) {
        return <div>No news available</div>;
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
                    const id = newsItem.id.toString();
                    return (
                        <CarouselItem key={index} className="h-inherit font-roboto">
                            <Card
                                className="relative bg-cover bg-center"
                                style={{
                                    backgroundImage: `url('${imageUrl}')`,
                                    height: '350px',
                                    backgroundSize: 'cover', backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                    imageRendering: 'auto'
                                }}                            >
                                {/* Overlay for dimming the background */}
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
