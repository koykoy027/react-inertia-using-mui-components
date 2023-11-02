import React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

export default function MySelectComponent({
    label,
    value,
    options,
    onChange,
    style,
}) {
    return (
        <FormControl style={style} fullWidth size="small">
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={onChange}>
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}
