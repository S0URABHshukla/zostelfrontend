import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive } from "../HomeComponent/ResponsiveData";
import Card from "../HomeComponent/Card";
import { useState, useEffect } from "react";
import "./NewYear.css";


function Weekend() {
    let [data, setData] = useState([]);

    let fetchData = async () => {
        let responce = await fetch(`https://sleepy-plum-coveralls.cyclic.app/weekend`);
        let data = await responce.json();
        // console.log(data);
        setData(data);
    }

    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className="newYear" style={{ backgroundColor: "white" }}>
            <div style={{ marginTop: "15px" }}>
                <h1>Weekend <span style={{ color: "#f15824" }}>Singles</span></h1>
            </div>
            <div id="slider">
                <Carousel showDots={false}
                    responsive={responsive}
                    swipeable={true}
                    keyBoardControl={true}
                    draggable={true}
                    transitionDuration={1000}>
                    {data.map(function (elem, i) {
                        return (
                            <Card
                                data={elem}
                                key={i}
                            />
                        )
                    })}

                </Carousel>
            </div>

        </div>
    );

}

export default Weekend;