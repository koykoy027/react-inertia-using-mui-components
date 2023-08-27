import { useRef } from "react";
import { useForm } from "@inertiajs/react";
import { Button, TextField, Typography } from "@mui/material";

export default function UpdatePassword() {
    const passwordInput = useRef();
    const currentPasswordInput = useRef();

    const {
        data,
        setData,
        errors,
        put,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        current_password: "",
        password: "",
        password_confirmation: "",
    });

    const updatePassword = (e) => {
        e.preventDefault();
        const confirmation = window.confirm("Do you want to change password?");

        if (confirmation) {
            put(route("password.update"), {
                preserveScroll: true,
                onSuccess: () => reset(),
                onError: (errors) => {
                    if (errors.password) {
                        reset("password", "password_confirmation");
                        passwordInput.current.focus();
                    }

                    if (errors.current_password) {
                        reset("current_password");
                        currentPasswordInput.current.focus();
                    }
                },
            });
        }
    };

    return (
        <>
            <div className="mb-5">
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Update Password
                </Typography>
                <Typography variant="body2">
                    Ensure your account is using a long, random password to stay
                    secure.
                </Typography>
            </div>

            <form onSubmit={updatePassword} className="grid gap-2">
                <TextField
                    label="Current Password"
                    type="password"
                    id="current_password"
                    ref={currentPasswordInput}
                    value={data.current_password}
                    onChange={(e) =>
                        setData("current_password", e.target.value)
                    }
                    fullWidth
                />
                <Typography variant="caption" color="red">
                    {errors.current_password}
                </Typography>

                <TextField
                    label="New Password"
                    id="password"
                    ref={passwordInput}
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    type="password"
                    className="block w-full mt-1"
                    autoComplete="new-password"
                />

                <Typography variant="caption" color="red">
                    {errors.password}
                </Typography>

                <TextField
                    label="Confirm Password"
                    id="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    type="password"
                    className="block w-full mt-1"
                    autoComplete="new-password"
                />
                <Typography variant="caption" color="red">
                    {errors.password_confirmation}
                </Typography>

                <div className="flex justify-end my-5">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={processing}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </>
    );
}
