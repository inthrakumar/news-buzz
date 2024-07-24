import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from "react-router-dom"
import type { AxiosResponse } from "axios"

type NewsItem = {
    newsItems: AxiosResponse["data"];
}
function NewsCarousel(newsItems: NewsItem[]) {
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
                {newsItems.slice(0, 5).map((item: any, index: any) => {
                    const imageUrl = item.image;

                    return (
                        <CarouselItem key={index} className="h-inherit">
                            <Card
                                className="bg-cover bg-center"
                                style={{ backgroundImage: `url('${imageUrl}')`, height: '350px' }}
                            >
                                <CardContent className="flex items-end w-inherit h-[350px] justify-center p-6">
                                    <Link key={item.id} to={`/news/${item.id}`}>
                                        <span className="text-2xl font-semibold text-[#fff]">
                                            {item.title}
                                        </span>
                                    </Link>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    );
                })}
            </CarouselContent>
        </Carousel>)
}




export default NewsCarousel