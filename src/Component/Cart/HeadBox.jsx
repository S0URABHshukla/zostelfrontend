import { useSelector } from "react-redux";
export default function HeadBox() {
  const data = useSelector(
    (state) => state.locationReducer.locationdata.hotelimg
  );

  return (
    <div
      style={{
        display: "flex",
        width: "1200px",
        height: "500px",
        margin: "auto",
        borderRadius: "10px",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "756px",
          height: "500px",

          borderRadius: "10px",
        }}
      >
        <img
          src={data === undefined ? "" : data[0]}
          alt="1"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div style={{ width: "250px" }}>
        {" "}
        <div
          style={{
            height: "150px",
            margin: "3px",
          }}
        >
          <img
            src={data === undefined ? "" : data[1]}
            alt="2"
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            height: "150px",
            margin: "3px",
          }}
        >
          <img
            src={data === undefined ? "" : data[2]}
            alt="3"
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>
        <div
          style={{
            height: "150px",
            margin: "3px",
          }}
        >
          <img
            src={data === undefined ? "" : data[3]}
            alt="4"
            width="100%"
            height="100%"
            style={{ borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
}
