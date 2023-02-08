
import NewYear from "../Home/Section/NewYear";
import Northen from "../Home/Section/Northen";
import Southern from "../Home/Section/Southern";
import Weekend from "../Home/Section/Weekend";
import Food from "../Home/Section/Food";
import Nature from "../Home/Section/Nature";
import OffBeat from "../Home/Section/OffBeat";
import Destination from "../Home/Section/Destination";
// import Calender from "../Home/Section/Calender";
import Award from "../Home/Section/Award";
import Latest from "../Home/Section/Latest";
import New from "../Home/Section/New";
import OfferComponent from "../Home/HomeComponent/OfferComponent";
import Slider from "../Home/Section/Slider"



export default function Home() {

  return (
    <div style={{display:"flex", flexDirection:"column", margin:"auto",justifyContent:"center"}}>
      
      <Slider />
      <Destination />
      <New />
      <OfferComponent />
      <NewYear />
      <Northen />
      <Southern />
      <Weekend />
      <Food />
      <Nature />
      <OffBeat />
      <Award />
      <Latest />
      
    </div>
  );
}