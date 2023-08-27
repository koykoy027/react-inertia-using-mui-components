import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";

export default function DeleteAccount({ className = "" }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        const confirmation = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (confirmation) {
            destroy(route("profile.destroy"), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    return (
        <>
            <div className="mb-5">
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Delete Account
                </Typography>
                <Typography variant="body2">
                    Once your account is deleted, all of its resources and data
                    will be permanently deleted. Before deleting your account,
                    please download any data or information that you wish to
                    retain.
                </Typography>
            </div>
            <Button variant="contained" color="error" onClick={handleClickOpen}>
                Delete Account
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={deleteUser}>
                    <DialogTitle>
                        Are you sure you want to delete your account?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Once your account is deleted, all of its resources
                            and data will be permanently deleted. Please enter
                            your password to confirm you would like to
                            permanently delete your account.
                        </DialogContentText>

                        <TextField
                            id="password"
                            type="password"
                            name="password"
                            ref={passwordInput}
                            value={data.password}
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                            label="Password"
                            sx={{ marginTop: 2 }}
                            fullWidth
                        />

                        <Typography variant="caption" color="error">
                            {errors.password}
                        </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="outlined" onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button variant="contained" color="error" type="submit">
                            Delete Account
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </>
    );
}
