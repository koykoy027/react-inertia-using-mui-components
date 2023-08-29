import { useForm, usePage } from '@inertiajs/react';
import { Button, Typography, TextField } from "@mui/material";


export default function UpdateProfile({ mustVerifyEmail, status, className = '' }) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } = useForm({
        name: user.name,
        email: user.email,
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmation = window.confirm("Save changes?");

        if (confirmation) {
            patch(route("profile.update"), {
                preserveScroll: true,
            });
        }
    };

    return (
        <>
            <div className="mb-5">
                <Typography variant="h6" sx={{ textTransform: "uppercase" }}>
                    Personal Information
                </Typography>
                <Typography variant="body2">
                    Update your account's profile information and email address.
                </Typography>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="grid gap-2 lg:grid-cols-2">
                    <div>
                        <TextField
                            id="name"
                            label="Fullname"
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            fullWidth
                        />
                        <Typography variant="caption" color="red">
                            {errors.name}
                        </Typography>
                    </div>
                    <div>
                        <TextField
                            id="email"
                            label="Email address"
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            required
                            fullWidth
                            type="email"
                        />
                        <Typography variant="caption" color="red">
                            {errors.email}
                        </Typography>
                    </div>
                </div>
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

            {/* {mustVerifyEmail && user.email_verified_at === null && (
                        <div>
                            <p className="mt-2 text-sm text-gray-800">
                                Your email address is unverified.
                                <Link
                                    href={route("verification.send")}
                                    method="post"
                                    as="button"
                                    className="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Click here to re-send the verification
                                    email.
                                </Link>
                            </p>

                            {status === "verification-link-sent" && (
                                <div className="mt-2 text-sm font-medium text-green-600">
                                    A new verification link has been sent to
                                    your email address.
                                </div>
                            )}
                        </div>
                    )} */}
        </>
    );
}
