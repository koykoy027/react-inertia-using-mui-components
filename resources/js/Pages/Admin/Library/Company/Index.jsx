import { Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";

export default function Index({ genders }) {
    const columns = ["Company Name", "Location"];

    //   const data = genders.map((data) => [
    //       data.gender,
    //       data.isActive ? "Active" : "Inactive",
    //   ]);

    const data = [
        ["EasyPC", "MAKATI CITY"],
        ["ARK-PC", "CAMARIN CALOOCAN CITY"],
        ["Tech Haven", "QUEZON CITY"],
        ["Gadget Galaxy", "TAGUIG CITY"],
        ["Digital Delights", "MANILA"],
        ["PC Paradise", "PASAY CITY"],
        ["ElectroTech", "MANDALUYONG CITY"],
        ["Tech Trends", "PASIG CITY"],
        ["Gizmo World", "QUEZON CITY"],
        ["Future Fusion", "MARIKINA CITY"],
        ["PC Powerhouse", "LAS PIÑAS CITY"],
        ["Cyber Central", "PARAÑAQUE CITY"],
        ["MegaBytes", "VALENZUELA CITY"],
        ["Innovate IT", "ANTIPOLLO CITY"],
        ["E-Tech Solutions", "SAN JUAN CITY"],
        ["iGadget Hub", "MUNTINLUPA CITY"],
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
                title={"Gender List"}
                data={data}
                columns={columns}
                options={options}
            />
        </>
    );
}
