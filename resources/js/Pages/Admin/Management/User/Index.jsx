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
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = ["Name", "Age", "Status"];

    const data = [
        ["Jhunriz", "23", "Active"],
        ["Joshua", "22", "Active"],
        ["Emily", "25", "Inactive"],
        ["Liam", "28", "Active"],
        ["Sophia", "20", "Inactive"],
        ["Noah", "30", "Active"],
        ["Olivia", "24", "Inactive"],
        ["Aiden", "27", "Active"],
        ["Mia", "29", "Inactive"],
        ["Ella", "26", "Active"],
        ["Jackson", "31", "Active"],
        ["Ava", "19", "Inactive"],
        ["Logan", "27", "Active"],
        ["Emma", "22", "Inactive"],
        ["Landon", "24", "Active"],
        ["Grace", "28", "Inactive"],
        ["Carter", "25", "Active"],
        ["Zoe", "23", "Inactive"],
        ["Ethan", "26", "Active"],
        ["Lily", "21", "Inactive"],
        ["Mason", "29", "Active"],
        ["Sophie", "30", "Inactive"],
        ["Lucas", "23", "Active"],
        ["Evelyn", "27", "Inactive"],
        ["Oliver", "25", "Active"],
        ["Harper", "24", "Inactive"],
        ["Liam", "28", "Active"],
        ["Abigail", "22", "Inactive"],
        ["Benjamin", "31", "Active"],
        ["Aria", "20", "Inactive"],
        ["Henry", "29", "Active"],
        ["Charlotte", "26", "Inactive"],
        ["Elijah", "30", "Active"],
        ["Amelia", "23", "Inactive"],
        ["William", "24", "Active"],
        ["Mila", "27", "Inactive"],
        ["James", "25", "Active"],
        ["Sofia", "28", "Inactive"],
        ["Daniel", "22", "Active"],
        ["Avery", "29", "Inactive"],
        ["Alexander", "26", "Active"],
        ["Chloe", "30", "Inactive"],
        ["Michael", "21", "Active"],
        ["Madison", "31", "Inactive"],
        ["Evelyn", "23", "Active"],
        ["Emily", "25", "Inactive"],
        ["Ella", "28", "Active"],
        ["Grace", "24", "Inactive"],
        ["Liam", "27", "Active"],
        ["Harper", "22", "Inactive"],
        ["Ethan", "29", "Active"],
        ["Aria", "20", "Inactive"],
        ["Lucas", "26", "Active"],
        ["Zoe", "30", "Inactive"],
        ["Oliver", "23", "Active"],
        ["Ava", "27", "Inactive"],
        ["Mason", "25", "Active"],
        ["Sofia", "28", "Inactive"],
        ["William", "30", "Active"],
        ["Charlotte", "21", "Inactive"],
        ["James", "29", "Active"],
        ["Amelia", "22", "Inactive"],
        ["Benjamin", "31", "Active"],
        ["Chloe", "24", "Inactive"],
        ["Daniel", "26", "Active"],
        ["Mila", "23", "Inactive"],
        ["Michael", "28", "Active"],
        ["Madison", "25", "Inactive"],
        ["Evelyn", "30", "Active"],
        ["Lily", "27", "Inactive"],
        ["Ella", "24", "Active"],
        ["Avery", "22", "Inactive"],
        ["Liam", "29", "Active"],
        ["Harper", "21", "Inactive"],
        ["Ethan", "26", "Active"],
        ["Aria", "30", "Inactive"],
        ["Lucas", "25", "Active"],
        ["Zoe", "28", "Inactive"],
        ["Oliver", "23", "Active"],
        ["Ava", "27", "Inactive"],
        ["Mason", "30", "Active"],
        ["Sofia", "22", "Inactive"],
        ["William", "29", "Active"],
        ["Charlotte", "26", "Inactive"],
        ["James", "21", "Active"],
        ["Amelia", "25", "Inactive"],
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

    const breadcrumbItems = [
        {
            icon: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
            text: <Link href={route("dashboard")}>Home</Link>,
            url: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
        },
        {
            icon: <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "User",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
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
                                <CustomizedSnackbars
                                    title={"Submit"}
                                    alertMessage={"The user was add"}
                                />
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
