import { useSelector } from "react-redux";
export default function Navbox() {
  const cityname = useSelector(
    (state) =>  state.locationReducer?.locationdata?.city
  );
  //console.log(cityname);
  return (
    <div>
      <h4
        style={{
          paddingLeft: "130px",
          fontFamily: "CircularStdBold",
          marginBottom: "10px",
        }}
      >
        Home - Destination - {cityname} - Zostel {cityname}
      </h4>
    </div>
  );
}
