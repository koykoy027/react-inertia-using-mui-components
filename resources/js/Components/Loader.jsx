import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import "./Loader.css"; // Import a CSS file for styling

export default function Loader() {
    const [isMoved, setIsMoved] = useState(false);

    const handleMoveIcon = () => {
        setIsMoved(!isMoved);
    };

    useEffect(() => {
        // Load Lordicon script here
        const script = document.createElement("script");
        script.src = "https://cdn.lordicon.com/bhenfmcm.js";
        script.async = true;
        document.head.appendChild(script);

        return () => {
            // Clean up the script when the component unmounts
            document.head.removeChild(script);
        };
    }, []);

    return (
        <div>
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="90vh"
                onMouseEnter={handleMoveIcon}
                onMouseLeave={handleMoveIcon}
                className={isMoved ? "backdrop" : ""} // Add or remove the backdrop class based on mouse enter/leave
            >
                <lord-icon
                    src="https://cdn.lordicon.com/uetqnvvg.json"
                    trigger="loop"
                    colors="primary:#3080e8,secondary:#16a9c7"
                    stroke="70"
                    state="loop"
                    style={{ width: "250px", height: "250px" }}
                />
            </Box>
        </div>
    );
}
