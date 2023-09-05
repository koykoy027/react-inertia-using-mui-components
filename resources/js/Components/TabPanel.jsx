import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{ width: "100%" }} // Set the width to 100%
            {...other}
        >
            {value === index && (
                <Box sx={{ py: 5 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

export default function VerticalTabs({ tabs }) {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                flexGrow: 1,
                bgcolor: "background.paper",
                display: "flex",
                flexDirection: "column", // Stack tabs and content vertically on smaller screens
                minHeight: "100vh", // Ensure the container takes up the full viewport height
            }}
        >
            <Tabs
                orientation="horizontal" // Change orientation to horizontal for smaller screens
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Horizontal tabs example"
                sx={{ borderBottom: 1, borderColor: "divider" }}
            >
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label} {...a11yProps(index)} />
                ))}
            </Tabs>
            {tabs.map((tab, index) => (
                <TabPanel key={index} value={value} index={index}>
                    {tab.content}
                </TabPanel>
            ))}
        </Box>
    );
}

VerticalTabs.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string.isRequired,
            content: PropTypes.node.isRequired,
        })
    ).isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}
