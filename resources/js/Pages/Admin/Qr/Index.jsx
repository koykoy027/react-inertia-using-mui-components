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
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";
import QrCode2SharpIcon from "@mui/icons-material/QrCode2Sharp";
import Create from "./Create";

export default function Index({ auth, mustVerifyEmail, qrcodes }) {
    const data = qrcodes.map((qrcode) => [
        qrcode.productName,
        qrcode.productId,
        qrcode.itemName,
        qrcode.quantity_need,
        qrcode.qrcode,
        qrcode.barcode,
        qrcode.status,
    ]);

    const columns = [
        "Product Name",
        "Product ID",
        "Item Name",
        "Quantity Needed",
        "QR-Code",
        "Barcode",
        "Status",
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
            icon: <QrCode2SharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "QR",
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
                    title={"Add Record"}
                    header={
                        <div className="hidden lg:block">
                            <Avatar
                                style={{ width: 100, height: 100 }}
                            ></Avatar>
                        </div>
                    }
                    content={
                        <div className="flex flex-col gap-5 ">
                            <Create />
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
