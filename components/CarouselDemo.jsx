import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image";

const CarouselDemo = () => {
  return (
    <Carousel className="w-full max-w-sm" opts={{
        align:"start",
        loop:"true",
    }}>
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className={`md:basis-1/2 lg:basis-1/3`}>
            <div className="p-1">
              <Card>
                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                  <Image className="rounded-xl" src={`https://images.unsplash.com/photo-1511300636408-a63a89df3482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8M3x8NGslMjBsYW5kc2NhcGV8fDB8fHx8MTYyNzA4MjQ1Nw&ixlib=rb-1.2.1&q=80&w=1080`} alt="testing" fill />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselDemo;
