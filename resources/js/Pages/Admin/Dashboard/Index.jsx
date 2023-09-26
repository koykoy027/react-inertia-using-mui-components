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
import EastIcon from "@mui/icons-material/East";

import { Link } from "@inertiajs/react";

export default function Index({ auth, mustVerifyEmail, status, users }) {
    // this variable data with the code .map is help determine the backend
    const data = users.map((user) => [
        user.id,
        user.name,
        user.email,
        <EastIcon />, // Replace 'insert_icon_name_here' with the actual icon name
    ]);

    const columns = ["ID", "Name", "Email", ""];
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
            <div class="grid grid-cols-1 py-10 md:grid-cols-3 gap-5 overflow-x-auto max-w-[370px] lg:max-w-[100%]">
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

            <div class="grid grid-col lg:grid-cols-2 gap-5 py-6 max-w-[370px] lg:max-w-[100%]">
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

            <div class="py-6 overflow-x-auto max-w-[370px] lg:max-w-[100%]">
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
