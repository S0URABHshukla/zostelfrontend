import { useSelector } from "react-redux";
export default function HeadBox() {
  const data = useSelector(
    (state) => state.locationReducer?.locationdata?.hotelimg
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
          src={data === undefined ? "https://img.cdn.zostel.com/zostel/gallery/images/VNdTvbAvTOCr2KjpFGmB9A/zostel-bangalore-facade-20221021082502.jpg?w=1280" : data[0]}
          alt="1"
          width="100%"
          height="100%"
          style={{ borderRadius: "10px" }}
        />
      </div>
      <div style={{ width: "250px" }}>
        <div
          style={{
            height: "150px",
            margin: "3px",
          }}
        >
          <img
            src={data === undefined ? "https://img.cdn.zostel.com/zostel/gallery/images/hbjG2oY_Tim9SDhAL8JcBQ/zostel-bangalore-pool-table-20221021082540.jpg?w=1280" : data[1]}
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
            src={data === undefined ? "https://img.cdn.zostel.com/zostel/gallery/images/gPB5oDSaSYSKdxq2ECWPBw/zostel-bangalore-garden-20221021082522.jpg?w=1280" : data[2]}
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
            src={data === undefined ? "https://img.cdn.zostel.com/zostel/gallery/images/nLSa3A68SYaQ_l0GAMI4gw/zostel-bangalore-20221021082717.jpg?w=1280" : data[3]}
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
