"use client";
import React from "react";
import { DotButton, useDotButton } from "./DotButtons";
import { PrevButton, NextButton, usePrevNextButtons } from "./Button";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div className="embla__slide mx-2 w-64 h-42" key={index}>
              <div
                className="embla__slide__number text-center flex flex-col justify-center items-center rounded-lg "
                style={{
                  border: "2px solid",
                  borderImage: "linear-gradient(180deg, orange, blue) 0.5",
                  borderRadius: "8px",
                }}
              >
                <img
                  src={slide.imgSrc}
                  alt=""
                  className="w-12 h-12 mb-4 rounded "
                />
                <h1 className="max-w-64 text-xs">{slide.heading}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(
                index === selectedIndex ? " embla__dot--selected" : ""
              )}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
