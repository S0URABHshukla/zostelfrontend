import "./AwardCard.css";

export default function AwardCard({ data, key }) {
    return (
        <div id="awardContainer">
            <div>
                <img id="award-image" src={data.image} alt="" />
            </div>
            <div id="award-text">
                <h6>{data.tag}</h6>
                <h4>{data.name}</h4>
                <p>{data.description}</p>
            </div>

        </div>
    )
}