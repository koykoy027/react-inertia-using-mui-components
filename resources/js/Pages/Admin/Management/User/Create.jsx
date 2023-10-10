import {
    Alert,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Paper,
    Stack,
    TextField,
    Typography,
} from "@mui/material";
import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomSelect from "@/Components/CustomSelect";
import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import MainLayout from "@/Layouts/MainLayout";

function Create({ auth }) {
    // test sample

    const [region, setRegion] = React.useState("");

    const regionChange = (event) => {
        setRegion(event.target.value);
    };

    const regions = [
        { label: "None", value: "" },
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
    ];

    // test

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    // department sample

    const [department, setDepartment] = React.useState("");

    const DepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const departmentoption = [
        { label: "None", value: "" },
        { label: "IT", value: 10 },
        { label: "Computer-Science", value: 20 },
        { label: "IS", value: 30 },
    ];

    // add alertmessage in form submit

    const [showAlert, setShowAlert] = useState(true);

    // Function to hide the alert after a specified duration (in milliseconds)
    const hideAlertAfterDuration = (duration) => {
        setTimeout(() => {
            setShowAlert(false);
        }, duration);
    };

    // Call the hideAlertAfterDuration function when showAlert becomes true
    useEffect(() => {
        if (showAlert) {
            hideAlertAfterDuration(5000); // Auto-hide after 3 seconds
        }
    }, [showAlert]);
    // submmit to store

    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("management.store"));

        // Show the alert
        setShowAlert(true);

        // Reset the form or perform other actions
        reset();
    };

    return (
        <MainLayout user={auth.user}>
            <Paper>
                <form onSubmit={handleSubmit} className="grid gap-2">
                    <DialogTitle>
                        <Typography variant="subtitle1">User</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <div className="grid grid-col gap-7 px-2">
                            <div className="grid grid-col gap-5">
                                <TextField
                                    label="Name"
                                    id="name"
                                    name="name"
                                    value={data.name}
                                    className="block w-full mt-1"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.name}
                                    error={!!errors.name}
                                    size="small"
                                />

                                <TextField
                                    label="Email address"
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.email}
                                    error={!!errors.email}
                                    size="small"
                                />

                                <TextField
                                    label="Password"
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.password}
                                    error={!!errors.password}
                                    size="small"
                                />

                                <TextField
                                    label="Confirm Password"
                                    id="password_confirmation"
                                    type="password"
                                    name="password_confirmation"
                                    value={data.password_confirmation}
                                    onChange={(e) =>
                                        setData(
                                            "password_confirmation",
                                            e.target.value
                                        )
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.password_confirmation}
                                    error={!!errors.password_confirmation}
                                    size="small"
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className="px-6 py-5">
                            <Button variant="" onClick={handleClose}>
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                disabled={processing}
                            >
                                Add Account
                            </Button>
                        </div>
                    </DialogActions>
                </form>
            </Paper>
        </MainLayout>
    );
}

export default Create;
