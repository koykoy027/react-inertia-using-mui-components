import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import { TextField, Button } from "@mui/material";

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
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

        post(route("register"));
    };

    return (
        <GuestLayout>
            <form onSubmit={handleSubmit} className="grid gap-2">
                <TextField
                    label="Name"
                    id="name"
                    name="name"
                    value={data.name}
                    className="block w-full mt-1"
                    onChange={(e) => setData("name", e.target.value)}
                    required
                    fullWidth
                    helperText={errors.name}
                    error={!!errors.name}
                />

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
                    label="Confirm Password"
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    onChange={(e) =>
                        setData("password_confirmation", e.target.value)
                    }
                    required
                    fullWidth
                    helperText={errors.password_confirmation}
                    error={!!errors.password_confirmation}
                />

                <div className="flex items-center justify-between mt-4">
                    <Link
                        href={route("login")}
                        className="text-sm underline text-grey-500"
                    >
                        Already registered?
                    </Link>
                    <Button variant="contained" color="primary" type="submit" disabled={processing}>
                        Register
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
