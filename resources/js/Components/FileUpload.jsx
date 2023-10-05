import React, { useState } from "react";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

export default function FileUpload() {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        // Check if the selected file is a PDF
        if (file && file.type === "application/pdf") {
            setSelectedFile(file);
        } else {
            console.log("Please select a PDF file.");
        }
    };

    const handleUpload = () => {
        if (selectedFile) {
            // Check if the file size is within the limit (20MB)
            if (selectedFile.size <= 20 * 1024 * 1024) {
                // Perform the upload operation, e.g., using Axios or fetch
                console.log(`Uploading file: ${selectedFile.name}`);
            } else {
                console.log("File size exceeds the 20MB limit");
            }
        } else {
            console.log("No file selected");
        }
    };

    return (
        <div className="grid grid-col gap-4">
            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <input
                    type="file"
                    accept=".pdf" // Accept only PDF files
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-input"
                />
                <label htmlFor="file-input">
                    <Button
                        variant="contained"
                        component="span"
                        startIcon={<CloudUploadIcon />}
                        color="primary"
                    >
                        Upload PDF
                    </Button>
                </label>
                <span className="flex justify-start items-center">
                    {selectedFile
                        ? `Selected File: ${selectedFile.name}`
                        : "No file selected"}
                </span>
            </div>
            {/* <Button
                variant="contained"
                onClick={handleUpload}
                disabled={!selectedFile}
                className="ml-2"
            >
                Upload
            </Button> */}
        </div>
    );
}
