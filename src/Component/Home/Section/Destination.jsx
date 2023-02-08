import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../HomeComponent/ResponsiveData";
import Card from "../HomeComponent/Card";
import { useState, useEffect } from "react";
import "./NewYear.css";
import DestinationCard from "../HomeComponent/DestinationCard";


function Destination() {
    let [data, setData] = useState([]);

    let fetchData = async () => {
        let responce = await fetch(`https://erin-lovely-llama.cyclic.app/destination`);
        let data = await responce.json();
        setData(data);
        // console.log(data);

    }

    useEffect(() => {
        fetchData();

    }, [])
    const cards = [];
    for (let i = 0; i < data.length/2; i = i + 2) {
        cards.push({
            index0: data[i],
            index1: data[i + 1]
        });
    }
    //setData(cards);
    // console.log(cards);




    return (
        <div className="newYear" style={{backgroundColor:"white"}}>
            <div style={{ marginTop: "15px" }}>
                <h1>Explore <span style={{ color: "#f15824" }}>Destinations</span></h1>
            </div>
            <div id="slider">
                <Carousel showDots={false}
                    responsive={responsive}
                    swipeable={true}
                    keyBoardControl={true}
                    draggable={true}
                    transitionDuration={1000}>
                    {cards.map(function (elem) {
                        // console.log(elem);
                        return (
                            <DestinationCard
                                data={elem}
                            />
                        )
                    })}
                </Carousel>
            </div>

        </div>
    );

}

export default Destination;