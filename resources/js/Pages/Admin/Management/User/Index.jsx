import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import MUIDataTable from "mui-datatables";
import Create from "./Create";
import { useRef, useState } from "react";
import { Link, useForm } from "@inertiajs/react";
import EastIcon from "@mui/icons-material/East";
import { Button } from "@mui/material";

export default function Index({ auth, datas }) {
    const columns = ["Name", "Email", "Role", ""];

    const data = datas.map((data) => [
        data.name,
        data.email,
        data.role,
        <div className="flex justify-end">
            <Button
                variant="text"
                color="primary"
                startIcon={<EastIcon />}
            ></Button>
        </div>,
    ]);

    const options = {
        filterType: "checkBox",
        elevation: 1,
        responsive: "standard",
        selectableRows: false,
    };

    return (
        <MainLayout user={auth.user}>
            <div className="flex justify-end">
                <Create />
            </div>
            <div className="py-6">
                <MUIDataTable
                    title="Users"
                    data={data}
                    columns={columns}
                    options={options}
                />
            </div>
        </MainLayout>
    );
}
