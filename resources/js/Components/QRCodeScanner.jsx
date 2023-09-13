import React, { useState, useCallback } from "react";
import { QrReader } from "react-qr-reader";

const QRCodeScanner = () => {
    const [selected, setSelected] = useState("environment");
    const [startScan, setStartScan] = useState(false);
    const [loadingScan, setLoadingScan] = useState(false);
    const [data, setData] = useState("");

    const handleScan = useCallback(
        (scanData) => {
            setLoadingScan(true);
            console.log("Scanned Data:", scanData);
            if (scanData) {
                setData(scanData);
                setStartScan(false);
                setLoadingScan(false);
            }
        },
        [setData, setStartScan, setLoadingScan]
    );

    const handleError = (err) => {
        console.error(err);
    };

    return (
        <div className="font-montserrat text-center flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold mb-4">QR Code Scanner</h1>
            <h2 className="mb-4">Last Scan: {selected}</h2>

            <button
                className="bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded-lg cursor-pointer transition duration-1000 ease-in-out"
                onClick={() => {
                    setStartScan(!startScan);
                }}
            >
                {startScan ? "Stop Scan" : "Start Scan"}
            </button>
            {startScan && (
                <>
                    <select
                        className="mb-4"
                        value={selected}
                        onChange={(e) => {
                            setSelected(e.target.value);
                        }}
                    >
                        <option value={"environment"}>Back Camera</option>
                        <option value={"user"}>Front Camera</option>
                    </select>
                    <QrReader
                        facingMode={selected}
                        delay={1000}
                        onError={handleError}
                        onScan={handleScan}
                        className="w-72"
                    />
                </>
            )}
            {loadingScan && <p>Loading</p>}
            {data !== "" && <p>{data}</p>}
        </div>
    );
};

export default QRCodeScanner;
