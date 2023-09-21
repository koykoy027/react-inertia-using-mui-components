import { Button, TextField, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CustomSelect from "@/Components/CustomSelect";

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

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid gap-7">
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
                        className="rounded"
                        name=""
                        placeholder="Description"
                        id=""
                        cols="62"
                        rows="10"
                    ></textarea>
                </div>

                <div className="flex w-full mt-20">
                    <Button variant="contained" fullWidth>
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}

export default Create;
