import React from "react";
import Switch from "@mui/material/Switch";

function CustomizedSwitches({ darkMode, toggleDarkMode }) {
    return (
        <div>
            <Switch
                checked={darkMode.palette.mode === "dark"}
                onChange={toggleDarkMode}
            />
            {/* Add any additional content or styling for your switch here */}
        </div>
    );
}

export default CustomizedSwitches;
