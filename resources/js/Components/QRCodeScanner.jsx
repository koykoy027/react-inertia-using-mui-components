import React, { Component } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class QRCodeScanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            error: null,
        };
    }

    // Add a function to handle the QR code scan result
    handleQRCodeScan(result) {
        if (result) {
            this.setState({ data: result });
        } else {
            this.setState({ error: "No QR code found" });
        }
    }

    onCameraError(error) {
        this.setState({ error: `Camera error: ${error.message}` });
    }

    render() {
        return (
            <div>
                <h1 className="text-center absolute top-24">QR Code Scanner</h1>
                {this.state.data && (
                    <div>
                        <p>Scanned QR Code:</p>
                        <p>{this.state.data}</p>
                    </div>
                )}
                {this.state.error && <p>{this.state.error}</p>}
                <Camera
                    idealFacingMode={FACING_MODES.ENVIRONMENT} // Use the back camera (you can change this to FACING_MODES.USER for the front camera)
                    onTakePhoto={(dataUri) => this.handleQRCodeScan(dataUri)} // Pass the dataUri to the scan handler
                    onCameraError={(error) => this.onCameraError(error)}
                    isImageMirror={false} // To prevent mirroring of the camera feed
                />
            </div>
        );
    }
}

export default QRCodeScanner;
