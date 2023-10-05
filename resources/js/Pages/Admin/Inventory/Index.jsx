import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import EastIcon from "@mui/icons-material/East";
import { Link } from "@inertiajs/react";
import MUIDataTable from "mui-datatables";

export default function Index({ auth, inventories }) {
    const columns = ["Category", "Name", "Status", ""];
    const data = inventories.map((data) => [
        data.category_equipment ? data.equipment.name : "N/A",
        // data.category_equipment,
        data.name,
        data.status,
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
            <MUIDataTable
                title={"Inventories"}
                data={data}
                columns={columns}
                options={options}
            />
        </MainLayout>
    );
}
