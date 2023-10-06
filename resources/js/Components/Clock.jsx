import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";

function Clock() {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    // Update the current date and time every second
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
    }, []);
    // clock

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "short",
    };

    const formattedDateTime = currentDateTime.toLocaleDateString(
        "en-US",
        options
    );

    return (
        <div>
            <Typography variant="subtitle2">Current Date and Time</Typography>
            <p>{formattedDateTime}</p>
        </div>
    );
}

export default Clock;
