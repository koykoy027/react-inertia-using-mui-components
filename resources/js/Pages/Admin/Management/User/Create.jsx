import { Button, TextField } from "@mui/material";
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

    const [region, setRegion] = React.useState("");

    const regionChange = (event) => {
        setRegion(event.target.value);
    };

    const options = [
        { label: "None", value: "" },
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
    ];

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

    return (
        <div>
            <form onSubmit={handleSubmit} className="grid gap-7">
                <div className="grid grid-col md:lg:grid-cols-3 lg:grid-cols-3 gap-2">
                    <TextField
                        id="outlined-basic"
                        label="Last Name"
                        variant="outlined"
                        fullWidth
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
                        options={options}
                    />
                    <CustomSelect
                        label="Province/City"
                        value={region}
                        onChange={regionChange}
                        options={options}
                    />
                    <CustomSelect
                        label="City"
                        value={region}
                        onChange={regionChange}
                        options={options}
                    />
                </div>
                <div className="grid grid-col md:grid-cols-2 lg:grid-cols-2 gap-2">
                    <CustomSelect
                        label="Barangay"
                        value={region}
                        onChange={regionChange}
                        options={options}
                    />
                    <CustomSelect
                        label="Zip Code"
                        value={region}
                        onChange={regionChange}
                        options={options}
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
