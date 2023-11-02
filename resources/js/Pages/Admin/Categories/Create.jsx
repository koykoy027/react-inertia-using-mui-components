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

function Create({ auth }) {
    const handleClose = () => {
        setOpen(false);
    };

    // submmit to store

    const { data, setData, post, processing, errors, reset } = useForm({
        categories: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("categories.store"));

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
            text: "Categories",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <Paper className="">
                <form onSubmit={handleSubmit} className="grid gap-2">
                    <DialogTitle>
                        <Typography variant="subtitle1">Category</Typography>
                    </DialogTitle>
                    <DialogContent>
                        <div className="grid grid-col gap-7 px-2">
                            <div className="grid grid-col gap-5">
                                <TextField
                                    label="categories"
                                    id="categories"
                                    name="categories"
                                    value={data.categories}
                                    className="block w-full mt-1"
                                    onChange={(e) =>
                                        setData("categories", e.target.value)
                                    }
                                    required
                                    fullWidth
                                    helperText={errors.categories}
                                    error={!!errors.categories}
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
                                Add Category
                            </Button>
                        </div>
                    </DialogActions>
                </form>
            </Paper>
        </MainLayout>
    );
}

export default Create;
