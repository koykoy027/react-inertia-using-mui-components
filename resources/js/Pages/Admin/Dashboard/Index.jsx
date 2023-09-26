import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { Card, Typography } from "@mui/material";
import React from "react";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import CarCrashSharpIcon from "@mui/icons-material/CarCrashSharp";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import MUIDataTable from "mui-datatables";
import StackBars from "@/Components/StackBar";
import BasicPie from "@/Components/BasicPie";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
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
    ];

    // Now, you have a total of 108 rows in the `data` array.

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    const breadcrumbItems = [
        {
            icon: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
            text: "Home",
            url: "/",
        },
        {
            icon: <DashboardIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Administrator",
            url: "/material-ui/getting-started/installation/",
        },
    ];
    return (
        <MainLayout user={auth.user}>
            <CustomBreadcrumbs items={breadcrumbItems} />
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-7 w-full">
                <ShippingCard
                    icon={<LocalShippingSharpIcon fontSize="large" />}
                    title="To Be Order"
                    count="1"
                />
                <ShippingCard
                    icon={<CarCrashSharpIcon fontSize="large" />}
                    title="To Be Shipped"
                    count="3"
                />
                <ShippingCard
                    icon={
                        <ProductionQuantityLimitsSharpIcon fontSize="large" />
                    }
                    title="To Be Delivered"
                    count="5"
                />
            </div>
            <div className="grid grid-col lg:grid-cols-2 gap-5">
                <Card>
                    <Typography paragraph>
                        <StackBars />
                    </Typography>
                </Card>
                <Card>
                    <Typography paragraph>
                        <BasicPie />
                    </Typography>
                </Card>
            </div>
            <div className="py-6">
                <Card clas>
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
