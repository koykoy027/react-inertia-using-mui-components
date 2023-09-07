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

    const DownloadButton = () => {
        const handleDownload = () => {
            const canvas = document.getElementById("qrcode-canvas");
            const a = document.createElement("a");
            a.href = canvas.toDataURL("image/png");
            a.download = "qrcode.png";
            a.click();
        };

        return (
            <button
                onClick={handleDownload}
                className="bg-blue-500 text-white px-4 py-2 rounded-md"
                disabled={!ProductName}
            >
                Download QR Code
            </button>
        );
    };

    const PrintButton = () => {
        const handlePrint = () => {
            const printWindow = window.open("", "", "width=600,height=600");
            printWindow.document.open();
            printWindow.document.write(
                "<html><head><title>QR Code</title></head><body>"
            );
            printWindow.document.write(
                `<img src="${document
                    .getElementById("qrcode-canvas")
                    .toDataURL()}" alt="QR Code" />`
            );
            printWindow.document.write("</body></html>");
            printWindow.document.close();
            printWindow.print();
            printWindow.close();
        };

        return (
            <button
                onClick={handlePrint}
                className="bg-green-500 text-white px-4 py-2 rounded-md"
                disabled={!ProductName}
            >
                Print QR Code
            </button>
        );
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
                            value={ProductName}
                            fullWidth
                            onChange={handleInputChange}
                            type="number"
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
                <div className="grid grid-cols-2 gap-5 py-10">
                    <DownloadButton />
                    <PrintButton />
                </div>
            </div>
        </div>
    );
};

export default BarcodeGenerator;
