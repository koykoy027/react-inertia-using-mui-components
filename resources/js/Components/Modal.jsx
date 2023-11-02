import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    borderRadius: 1,
    boxShadow: 24,
    p: 4,
};

// Define a media query for screens with a maximum width of 768px
const responsiveStyle = {
    "@media (max-width: 768px)": {
        width: "100%",
        height: "100%", // Adjust width for smaller screens
        maxWidth: "none", // Remove the maximum width
        borderRadius: 0, // Remove border radius
        boxShadow: "none", // Remove box shadow
        overflow: "auto", // Add overflow for scrolling
    },
};

const finalStyle = { ...style, ...responsiveStyle };

export default function ReusableModal({ content, title, icon, header }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                variant="contained"
                onClick={handleOpen}
                className="flex items-center w-full md:w-full lg:w-48"
            >
                {icon}
                {title}
            </Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={finalStyle}>
                        <div className="flex justify-end">
                            <CloseIcon onClick={handleClose} />
                        </div>
                        <div className="flex justify-center p-10">{header}</div>
                        {content}
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}
