import { Typography } from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";

export default function Index({ genders }) {
    const columns = ["Position", "Location"];

    //   const data = genders.map((data) => [
    //       data.gender,
    //       data.isActive ? "Active" : "Inactive",
    //   ]);

    const data = [
        ["Inventory Clerk", "MAKATI CITY"],
        ["Sales Manager", "QUEZON CITY"],
        ["Customer Service Representative", "MANILA"],
        ["Software Developer", "TAGUIG CITY"],
        ["Marketing Coordinator", "CEBU CITY"],
        ["Accountant", "DAVAO CITY"],
        ["Warehouse Supervisor", "PASIG CITY"],
        ["HR Specialist", "MANDALUYONG CITY"],
        ["Operations Manager", "PASAY CITY"],
        ["Graphic Designer", "MUNTINLUPA CITY"],
        ["Inventory Clerk", "MAKATI CITY"],
        ["Sales Manager", "QUEZON CITY"],
        ["Customer Service Representative", "MANILA"],
        ["Software Developer", "TAGUIG CITY"],
        ["Marketing Coordinator", "CEBU CITY"],
        ["Accountant", "DAVAO CITY"],
        ["Warehouse Supervisor", "PASIG CITY"],
        ["HR Specialist", "MANDALUYONG CITY"],
        ["Operations Manager", "PASAY CITY"],
        ["Graphic Designer", "MUNTINLUPA CITY"],
        ["Data Analyst", "QUEZON CITY"],
        ["Product Manager", "MANILA"],
        ["Frontend Developer", "TAGUIG CITY"],
        ["Event Planner", "CEBU CITY"],
        ["Financial Analyst", "DAVAO CITY"],
        ["Logistics Coordinator", "PASIG CITY"],
        ["Recruitment Specialist", "MANDALUYONG CITY"],
        ["Restaurant Manager", "PASAY CITY"],
        ["UI/UX Designer", "MUNTINLUPA CITY"],
        ["Quality Assurance Tester", "QUEZON CITY"],
        ["Marketing Manager", "MANILA"],
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
