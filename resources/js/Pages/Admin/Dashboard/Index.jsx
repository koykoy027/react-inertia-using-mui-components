import CustomCard from "@/Components/CustomCard";
import MainLayout from "@/Layouts/MainLayout";
import {
    Card,
    CardContent,
    Typography,
    CardActions,
    Button,
} from "@mui/material";
import React from "react";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import CarCrashSharpIcon from "@mui/icons-material/CarCrashSharp";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";
import MUIDataTable from "mui-datatables";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
import StackBars from "@/Components/StackBar";
import BasicPie from "@/Components/BasicPie";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import DashboardIcon from "@mui/icons-material/Dashboard";
import EastIcon from "@mui/icons-material/East";

import { Link } from "@inertiajs/react";

export default function Index({ auth, mustVerifyEmail, status, users }) {
    // this variable data with the code .map is help determine the backend
    const data = users.map(
        (user) => [user.id, user.name, user.email],
        <EastIcon />
    );

    const columns = ["ID", "Name", "Email", " "];
    // Now, you have a total of 108 rows in the `data` array.

    const options = {
        filterType: "checkBox",
        elevation: 1,
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
            <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 py-8">
                <CustomCard
                    icon={<CategorySharpIcon fontSize="large" />}
                    title="Total Items"
                    count="1"
                />
                <CustomCard
                    icon={
                        <ProductionQuantityLimitsSharpIcon fontSize="large" />
                    }
                    title="Borrowed Items"
                    count="3"
                />
                <CustomCard
                    icon={<DeleteForeverSharpIcon fontSize="large" />}
                    title="Total Disposed"
                    count="5"
                />
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-1 sm:grid-cols-1 gap-4">
                <Card className="lg:col-span-2">
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
        </MainLayout>
    );
}
