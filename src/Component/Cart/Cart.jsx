import CPolicy from "./CPolicy";
import Description from "./Description";
import HeadBox from "./HeadBox";
import Navbox from "./Navbox";
import Ppolicy from "./Ppolicy";
import Address from "./Address";
import { useState, useEffect } from "react";
import { getLocationData } from "../../Redux/Action/action";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import Booking from "./Booking";

export default function Cart() {
  let data = JSON.parse(localStorage.getItem("data"));
  const [place, setplace] = useState(data.city.label);
  const isLoad = useSelector((state) => state?.locationReducer?.locationLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLocationData(place));
  }, [place]);
  return (
    <div>
      {isLoad ? (
        <Loader />
      ) : (
        <div>
          <Navbox />
          <HeadBox />
          <Description />
          <Booking />
          <Address />
          <Ppolicy />
          <CPolicy />
        </div>
      )}
    </div>
  );
}
