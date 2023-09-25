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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form data submitted:", formData);
        // You can send this data to an API or perform other actions here.
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

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data1,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        const confirmation = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (confirmation) {
            destroy(route("profile.destroy"), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
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
        { label: "IT", value: 10 },
        { label: "Computer Science", value: 20 },
        { label: "IS", value: 30 },
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

    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    startIcon={<AddSharpIcon />}
                >
                    Add Item QR
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={deleteUser}>
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
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Product ID"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                </div>
                                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <CustomSelect
                                        label="Department"
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
                                        className="rounded bg-inherit"
                                        name=""
                                        placeholder="Description"
                                        id=""
                                        cols="62"
                                        rows="10"
                                    ></textarea>
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
