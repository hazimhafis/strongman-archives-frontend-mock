import { Link } from "react-router-dom"

import type { Athlete } from "@/data/types"
import { cn } from "@/lib/utils"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function AthleteCard({
  athlete,
  className,
}: {
  athlete: Athlete
  className?: string
}) {
  return (
    <Link
      to={`/athletes/${athlete.slug}`}
      className={cn(
        "group relative block aspect-[5/7] overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-foreground/8",
        className,
      )}
    >
      <img
        src={athlete.image}
        alt=""
        className="size-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 p-4">
        <p className="text-overline text-white/80">{athlete.country}</p>
        <p className="mt-1 font-heading text-sm font-semibold text-white">
          {athlete.name}
        </p>
      </div>
    </Link>
  )
}

export function AthleteCarousel({
  athletes,
  className,
}: {
  athletes: Athlete[]
  className?: string
}) {
  return (
    <Carousel
      opts={{ align: "start", dragFree: true }}
      className={cn("w-full", className)}
    >
      <CarouselContent className="-ml-4">
        {athletes.map((athlete) => (
          <CarouselItem
            key={athlete.slug}
            className="basis-[200px] pl-4 sm:basis-[220px]"
          >
            <AthleteCard athlete={athlete} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2 hidden bg-background/90 sm:flex" />
      <CarouselNext className="right-2 hidden bg-background/90 sm:flex" />
    </Carousel>
  )
}
