import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import UpdateProfileInformation from "./Partials/UpdateProfileInformationForm";
import UpdatePasswordForm from "./Partials/UpdatePasswordForm";
import { Avatar, IconButton, Typography } from "@mui/material";
import DeleteUserForm from "./Partials/DeleteUserForm";
import { Image } from "@mui/icons-material";

export default function Edit({ auth }) {
     const [value, setValue] = React.useState("personalInformation");

     const handleChange = (event, newValue) => {
         setValue(newValue);
     };
    return (
        <MainLayout user={auth.user}>
            <div className="grid grid-cols-3 gap-4 lg:grid align-center">
                <div className="p-10 shadow-lg">
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
                <div className="col-span-2 p-10 shadow-lg">
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
                        {value === "personalInformation" && (
                            <UpdateProfileInformation />
                        )}
                        {value === "changePassword" && <UpdatePasswordForm />}
                        {value === "accountSettings" && <DeleteUserForm />}
                    </div>
                </div>
            </div>
        </MainLayout>
    );
}
