import MainLayout from "@/Layouts/MainLayout";
import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Gender from "./Gender/Index";
import Religion from "./Religion/Index";
import Company from "./Company/Index";
import Position from "./Position/Index";
import { Button } from "@mui/material";

export default function Index({ auth, gender }) {
    const openModal = () => {
        window.confirm("dapat mag oopen yung modal, para pwede ma edit yung information");
    }
    const [value, setValue] = useState("settings"); // Changed default value

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [secondForm, setSecondForm] = useState("personalInformation"); // Changed default value and variable name

    const handleChange1 = (event1, newValue1) => {
        setSecondForm(newValue1); // Fixed variable name here
    };

    // for gender
    const genderColumns = ["name", "status", "action"];
    const genderDatas = gender.map((data) => ({
        id: data.id,
        name: data.name,
        status: data.is_active ? "Active": "Inactive", // palitan mo nalang din ng design toy na kapag active color green kapag inactive red
        action: (<Button onClick={openModal}>Open modal</Button>) // palitan mo nalang ng icon 
        
    }));

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
                                            <Gender data={genderDatas} columns={genderColumns}/>
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
