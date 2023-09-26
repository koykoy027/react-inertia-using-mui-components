import React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
}

export default function CustomBreadcrumbs({ items }) {
    return (
        <div role="presentation" onClick={handleClick}>
            <Breadcrumbs aria-label="breadcrumb">
                {items.map((item, index) => (
                    <Link
                        key={index}
                        underline="hover"
                        sx={{ display: "flex", alignItems: "center" }}
                        color="inherit"
                        href={item.url}
                    >
                        {item.icon}
                        {item.text}
                    </Link>
                ))}
            </Breadcrumbs>
        </div>
    );
}
