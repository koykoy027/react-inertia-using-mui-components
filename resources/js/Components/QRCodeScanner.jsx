import React, { useState } from "react";

const QRCodeScanner = () => {
    const [result, setResult] = useState(null);

    const handleScan = (data) => {
        if (data) {
            setResult(data);
        }
    };

    const handleError = (error) => {
        console.error(error);
    };

    return (
        <div className="bg-gray-200 h-96 flex flex-col items-center justify-center">
            <h1 className="text-2xl mb-4">QR Code Scanner</h1>
            <div className="w-2/3">
                {/* <QrReader
                    delay={300}
                    onError={handleError}
                    onScan={handleScan}
                    style={{ width: "100%" }}
                /> */}
            </div>
            {result && (
                <div className="mt-4">
                    <p className="text-xl font-semibold">Scanned Result:</p>
                    <p className="text-lg">{result}</p>
                </div>
            )}
        </div>
    );
};

export default QRCodeScanner;
