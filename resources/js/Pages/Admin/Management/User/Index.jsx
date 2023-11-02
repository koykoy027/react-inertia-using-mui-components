import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import {
    Autocomplete,
    Avatar,
    Box,
    Button,
    Card,
    FormControl,
    IconButton,
    InputLabel,
    ListItem,
    ListItemAvatar,
    Menu,
    MenuItem,
    Select,
    Skeleton,
    TextField,
    Tooltip,
    Typography,
} from "@mui/material";
import React from "react";
import MUIDataTable from "mui-datatables";
import TransitionsModal from "@/Components/Modal";
import ReusableModal from "@/Components/Modal";
import AddSharpIcon from "@mui/icons-material/AddSharp";
import BasicTextFields from "@/Components/InputField";
import CustomizedSnackbars from "@/Components/CustomizeSnackBar";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import GrainIcon from "@mui/icons-material/Grain";
import { Link } from "@inertiajs/react";
import Create from "./Create";
import { useRef, useState } from "react";
import { useForm } from "@inertiajs/react";
import EastIcon from "@mui/icons-material/East";
import AddIcon from "@mui/icons-material/Add";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function Index({ auth, mustVerifyEmail, status, users }) {
    // this variable data with the code .map is help determine the backend

    const columns = ["ID", "Name", "Email", ""];

    const options = {
        filterType: "checkBox",
        elevation: 0,
        responsive: "standard",
        selectableRows: false,
    };

    const breadcrumbItems = [
        {
            icon: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
            text: <Link href={route("dashboard")}>Home</Link>,
            url: (
                <Link href={route("dashboard")}>
                    <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
                </Link>
            ),
        },
        {
            icon: <PersonIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "User",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // test sample

    const [region, setRegion] = React.useState("");

    const regionChange = (event) => {
        setRegion(event.target.value);
    };

    const regions = [
        { label: "None", value: "" },
        { label: "Ten", value: 10 },
        { label: "Twenty", value: 20 },
        { label: "Thirty", value: 30 },
    ];

    // test

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [confirmingUserDeletion, setConfirmingUserDeletion] = useState(false);
    const passwordInput = useRef();

    const {
        data1,
        setData,
        delete: destroy,
        processing,
        reset,
        errors,
    } = useForm({
        password: "",
    });

    const confirmUserDeletion = () => {
        setConfirmingUserDeletion(true);
    };

    const deleteUser = (e) => {
        e.preventDefault();

        const confirmation = window.confirm(
            "Are you sure you want to delete your account?"
        );
        if (confirmation) {
            destroy(route("profile.destroy"), {
                preserveScroll: true,
                onSuccess: () => closeModal(),
                onError: () => passwordInput.current.focus(),
                onFinish: () => reset(),
            });
        }
    };

    const closeModal = () => {
        setConfirmingUserDeletion(false);

        reset();
    };

    // department sample

    const [department, setDepartment] = React.useState("");

    const DepartmentChange = (event) => {
        setDepartment(event.target.value);
    };

    const departmentoption = [
        { label: "None", value: "" },
        { label: "IT", value: 10 },
        { label: "Computer-Science", value: 20 },
        { label: "IS", value: 30 },
    ];

    const [messageEl, setmessageEl] = useState(null);

    const MessagehandleClick = (event) => {
        setmessageEl(event.currentTarget);
    };

    const MessagehandleClose = () => {
        setmessageEl(null);
    };

    const data = users.map((user) => [
        user.id,
        user.name,
        user.email,
        <div className="flex justify-end pr-5" key={user.id}>
            <Tooltip title="Account settings">
                <IconButton
                    onClick={MessagehandleClick} // Make sure you have defined MessagehandleClick function
                    size="medium"
                    sx={{ ml: 2 }}
                    aria-controls={messageEl ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={messageEl ? "true" : undefined}
                >
                    <MoreVertIcon />
                </IconButton>
            </Tooltip>
        </div>,
    ]);

    return (
        <MainLayout user={auth.user}>
            {/* account menu start */}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    textAlign: "center",
                }}
            >
                <div className="flex justify-center items-center">
                    <div>
                        <Menu
                            id="account-menu"
                            anchorEl={messageEl}
                            open={Boolean(messageEl)}
                            onClose={MessagehandleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    overflow: "visible",
                                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.202))",
                                    mt: 1.5,
                                    "& .MuiAvatar-root": {
                                        width: 32,
                                        height: 32,
                                        ml: -0.0,
                                        mr: 2,
                                    },
                                    "&:before": {
                                        content: '""',
                                        display: "block",
                                        position: "absolute",
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: "background.paper",
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{
                                horizontal: "right",
                                vertical: "top",
                            }}
                            anchorOrigin={{
                                horizontal: "right",
                                vertical: "bottom",
                            }}
                        >
                            {/* <MessageNotification /> */}
                            <Link href={route("management.create")}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AddIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Typography variant="subtitle2">
                                        Create
                                    </Typography>
                                </ListItem>
                            </Link>
                            <Link href={route("management.create")}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <SyncAltIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Typography variant="subtitle2">
                                        Update
                                    </Typography>
                                </ListItem>
                            </Link>
                            <Link href={route("management.create")}>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DeleteForeverIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Typography variant="subtitle2">
                                        Delete
                                    </Typography>
                                </ListItem>
                            </Link>
                        </Menu>
                    </div>
                </div>
            </Box>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <div className="md:grid-cols-3 gap-5 overflow-x-auto max-w-[370px] lg:max-w-[100%]">
                <Card>
                    <div className="px-5 py-5 border-b-4 border-sky-500">
                        <Typography variant="h6">User</Typography>
                    </div>
                    <MUIDataTable
                        data={data}
                        columns={columns}
                        options={options}
                    />
                </Card>
            </div>
        </MainLayout>
    );
}
