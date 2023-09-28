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
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import EastIcon from "@mui/icons-material/East";
import Create from "./Create";

export default function Index({ auth, mustVerifyEmail, status, products }) {
    const data = products.map((product) => [
        product.productName,
        product.productId,
        product.branch,
        product.status,
        product.productDescription,
        <EastIcon />,
    ]);

    const columns = [
        "Product Name",
        "Product ID",
        "Branch",
        "Status",
        "Description",
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
            icon: <InventorySharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Product",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <div>
                <Create />
            </div>
            <div className="py-6 overflow-x-auto max-w-[370px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
                <div className="sm:hidden">
                    {/* Mobile View */}
                    <Card>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                            size={"small"}
                            // You can apply the stickyHeader class if needed for mobile view
                        />
                    </Card>
                </div>
                <div className="hidden sm:block">
                    {/* Desktop View */}
                    <Card>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                            size={"small"}
                            stickyHeader
                        />
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}
