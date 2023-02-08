import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import ds from './Destinations.module.css'
function Destinations() {
    const [data, setData] = useState([]);

    const Destination = async () => {
        const res = await fetch('https://sleepy-plum-coveralls.cyclic.app/destination');
        const data = await res.json();
        setData(data);
        console.log(data);
    }
    useEffect(() => {
        Destination();
    }, [])

    return (
        <div>
            <h1 className={ds.header}>Explore <span className={ds.head}>Destinations</span></h1>
            <p className={ds.hd}><span className={ds.home}>Home</span> <span className={ds.arrow}><i class="fa-solid fa-arrow-right"></i></span> <span className={ds.des}>Destinations</span></p>
            <div className={ds.data}>
                {data.map((e, i) => {
                    return <div key={i}>
                        <img src={e.image} alt={e.name} />
                        <p>{e.name}</p>
                    </div>
                })}
            </div>
            <h1 className={ds.header}>All <span className={ds.head}>Destinations</span></h1>
            <div style={{ padding: "0 100px" }}><iframe style={{ width: "100%", height: "600px", loading: "lazy", referrerpolicy: "no-referrer-when-downgrade" }} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1796350.455269126!2d75.97844411467132!3d28.434431283141937!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd414ac8b6bf%3A0xe5f01fa82120839e!2sZostel%20Delhi!5e0!3m2!1sen!2sin!4v1673079361571!5m2!1sen!2sin" ></iframe></div>
        </div>
    )
}

export default Destinations