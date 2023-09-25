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

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = [
        "Product Name",
        "Product ID",
        "Item Name",
        "Quantity Needed",
        "QR-Code",
        "Barcode",
        "Status",
    ];
    const data = [
        [
            "Lenovo laptop",
            "ABC1234",
            "Lenovo",
            "1000",
            "qr-code-url-4",
            "barcode-url-4",
            "Active",
        ],
        [
            "Dell desktop",
            "DEF5678",
            "Dell",
            "800",
            "qr-code-url-5",
            "barcode-url-5",
            "Inactive",
        ],
        [
            "HP laptop",
            "GHI9012",
            "HP",
            "1200",
            "qr-code-url-6",
            "barcode-url-6",
            "Active",
        ],
        [
            "Apple MacBook",
            "JKL3456",
            "Apple",
            "2000",
            "qr-code-url-7",
            "barcode-url-7",
            "Active",
        ],
        // Add 65 more sample data entries here...
        [
            "Acer laptop",
            "MNO7890",
            "Acer",
            "950",
            "qr-code-url-8",
            "barcode-url-8",
            "Inactive",
        ],
        [
            "Asus desktop",
            "PQR1234",
            "Asus",
            "850",
            "qr-code-url-9",
            "barcode-url-9",
            "Active",
        ],
        [
            "Lenovo laptop",
            "STU5678",
            "Lenovo",
            "1100",
            "qr-code-url-10",
            "barcode-url-10",
            "Active",
        ],
        [
            "Dell desktop",
            "VWX9012",
            "Dell",
            "750",
            "qr-code-url-11",
            "barcode-url-11",
            "Inactive",
        ],
        [
            "HP laptop",
            "YZA3456",
            "HP",
            "1150",
            "qr-code-url-12",
            "barcode-url-12",
            "Active",
        ],
        [
            "Apple MacBook",
            "BCD6789",
            "Apple",
            "1950",
            "qr-code-url-13",
            "barcode-url-13",
            "Active",
        ],
        [
            "Acer laptop",
            "EFG1234",
            "Acer",
            "920",
            "qr-code-url-14",
            "barcode-url-14",
            "Inactive",
        ],
        [
            "Asus desktop",
            "HIJ5678",
            "Asus",
            "830",
            "qr-code-url-15",
            "barcode-url-15",
            "Active",
        ],
        [
            "Lenovo laptop",
            "KLM9012",
            "Lenovo",
            "1050",
            "qr-code-url-16",
            "barcode-url-16",
            "Active",
        ],
        [
            "Dell desktop",
            "NOP3456",
            "Dell",
            "720",
            "qr-code-url-17",
            "barcode-url-17",
            "Inactive",
        ],
        [
            "HP laptop",
            "QRS6789",
            "HP",
            "1100",
            "qr-code-url-18",
            "barcode-url-18",
            "Active",
        ],
        [
            "Apple MacBook",
            "TUV1234",
            "Apple",
            "1900",
            "qr-code-url-19",
            "barcode-url-19",
            "Active",
        ],
        [
            "Acer laptop",
            "WXY5678",
            "Acer",
            "890",
            "qr-code-url-20",
            "barcode-url-20",
            "Inactive",
        ],
        [
            "Asus desktop",
            "ZAB9012",
            "Asus",
            "810",
            "qr-code-url-21",
            "barcode-url-21",
            "Active",
        ],
        [
            "Lenovo laptop",
            "BCD3456",
            "Lenovo",
            "1030",
            "qr-code-url-22",
            "barcode-url-22",
            "Active",
        ],
        [
            "Dell desktop",
            "EFG6789",
            "Dell",
            "700",
            "qr-code-url-23",
            "barcode-url-23",
            "Inactive",
        ],
        [
            "HP laptop",
            "HIJ1234",
            "HP",
            "1075",
            "qr-code-url-24",
            "barcode-url-24",
            "Active",
        ],
        [
            "Apple MacBook",
            "KLM5678",
            "Apple",
            "1850",
            "qr-code-url-25",
            "barcode-url-25",
            "Active",
        ],
        [
            "Acer laptop",
            "NOP9012",
            "Acer",
            "870",
            "qr-code-url-26",
            "barcode-url-26",
            "Inactive",
        ],
        [
            "Asus desktop",
            "QRS3456",
            "Asus",
            "790",
            "qr-code-url-27",
            "barcode-url-27",
            "Active",
        ],
        [
            "Lenovo laptop",
            "TUV6789",
            "Lenovo",
            "1005",
            "qr-code-url-28",
            "barcode-url-28",
            "Active",
        ],
        [
            "Dell desktop",
            "WXY1234",
            "Dell",
            "680",
            "qr-code-url-29",
            "barcode-url-29",
            "Inactive",
        ],
        [
            "HP laptop",
            "ZAB5678",
            "HP",
            "1040",
            "qr-code-url-30",
            "barcode-url-30",
            "Active",
        ],
        [
            "Apple MacBook",
            "BCD9012",
            "Apple",
            "1800",
            "qr-code-url-31",
            "barcode-url-31",
            "Active",
        ],
        [
            "Acer laptop",
            "EFG3456",
            "Acer",
            "850",
            "qr-code-url-32",
            "barcode-url-32",
            "Inactive",
        ],
        [
            "Asus desktop",
            "HIJ6789",
            "Asus",
            "770",
            "qr-code-url-33",
            "barcode-url-33",
            "Active",
        ],
        [
            "Lenovo laptop",
            "KLM1234",
            "Lenovo",
            "980",
            "qr-code-url-34",
            "barcode-url-34",
            "Active",
        ],
        [
            "Dell desktop",
            "NOP5678",
            "Dell",
            "660",
            "qr-code-url-35",
            "barcode-url-35",
            "Inactive",
        ],
        [
            "HP laptop",
            "QRS9012",
            "HP",
            "1020",
            "qr-code-url-36",
            "barcode-url-36",
            "Active",
        ],
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
