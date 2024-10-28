import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Button } from '@/components/ui/button';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchedQuery } from '@/redux/jobSlice';

const category = [
    "Frontend Developer",
    "Backend Developer",
    "Data Science",
    "Graphic Designer",
    "FullStack Developer"
];

const CategoryCarousel = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const searchJobHandler = (query) => {
        dispatch(setSearchedQuery(query));
        navigate("/browse");
    }

    return (
        <div className="relative w-full max-w-[300px] sm:max-w-xl mx-auto my-10">
            <Carousel className="w-full">
                <CarouselContent>
                    {category.map((cat, index) => (
                        <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3 pl-4">
                            <div className="p-1">
                                <Button 
                                    onClick={() => searchJobHandler(cat)} 
                                    variant="outline" 
                                    className="w-full rounded-full text-xs sm:text-sm md:text-base"
                                >
                                    {cat}
                                </Button>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-12" />
                <CarouselNext className="absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-12" />
            </Carousel>
        </div>
    );
}

export default CategoryCarousel;