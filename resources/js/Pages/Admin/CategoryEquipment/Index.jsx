import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "@inertiajs/react";
import MUIDataTable from "mui-datatables";
import { Button } from "@mui/material";

export default function Index({ auth, categoriesEquipment }) {
    const columns = ["Category", "Name", ""];
    const data = categoriesEquipment.map((data) => [
        data.categories ? data.categories.name : "N/A",
        data.name,
        <div className="flex justify-end pr-5">
            <Link href="#">
                <EastIcon />
            </Link>
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
            <div className="flex justify-end mb-4">
                <Link href={route("categories-equipment.create")}>
                    <Button
                        variant="contained"
                        color="primary"
                        endIcon={<EastIcon />}
                    >
                        Add Category Equipment
                    </Button>
                </Link>
            </div>
            <MUIDataTable
                title={"Categories Equipment"}
                data={data}
                columns={columns}
                options={options}
            />
        </MainLayout>
    );
}
