import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { Card, Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@inertiajs/react";
import QrCode2SharpIcon from "@mui/icons-material/QrCode2Sharp";
import EastIcon from "@mui/icons-material/East";

export default function Index({ auth, mustVerifyEmail, qrcodes }) {
    const data = qrcodes.map((qrcode) => [
        qrcode.productName,
        qrcode.productId,
        qrcode.branch,
        qrcode.status,
        qrcode.qrDescription,
        qrcode.fileUpload,
        qrcode.qrcode,
        <div className="flex justify-end pr-5">
            <Link href={route("dashboard")}>
                <EastIcon />
            </Link>
        </div>, // Replace 'insert_icon_name_here' with the actual icon name
    ]);

    const columns = [
        "Product Name",
        "Product ID",
        "Branch",
        "Status",
        "Description",
        "fileUpload",
        "qrcode",
        "",
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
            <div className="py-6 overflow-x-auto max-w-[370px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
                <div className="px-5 py-5 border-b-4 border-sky-500">
                    <Typography variant="h6">QRCode</Typography>
                </div>
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
