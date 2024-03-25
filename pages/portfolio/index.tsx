"use client"
import "../../app/globals.css"
import Image from "next/image"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

export default function PortfolioPage() {
  const imagePaths = ["/profile.jpg", "/profile.jpg", "/profile.jpg"]

  return (
    <div className="flex min-h-screen bg-slate-50 items-center justify-center">
      <div className="px-16">
        {" "}
        <Carousel className="max-w-xs w-full">
          <CarouselContent>
            {imagePaths.map((imagePath, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <Image
                        src={imagePath}
                        alt={`Image ${index + 1}`}
                        width={200}
                        height={200}
                        priority
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  )
}
