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

function Create({ onSubmit }) {
    // const [formData, setFormData] = useState({
    //     name: "",
    //     email: "",
    // });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //     });
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Form data submitted:", formData);
    //     // You can send this data to an API or perform other actions here.
    // };

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
        { label: "EasyPC", value: 10 },
        { label: "Greenhills", value: 20 },
        { label: "Gilmore", value: 30 },
    ];

    const [status, setStatus] = React.useState("");

    const statusChange = (event) => {
        setStatus(event.target.value);
    };

    const options = [
        { label: "None", value: "" },
        { label: "Active", value: 10 },
        { label: "Inactive", value: 20 },
        { label: "Deactivated", value: 30 },
    ];

    // submmit to store

    const { data, setData, post, processing, errors, reset } = useForm({
        productName: "",
        productId: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("products.store"));
        // route is located ) web.php 


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
                                        label="Branch"
                                        value={department}
                                        onChange={departmentChange}
                                        options={departmentoptions}
                                    />
                                    <CustomSelect
                                        label="Status"
                                        value={status}
                                        onChange={statusChange}
                                        options={options}
                                    />
                                </div>

                                <div>
                                    <textarea
                                        className="rounded bg-inherit w-full"
                                        name=""
                                        placeholder="Description"
                                        id=""
                                        cols="62"
                                        rows="10"
                                    ></textarea>
                                </div>

                                <div>
                                    <FileUpload />
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
