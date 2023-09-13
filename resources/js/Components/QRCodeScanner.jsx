import { Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react"; // Import useRef

// import "./styles.css"; // Import your CSS file

function QRCodeScanner() {
    const videoRef = useRef(null); // Create a ref for the video element

    useEffect(() => {
        const qrcode = window.qrcode;

        const canvasElement = document.getElementById("qr-canvas");
        const canvas = canvasElement.getContext("2d");

        const qrResult = document.getElementById("qr-result");
        const outputData = document.getElementById("outputData");
        const btnScanQR = document.getElementById("btn-scan-qr");

        let scanning = false;

        qrcode.callback = (res) => {
            if (res) {
                outputData.innerText = res;
                scanning = false;

                if (videoRef.current) {
                    const stream = videoRef.current.srcObject;
                    const tracks = stream.getTracks();

                    tracks.forEach((track) => {
                        track.stop();
                    });
                }

                qrResult.hidden = false;
                canvasElement.hidden = true;
                btnScanQR.hidden = false;
            }
        };

        btnScanQR.onclick = () => {
            navigator.mediaDevices
                .getUserMedia({ video: { facingMode: "environment" } })
                .then(function (stream) {
                    scanning = true;
                    qrResult.hidden = true;
                    btnScanQR.hidden = true;
                    canvasElement.hidden = false;
                    if (videoRef.current) {
                        videoRef.current.setAttribute("playsinline", true);
                        videoRef.current.srcObject = stream;
                        videoRef.current.play();
                        tick();
                        scan();
                    }
                });
        };

        function tick() {
            if (videoRef.current) {
                canvasElement.width = 400; // Set your desired width here
                canvasElement.height = 300; // Set your desired height here
                canvas.drawImage(
                    videoRef.current,
                    0,
                    0,
                    canvasElement.width,
                    canvasElement.height
                );

                scanning && requestAnimationFrame(tick);
            }
        }

        function scan() {
            try {
                qrcode.decode();
            } catch (e) {
                setTimeout(scan, 300);
            }
        }
    }, []);

    function copy() {
        // Get the text you want to copy
        // Get the text field
        var copyText = document.getElementById("outputData");

        // Copy the text inside the text field
        navigator.clipboard.writeText(copyText.value);

        // Alert the copied text
        alert("Copied the text: " + copyText.value);
    }

    return (
        <div id="container">
            <a id="btn-scan-qr">
                <Button>Start</Button>
            </a>

            <canvas hidden id="qr-canvas"></canvas>

            <div
                id="qr-result"
                className="grid grid-cols justify-start gap-2"
                hidden
            >
                <b>Data:</b> <span id="outputData"></span>
                <Button variant="contained" size="small" onClick={copy}>
                    Copy
                </Button>
            </div>

            <div className="flex justify-center items-center">
                <video
                    ref={videoRef}
                    style={{
                        width: "100%", // Set your desired width here, or use a percentage for responsiveness
                        height: "auto", // This will maintain the aspect ratio
                    }}
                ></video>
            </div>
        </div>
    );
}

export default QRCodeScanner;
