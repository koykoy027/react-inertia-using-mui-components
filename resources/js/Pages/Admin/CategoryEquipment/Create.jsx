import MainLayout from "@/Layouts/MainLayout";
import { Button, Paper, Typography, TextField } from "@mui/material";
import React from "react";
import WestIcon from "@mui/icons-material/West";
import { Link, useForm } from "@inertiajs/react";
import InputSelect from "@/Components/InputSelect";

export default function Create({ auth, categories }) {
    const category = categories.map((data) => ({
        key: data.id,
        label: data.name,
        value: data.id,
    }));
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
        category: "",
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        const confirmation = window.confirm(
            "Are you sure you want to submit the form?"
        );
        if (confirmation) {
            post(route("categories-equipment.store"), {
                onSuccess: () => reset(),
            });
        }
    };

    return (
        <MainLayout user={auth.user}>
            <div className="flex justify-end mb-4">
                <Link href={route("categories-equipment.index")}>
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
                        <div className="grid grid-cols-2 gap-2">
                            <InputSelect
                                label="Category"
                                id="category"
                                name="category"
                                defaultValue={data.category}
                                error={errors.category}
                                helperText={errors.category}
                                onChange={(e) =>
                                    setData("category", e.target.value)
                                }
                                required
                                fullWidth
                                options={category}
                            ></InputSelect>
                            <TextField
                                label="Name"
                                id="name"
                                name="name"
                                defaultValue={data.name}
                                error={errors.name}
                                helperText={errors.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                                fullWidth
                            />
                        </div>

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
