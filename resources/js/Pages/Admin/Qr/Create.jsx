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
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import FileUpload from "@/Components/FileUpload";
import QRCode from "qrcode.react";

function Create() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

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

    // qrcode generator start

    const [ProductName, setProductName] = useState("");

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };
    const [Product, setProduct] = useState("");
    const handleProductChange = (e) => {
        setProduct(e.target.value);
    };

    const [Branch, setBranch] = useState("");
    const handleBranchChange = (e) => {
        setBranch(e.target.value);
    };

    const value =
        "Product Name: " +
        ProductName +
        "\n" +
        "Inventory: " +
        Product +
        "Inventory: " +
        Branch;

    // submmit to store

    const { data, setData, post, processing, errors, reset } = useForm({
        productName: "",
        productId: "",
        branch: "",
        status: "",
        qrDescription: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("qr.store"));
        // route is located ) web.php
        // setShowAlert(true);
        reset();
    };
    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    startIcon={<AddSharpIcon />}
                    className="w-full lg:w-60"
                >
                    Add Borrowed item
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>
                            Are you sure want to add your account?
                        </DialogTitle>
                        <DialogContent>
                            <div className="grid grid-col gap-7 px-2">
                                <div className="grid grid-col gap-5">
                                    <TextField
                                        id="outlined-basic"
                                        label="Product Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                        value={data.productName}
                                        className="block w-full mt-1"
                                        onChange={(e) => {
                                            setData(
                                                "productName",
                                                e.target.value
                                            );
                                            handleInputChange(e); // Call your existing onChange handler
                                        }}
                                        helperText={errors.productName}
                                        error={!!errors.productName}
                                    />

                                    <TextField
                                        id="outlined-basic"
                                        label="productId"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                        value={data.productId}
                                        className="block w-full mt-1"
                                        onChange={(e) => {
                                            setData(
                                                "productId",
                                                e.target.value
                                            );
                                            handleProductChange(e); // Call your existing onChange handler
                                        }}
                                        helperText={errors.productId}
                                        error={!!errors.productId}
                                    />
                                </div>
                                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <CustomSelect
                                        id="outlined-basic"
                                        label="Branch"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                        value={data.branch}
                                        className="block w-full mt-1"
                                        onChange={(e) => {
                                            setData("branch", e.target.value);
                                            handleBranchChange(e); // Call your existing onChange handler
                                        }}
                                        helperText={errors.branch}
                                        error={!!errors.branch}
                                        options={departmentoptions}
                                    />
                                    <CustomSelect
                                        id="outlined-basic"
                                        label="status"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                        value={data.status}
                                        className="block w-full mt-1"
                                        onChange={(e) => {
                                            setData("status", e.target.value);
                                        }}
                                        helperText={errors.status}
                                        error={!!errors.status}
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
                                        value={data.qrDescription}
                                        onChange={(e) =>
                                            setData(
                                                "qrDescription",
                                                e.target.value
                                            )
                                        }
                                        required
                                        fullWidth
                                        helperText={errors.qrDescription}
                                        error={!!errors.qrDescription}
                                        cols="62"
                                        rows="10"
                                    ></textarea>
                                </div>

                                <div>
                                    <FileUpload />
                                </div>

                                <div className="flex justify-center rounded border-2 py-5 lg:py-10 border-gray-400">
                                    {ProductName && (
                                        <QRCode
                                            id="qrcode-canvas"
                                            size={128}
                                            value={value}
                                        />
                                    )}
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
