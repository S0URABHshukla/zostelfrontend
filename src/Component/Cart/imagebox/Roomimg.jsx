import HeroSlider, { Slide, MenuNav } from "hero-slider";
import { useSelector } from "react-redux";

function Roomimg10bed() {
  const imageten = useSelector(
    (state) => state?.locationReducer?.locationdata?.tenbedimg
  ) || [""];
  return (
    <HeroSlider
      width={"180px"}
      height={"180px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 50,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {imageten.map((item) => {
        return (
          <Slide
            label="Giau Pass - Italy"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            background={{
              backgroundImageSrc: item,
            }}
          />
        );
      })}

      <MenuNav />
    </HeroSlider>
  );
}
function Roomimg6bed() {
  const imagesix = useSelector(
    (state) => state?.locationReducer?.locationdata?.sixbedimg
  ) || [""];
  return (
    <HeroSlider
      width={"180px"}
      height={"180px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {imagesix.map((item) => {
        return (
          <Slide
            label="Giau Pass - Italy"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            background={{
              backgroundImageSrc: item,
            }}
          />
        );
      })}

      <MenuNav />
    </HeroSlider>
  );
}
function Roomimg4bed() {
  const images = useSelector(
    (state) => state.locationReducer?.locationdata?.fourbedimg
  ) || [""];
  return (
    <HeroSlider
      width={"180px"}
      height={"180px"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      {images.map((item) => {
        return (
          <Slide
            label="Giau Pass - Italy"
            style={{
              borderTopLeftRadius: "10px",
              borderBottomLeftRadius: "10px",
            }}
            background={{
              backgroundImageSrc: item,
            }}
          />
        );
      })}

      <MenuNav />
    </HeroSlider>
  );
}
export { Roomimg4bed, Roomimg6bed, Roomimg10bed };
