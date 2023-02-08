import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import "./Calender.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const Calender = () => {
    const [startDate, setStartDate] = useState(new Date("2014/02/08"));
    const [endDate, setEndDate] = useState(new Date("2014/02/10"));
    console.log(startDate);
    console.log(endDate);
    return (
        <>

            <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart
                monthsShown={2}
                startDate={startDate}
                endDate={endDate}

            />

            <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                monthsShown={2}
                closeOnScroll={true}
            />
        </>
    );
};

export default Calender;