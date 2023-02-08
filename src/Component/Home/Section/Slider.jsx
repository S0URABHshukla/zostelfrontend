import SliderComponent from "../HomeComponent/SliderComponent";
import BookingComponent from "../HomeComponent/BookingComponent";
import "./Slider.css";

export default function Slider() {
    return (
        <div id="slider-top">
            <SliderComponent />
            <div id="booking-top">
                <BookingComponent />
            </div>
        </div>
    )
}