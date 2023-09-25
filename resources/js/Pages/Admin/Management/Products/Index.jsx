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
import Create from "./Create";

export default function Index({ auth, mustVerifyEmail, status, products }) {
    const data = products.map((product) => [
        product.id,
        product.productName,
        product.productId,
        product.itemName,
        product.status,
    ]);

    const columns = [
        "Product Name",
        "Product ID",
        "Item Name",
        "Quantity Needed",
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
                            <Create />
                        </div>
                    }
                />
            </div>
            <div className="py-6 overflow-x-auto max-w-[330px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
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
