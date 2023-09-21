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

    const [secondForm, setSecondForm] = useState("personalInformation");
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

                <Box
                    sx={{
                        flexGrow: 1,
                        bgcolor: "background.paper",
                        display: "flex",
                        width: "100%",
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        scrollButtons="auto"
                        orientation="vertical"
                    >
                        <Tab value="settings" label="Settings" />
                        <Tab value="sample" label="Sample" />
                    </Tabs>
                    <div className="">
                        {value === "settings" && (
                            <div className="grid w-24 ">
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
                                            value="personalInformation"
                                            label="Personal Info"
                                            iconPosition="start"
                                        />
                                        <Tab
                                            value="changePassword"
                                            label="Change Password"
                                            iconPosition="start"
                                        />
                                        <Tab
                                            value="accountSettings"
                                            label="Account Settings"
                                            iconPosition="start"
                                        />
                                    </Tabs>
                                </div>
                                <div className="w-screen lg:w-screen ">
                                    {secondForm === "personalInformation" && (
                                        <div className=" lg:w-2/3">
                                            <Gender />
                                        </div>
                                    )}
                                    {secondForm === "changePassword" && (
                                        <div className=" lg:w-2/3">
                                            <Company />
                                        </div>
                                    )}
                                    {secondForm === "accountSettings" && (
                                        <div className=" lg:w-2/3">
                                            <Position />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {value === "sample" && (
                            <div className="grid ">
                                <Box
                                    sx={{
                                        width: "20%",
                                    }}
                                >
                                    <Tabs
                                        value={secondForm}
                                        onChange={handleChange1}
                                        textColor="primary"
                                        indicatorColor="primary"
                                        variant="standard"
                                        scrollButtons="auto"
                                    >
                                        <Tab
                                            value="personalInformation"
                                            label="Sample 1"
                                            iconPosition="start"
                                        />
                                        <Tab
                                            value="changePassword"
                                            label="Sample 2"
                                            iconPosition="start"
                                        />
                                        <Tab
                                            value="accountSettings"
                                            label="Sample 3"
                                            iconPosition="start"
                                        />
                                    </Tabs>
                                </Box>
                                <div className="w-screen">
                                    {secondForm === "personalInformation" && (
                                        <div className=" lg:w-2/3">
                                            <Religion />
                                        </div>
                                    )}
                                    {secondForm === "changePassword" && (
                                        <div className=" lg:w-2/3">
                                            <Company />
                                        </div>
                                    )}
                                    {secondForm === "accountSettings" && (
                                        <div className=" lg:w-2/3">
                                            <Position />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>
                </Box>
            </div>
        </MainLayout>
    );
}
