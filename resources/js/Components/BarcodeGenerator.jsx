import React, { useState, useRef } from "react";
import Barcode from "react-barcode";
import { Box, Button, TextField } from "@mui/material";
import html2canvas from "html2canvas";

const BarcodeGenerator = () => {
    const [productName, setProductName] = useState("");
    const barcodeRef = useRef(null);

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };

    const downloadBarcode = () => {
        if (barcodeRef.current) {
            html2canvas(barcodeRef.current).then((canvas) => {
                // Create an "a" element to trigger the download
                const a = document.createElement("a");
                a.href = canvas.toDataURL("image/png");
                a.download = "barcode.png";
                a.click();
            });
        }
    };

    const printBarcode = () => {
        const barcodeCanvas = document.getElementById("barcode-canvas");
        const printWindow = window.open("", "", "width=1000,height=1000");
        printWindow.document.open();
        printWindow.document.write(
            "<html><head><title>Print</title></head><body>"
        );
        printWindow.document.write(barcodeCanvas.innerHTML);
        printWindow.document.write("</body></html>");
        printWindow.document.close();
        printWindow.print();
        printWindow.close();
    };

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
                            value={productName}
                            fullWidth
                            onChange={handleInputChange}
                            type="text"
                        />
                    </div>
                </Box>
            </div>
            <div>
                <div
                    ref={barcodeRef}
                    id="barcode-canvas"
                    className="flex justify-center border-gray-400"
                >
                    {productName && (
                        <Barcode
                            id="barcode-canvas"
                            value={productName}
                            width={3}
                            height={80}
                            canvas
                        />
                    )}
                </div>
                <div className="grid grid-cols-2 gap-5 py-10">
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={downloadBarcode}
                    >
                        Download
                    </Button>
                    <Button
                        color="success"
                        variant="contained"
                        onClick={printBarcode}
                    >
                        Print
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BarcodeGenerator;
