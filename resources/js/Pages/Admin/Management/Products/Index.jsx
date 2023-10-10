import MainLayout from "@/Layouts/MainLayout";
import { Card, Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@inertiajs/react";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import EastIcon from "@mui/icons-material/East";

export default function Index({ auth, mustVerifyEmail, status, products }) {
    const data = products.map((product) => [
        product.productName,
        product.productId,
        product.branch,
        product.status,
        product.productDescription,
        product.productFileUpload,
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
        "productFileUpload",
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
            text: "Inventory",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    return (
        <MainLayout user={auth.user}>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <div className="overflow-x-auto max-w-[370px] lg:max-h-[100%] lg:max-w-[100%] max-h-[500px] sm:max-h-[auto]">
                <div className="sm:hidden">
                    {/* Mobile View */}
                    <div className="px-5 py-5 border-b-4 border-sky-500">
                        <Typography variant="h6">Inventory</Typography>
                    </div>
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
                        <div className="px-5 py-5 border-b-4 border-sky-500">
                            <Typography variant="h6">Inventory</Typography>
                        </div>
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
