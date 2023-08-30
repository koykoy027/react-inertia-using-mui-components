import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { TextField, Typography, Button } from "@mui/material";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} className="grid gap-2">
                <Typography variant="caption">
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </Typography>

                {status && (
                    <Typography variant="caption" color="success">
                        {status}
                    </Typography>
                )}

                <TextField
                    label="Email address"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    helperText={errors.email}
                    error={!!errors.email}
                    required
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        disabled={processing}
                    >
                        Email Password Reset Link
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
