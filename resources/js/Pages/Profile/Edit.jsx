import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import UpdateProfile from "./Partials/UpdateProfile";
import UpdatePassword from "./Partials/UpdatePassword";
import DeleteAccount from "./Partials/DeleteAccount";
import {
    Avatar,
    IconButton,
    Typography,
    Tabs,
    Tab,
    Box,
    Badge,
    Stack,
} from "@mui/material";
import SupervisedUserCircleSharpIcon from "@mui/icons-material/SupervisedUserCircleSharp";
import ChangeCircleSharpIcon from "@mui/icons-material/ChangeCircleSharp";
import ManageAccountsSharpIcon from "@mui/icons-material/ManageAccountsSharp";
import { styled } from "@mui/material/styles";

export default function Edit({ auth }) {
    const [value, setValue] = React.useState("personalInformation");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // active avatar

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0,
            },
        },
    }));

    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    }));

    return (
        <MainLayout user={auth.user}>
            <div className="grid gap-4 lg:grid-cols-3 lg:align-center sm:grid-cols-1">
                <div className="card text-center">
                    <IconButton sx={{ width: 100, height: 100 }}>
                        <Avatar
                            alt={auth.user.name}
                            src="/static/images/avatar/2.jpg"
                        />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        {auth.user.name}
                    </Typography>
                    <Typography variant="body2" color="inherit">
                        {auth.user.email}
                    </Typography>
                </div>
                <div className="lg:col-span-2 card">
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
