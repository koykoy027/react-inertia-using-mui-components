import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import {
    Autocomplete,
    Avatar,
    Button,
    Card,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
} from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import TransitionsModal from "@/Components/Modal";
import ReusableModal from "@/Components/Modal";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import BasicTextFields from "@/Components/InputField";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = ["Name", "Age", "Status"];

    const data = [
        ["Jhunriz", "23", "Active"],
        ["Joshua", "22", "Active"],
    ];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    const [age, setAge] = React.useState("");

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const top100Films = [
        { label: "The Shawshank Redemption", year: 1994 },
        { label: "The Godfather", year: 1972 },
        { label: "The Godfather: Part II", year: 1974 },
        { label: "The Dark Knight", year: 2008 },
        { label: "12 Angry Men", year: 1957 },
        { label: "Schindler's List", year: 1993 },
        { label: "Pulp Fiction", year: 1994 },
    ];
    return (
        <MainLayout user={auth.user}>
            <div>
                <ReusableModal
                    icon={<AddSharpIcon />}
                    title={"Add User"}
                    header={
                        <div className="hidden lg:block">
                            <Avatar
                                style={{ width: 100, height: 100 }}
                            ></Avatar>
                        </div>
                    }
                    content={
                        <div className="flex flex-col gap-5 ">
                            <div className="grid grid-col lg:grid-cols-3 gap-2">
                                <BasicTextFields
                                    label="Last Name"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                    required
                                />

                                <BasicTextFields
                                    label="First Name"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                />

                                <BasicTextFields
                                    label="Middle Name"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-3">
                                <BasicTextFields
                                    label="Age"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                    type="number"
                                />
                                <FormControl
                                    sx={{ minWidth: 120 }}
                                    size="medium"
                                >
                                    <InputLabel id="demo-select-medium-label">
                                        Status
                                    </InputLabel>
                                    <Select
                                        labelId="demo-select-medium-label"
                                        id="demo-select-medium"
                                        value={age}
                                        label="Age"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Single</MenuItem>
                                        <MenuItem value={20}>Married</MenuItem>
                                        <MenuItem value={30}>Widow</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <BasicTextFields
                                label="Email"
                                variant="outlined"
                                id="Last Name"
                                size={"medium"}
                                type={"email"}
                            />
                            <BasicTextFields
                                label="Address"
                                variant="outlined"
                                id="Last Name"
                                size={"medium"}
                                type={"email"}
                            />
                            <div className="grid grid-cols-2 gap-2">
                                <BasicTextFields
                                    label="Password"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                    type={"password"}
                                />
                                <BasicTextFields
                                    label="Confirm Password"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                    type={"password"}
                                />
                            </div>
                            <div className="lg:pt-28 pt-10">
                                <Button variant="contained" fullWidth>
                                    Submit
                                </Button>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="py-6">
                <Card clas>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </div>
        </MainLayout>
    );
}
