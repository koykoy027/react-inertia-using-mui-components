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
import { Link, useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import MainLayout from "@/Layouts/MainLayout";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import { HomeRepairServiceOutlined } from "@mui/icons-material";
import InventoryIcon from "@mui/icons-material/Inventory";
import MySelectComponent from "@/Components/CustomSelect";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import SettingsCellIcon from "@mui/icons-material/SettingsCell";

function Create({ auth }) {
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
        branch: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("branch.store"));

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
            text: "Branch",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // province option

    const [selectedProvince, setselectedProvince] = useState("");

    const handleProvinceChange = (event) => {
        setselectedProvince(event.target.value);
    };

    const province_option = [
        { value: "None", label: "None" },
        { value: "Caloocan", label: "Caloocan" },
        { value: "Manila", label: "Manila" },
    ];

    // City option

    const [selectedCity, setselectedCity] = useState("");

    const handleCityChange = (event) => {
        setselectedCity(event.target.value);
    };

    const city_option = [
        { value: "None", label: "None" },
        { value: "Bagong Silang", label: "Bagong Silang" },
        { value: "Tondo", label: "Tondo" },
    ];

    // Barangay option

    const [selectedBarangay, setselectedBarangay] = useState("");

    const handleBarangayChange = (event) => {
        setselectedBarangay(event.target.value);
    };

    const Barangay_option = [
        { value: "None", label: "None" },
        { value: "176", label: "176" },
        { value: "Quiapo", label: "Quiapo" },
    ];

    // choice of branch mobile

    const [selectedValue, setSelectedValue] = useState("");

    const handleSelectChange = (event) => {
        setSelectedValue(event.target.value);
    };

    const branch_contact_option = [
        { value: "Telephone", label: <LocalPhoneIcon /> },
        { value: "Mobile", label: <SettingsCellIcon /> },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <Paper elevation={5}>
                <form onSubmit={handleSubmit} className="grid gap-2">
                    <DialogTitle>
                        <Typography variant="subtitle1">Branch</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <div className="grid grid-col gap-7 px-2">
                            <div className="grid grid-col gap-5">
                                <TextField
                                    label="branch"
                                    id="branch"
                                    name="branch"
                                    value={data.branch}
                                    className="block w-full mt-1"
                                    onChange={(e) =>
                                        setData("branch", e.target.value)
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.branch}
                                    error={!!errors.branch}
                                    size="small"
                                />
                                <Typography variant="inherit">
                                    Address
                                </Typography>
                                <div className="grid grid-col gap-5 md:grid-cols-3">
                                    <MySelectComponent
                                        label="Select Province"
                                        value={selectedProvince}
                                        options={province_option}
                                        onChange={handleProvinceChange}
                                    />
                                    <MySelectComponent
                                        label="Select City"
                                        value={selectedCity}
                                        options={city_option}
                                        onChange={handleCityChange}
                                    />
                                    <MySelectComponent
                                        label="Select Barangay"
                                        value={selectedBarangay}
                                        options={Barangay_option}
                                        onChange={handleBarangayChange}
                                    />
                                </div>
                                <div className="grid grid-col gap-5 md:grid-cols-2 lg:grid-cols-2">
                                    <TextField
                                        label="House No/ Floor"
                                        id="branch_floor"
                                        name="branch_floor"
                                        required
                                        size="small"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Street"
                                        id="branch_street"
                                        name="branch_street"
                                        required
                                        size="small"
                                        fullWidth
                                    />
                                    <TextField
                                        label="Zip Code"
                                        id="branch_zipCode"
                                        name="branch_zipCode"
                                        required
                                        size="small"
                                    />
                                </div>
                            </div>
                            <Typography variant="inherit">Contact</Typography>
                            <div className="grid grid-col gap-7">
                                <div className="flex gap-2">
                                    <div className="shrink-0">
                                        <MySelectComponent
                                            label=""
                                            value={selectedValue}
                                            options={branch_contact_option}
                                            onChange={handleSelectChange}
                                        />
                                    </div>
                                    <div className="cols-span-4">
                                        <TextField
                                            label="Contact"
                                            id="branch_contact"
                                            name="branch_contact"
                                            required
                                            size="small"
                                            type="number"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-col md:grid-cols-2">
                                    <TextField
                                        label="Email"
                                        id="branch_email"
                                        name="branch_email"
                                        required
                                        size="small"
                                    />
                                </div>
                            </div>
                        </div>
                    </DialogContent>
                    <DialogActions>
                        <div className="px-7 py-5">
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
