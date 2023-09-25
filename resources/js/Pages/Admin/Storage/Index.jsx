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
import VerticalTabs from "@/Components/TabPanel";
import WidgetsIcon from "@mui/icons-material/Widgets";

export default function Index({ auth, mustVerifyEmail, status }) {
    const columns = [
        "Product Name",
        "Product ID",
        "Item Name",
        "Quantity Needed",
        "Status",
    ];

    const data = [
        ["Lenovo laptop", "ABC1234", "Lenovo", "1000", "Active"],
        ["HP Desktop", "DEF5678", "HP", "800", "Active"],
        ["Dell Monitor", "GHI9012", "Dell", "300", "Active"],
        ["Apple MacBook", "JKL3456", "Apple", "1500", "Active"],
        ["Acer Chromebook", "MNO7890", "Acer", "400", "Active"],
        // Add more entries here...
        ["Samsung Tablet", "PQR1234", "Samsung", "600", "Active"],
        ["Microsoft Surface", "STU5678", "Microsoft", "1200", "Active"],
        ["Asus Gaming Laptop", "VWX9012", "Asus", "1600", "Active"],
        ["HP Printer", "YZA3456", "HP", "250", "Active"],
        ["Dell Keyboard", "BCD7890", "Dell", "50", "Active"],
        // Add more entries here...
        ["Lenovo ThinkPad", "EFG1234", "Lenovo", "1200", "Active"],
        ["Apple iPad", "HIJ5678", "Apple", "700", "Active"],
        ["Acer Monitor", "KLM9012", "Acer", "350", "Active"],
        ["Sony VAIO Laptop", "NOP3456", "Sony", "900", "Active"],
        ["Toshiba External Hard Drive", "QRS7890", "Toshiba", "200", "Active"],
        // Add more entries here...
        ["Google Chromebook", "XYZ1234", "Google", "600", "Active"],
        ["HP Laptop", "ABC5678", "HP", "1100", "Active"],
        ["Dell Desktop", "DEF9012", "Dell", "850", "Active"],
        ["Microsoft Mouse", "GHI3456", "Microsoft", "30", "Active"],
        ["Samsung Smartphone", "JKL7890", "Samsung", "700", "Active"],
        // Add more entries here...
        ["Lenovo Yoga Laptop", "MNO1234", "Lenovo", "1300", "Active"],
        ["Acer Aspire", "PQR5678", "Acer", "550", "Active"],
        ["Apple Watch", "STU9012", "Apple", "400", "Active"],
        ["Asus Monitor", "VWX3456", "Asus", "300", "Active"],
        ["HP Scanner", "YZA7890", "HP", "150", "Active"],
        // Add more entries here...
        ["Dell Inspiron", "BCD1234", "Dell", "950", "Active"],
        ["Sony PlayStation", "EFG5678", "Sony", "300", "Active"],
        ["LG TV", "HIJ9012", "LG", "700", "Active"],
        ["Toshiba Laptop", "KLM3456", "Toshiba", "800", "Active"],
        ["Amazon Kindle", "NOP7890", "Amazon", "120", "Active"],
    ];
    const data1 = [
        ["Lenovo laptop", "ABC1234", "Lenovo", "1000", "Active"],
        ["HP Desktop", "DEF5678", "HP", "800", "Active"],
        ["Dell Monitor", "GHI9012", "Dell", "300", "Active"],
        ["Apple MacBook", "JKL3456", "Apple", "1500", "Active"],
        ["Acer Chromebook", "MNO7890", "Acer", "400", "Active"],
        // Add more entries here...
        ["Samsung Tablet", "PQR1234", "Samsung", "600", "Active"],
        ["Microsoft Surface", "STU5678", "Microsoft", "1200", "Active"],
        ["Asus Gaming Laptop", "VWX9012", "Asus", "1600", "Active"],
        ["HP Printer", "YZA3456", "HP", "250", "Active"],
        ["Dell Keyboard", "BCD7890", "Dell", "50", "Active"],
        // Add more entries here...
        ["Lenovo ThinkPad", "EFG1234", "Lenovo", "1200", "Active"],
        ["Apple iPad", "HIJ5678", "Apple", "700", "Active"],
        ["Acer Monitor", "KLM9012", "Acer", "350", "Active"],
        ["Sony VAIO Laptop", "NOP3456", "Sony", "900", "Active"],
        ["Toshiba External Hard Drive", "QRS7890", "Toshiba", "200", "Active"],
        // Add more entries here...
        ["Google Chromebook", "XYZ1234", "Google", "600", "Active"],
        ["HP Laptop", "ABC5678", "HP", "1100", "Active"],
        ["Dell Desktop", "DEF9012", "Dell", "850", "Active"],
        ["Microsoft Mouse", "GHI3456", "Microsoft", "30", "Active"],
        ["Samsung Smartphone", "JKL7890", "Samsung", "700", "Active"],
        // Add more entries here...
        ["Lenovo Yoga Laptop", "MNO1234", "Lenovo", "1300", "Active"],
        ["Acer Aspire", "PQR5678", "Acer", "550", "Active"],
        ["Apple Watch", "STU9012", "Apple", "400", "Active"],
        ["Asus Monitor", "VWX3456", "Asus", "300", "Active"],
        ["HP Scanner", "YZA7890", "HP", "150", "Active"],
        // Add more entries here...
        ["Dell Inspiron", "BCD1234", "Dell", "950", "Active"],
        ["Sony PlayStation", "EFG5678", "Sony", "300", "Active"],
        ["LG TV", "HIJ9012", "LG", "700", "Active"],
        ["Toshiba Laptop", "KLM3456", "Toshiba", "800", "Active"],
        ["Amazon Kindle", "NOP7890", "Amazon", "120", "Active"],
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
            icon: <WidgetsIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Storage",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // Define an array of tab objects with label and content properties
    const tabs = [
        {
            label: "Desktop",
            content: (
                <div className="py-6 overflow-x-auto max-w-[330px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
                    <Card>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
            ),
        },
        {
            label: "Laptops",
            content: (
                <div className="py-6 overflow-x-auto max-w-[330px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
                    <Card>
                        <MUIDataTable
                            data={data1}
                            columns={columns}
                            options={options}
                        />
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
            {/* Pass the tabs array to the VerticalTabs component */}
            <VerticalTabs tabs={tabs} />
        </MainLayout>
    );
}
