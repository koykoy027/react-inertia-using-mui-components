import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { SendAndArchiveOutlined, ExpandMore } from "@mui/icons-material";
import {
    ButtonGroup,
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from "@mui/material";

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="mb-3 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <Typography variant="body1">
                                Customize Button
                            </Typography>
                            <div className="flex gap-4 my-5">
                                <Button variant="contained" color="primary">
                                    primary
                                </Button>
                                <Button variant="contained" color="secondary">
                                    secondary
                                </Button>
                                <Button variant="contained" color="info">
                                    info
                                </Button>
                                <Button variant="contained" color="error">
                                    error
                                </Button>
                                <Button variant="contained" color="grey">
                                    grey
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
