import React, { Component } from "react";
import Camera, { FACING_MODES } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

class BarcodeScanner extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            error: null,
        };
    }

    onTakePhoto(dataUri) {
        // Here, you can process the barcode dataUri.
        this.setState({ data: dataUri });
    }

    onCameraError(error) {
        this.setState({ error: `Camera error: ${error.message}` });
    }

    render() {
        return (
            <div>
                <h1>Barcode Scanner</h1>
                {this.state.data && (
                    <div>
                        <p>Scanned Data:</p>
                        <p>{this.state.data}</p>
                    </div>
                )}
                {this.state.error && <p>{this.state.error}</p>}
                <Camera
                    idealFacingMode={FACING_MODES.ENVIRONMENT} // Use the back camera (you can change this to FACING_MODES.USER for the front camera)
                    onTakePhoto={(dataUri) => this.onTakePhoto(dataUri)}
                    onCameraError={(error) => this.onCameraError(error)}
                />
            </div>
        );
    }
}

export default BarcodeScanner;
