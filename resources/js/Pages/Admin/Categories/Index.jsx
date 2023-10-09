import MainLayout from "@/Layouts/MainLayout";
import {
    Avatar,
    Badge,
    Box,
    Card,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemAvatar,
    Menu,
    MenuItem,
    Paper,
    Tooltip,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import MUIDataTable from "mui-datatables";
import CustomBreadcrumbs from "@/Components/CustomBreadcrumbs";
import HomeIcon from "@mui/icons-material/Home";
import { Link } from "@inertiajs/react";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
import SyncAltIcon from "@mui/icons-material/SyncAlt";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function Index({ auth, mustVerifyEmail, status, categories }) {
    const columns = ["ID", "Categories", ""];

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
            icon: <InventorySharpIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
            text: "Categories",
            url: "/material-ui/getting-started/installation/",
        },
    ];

    // crud

    // Email Dropdown message in layout

    const [messageEl, setmessageEl] = useState(null);

    const MessagehandleClick = (event) => {
        setmessageEl(event.currentTarget);
    };

    const MessagehandleClose = () => {
        setmessageEl(null);
    };

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAvatar = Boolean(anchorEl);

    const [selectedValue, setSelectedValue] = useState("default"); // Default value

    const handleChange = (newValue) => {
        setSelectedValue(newValue); // Update the selected value
    };

    const crud = [
        { value: "Add", label: "Add" },
        { value: "Update", label: "Update" },
        { value: "Delete", label: "Delete" },
    ];

    const Demo = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.paper,
    }));

    const data = categories.map((category) => [
        category.id,
        category.categories,
        <div className="flex justify-end pr-5" key={category.id}>
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
            <div>
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
                                <Link href={route("categories.create")}>
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
                                <Link href={route("categories.create")}>
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
                                <Link href={route("categories.create")}>
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
            </div>
            <div className="pb-10">
                <CustomBreadcrumbs items={breadcrumbItems} />
            </div>
            <div class="">
                <Paper>
                    <div className="px-5 py-5 border-b-4 border-sky-500">
                        <Typography variant="h6">Categories</Typography>
                    </div>
                    <div className="sm:hidden">
                        {/* Mobile View */}
                        <Card>
                            <MUIDataTable
                                data={data}
                                columns={columns}
                                options={options}
                                size={"small"}
                                // You can apply the stickyHeader class if needed for mobile view
                            />
                        </Card>
                    </div>
                    <div className="hidden sm:block">
                        {/* Desktop View */}
                        <Card>
                            <MUIDataTable
                                data={data}
                                columns={columns}
                                options={options}
                                size={"small"}
                                stickyHeader
                            />
                        </Card>
                    </div>
                </Paper>
            </div>
        </MainLayout>
    );
}
