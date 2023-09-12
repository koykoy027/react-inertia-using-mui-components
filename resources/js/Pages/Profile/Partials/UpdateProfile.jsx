import { useForm, usePage } from "@inertiajs/react";
import { Button, Typography, TextField } from "@mui/material";

export default function UpdateProfile({
    mustVerifyEmail,
    status,
    className = "",
}) {
    const user = usePage().props.auth.user;

    const { data, setData, patch, errors, processing, recentlySuccessful } =
        useForm({
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
                <div className="grid gap-2 lg:grid-col py-10">
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
        </>
    );
}
