import React from "react";
import "./Description.css";
import { BsWhatsapp } from "react-icons/bs";
import { MdMap } from "react-icons/md";
import { useSelector } from "react-redux";
import { RiArrowUpSLine, RiArrowDownSLine } from "react-icons/ri";
import { useState } from "react";
export default function Address() {
  const [box, setbox] = useState(false);
  const data = {
    address: useSelector((state) => state?.locationReducer?.locationdata?.address),
    contact: useSelector((state) => state?.locationReducer?.locationdata?.contact),
    location: useSelector(
      (state) => state.locationReducer?.locationdata?.location
    ),
  };
  return (
    <div
      style={
        box
          ? {
              width: "1200px",
              margin: "auto",
              height: "600px",
              transition: "2s",
            }
          : { width: "1200px", margin: "auto" }
      }
    >
      <p id="name">Locate Us</p>
      <div style={{ height: "300px", display: "flex" }}>
        <div
          id="address"
          style={{ width: "400px", height: "300px", marginTop: "10px" }}
        >
          <p style={{ fontFamily: "CircularStdBlack", color: "#4b4848" }}>
            Address:
          </p>
          <p style={{ color: "#4b4848", fontFamily: "CircularStdMedium" }}>
            {data.address}
          </p>
          <p
            style={{
              fontFamily: "CircularStdBlack",
              color: "#4b4848",
              marginTop: "10px",
            }}
          >
            Contact:{data.contact}
          </p>
          <div id="ws" style={{ marginTop: "10px" }}>
            <BsWhatsapp size="20px" /> <p> Whatsapp us</p>
          </div>
          <div id="direction">
            <p style={{ marginLeft: "10px" }}>Directions</p>
            <button
              id="maxmin"
              style={{ marginLeft: "10px" }}
              onClick={() => {
                {
                  box ? setbox(false) : setbox(true);
                }
              }}
            >
              {box ? <RiArrowUpSLine /> : <RiArrowDownSLine />}
            </button>
          </div>
          <div
            style={
              box
                ? {
                    display: "grid",
                    border: "1.8px solid rgb(227, 226, 226)",
                    height: "300px",
                  }
                : { display: "none" }
            }
          >
            <p>
              Ask for Vijay Amusement part. Walk North on Beach Road for 500
              meters, and you’ll reach a junction. On the opposite right corner,
              you will find Zostel Alleppey.
            </p>
            <p>
              <strong>From the Alleppey Railway Station:</strong> 2.5 km; ~INR
              85 for a tuk-tuk to Zostel Alleppey.
            </p>
            <p>
              <strong>From the Bus Stand Jetty:</strong> 4 km; ~INR 100 for a
              tuk-tuk to Zostel Alleppey.
            </p>
            <p>
              <strong>From Kochi Airport:</strong>
              85 km, 2 hrs; ~INR 2500 for a cab to Zostel Alleppey.
            </p>
          </div>
          <div id="getDirection">
            <MdMap
              size="20px"
              style={{ marginLeft: "10px", marginRight: "10px" }}
            ></MdMap>
            <p>Get directions</p>
          </div>
        </div>
        <div
          id="map"
          style={{ height: "300px", width: "800px", marginLeft: "30px" }}
        >
          <iframe
            style={{ width: "800px", height: "300px", borderRadius: "10px" }}
            src={data.location}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
