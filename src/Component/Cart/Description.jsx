import React from "react";
import "./Description.css";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import HotTubIcon from "@mui/icons-material/HotTub";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import WifiIcon from "@mui/icons-material/Wifi";
import PaymentIcon from "@mui/icons-material/Payment";
import WaterIcon from "@mui/icons-material/Water";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import RoomServiceIcon from "@mui/icons-material/RoomService";
import CelebrationIcon from "@mui/icons-material/Celebration";
import LocalCafeIcon from "@mui/icons-material/LocalCafe";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import WbIncandescentIcon from "@mui/icons-material/WbIncandescent";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import LuggageIcon from "@mui/icons-material/Luggage";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import ShowerIcon from "@mui/icons-material/Shower";
import { useSelector } from "react-redux";
import LocalParking from "@mui/icons-material/LocalParking";

export default function Description() {
  const data = {
    cityname: useSelector((state) => state?.locationReducer?.locationdata?.city),
    descr: useSelector((state) => state?.locationReducer?.locationdata?.desc),
    recexp: useSelector((state) => state?.locationReducer?.locationdata?.recexp),
  };
  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        margin: "auto",
        alignItems: "center",
      }}
    >
      <div id="firstdiv" style={{ width: "600px" }}>
        <h1 id="head">Zostel {data.cityname}</h1>
        <p>{data.descr}</p>
        <h4 style={{ marginTop: "30px" }}>Recommended experiences:</h4>
        <p>{data.recexp}</p>
      </div>
      <div id="amenities">
        <h2>Amenities</h2>
        <table>
          <tr>
            <td>
              <div id="amicon">
                <VpnKeyIcon sx={{ fontSize: "15px" }} />
                <h5>Locker</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <HotTubIcon sx={{ fontSize: "15px" }} />
                <h5>Hot Water</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <LocalLaundryServiceIcon sx={{ fontSize: "15px" }} />
                <h5>Laundry</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <WifiIcon sx={{ fontSize: "15px" }} />
                <h5>Free Wi-Fi</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <PaymentIcon sx={{ fontSize: "15px" }} />
                <h5>Card Payment</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <WaterIcon sx={{ fontSize: "15px" }} />
                <h5>Water Dispenser</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <AcUnitIcon sx={{ fontSize: "15px" }} />
                <h5>Air-conditioning</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <RoomServiceIcon sx={{ fontSize: "15px" }} />
                <h5>24/7 Reception</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <CelebrationIcon sx={{ fontSize: "15px" }} />
                <h5>Common hangout area</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <LocalCafeIcon sx={{ fontSize: "15px" }} />
                <h5>Cafe</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <SportsEsportsIcon sx={{ fontSize: "15px" }} />
                <h5>In House Activities</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <WbIncandescentIcon sx={{ fontSize: "15px" }} />
                <h5>Bedside Lamps</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <LunchDiningIcon sx={{ fontSize: "15px" }} />
                <h5>Breakfast(Extra)</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <BeachAccessIcon sx={{ fontSize: "15px" }} />
                <h5>Sea View</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <LuggageIcon sx={{ fontSize: "15px" }} />
                <h5>Storage Facility</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <LocalHotelIcon sx={{ fontSize: "15px" }} />
                <h5>Linen Included</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <QrCodeScannerIcon sx={{ fontSize: "15px" }} />
                <h5>UPI Payment</h5>
              </div>
            </td>
            <td>
              <div id="amicon">
                <ShowerIcon sx={{ fontSize: "15px" }} />
                <h5>Shower</h5>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div id="amicon">
                <LocalParking sx={{ fontSize: "15px" }} />
                <h5>Parking</h5>
              </div>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
