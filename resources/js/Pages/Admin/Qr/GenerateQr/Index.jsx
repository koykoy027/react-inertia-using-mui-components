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
    Typography,
} from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import TransitionsModal from "@/Components/Modal";
import ReusableModal from "@/Components/Modal";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import BasicTextFields from "@/Components/InputField";
import QRCodeGenerator from "@/Components/QRCodeGenerator";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";
import VerticalTabs from "@/Components/TabPanel";
import BarcodeGenerator from "@/Components/BarcodeGenerator";
import QRCodeScanner from "@/Components/QRCodeScanner";
import BarcodeScanner from "@/Components/BarcodeScanner";
import QrCodeSharpIcon from "@mui/icons-material/QrCodeSharp";
import CropFreeIcon from "@mui/icons-material/CropFree";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = ["Product Name", "Product ID", "Status"];

    const data = [
        ["Lenovo laptop", "ABC1234", "Active"],
        ["Lenovo PC", "ABC4321", "Pending"],
    ];

    const data1 = [
        ["Lenovo laasdfasdfptop", "ABC1234", "Active"],
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
            icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "QR",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // Define an array of tab objects with label and content properties
    const tabs = [
        {
            label: (
                <Typography variant="button" display="block" gutterBottom>
                    Barcode
                </Typography>
            ),
            content: (
                <div className="">
                    <div className="flex justify-center py-10">
                        <ReusableModal
                            icon={<CropFreeIcon />}
                            title={"Scan"}
                            content={
                                <div className="flex flex-col gap-10 ">
                                    <BarcodeScanner />
                                </div>
                            }
                        />
                    </div>
                    <Card>
                        <BarcodeGenerator />
                    </Card>
                </div>
            ),
        },
        {
            label: (
                <Typography variant="button" display="block" gutterBottom>
                    QR-Code
                </Typography>
            ),
            content: (
                <div className="">
                    <div className="flex justify-center py-10">
                        <ReusableModal
                            icon={<QrCodeSharpIcon />}
                            title={"Scan QR"}
                            content={
                                <div className="flex flex-col gap-10 ">
                                    <QRCodeScanner />
                                </div>
                            }
                        />
                    </div>
                    <Card>
                        <QRCodeGenerator />
                    </Card>
                </div>
            ),
        },
        // Add more tabs as needed
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <VerticalTabs tabs={tabs} />
        </MainLayout>
    );
}
