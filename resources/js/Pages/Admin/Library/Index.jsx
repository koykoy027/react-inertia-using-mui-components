import MainLayout from "@/Layouts/MainLayout";
import { Tab, Tabs, Typography } from "@mui/material";
import React from "react";
import Gender from "./Gender/Index";
import Religion from "./Religion/Index";
import Company from "./Company/Index";
import Position from "./Position/Index";

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
                    Add or update settings or global parameters
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
                    <Tab value="companies" label="Companies" />
                    <Tab value="position" label="Position" />{" "}
                    {/* Fix the casing here */}
                </Tabs>

                <div>
                    {value === "gender" && <Gender />}
                    {value === "religion" && <Religion />}
                    {value === "companies" && <Company />}
                    {value === "position" && <Position />}
                </div>
            </div>
        </MainLayout>
    );
}
