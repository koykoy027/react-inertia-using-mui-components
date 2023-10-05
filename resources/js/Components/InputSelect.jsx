import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function InputSelect({ label, value, options, onChange }) {
    return (
        <FormControl fullWidth size="large">
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={onChange}>
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
