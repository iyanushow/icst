import React, { ReactElement, ReactNode, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

import "react-alice-carousel/lib/alice-carousel.css";

interface ICarousel {
  Items: ReactElement[];
}

function Carousel({ Items }: ICarousel) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative px-6 md:px-[62px]">
      <AliceCarousel
        autoWidth
        mouseTracking
        disableDotsControls={true}
        disableButtonsControls={true}
        items={Items}
        activeIndex={activeIndex}
        onSlideChanged={({ item }) => setActiveIndex(item)}
      />

      <CarouselButton
        handleClick={() => setActiveIndex(activeIndex - 1)}
        className="left-0">
        <ArrowLeftIcon className="w-[30px] mx-auto stroke-white stroke-2" />
      </CarouselButton>

      <CarouselButton
        handleClick={() => setActiveIndex(activeIndex + 1)}
        className="right-0">
        <ArrowRightIcon className="w-[30px] mx-auto stroke-white stroke-2" />
      </CarouselButton>
    </div>
  );
}

export default Carousel;

function CarouselButton({
  children,
  className = "",
  handleClick,
}: {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={`rounded-[50%] w-8 md:w-[50px] h-8 md:h-[50px] bg-gradient-to-l from-[#555555] to-[#333333] absolute top-1/2 -translate-y-1/2 ${className}`}
      onClick={handleClick}>
      {children}
    </button>
  );
}
