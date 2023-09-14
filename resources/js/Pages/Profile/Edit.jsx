import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import UpdateProfile from "./Partials/UpdateProfile";
import UpdatePassword from "./Partials/UpdatePassword";
import DeleteAccount from "./Partials/DeleteAccount";
import { Avatar, IconButton, Typography, Tabs, Tab } from "@mui/material";

export default function Edit({ auth }) {
    const [value, setValue] = React.useState("personalInformation");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <MainLayout user={auth.user}>
            <div className="grid gap-4 lg:grid-cols-3 lg:grid align-center">
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
                <div className="col-span-2 card">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="primary"
                        indicatorColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                    >
                        <Tab
                            value="personalInformation"
                            label="Personal Information"
                        />
                        <Tab value="changePassword" label="Change Password" />
                        <Tab value="accountSettings" label="Account Settings" />
                    </Tabs>

                    <div className="mt-10">
                        {value === "personalInformation" && <UpdateProfile />}
                        {value === "changePassword" && <UpdatePassword />}
                        {value === "accountSettings" && <DeleteAccount />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
