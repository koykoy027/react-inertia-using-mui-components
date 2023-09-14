import React, { useEffect, useState } from "react";

export default function BarcodeScanner() {
    const [decodedResult, setDecodedResult] = useState(null);

    useEffect(() => {
        const quaggaScript = document.createElement("script");
        quaggaScript.src =
            "https://unpkg.com/html5-qrcode@2.0.9/dist/html5-qrcode.min.js";

        quaggaScript.onload = () => {
            const html5QrcodeScanner = new Html5QrcodeScanner("qr-reader", {
                fps: 10,
                qrbox: 250,
            });

            function onScanSuccess(decodedText, decodedResult) {
                // console.log(`Code scanned = ${decodedText}`, decodedResult);
                setDecodedResult(decodedText); // Update the state with the scanned result
            }

            html5QrcodeScanner.render(onScanSuccess);
        };

        document.body.appendChild(quaggaScript);

        return () => {
            document.body.removeChild(quaggaScript);
        };
    }, []);

    return (
        <div>
            <p>Decoded Result: {decodedResult}</p>
            <div id="qr-reader" style={{ width: "500px" }}></div>
        </div>
    );
}
