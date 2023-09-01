import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";

export default function BasicTextFields({ label, variant, id, size, type }) {
    return (
        <Box
            component="form"
            sx={{
                maxWidth: "100%",
            }}
            noValidate
            autoComplete="off"
            focused
        >
            <TextField
                fullWidth
                size={size}
                id={id}
                label={label}
                variant={variant}
                type={type}
            />
        </Box>
    );
}
