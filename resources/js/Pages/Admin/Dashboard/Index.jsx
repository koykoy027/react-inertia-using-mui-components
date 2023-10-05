import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { Card, Paper, Typography } from "@mui/material";
import React from "react";
import CategorySharpIcon from "@mui/icons-material/CategorySharp";
import CarCrashSharpIcon from "@mui/icons-material/CarCrashSharp";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import DeleteForeverSharpIcon from "@mui/icons-material/DeleteForeverSharp";
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
        <div className="flex justify-end pr-5">
            <Link href={route("dashboard")}>
                <EastIcon />
            </Link>
        </div>, // Replace 'insert_icon_name_here' with the actual icon name
    ]);

    const columns = ["ID", "Name", "Email", ""];
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
                <ShippingCard
                    icon={<CategorySharpIcon fontSize="large" />}
                    title="Total Items"
                    count="1"
                />
                <ShippingCard
                    icon={
                        <ProductionQuantityLimitsSharpIcon fontSize="large" />
                    }
                    title="Borrowed Items"
                    count="3"
                />
                <ShippingCard
                    icon={<DeleteForeverSharpIcon fontSize="large" />}
                    title="Total Disposed"
                    count="5"
                />
            </div>

            <div class="grid grid-col lg:grid-cols-2 gap-5 py-6 max-w-[370px] md:max-w-[100vh] lg:max-w-[100%]">
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
            {/* 
            <div class="py-6 lg:overflow-none md:overflow-x-auto max-w-[370px] md:max-w-[100vh] lg:max-w-[100%]">
                <Card>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </div> */}

            <div className="grid grid-col md:grid-cols-3 lg:grid-cols-3 gap-5">
                <div class="py-6 lg:overflow-none md:overflow-x-auto max-w-[370px] md:max-w-[100vh] lg:max-w-[100%]">
                    <Card>
                        <Typography variant="button" className="py-2 px-5">
                            Latest Users
                        </Typography>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
                <div class="py-6 lg:overflow-none md:overflow-x-auto max-w-[370px] md:max-w-[100vh] lg:max-w-[100%]">
                    <Card>
                        <Typography variant="button" className="py-2 px-5">
                            Latest Branch
                        </Typography>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
                <div class="py-6 lg:overflow-none md:overflow-x-auto max-w-[370px] md:max-w-[100vh] lg:max-w-[100%]">
                    <Card>
                        <Typography variant="button" className="py-2 px-5">
                            Recently Added Equipments
                        </Typography>
                        <MUIDataTable
                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </Card>
                </div>
            </div>
        </MainLayout>
    );
}
