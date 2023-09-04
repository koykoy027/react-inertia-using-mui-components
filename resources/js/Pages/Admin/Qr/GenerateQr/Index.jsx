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
import QRCodeGenerator from "@/Components/QRCodeGenerator";

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
            <QRCodeGenerator />
        </MainLayout>
    );
}
