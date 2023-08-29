import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { Button, TextField, Typography } from "@mui/material";

export default function ConfirmPassword() {
    const { data, setData, post, processing, errors, reset } = useForm({
        password: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("password.confirm"));
    };

    return (
        <GuestLayout>
            <Typography variant="caption">
                This is a secure area of the application. Please confirm your
                password before continuing.
            </Typography>

            <form onSubmit={handleSubmit} className="grid gap-2">
                <TextField
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    fullWidth
                    required
                    helperText={errors.password}
                    error={!!errors.password}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={processing}
                    >
                        Confirm
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
