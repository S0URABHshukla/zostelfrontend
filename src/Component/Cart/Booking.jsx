import React from "react";
import "./Description.css";
import { useContext } from "react";
import { ContextData } from "../Context/ContextData";
import { RiArrowDownSLine } from "react-icons/ri";
import Manlogo from "../Loader/Manlogo";
import { Roomimg10bed, Roomimg4bed, Roomimg6bed } from "./imagebox/Roomimg";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PersonIcon from "@mui/icons-material/Person";
import HotTubIcon from "@mui/icons-material/HotTub";
import WifiIcon from "@mui/icons-material/Wifi";
import WaterIcon from "@mui/icons-material/Water";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import LocalLaundryService from "@mui/icons-material/LocalLaundryService";
import EastIcon from "@mui/icons-material/East";
import SummaryBox from "./SummaryBox";
import { useState } from "react";
import { Counter1, Counter2, Counter3 } from "../Loader/Counter";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Booking() {
  let data = JSON.parse(localStorage.getItem("data"));
  const [startDate, setStartDate] = useState(new Date(data.startDate));
  const [endDate, setEndDate] = useState(new Date(data.endDate));
  let start = new Date(data.startDate);
  function getDays() {
    let start = new Date(data.startDate);
    let start2 = data.startDate;
    let end = new Date(data.endDate);
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return { TotalDays, start2 };
  }
  const days = getDays();
  const {
    countRoom,
    setroom1,
    setroom2,
    setroom3,
    room1name,
    room2name,
    room3name,} = useContext(ContextData);
  return (
    <div id="main">
      <div id="bookmain">
        <div id="bookroomdiv">
          <div id="bookhead">
            <div>
              <h1
                id="name"
                style={{ fontFamily: "CircularStdBlack", marginTop: "35px" }}
              >
                Book your stay
              </h1>
              <p style={{ fontFamily: "CircularStdMedium", color: "#4b4848" }}>
                Select from a range of beautiful rooms
              </p>
            </div>
            <div>
              <button
                style={{
                  display: "flex",
                  margin: "20px",
                  border: "0px",
                  color: "#f15824",
                  fontSize: "17px",
                  fontFamily: "CircularStdBold",
                }}
              >
                <strong>INR</strong>{" "}
                <RiArrowDownSLine color="rgb(236, 68, 22)" fontSize="20px" />
              </button>
            </div>
            <div id="cal">
              <div
                onClick={() => {
                  let data = {
                    startDate: startDate,
                    endDate: endDate,
                  };
                  localStorage.setItem("data", JSON.stringify(data));
                  let data2 = JSON.parse(localStorage.getItem("data"));
                  console.log(data2);
                  console.log("hello");
                }}
              >
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    let data = {
                      startDate: date,
                      endDate: endDate,
                    };
                    localStorage.setItem("data", JSON.stringify(data));
                  }}
                  selectsStart
                  monthsShown={2}
                  startDate={startDate}
                  dateFormat="E dd MMMM,yyyy"
                  endDate={endDate}
                  minDate={new Date()}
                />
              </div>
              <div>
                <EastIcon
                  style={{
                    background: "white",
                    height: "40px",
                  }}
                />
              </div>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => {
                    setEndDate(date);
                    let data = {
                      startDate: startDate,
                      endDate: date,
                    };
                    localStorage.setItem("data", JSON.stringify(data));
                  }}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  monthsShown={2}
                  closeOnScroll={true}
                  dateFormat="E dd MMMM,yyyy"
                />
              </div>
            </div>
          </div>
          <div id="roombox">
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg4bed />
                </div>
                <div id="roomdetails2">
                  <div id="roomname2">
                    <h3>{countRoom.room1name}</h3>
                    <p id="pricetag">
                      <strong>₹949</strong>/<strong id="night">night</strong>
                    </p>
                  </div>
                  <p id="personicon">
                    <PersonIcon fontSize="18px" /> x 1
                  </p>
                  <p id="roomdesc2">
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv2">
                    <p id="availcal">
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    {countRoom.room1 > 0 ? (
                      <Counter1 />
                    ) : (
                      <button
                        id="selbed2"
                        onClick={() => {
                          setroom1(1);
                        }}
                      >
                        Select Bed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg6bed />
                </div>
                <div id="roomdetails2">
                  <div id="roomname2">
                    <h3>{countRoom.room2name}</h3>
                    <p id="pricetag">
                      <strong>₹749</strong>/<strong id="night">night</strong>
                    </p>
                  </div>
                  <p id="personicon">
                    <PersonIcon fontSize="15px" /> x 1
                  </p>
                  <p id="roomdesc2">
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv2">
                    <p id="availcal">
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    {countRoom.room2 > 0 ? (
                      <Counter2 />
                    ) : (
                      <button
                        id="selbed2"
                        onClick={() => {
                          setroom2(1);
                        }}
                      >
                        Select Bed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="bedroom">
                <div id="roomimg">
                  <Roomimg10bed />
                </div>
                <div id="roomdetails2">
                  <div id="roomname2">
                    <h3>{countRoom.room3name}</h3>
                    <p id="pricetag">
                      <strong>₹649</strong>/<strong id="night">night</strong>
                    </p>
                  </div>
                  <p id="personicon">
                    <PersonIcon fontSize="15px" /> x 1
                  </p>
                  <p id="roomdesc2">
                    A bed in a mixed dormitory with private lockers, AC, and a
                    shared en-suite washroom.
                  </p>
                  <div id="bookicons">
                    <VpnKeyIcon fontSize="15px" />
                    <HotTubIcon fontSize="15px" />
                    <LocalLaundryService fontSize="15px" />
                    <WifiIcon fontSize="15px" />
                    <AcUnitIcon fontSize="15px" />
                    <RoomServiceIcon fontSize="15px" />
                    <WbIncandescentIcon fontSize="15px" />
                    <LocalCafeIcon fontSize="15px" />
                    <WaterIcon fontSize="15px" />
                    <CelebrationIcon fontSize="15px" />
                    <SportsEsportsIcon fontSize="15px" />
                  </div>
                  <div id="selbeddiv2">
                    <p id="availcal">
                      Availbilty Calender <RiArrowDownSLine />
                    </p>
                    {countRoom.room3 > 0 ? (
                      <Counter3 />
                    ) : (
                      <button
                        id="selbed2"
                        onClick={() => {
                          setroom3(1);
                        }}
                      >
                        Select Bed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="booksum">
          <h2 id="name">Summary</h2>
          <p id="datadays">
            <strong>{days.TotalDays} nights starting from</strong>
            <p>
              <DatePicker
                selected={start}
                selectsStart
                monthsShown={2}
                dateFormat="E dd MMMM,yyyy"
              />
            </p>
          </p>
          {countRoom.room1 || countRoom.room2 || countRoom.room3 > 0 ? (
            <SummaryBox />
          ) : (
            <Manlogo />
          )}
        </div>
      </div>
    </div>
  );
}
