import MainLayout from "@/Layouts/MainLayout";
import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Gender from "./Gender/Index";
import Religion from "./Religion/Index";

export default function Index({ auth }) {
    const [value, setValue] = React.useState("gender");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <MainLayout user={auth.user}>
            <div className="card">
                <Typography variant="h6" color="primary">
                    Settings Page
                </Typography>
                <Typography variant="caption">
                    Add or update settings or global parameter
                </Typography>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="primary"
                    indicatorColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                >
                    <Tab value="gender" label="Gender" />
                    <Tab value="religion" label="Religion" />
                </Tabs>

                <div>
                    {value === "gender" && <Gender />}
                    {value === "religion" && <Religion />}
                </div>
            </div>
        </MainLayout>
    );
}
