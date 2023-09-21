import { Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";

export default function Index({ columns, data }) {

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    return (
        <>
            <MUIDataTable
                title={"Gender List"}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
}
