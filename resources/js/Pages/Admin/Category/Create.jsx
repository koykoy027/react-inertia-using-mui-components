import MainLayout from "@/Layouts/MainLayout";
import { Button, Paper, Typography, TextField } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import { Link, useForm } from "@inertiajs/react";
import InputField from "@/Components/InputField";

export default function Create({ auth }) {
    const {
        data,
        setData,
        post,
        errors,
        reset,
        processing,
        recentlySuccessful,
    } = useForm({
        name: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmation = window.confirm(
            "Are you sure you want to submit the form?"
        );
        if (confirmation) {
            post(route("categories.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <MainLayout user={auth.user}>
            <div className="flex justify-end mb-4">
                <Link href={route("categories.index")}>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<WestIcon />}
                    >
                        Go Back
                    </Button>
                </Link>
            </div>

            <div className="grid lg:grid-cols-2 sm:grid-cols-1">
                <Paper sx={{ padding: 4 }}>
                    <Typography
                        variant="h6"
                        sx={{ textTransform: "uppercase", marginBottom: 1 }}
                    >
                        Add Category
                    </Typography>

                    <form onSubmit={handleSubmit}>
                        <TextField
                            label="Name"
                            id="name"
                            name="name"
                            defaultValue={data.name}
                            error={errors.name}
                            helperText={errors.name}
                            onChange={(e) => setData("name", e.target.value)}
                            required
                            fullWidth
                        />

                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                            disabled={processing}
                            sx={{ marginTop: 1 }}
                        >
                            Submit
                        </Button>
                    </form>
                </Paper>
            </div>
        </MainLayout>
    );
}
