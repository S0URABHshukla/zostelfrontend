import "./NewCard.css";
export default function NewCard(data) {
    // console.log(data);
    return (
        <div id="newContainer">
            <div>
                <img id="new-image" src={data.data.image} alt="" />
            </div>
            <div id="new-text">
                <h4>{data.data.name}</h4>
                <p>{data.data.description}</p>
            </div>
            <div>
                <button id="new-button">Book Now</button>
            </div>
        </div>
    )
}