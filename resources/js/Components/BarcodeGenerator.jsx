import React, { useState } from "react";
import Barcode from "react-barcode";
import { Box, TextField } from "@mui/material";

const BarcodeGenerator = () => {
    const [barcodeValue, setBarcodeValue] = useState("");

    const handleInputChange = (e) => {
        setBarcodeValue(e.target.value);
    };

    return (
        <div className="grid grid-col lg:grid-cols-2 gap-2 items-center px-24 justify-start h-screen lg:h-96 bg-fre shadow-md">
            <div className="grid grid-row justify-start gap-5">
                <h1 className="text-3xl font-bold mb-4">Barcode Generator</h1>
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
                            value={barcodeValue}
                            fullWidth
                            onChange={handleInputChange}
                        />
                    </div>
                </Box>
            </div>
            <div className="">
                <div className="flex justify-center rounded border-2 py-10 border-gray-400">
                    {barcodeValue && (
                        <Barcode value={barcodeValue} width={2} height={80} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default BarcodeGenerator;
