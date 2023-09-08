import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import UpdateProfile from "./Partials/UpdateProfile";
import UpdatePassword from "./Partials/UpdatePassword";
import DeleteAccount from "./Partials/DeleteAccount";
import { Avatar, IconButton, Typography, Tabs, Tab, Box } from "@mui/material";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import ChangeCircleSharpIcon from "@mui/icons-material/ChangeCircleSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import DarkMode from "./Partials/DarkMode";

export default function Edit({ auth }) {
    const [value, setValue] = React.useState("personalInformation");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <MainLayout user={auth.user}>
            <div className="grid grid-col gap-4 lg:grid lg:grid-col ">
                <div className="card">
                    <center>
                        <IconButton sx={{ width: 100, height: 100 }}>
                            <Avatar
                                alt={auth.user.name}
                                src="/static/images/avatar/2.jpg"
                            />
                        </IconButton>
                        <Typography variant="h6" color="initial">
                            {auth.user.name}
                        </Typography>
                        <Typography variant="body2" color="initial">
                            {auth.user.email}
                        </Typography>
                    </center>
                </div>
                <div>
                    <Typography variant="h5" color="initial">
                        Account Settings
                    </Typography>
                </div>
                <div className="card grid grid-cols-6 gap-4">
                    <div className=" grid justify-start">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            textColor="primary"
                            indicatorColor="primary"
                            variant="scrollable"
                            scrollButtons="auto"
                            orientation="vertical"
                            sx={{ borderRight: 1, borderColor: "divider" }}
                        >
                            <Tab
                                value="personalInformation"
                                label="Personal Information"
                                icon={<SupervisedUserCircleSharpIcon />}
                                iconPosition="start"
                            />
                            <Tab
                                value="changePassword"
                                label="Change Password"
                                icon={<ChangeCircleSharpIcon />}
                                iconPosition="start"
                            />
                            <Tab
                                value="accountSettings"
                                label="Account Settings"
                                icon={<ManageAccountsSharpIcon />}
                                iconPosition="start"
                            />
                            <Tab
                                value="Dark Mode"
                                label="Dark Mode"
                                icon={<ManageAccountsSharpIcon />}
                                iconPosition="start"
                            />
                        </Tabs>
                    </div>
                    <div className="mt-2 col-span-5">
                        {value === "personalInformation" && <UpdateProfile />}
                        {value === "changePassword" && <UpdatePassword />}
                        {value === "accountSettings" && <DeleteAccount />}
                        {value === "Dark Mode" && <DarkMode />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
