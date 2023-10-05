import React, { useState, useEffect } from "react";
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
import SettingsApplicationsSharpIcon from "@mui/icons-material/SettingsApplicationsSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import PersonSharpIcon from "@mui/icons-material/PersonSharp";
import InventorySharpIcon from "@mui/icons-material/InventorySharp";
import QrCodeIcon from "@mui/icons-material/QrCode";
import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import PostAddIcon from "@mui/icons-material/PostAdd";
import ExpandMoreSharpIcon from "@mui/icons-material/ExpandMoreSharp";
import WidgetsIcon from "@mui/icons-material/Widgets";
import CategoryIcon from "@mui/icons-material/Category";
import {
    Avatar,
    Menu,
    MenuItem,
    Tooltip,
    Box,
    styled,
    useTheme,
    Collapse,
    Badge,
    Stack,
} from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import ConstructionIcon from "@mui/icons-material/Construction";
import CustomSpeedDial from "@/Components/CustomSpeedDial";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AbcSharpIcon from "@mui/icons-material/AbcSharp";
import CustomizedSwitches from "@/Components/CustomizedSwitches";
import QrCode2SharpIcon from "@mui/icons-material/QrCode2Sharp";
import EmailIcon from "@mui/icons-material/Email";
import MessageNotification from "@/Components/MessageNotification";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BusinessIcon from "@mui/icons-material/Business";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import SummarizeIcon from "@mui/icons-material/Summarize";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";
import AddBoxIcon from "@mui/icons-material/AddBox";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
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
    const [expanded, setExpanded] = useState(false); // Initially expanded

    const listSideNav = () => {
        setExpanded(!expanded);
    };
    const [QrSideNav, setQrSideNav] = useState(false);

    const toggleQrSideNav = () => {
        setQrSideNav(!QrSideNav);
    };

    const [categories, setcategories] = useState(true); // Initially expanded

    const categoriesSideNav = () => {
        setcategories(!categories);
    };
    // end

    const [Qr, setQr] = useState(false);

    const generateQr = () => {
        setQr(!Qr);
    };

    const [equipment, setequipment] = useState(false);

    const equipmentSideNav = () => {
        setequipment(!equipment);
    };

    const [Branch, setBranch] = useState(false);

    const BranchSideNav = () => {
        setBranch(!Branch);
    };

    // speed dial

    // const actions = [
    //     {
    //         icon: (
    //             <Link href={route("generator.index")}>
    //                 <QrCode2SharpIcon />
    //             </Link>
    //         ),
    //         name: "QR-CODE",
    //     },
    //     {
    //         icon: (
    //             <Link href={route("qr.index")}>
    //                 <AbcSharpIcon />
    //             </Link>
    //         ),
    //         name: "BARCODE",
    //     },
    // ];

    // const breadcrumbItems = [
    //     {
    //         icon: <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    //         text: "MUI",
    //         url: "/",
    //     },
    //     {
    //         icon: <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    //         text: "Core",
    //         url: "/material-ui/getting-started/installation/",
    //     },
    //     {
    //         icon: <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />,
    //         text: "Breadcrumb",
    //     },
    // ];
    // Initialize DarkMode state with a default value from localStorage if available
    const [DarkMode, SetDarkMode] = useState(
        localStorage.getItem("DarkMode") === "true"
    );

    // Function to toggle DarkMode and store the preference in localStorage
    const toggleDarkMode = () => {
        const newDarkMode = !DarkMode;
        SetDarkMode(newDarkMode);
        localStorage.setItem("DarkMode", newDarkMode);
    };

    // Create the theme based on DarkMode state
    const darkTheme = createTheme({
        palette: {
            mode: DarkMode ? "dark" : "light",
        },
        typography: {
            fontFamily: "Roboto, sans-serif",
        },
    });

    // active user

    const StyledBadge = styled(Badge)(({ theme }) => ({
        "& .MuiBadge-badge": {
            backgroundColor: "#44b700",
            color: "#44b700",
            boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
            "&::after": {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "50%",
                animation: "ripple 1.2s infinite ease-in-out",
                border: "1px solid currentColor",
                content: '""',
            },
        },
        "@keyframes ripple": {
            "0%": {
                transform: "scale(.8)",
                opacity: 1,
            },
            "100%": {
                transform: "scale(2.4)",
                opacity: 0,
            },
        },
    }));

    const SmallAvatar = styled(Avatar)(({ theme }) => ({
        width: 22,
        height: 22,
        border: `2px solid ${theme.palette.background.paper}`,
    }));

    // message notifications

    // Email Dropdown message in layout

    const [messageEl, setmessageEl] = useState(null);

    const MessagehandleClick = (event) => {
        setmessageEl(event.currentTarget);
    };

    const MessagehandleClose = () => {
        setmessageEl(null);
    };

    // loader

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate an async operation (e.g., fetching data) that takes some time
        setTimeout(() => {
            setLoading(false); // Set loading to false when the operation is complete
        }, 3000); // Simulate a 3-second loading time
    }, []);

    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline>
                <Box sx={{ display: "flex" }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open} color="inherit">
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
                                <div className="flex justify-center items-center">
                                    <div>
                                        <Tooltip title="Account settings">
                                            <IconButton
                                                onClick={MessagehandleClick}
                                                size="medium"
                                                sx={{ ml: 2 }}
                                                aria-controls={
                                                    messageEl
                                                        ? "account-menu"
                                                        : undefined
                                                }
                                                aria-haspopup="true"
                                                aria-expanded={
                                                    messageEl
                                                        ? "true"
                                                        : undefined
                                                }
                                            >
                                                <Badge
                                                    badgeContent={3}
                                                    color="primary"
                                                >
                                                    <EmailIcon
                                                        fontSize="medium"
                                                        color="action"
                                                    />
                                                </Badge>
                                            </IconButton>
                                        </Tooltip>
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
                                                        bgcolor:
                                                            "background.paper",
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
                                            <MessageNotification />
                                        </Menu>
                                    </div>

                                    <Tooltip title="Account settings">
                                        <IconButton
                                            onClick={handleClick}
                                            size="medium"
                                            sx={{ ml: 2 }}
                                            aria-controls={
                                                openAvatar
                                                    ? "account-menu"
                                                    : undefined
                                            }
                                            aria-haspopup="true"
                                            aria-expanded={
                                                openAvatar ? "true" : undefined
                                            }
                                        >
                                            <Avatar
                                                alt={user.name}
                                                src="/static/images/avatar/2.jpg"
                                            />
                                        </IconButton>
                                    </Tooltip>
                                </div>
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
                                        mt: 0.5,
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
                                            right: 23,
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
                                <MenuItem>
                                    <Stack direction="row" spacing={2}>
                                        <div className="flex justify-center items-center gap-5">
                                            <StyledBadge
                                                overlap="circular"
                                                anchorOrigin={{
                                                    vertical: "bottom",
                                                    horizontal: "right",
                                                }}
                                                variant="dot"
                                            >
                                                <Avatar
                                                    alt={user.name}
                                                    src="/static/images/avatar/1.jpg"
                                                />
                                            </StyledBadge>
                                            {user.name}
                                        </div>
                                    </Stack>
                                </MenuItem>
                                <MenuItem>
                                    <CustomizedSwitches
                                        checked={DarkMode}
                                        onChange={toggleDarkMode}
                                    />

                                    <Typography
                                        variant="overline"
                                        onClick={toggleDarkMode}
                                    >
                                        {DarkMode
                                            ? "Switch to Light Mode"
                                            : "Switch to Dark Mode"}
                                    </Typography>
                                </MenuItem>
                                <Divider />
                                <Link href={route("profile.edit")}>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Account Settings
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

                    {/* breadCrumbs */}

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
                        <List>
                            <Link href={route("categories.index")}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CategoryIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Category" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link href={route("categories-equipment.index")}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <CategoryIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Category Equipment" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link href={route("inventories.index")}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <InventorySharpIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Inventory" />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>
                        <Divider />

                        <div className="absolute bottom-0 w-full">
                            <List>
                                {/* <Link href={route("library.index")}>
                                    <ListItem disablePadding>
                                        <ListItemButton>
                                            <ListItemIcon>
                                                <SettingsApplicationsSharpIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Library Setting" />
                                        </ListItemButton>
                                    </ListItem>
                                </Link> */}
                            </List>
                        </div>
                    </Drawer>
                    <Main open={open}>
                        <DrawerHeader />

                        <div className="sm:mx-5 md:mx-2 lg:mx-10">
                            <div>{children}</div>

                            {/* <div className="lg:hidden block">
                                <CustomSpeedDial
                                    actions={actions}
                                    openIcon={<ExpandMoreSharpIcon />}
                                />
                            </div> */}
                        </div>
                    </Main>
                </Box>
            </CssBaseline>
        </ThemeProvider>
    );
}
