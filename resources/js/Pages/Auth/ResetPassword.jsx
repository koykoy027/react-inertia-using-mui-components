import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { useForm } from "@inertiajs/react";
import { Button, TextField } from "@mui/material";

export default function ResetPassword({ token, email }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    useEffect(() => {
        return () => {
            reset("password", "password_confirmation");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("password.store"));
    };

    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} className="grid gap-2">
                <TextField
                    label="Email address"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    required
                    fullWidth
                    helperText={errors.email}
                    error={!!errors.email}
                />
                <TextField
                    label="Password"
                    id="password"
                    type="password"
                    name="password"
                    value={data.password}
                    onChange={(e) => setData("password", e.target.value)}
                    required
                    fullWidth
                    helperText={errors.password}
                    error={!!errors.password}
                />

                <TextField
                    label="Password"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="block w-full mt-1"
                    autoComplete="new-password"
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    required
                    fullWidth
                    helperText={errors.password_confirmation}
                    error={!!errors.password_confirmation}
                />

                <div className="flex items-center justify-end mt-4">
                    <Button
                        variant="contained"
                        type="submit"
                        disabled={processing}
                    >
                        Reset Password
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
