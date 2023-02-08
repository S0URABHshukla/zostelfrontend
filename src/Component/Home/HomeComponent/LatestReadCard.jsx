import "./LatestReadCard.css";
export default function LatestReadCard(data) {
    // console.log(data);
    return (
        <div id="latestContainer">
            <div>
                <img id="latest-image" src={data.data.image} alt="" />
            </div>
            <div id="latest-text">
                <h6>{data.data.tag}</h6>
                <p>{data.data.description}</p>
                <div id="profile">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw9H5v50zD7IWdXEkTt7uwNHPEqgM_U0yWjA&usqp=CAU" alt="" />
                    <h4>{data.data.name}</h4>
                </div>
            </div>
        </div>
    )
}