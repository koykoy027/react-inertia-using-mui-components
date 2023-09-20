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
    const [value, setValue] = useState("settings"); // Changed default value

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [secondForm, setSecondForm] = useState("personalInformation"); // Changed default value and variable name

    const handleChange1 = (event1, newValue1) => {
        setSecondForm(newValue1); // Fixed variable name here
    };

    const columns = ["Name", "Age", "Status"];

    const data = [
        ["Jhunriz", "23", "Active"],
        ["Joshua", "22", "Active"],
        ["Emily", "25", "Inactive"],
        ["Liam", "28", "Active"],
        ["Sophia", "20", "Inactive"],
        ["Noah", "30", "Active"],
        ["Olivia", "24", "Inactive"],
        ["Aiden", "27", "Active"],
        ["Mia", "29", "Inactive"],
        ["Ella", "26", "Active"],
        ["Jackson", "31", "Active"],
        ["Ava", "19", "Inactive"],
        ["Logan", "27", "Active"],
        ["Emma", "22", "Inactive"],
        ["Landon", "24", "Active"],
        ["Grace", "28", "Inactive"],
        ["Carter", "25", "Active"],
        ["Zoe", "23", "Inactive"],
        ["Ethan", "26", "Active"],
        ["Lily", "21", "Inactive"],
        ["Mason", "29", "Active"],
        ["Sophie", "30", "Inactive"],
        ["Lucas", "23", "Active"],
        ["Evelyn", "27", "Inactive"],
        ["Oliver", "25", "Active"],
        ["Harper", "24", "Inactive"],
        ["Liam", "28", "Active"],
        ["Abigail", "22", "Inactive"],
        ["Benjamin", "31", "Active"],
        ["Aria", "20", "Inactive"],
        ["Henry", "29", "Active"],
        ["Charlotte", "26", "Inactive"],
        ["Elijah", "30", "Active"],
        ["Amelia", "23", "Inactive"],
        ["William", "24", "Active"],
        ["Mila", "27", "Inactive"],
        ["James", "25", "Active"],
        ["Sofia", "28", "Inactive"],
        ["Daniel", "22", "Active"],
        ["Avery", "29", "Inactive"],
        ["Alexander", "26", "Active"],
        ["Chloe", "30", "Inactive"],
        ["Michael", "21", "Active"],
        ["Madison", "31", "Inactive"],
        ["Evelyn", "23", "Active"],
        ["Emily", "25", "Inactive"],
        ["Ella", "28", "Active"],
        ["Grace", "24", "Inactive"],
        ["Liam", "27", "Active"],
        ["Harper", "22", "Inactive"],
        ["Ethan", "29", "Active"],
        ["Aria", "20", "Inactive"],
        ["Lucas", "26", "Active"],
        ["Zoe", "30", "Inactive"],
        ["Oliver", "23", "Active"],
        ["Ava", "27", "Inactive"],
        ["Mason", "25", "Active"],
        ["Sofia", "28", "Inactive"],
        ["William", "30", "Active"],
        ["Charlotte", "21", "Inactive"],
        ["James", "29", "Active"],
        ["Amelia", "22", "Inactive"],
        ["Benjamin", "31", "Active"],
        ["Chloe", "24", "Inactive"],
        ["Daniel", "26", "Active"],
        ["Mila", "23", "Inactive"],
        ["Michael", "28", "Active"],
        ["Madison", "25", "Inactive"],
        ["Evelyn", "30", "Active"],
        ["Lily", "27", "Inactive"],
        ["Ella", "24", "Active"],
        ["Avery", "22", "Inactive"],
        ["Liam", "29", "Active"],
        ["Harper", "21", "Inactive"],
        ["Ethan", "26", "Active"],
        ["Aria", "30", "Inactive"],
        ["Lucas", "25", "Active"],
        ["Zoe", "28", "Inactive"],
        ["Oliver", "23", "Active"],
        ["Ava", "27", "Inactive"],
        ["Mason", "30", "Active"],
        ["Sofia", "22", "Inactive"],
        ["William", "29", "Active"],
        ["Charlotte", "26", "Inactive"],
        ["James", "21", "Active"],
        ["Amelia", "25", "Inactive"],
    ];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    return (
        <MainLayout user={auth.user}>
            <div className="py-6 overflow-x-auto max-w-[330px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
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
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        orientation="vertical"
                    >
                        <Tab value="settings" label="Settings" />
                        <Tab value="sample" label="sample" />
                    </Tabs>
                    <div className="">
                        {value === "settings" && (
                            <div className="grid w-full">
                                <div className="">
                                    <Box
                                        sx={{
                                            width: "100%",
                                        }}
                                    >
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
                                                label="Personal Information"
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
                                    </Box>
                                </div>
                                <div className="w-screen lg:w-screen">
                                    {secondForm === "personalInformation" && (
                                        <div className="w-full lg:w-2/3">
                                            <Gender />
                                        </div>
                                    )}
                                    {secondForm === "changePassword" && (
                                        <div className="w-full lg:w-2/3">
                                            <Company />
                                        </div>
                                    )}
                                    {secondForm === "accountSettings" && (
                                        <div className="w-full lg:w-2/3">
                                            <Position />
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}
                        {value === "sample" && (
                            <div className="grid">
                                <div className="w">
                                    <Box
                                        sx={{
                                            width: "100%",
                                        }}
                                    >
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
                                                label="sample 1"
                                                iconPosition="start"
                                            />
                                            <Tab
                                                value="changePassword"
                                                label="sample2"
                                                iconPosition="start"
                                            />
                                            <Tab
                                                value="accountSettings"
                                                label="sample 3"
                                                iconPosition="start"
                                            />
                                        </Tabs>
                                    </Box>
                                </div>
                                <div className="w-screen">
                                    {secondForm === "personalInformation" && (
                                        <div className="w-full lg:w-2/3">
                                            <Religion />
                                        </div>
                                    )}
                                    {secondForm === "changePassword" && (
                                        <div className="w-full lg:w-2/3">
                                            <Company />
                                        </div>
                                    )}
                                    {secondForm === "accountSettings" && (
                                        <div className="w-full lg:w-2/3">
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
