import "./DestinationCard.css"

function DestinationCard({ data }) {
    //    console.log(data.bharat.name,data.bharat.image);
    //console.log(data.index1.name);
    // console.log(data1);
    // console.log(data1.image)
    return (
        <div className="destionationContainer" >
            <div className="destinationCard" style={{ cursor:"pointer"}}>
                <img src={data.index0.image} alt="" />
                <div>
                    <h1 style={{ bottom: "335px" }}>{data.index0.name}</h1>
                </div>
            </div>

            <div className="destinationCard" style={{ cursor:"pointer"}}>
                <img src={data.index1.image} alt="" />
                <div>
                    <h1>{data.index1.name}</h1>
                </div>
            </div>
        </div>

    )
}

export default DestinationCard;

