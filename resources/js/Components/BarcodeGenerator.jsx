import React, { useState } from "react";
import Barcode from "react-barcode";
import { Box, TextField } from "@mui/material";

const BarcodeGenerator = () => {
    // const [barcodeValue, setBarcodeValue] = useState("");

    const [ProductName, setProductName] = useState("");

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    const value = ProductName;

    return (
        <div className="grid grid-col gap-2 items-center px-24 justify-center h-screen lg:h-96 bg-fre shadow-md">
            <div className="grid grid-col justify-start gap-5">
                <h1 className="text-3xl text-center font-bold mb-4">
                    Generate Barcode
                </h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        width: 600,
                        maxWidth: "100%",
                    }}
                >
                    <div className="grid grid-col gap-4 w-full">
                        <TextField
                            id="barcode-value-input"
                            label="Barcode Value"
                            variant="outlined"
                            size="small"
                            value={ProductName}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </div>
                </Box>
            </div>
            <div className="">
                <div className="flex justify-center border-gray-400">
                    {ProductName && (
                        <Barcode value={value} width={2} height={80} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BarcodeGenerator;
