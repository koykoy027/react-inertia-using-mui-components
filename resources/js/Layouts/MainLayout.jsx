import React, { useState } from "react";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import SendIcon from "@mui/icons-material/Send";
import { Link, useForm } from "@inertiajs/react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import DraftsIcon from "@mui/icons-material/Drafts";
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PostAddIcon from "@mui/icons-material/PostAdd";
import AddBoxIcon from "@mui/icons-material/AddBox";
import {
    Avatar,
    Menu,
    MenuItem,
    Tooltip,
    Box,
    styled,
    useTheme,
    ListSubheader,
    Collapse,
} from "@mui/material";
import { Logout, PersonAdd, Settings } from "@mui/icons-material";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

export default function MainLayout({ user, children }) {
    const { post } = useForm();
    const handleLogout = () => {
        const confirmation = window.confirm("Are you sure you want to logout?");

        if (confirmation) {
            post(route("logout"));
        }
    };
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    // Start account Avatar

    const [anchorEl, setAnchorEl] = React.useState(null);
    const openAvatar = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    // expand list dropdown in side nav
    // start
    const [expanded, setExpanded] = useState(true); // Initially expanded

    const listSideNav = () => {
        setExpanded(!expanded);
    };
    const [QrSideNav, setQrSideNav] = useState(false);

    const toggleQrSideNav = () => {
        setQrSideNav(!QrSideNav);
    };
    // end

    const [Qr, setQr] = useState(false);

    const generateQr = () => {
        setQr(!Qr);
    };

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />

            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2, ...(open && { display: "none" }) }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Inventory Management System
                    </Typography>
                    <div style={{ flexGrow: 1 }}></div>

                    {/* account menu start */}
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                    openAvatar ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={openAvatar ? "true" : undefined}
                            >
                                <Avatar
                                    alt={user.name}
                                    src="/static/images/avatar/2.jpg"
                                />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={openAvatar}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
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
                                    transform: "translateY(-50%) rotate(45deg)",
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
                        <MenuItem>
                            <Avatar /> {user.name}
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <Link href={route("profile.edit")}>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                    {/* account menu end */}
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <Link href={route("dashboard")}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <DashboardSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary="Dashboard" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
                <Divider />

                {/* another sidenav list */}

                {/* start */}
                <List
                    sx={{
                        width: "100%",
                        maxWidth: 360,
                        bgcolor: "background.paper",
                    }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    <ListItemButton onClick={listSideNav}>
                        <ListItemIcon>
                            <InboxIcon />
                        </ListItemIcon>
                        <ListItemText primary="Management" />
                        {expanded ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Link href={route("management.index")}>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PersonSharpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="User" />
                                </ListItemButton>
                            </List>
                        </Link>

                        <List component="div" disablePadding>
                            <Link href={route("products.index")}>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <InventorySharpIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Products" />
                                </ListItemButton>
                            </Link>
                        </List>
                    </Collapse>
                    <List>
                        <ListItemButton onClick={toggleQrSideNav}>
                            <ListItemIcon>
                                <AddBoxIcon />
                            </ListItemIcon>
                            <ListItemText primary="Storage" />
                            {QrSideNav ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={QrSideNav} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <StarBorder />
                                    </ListItemIcon>
                                    <ListItemText primary="Starred" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </List>
                {/* end */}
                <List>
                    <ListItemButton onClick={generateQr}>
                        <ListItemIcon>
                            <QrCodeIcon />
                        </ListItemIcon>
                        <ListItemText primary="QR" />
                        {Qr ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={Qr} timeout="auto" unmountOnExit>
                        <Link href={route("qr.index")}>
                            <List component="div" disablePadding>
                                <ListItemButton sx={{ pl: 4 }}>
                                    <ListItemIcon>
                                        <PostAddIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Records" />
                                </ListItemButton>
                            </List>
                        </Link>
                        <Link href={route("generateqr.index")}>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemIcon>
                                    <QrCodeScannerIcon />
                                </ListItemIcon>
                                <ListItemText primary="Genarate QR" />
                            </ListItemButton>
                        </Link>
                    </Collapse>
                </List>

                <List>
                    <Link href={route("library.index")}>
                        <ListItem disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    <SettingsApplicationsSharpIcon />
                                </ListItemIcon>
                                <ListItemText primary="Settings" />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </List>
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                <div className="sm:mx-5 md:mx-2 lg:mx-10">{children}</div>
            </Main>
        </Box>
    );
}
