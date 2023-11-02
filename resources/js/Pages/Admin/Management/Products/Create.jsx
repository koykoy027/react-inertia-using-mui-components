import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
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
import FileUpload from "@/Components/FileUpload";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";

function Create() {
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

    const departmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const departmentoptions = [
        { label: "None", value: "" },
        { label: "EasyPC", value: "EasyPC" },
        { label: "Greenhills", value: "Greenhills" },
        { label: "Gilmore", value: "Gilmore" },
    ];

    const [status, setStatus] = React.useState("");

    const statusChange = (event) => {
        setStatus(event.target.value);
    };

    const options = [
        { label: "None", value: "" },
        { label: "Active", value: "Active" },
        { label: "Inactive", value: "Inactive" },
        { label: "Deactivated", value: "Deactivated" },
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
        productName: "",
        productId: "",
        branch: "",
        status: "",
        productDescription: "",
        productFileUpload: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("products.store"));
        // route is located ) web.php
        setShowAlert(true);
        reset();
    };

    // file upload

    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            // Check the file type
            if (
                file.type === "application/pdf" ||
                file.type.startsWith(
                    "application/vnd.openxmlformats-officedocument"
                ) ||
                file.type === "application/msword"
            ) {
                // Check the file size (50MB limit)
                if (file.size <= 50 * 1024 * 1024) {
                    setSelectedFile(file);
                } else {
                    alert("File size exceeds 50MB limit");
                    event.target.value = null; // Clear the file input
                }
            } else {
                alert(
                    "Unsupported file type. Please select a PDF or document file."
                );
                event.target.value = null; // Clear the file input
            }
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // You can perform the file upload logic here
            console.log("Uploading file:", selectedFile);
        } else {
            console.log("No file selected");
        }
    };

    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    startIcon={<AddSharpIcon />}
                    className="w-full lg:w-40"
                >
                    Add Product
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>Add your products!</DialogTitle>
                        <DialogContent>
                            <div className="grid gap-5">
                                <div className="grid grid-col gap-5">
                                    <TextField
                                        label="productName"
                                        id="productName"
                                        name="productName"
                                        value={data.productName}
                                        className="block w-full mt-1"
                                        onChange={(e) =>
                                            setData(
                                                "productName",
                                                e.target.value
                                            )
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.productName}
                                        error={!!errors.productName}
                                        size="small"
                                    />

                                    <TextField
                                        label="productId"
                                        id="productId"
                                        name="productId"
                                        value={data.productId}
                                        className="block w-full mt-1"
                                        onChange={(e) =>
                                            setData("productId", e.target.value)
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.productId}
                                        error={!!errors.productId}
                                        size="small"
                                    />
                                </div>
                                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <CustomSelect
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
                                        options={departmentoptions}
                                    />
                                    <CustomSelect
                                        label="status"
                                        id="status"
                                        name="status"
                                        value={data.status}
                                        className="block w-full mt-1"
                                        onChange={(e) =>
                                            setData("status", e.target.value)
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.status}
                                        error={!!errors.status}
                                        size="small"
                                        options={options}
                                    />
                                </div>

                                <div>
                                    <textarea
                                        className="rounded bg-inherit w-full"
                                        label="productDescription"
                                        placeholder="description"
                                        id="productDescription"
                                        name="productDescription"
                                        value={data.productDescription}
                                        onChange={(e) =>
                                            setData(
                                                "productDescription",
                                                e.target.value
                                            )
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.productDescription}
                                        error={!!errors.productDescription}
                                        cols="62"
                                        rows="10"
                                    ></textarea>
                                </div>

                                <div>
                                    <input
                                        type="file"
                                        id="productFileUpload"
                                        name="productFileUpload"
                                        accept=".pdf,.doc,.docx"
                                        onChange={(e) => {
                                            setData(
                                                "productFileUpload",
                                                e.target.value
                                            );
                                            handleFileChange(e); // Call your existing onChange handler
                                        }}
                                        required
                                        fullWidth
                                        helperText={errors.productFileUpload}
                                        error={!!errors.productFileUpload}
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
                                color="success"
                                type="submit"
                                disabled={processing}
                            >
                                Add Product
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    );
}

export default Create;
