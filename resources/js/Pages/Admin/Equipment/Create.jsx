import {
    Alert,
    Box,
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
import { Link, useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import MainLayout from "@/Layouts/MainLayout";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import InventoryIcon from "@mui/icons-material/Inventory";
import Barcode from "react-barcode";
import QRCode from "qrcode.react";
import MySelectComponent from "@/Components/CustomSelect";

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
        equipments: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("equipment.store"));

        // Show the alert
        setShowAlert(true);

        // Reset the form or perform other actions
        reset();
    };

    //  breadcrumbItems

    const breadcrumbItems = [
        {
            icon: (
                <Link href={route("dashboard")}>
                    <HomeRepairServiceOutlined
                        sx={{ mr: 0.5 }}
                        fontSize="inherit"
                    />
                </Link>
            ),
            text: <Link href={route("dashboard")}>Home</Link>,
            url: (
                <Link href={route("dashboard")}>
                    <HomeRepairServiceOutlined
                        sx={{ mr: 0.5 }}
                        fontSize="inherit"
                    />
                </Link>
            ),
        },
        {
            icon: <InventoryIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Equipments",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // choice of categories

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const categories_option = [
        { value: "None", label: "None" },
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <Paper className="">
                <form onSubmit={handleSubmit} className="grid gap-2">
                    <DialogTitle>
                        <Typography variant="subtitle1">Equipments</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <div className="grid grid-col gap-7 px-2">
                            <div className="grid grid-col gap-5">
                                <TextField
                                    label="Equipment"
                                    id="Equipment"
                                    name="Equipment"
                                    value={data.equipments}
                                    className="block w-full mt-1"
                                    onChange={(e) => {
                                        setData("equipments", e.target.value);
                                    }}
                                    required
                                    fullWidth
                                    helperText={errors.equipments}
                                    error={!!errors.equipments}
                                    size="small"
                                />

                                <TextField
                                    label="Serial Number"
                                    id="serial_number"
                                    name="serial_number"
                                    value={"Serial Number"}
                                    className="block w-full mt-1"
                                    // onChange={handleInputChange}
                                    size="small"
                                />

                                <MySelectComponent
                                    label="Select an Option"
                                    value={selectedValue}
                                    options={categories_option}
                                    onChange={handleSelectChange}
                                />
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={processing}
                        >
                            Add Equipment
                        </Button>
                    </DialogActions>
                </form>
            </Paper>
        </MainLayout>
    );
}

export default Create;
