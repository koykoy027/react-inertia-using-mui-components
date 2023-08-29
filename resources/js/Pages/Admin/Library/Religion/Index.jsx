import { Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";

export default function Index() {
    const columns = ["Name", "Status"];

    //   const data = genders.map((data) => [
    //       data.gender,
    //       data.isActive ? "Active" : "Inactive",
    //   ]);

    const data = [
        ["Buddhism", "Active"],
        ["Christian", "Active"],
        ["Confucianism", "Active"],
        ["Hinduism", "Active"],
        ["Islam", "Active"],
        ["Judaism", "Active"],
        ["Muslim", "Active"],
        ["Shinto", "Inactive"],
        ["Sikhism", "Inactive"],
        ["Taoism", "Active"],
    ];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    return (
        <>
            <MUIDataTable
                title={"Religion List"}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
}
