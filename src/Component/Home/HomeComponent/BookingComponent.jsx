import "./BookingComponent.css";
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";

const options = [
  { value: "alleppey", label: "Alleppey" },
  { value: "aurangabad", label: "Aurangabad" },
  { value: "banglore", label: "Banglore" },
  { value: "banikhet", label: "Banikhet" },
  { value: "barot", label: "Barot" },
  { value: "chamba", label: "Chamba" },
  { value: "cheog", label: "Cheog" },
  { value: "chitkul", label: "Chitkul" },
  { value: "dharamkot", label: "Dharamkot" },
  { value: "dobhi", label: "Dobhi" },
  { value: "fagu", label: "Fagu" },
  { value: "gangtok", label: "Gangtok" },
  { value: "jaisalmer", label: "Jaisalmer" },
  { value: "kochi", label: "Kochi" },
];
export default function BookingComponent() {
  const [selectedOption, setSelectedOption] = useState(null);
  //console.log(selectedOption);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [option, setOption] = useState("DESTINATION");

  let HandleSubmit = (e) => {
    e.preventDefault();
    let data = {
      city: selectedOption,
      startDate: startDate,
      endDate: endDate,
    };
    localStorage.setItem("data", JSON.stringify(data));
    let date = JSON.parse(localStorage.getItem("data"));
   // console.log(date);
    let end = new Date(date.endDate);
    let start = new Date(date.startDate);
    let difference = end.getTime() - start.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    //console.log(data.endDate);
    //console.log(TotalDays);

    //console.log("hello");
  };
  return (
    <div id="main-booking-container">
      <h1
        style={{
          textAlign: "center",
          color: "white",
          fontWeight: "bolder",
          fontSize: "50px",
        }}
      >
        Live it. Now
      </h1>
      <div id="booking-container">
        <div id="booking-place">
          <h3
            style={
              option === "DESTINATION"
                ? { borderBottom: "2px solid red" }
                : { borderBottom: "none" }
            }
            onClick={() => setOption("DESTINATION")}
            className="booking-place-hover"
          >
            DESTINATION
          </h3>
          <h3
            style={
              option === "ZOSTEL"
                ? { borderBottom: "2px solid red" }
                : { borderBottom: "none" }
            }
            onClick={() => setOption("ZOSTEL")}
            className="booking-place-hover"
          >
            ZOSTEL
          </h3>
          <h3
            style={
              option === "ZOSTEL HOMES"
                ? { borderBottom: "2px solid red" }
                : { borderBottom: "none" }
            }
            onClick={() => setOption("ZOSTEL HOMES")}
            className="booking-place-hover"
          >
            ZOSTEL HOMES
          </h3>
          <h3
            style={
              option === "ZOSTEL PLUS"
                ? { borderBottom: "2px solid red" }
                : { borderBottom: "none" }
            }
            onClick={() => setOption("ZOSTEL PLUS")}
            className="booking-place-hover"
          >
            ZOSTEL PLUS
          </h3>
        </div>
        <div id="booking-time">
          <div id="booking-place-div">
            <h5>SELECT YOUR {option}</h5>
            <div id="booking-select">
              <Select
                defaultValue={selectedOption}
                onChange={setSelectedOption}
                options={options}
                placeholder={"eg. Manali, Jothpur, Jaipur, etc."}
              />
            </div>
          </div>
          <div id="booking-checkin-out">
            <div className="booking-checkin">
              <h5>CHECK IN</h5>
              <div>
                <DatePicker
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                  selectsStart
                  monthsShown={2}
                  startDate={startDate}
                  dateFormat="E dd MMM"
                  endDate={endDate}
                  minDate={new Date()}
                  // excludeDates={[new Date(), subDays(new Date(), 1)]}
                />
              </div>
            </div>
            <div>
              <TrendingFlatIcon fontSize="small" />
            </div>
            <div className="booking-checkin">
              <h5>CHECK OUT</h5>
              <div>
                <DatePicker
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  monthsShown={2}
                  closeOnScroll={true}
                  dateFormat="E dd MMM"
                />
              </div>
            </div>
          </div>
          <div id="booking-button">
            <button onClick={HandleSubmit}>
              <Link
                to="/bookroom"
                style={{ textDecoration: "none", color: "white" }}
              >
                Book Now
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
