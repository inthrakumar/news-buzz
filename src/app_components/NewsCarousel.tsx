import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useState, useEffect } from "react"
import useCarousel from "@/hooks/useCarousel"

function NewsCarousel() {
    const [newsitems, setItems] = useState([])
    useEffect(() => { }, [])
    useCarousel();
    return (
        <Carousel className="w-full max-w-[100%]" plugins={[
            Autoplay({
                delay: 2000,
            }),
        ]}>
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <div className="p-1">
                            <Card>
                                <CardContent className="flex  items-center justify-center p-6">
                                    <span className="text-4xl font-semibold">{index + 1}</span>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}




export default NewsCarousel