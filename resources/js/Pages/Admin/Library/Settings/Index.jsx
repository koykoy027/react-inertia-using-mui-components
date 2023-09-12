import MainLayout from "@/Layouts/MainLayout";
import { Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";

export default function Index({ auth, user }) {
    const [value, setValue] = React.useState("gender");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <MainLayout user={auth.user}>
            <div className="grid justify-end ">
                <Button variant="contained" color="primary">
                    Save
                </Button>
            </div>
            <div className="card">
                <Typography variant="h6" color="primary">
                    Settings Page
                </Typography>

                <div className="grid grid-col py-3">
                    <Typography variant="body1">Username</Typography>
                    <Typography variant="button">Jhunriz</Typography>
                </div>

                <div className="grid grid-cols-2 gap-10">
                    <TextField
                        id="filled-basic"
                        label="Email"
                        variant="outlined"
                        required
                    />
                    <TextField
                        id="filled-basic"
                        label="Contact"
                        variant="outlined"
                    />
                    <TextField
                        id="filled-basic"
                        label="First Name"
                        variant="outlined"
                    />
                    <TextField
                        id="filled-basic"
                        label="Last Name"
                        variant="outlined"
                    />
                </div>
            </div>
        </MainLayout>
    );
}
