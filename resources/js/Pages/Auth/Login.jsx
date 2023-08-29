import { useEffect } from "react";
import GuestLayout from "@/Layouts/GuestLayout";
import { Link, useForm } from "@inertiajs/react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField,
} from "@mui/material";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout>
            {status && (
                <div className="mb-4 text-sm font-medium text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={handleSubmit} className="grid gap-2">
                <TextField
                    label="Email address"
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                    fullWidth
                    helperText={errors.email}
                    error={!!errors.email}
                    required
                />

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

                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox />}
                        label=" Remember me"
                        name="remember"
                        checked={data.remember}
                        onChange={(e) => setData("remember", e.target.checked)}
                        fullWidth
                    />
                </FormGroup>

                {/* <div className="block mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ml-2 text-sm text-gray-600">
                            Remember me
                        </span>
                    </label>
                </div> */}

                <div className="flex items-center justify-between mt-4">
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-sm text-blue-500 underline"
                        >
                            Forgot your password?
                        </Link>
                    )}

                    <Button
                        variant="contained"
                        type="submit"
                        disabled={processing}
                    >
                        Log in
                    </Button>
                </div>
            </form>
        </GuestLayout>
    );
}
