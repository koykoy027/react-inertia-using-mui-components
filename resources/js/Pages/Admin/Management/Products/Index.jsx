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
import CustomizedSnackbars from "@/Components/CustomizeSnackBar";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = ["Product Name", "Product ID", "Status"];

    const data = [
        ["Lenovo laptop", "ABC1234", "Active"],
        ["Lenovo PC", "ABC4321", "Pending"],
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

    return (
        <MainLayout user={auth.user}>
            <div>
                <ReusableModal
                    icon={<AddSharpIcon />}
                    title={"Add Product"}
                    header={
                        <div className="hidden lg:block">
                            <Avatar
                                style={{ width: 100, height: 100 }}
                            ></Avatar>
                        </div>
                    }
                    content={
                        <div className="flex flex-col gap-10 ">
                            <div className="grid grid-col gap-5">
                                <BasicTextFields
                                    label="Product Name"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                />

                                <BasicTextFields
                                    label="Product ID"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                />

                                <BasicTextFields
                                    label="Department"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
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
                                <BasicTextFields
                                    label="Location"
                                    variant="outlined"
                                    id="Last Name"
                                    size={"medium"}
                                    type={"email"}
                                />
                                <div className="lg:pt-28 pt-10">
                                    <CustomizedSnackbars
                                        title={"Submit"}
                                        alertMessage={"The user was add"}
                                    />
                                </div>
                            </div>
                        </div>
                    }
                />
            </div>
            <div className="py-6">
                <Card>
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
