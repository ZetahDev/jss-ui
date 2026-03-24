import useEmblaCarousel from "embla-carousel-react";
import {
  type ComponentProps,
  createContext,
  forwardRef,
  useContext,
  useEffect,
  useMemo,
  useState,
  type HTMLAttributes
} from "react";

import { Button } from "./button";
import { cn } from "../utils";

type EmblaOptions = Parameters<typeof useEmblaCarousel>[0];
type EmblaApi = ReturnType<typeof useEmblaCarousel>[1];

interface CarouselContextValue {
  api: EmblaApi | undefined;
  canScrollNext: boolean;
  canScrollPrev: boolean;
  scrollNext: () => void;
  scrollPrev: () => void;
}

const CarouselContext = createContext<CarouselContextValue | null>(null);

function useCarouselContext() {
  const context = useContext(CarouselContext);
  if (!context) {
    throw new Error("Carousel components must be used within <Carousel>.");
  }
  return context;
}

export interface CarouselProps extends HTMLAttributes<HTMLDivElement> {
  options?: EmblaOptions;
}

export const Carousel = forwardRef<HTMLDivElement, CarouselProps>(function Carousel(
  { className, children, options, ...props },
  ref
) {
  const [emblaRef, api] = useEmblaCarousel(options);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    };

    onSelect();
    api.on("reInit", onSelect);
    api.on("select", onSelect);

    return () => {
      api.off("reInit", onSelect);
      api.off("select", onSelect);
    };
  }, [api]);

  const value = useMemo<CarouselContextValue>(
    () => ({
      api,
      canScrollNext,
      canScrollPrev,
      scrollNext: () => api?.scrollNext(),
      scrollPrev: () => api?.scrollPrev()
    }),
    [api, canScrollNext, canScrollPrev]
  );

  return (
    <CarouselContext.Provider value={value}>
      <div ref={ref} className={cn("jss-carousel", className)} {...props}>
        <div className="jss-carousel__viewport" ref={emblaRef}>
          {children}
        </div>
      </div>
    </CarouselContext.Provider>
  );
});

export const CarouselContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CarouselContent(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-carousel__container", className)} {...props} />;
});

export const CarouselItem = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(function CarouselItem(
  { className, ...props },
  ref
) {
  return <div ref={ref} className={cn("jss-carousel__item", className)} {...props} />;
});

export const CarouselPrevious = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  function CarouselPrevious({ className, children = "Prev", ...props }, ref) {
    const { canScrollPrev, scrollPrev } = useCarouselContext();
    return (
      <Button
        ref={ref}
        size="sm"
        variant="outline"
        className={cn("jss-carousel__control", className)}
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        {...props}
      >
        {children}
      </Button>
    );
  }
);

export const CarouselNext = forwardRef<HTMLButtonElement, ComponentProps<typeof Button>>(
  function CarouselNext({ className, children = "Next", ...props }, ref) {
    const { canScrollNext, scrollNext } = useCarouselContext();
    return (
      <Button
        ref={ref}
        size="sm"
        variant="outline"
        className={cn("jss-carousel__control", className)}
        onClick={scrollNext}
        disabled={!canScrollNext}
        {...props}
      >
        {children}
      </Button>
    );
  }
);
