import MainLayout from "@/Layouts/MainLayout";
import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Gender from "./Gender/Index";
import Religion from "./Religion/Index";
import Company from "./Company/Index";
import Position from "./Position/Index";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import ChangeCircleSharpIcon from "@mui/icons-material/ChangeCircleSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import MUIDataTable from "mui-datatables";

export default function Index({ auth }) {
    const [value, setValue] = useState("settings");
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [secondForm, setSecondForm] = useState("gender");
    const handleChange1 = (event1, newValue1) => {
        setSecondForm(newValue1);
    };

    const columns = ["Name", "Age", "Status"];
    const data = [
        // Data here...
    ];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    return (
        <MainLayout user={auth.user}>
            <div className="">
                <Typography variant="h6" color="primary">
                    Settings Page
                </Typography>
                <Typography variant="caption">
                    Add or update settings or global parameters
                </Typography>
                <div className="">
                    {value === "settings" && (
                        <div className="grid ">
                            <div className="">
                                <Tabs
                                    value={secondForm}
                                    onChange={handleChange1}
                                    textColor="primary"
                                    indicatorColor="primary"
                                    variant="scrollable"
                                    scrollButtons="auto"
                                >
                                    <Tab
                                        value="gender"
                                        label="Gender"
                                        iconPosition="start"
                                    />
                                    <Tab
                                        value="company List"
                                        label="Company List"
                                        iconPosition="start"
                                    />
                                    <Tab
                                        value="position List"
                                        label="Position List"
                                        iconPosition="start"
                                    />
                                </Tabs>
                            </div>
                            <div className="">
                                {secondForm === "gender" && (
                                    <div className="">
                                        <Gender />
                                    </div>
                                )}
                                {secondForm === "company List" && (
                                    <div className="">
                                        <Company />
                                    </div>
                                )}
                                {secondForm === "position List" && (
                                    <div className="">
                                        <Position />
                                    </div>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </MainLayout>
    );
}
