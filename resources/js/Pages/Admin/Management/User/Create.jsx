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

    // const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    // const passwordInput = useRef();

    // const {
    //     data1,
    //     setData,
    //     delete: destroy,
    //     processing,
    //     reset,
    //     errors,
    // } = useForm({
    //     password: "",
    // });

    // const confirmUserDeletion = () => {
    //     setConfirmingUserDeletion(true);
    // };

    // const deleteUser = (e) => {
    //     e.preventDefault();

    //     const confirmation = window.confirm(
    //         "Are you sure you want to delete your account?"
    //     );
    //     if (confirmation) {
    //         destroy(route("profile.destroy"), {
    //             preserveScroll: true,
    //             onSuccess: () => closeModal(),
    //             onError: () => passwordInput.current.focus(),
    //             onFinish: () => reset(),
    //         });
    //     }
    // };

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

    // submmit to store

    const [formData, setFormData] = useState({
        name: "",
        email: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("/api/users", formData);
            console.log(response.data);
            // Handle success, e.g., show a success message or redirect
        } catch (error) {
            console.error(error.response.data);
            // Handle errors, e.g., display validation errors
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
                    className="w-full lg:w-36"
                >
                    Add User
                </Button>

                <Dialog open={open} onClose={handleClose}>
                    <form action="" onSubmit={handleSubmit}>
                        {/* <form action="{{ route('save') }}" method="POST"> */}
                        <DialogTitle>
                            Are you sure want to add your account?
                        </DialogTitle>
                        <DialogContent>
                            <div className="grid grid-col gap-7 px-2">
                                <div className="grid grid-col md:lg:grid-cols-3 lg:grid-cols-3 gap-2">
                                    <TextField
                                        id="outlined-basic"
                                        label="Last Name"
                                        variant="outlined"
                                        fullWidth
                                        name="lastName"
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="First Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Middle Name"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                    />
                                </div>
                                <div>
                                    <TextField
                                        id="outlined-basic"
                                        label="Email Address"
                                        variant="outlined"
                                        name="email"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                </div>
                                <div className="grid grid-col lg:grid-cols-2 md:grid-cols-2 gap-2">
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact Number"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Contact Number"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                </div>

                                <div className="grid grid-col md:grid-cols-3 lg:grid-cols-3 gap-2">
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
                                </div>

                                <div className="grid grid-col gap-5">
                                    <TextField
                                        id="outlined-basic"
                                        label="Password"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
                                    />
                                    <TextField
                                        id="outlined-basic"
                                        label="Confirm Password"
                                        variant="outlined"
                                        fullWidth
                                        size="small"
                                        required
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
