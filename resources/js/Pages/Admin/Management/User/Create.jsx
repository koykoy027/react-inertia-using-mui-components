import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import React from "react";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import CustomSelect from "@/Components/CustomSelect";

function Create() {
    const role = [
        { label: "Administrator", value: 1 },
        { label: "Power User", value: 2 },
    ];
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

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <div>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}
                    startIcon={<AddSharpIcon />}
                    className="w-full lg:w-36"
                >
                    Add User
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form onSubmit={handleSubmit}>
                        <DialogTitle>Add user</DialogTitle>
                        <DialogContent>
                            <div className="mt-5">
                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    <CustomSelect
                                        label="Select Role"
                                        options={role}
                                    />
                                </div>

                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    <TextField
                                        label="Lastname"
                                        variant="outlined"
                                        fullWidth
                                        name="lastName"
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        label="Firstname"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        label="Middlename"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        label="Email Address"
                                        variant="outlined"
                                        name="email"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        label="Contact Number"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                        type="tel"
                                    />
                                </div>

                                {/* <div className="grid grid-col md:grid-cols-3 lg:grid-cols-3 gap-2">
                                    <CustomSelect
                                        label="Region"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="Province/City"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="City"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                </div>
                                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                                    <CustomSelect
                                        label="Barangay"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                    <CustomSelect
                                        label="Zip Code"
                                        value={region}
                                        onChange={regionChange}
                                        options={regions}
                                    />
                                </div>
                                <div>
                                    <CustomSelect
                                        label="Department"
                                        value={department}
                                        onChange={DepartmentChange}
                                        options={departmentoption}
                                    />
                                </div> */}
                            </div>
                        </DialogContent>
                        <DialogActions>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleClose}
                            >
                                Cancel
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Add Account
                            </Button>
                        </DialogActions>
                    </form>
                </Dialog>
            </div>
        </div>
    );
}

export default Create;
