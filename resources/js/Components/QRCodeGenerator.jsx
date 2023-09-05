import React, { useState } from "react";
import QRCode from "qrcode.react";
import { Box, TextField } from "@mui/material";

const QRCodeGenerator = () => {
    const [ProductName, setProductName] = useState("");

    const handleInputChange = (e) => {
        setProductName(e.target.value);
    };
    const [Inventory, setInventory] = useState("");
    const handleInventoryChange = (e) => {
        setInventory(e.target.value);
    };

    const [Department, setDepartment] = useState("");
    const handleDepartmentChange = (e) => {
        setDepartment(e.target.value);
    };

    const [Purchase, setPurchase] = useState("");
    const handlePurchaseChange = (e) => {
        setPurchase(e.target.value);
    };

    const value =
        "Product Name: " +
        ProductName +
        "\n" +
        "Inventory: " +
        Inventory +
        "\n" +
        "Department: " +
        Department +
        "\n" +
        "Purchase. :" +
        Purchase;

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
        <div className="grid grid-col lg:grid-cols-2 gap-2 items-center px-24 justify-start h-screen lg:h-96 bg-fre shadow-md">
            <div className="grid grid-row justify-start gap-5">
                <h1 className="text-3xl font-bold mb-4">QR Code Generator</h1>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row", // or "column" depending on your desired layout
                        alignItems: "center", // Adjust as needed
                        width: 600,
                        maxWidth: "100%",
                    }}
                >
                    <div className="grid grid-col gap-4 w-full">
                        <TextField
                            id="outlined-basic"
                            label="Product Name"
                            variant="outlined"
                            size="small"
                            value={ProductName}
                            fullWidth
                            onChange={handleInputChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Product ID"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={Inventory}
                            onChange={handleInventoryChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Department"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={Department}
                            onChange={handleDepartmentChange}
                        />
                        <TextField
                            id="outlined-basic"
                            label="Purchase Price"
                            variant="outlined"
                            size="small"
                            fullWidth
                            value={Purchase}
                            onChange={handlePurchaseChange}
                        />
                    </div>
                </Box>
            </div>
            <div className="">
                <div className="flex justify-center rounded border-2 py-10 border-gray-400">
                    {ProductName && (
                        <QRCode id="qrcode-canvas" size={128} value={value} />
                    )}
                </div>
                <div className="mt-4 grid grid-col-1 gap-2 ">
                    <DownloadButton />
                    <PrintButton />
                </div>
            </div>
        </div>
    );
};

export default QRCodeGenerator;
