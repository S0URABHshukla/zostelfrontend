import "./Card.css"

function Card({data,key}) {
    return (
        <div>
            <div id="card" style={{ cursor:"pointer"}}>
                <img src={data.image} alt="" />
                <div>
                    <h1>{data.name}</h1>
                </div>
            </div>
        </div>

    )
}
export default Card;