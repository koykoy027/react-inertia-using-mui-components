import { useRef, useState, useEffect } from "react";
import { useForm } from "@inertiajs/react";
import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Typography } from "@mui/material";
import NightsStaySharpIcon from "@mui/icons-material/NightsStaySharp";
import Brightness7SharpIcon from "@mui/icons-material/Brightness7Sharp";
import DesktopMacSharpIcon from "@mui/icons-material/DesktopMacSharp";

export default function DarkMode({ className = "" }) {
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
        data,
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

    // Start Dark Mode

    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
    );
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const options = [
        {
            icons: <Brightness7SharpIcon />,
            text: "light",
        },
        {
            icons: <NightsStaySharpIcon />,
            text: "dark",
        },
        {
            icons: <DesktopMacSharpIcon />,
            text: "system",
        },
    ];

    function onWindowMatch() {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }

    onWindowMatch();

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", "dark");
                break;

            case "light":
                element.classList.remove("dark");
                localStorage.setItem("theme", "light");
                break;

            default:
                localStorage.removeItem("theme");
                onWindowMatch();
                break;
        }
    }, [theme]);

    // End of the Dark Mode

    return (
        <>
            <div className="grid grid-rows-2">
                <div className="mb-5">
                    <Typography
                        variant="h6"
                        sx={{ textTransform: "uppercase" }}
                    >
                        Experience the DarkMode
                    </Typography>
                    <Typography variant="body2">
                        Once your account is deleted, all of its resources and
                        data will be permanently deleted. Before deleting your
                        account, please download any data or information that
                        you wish to retain.
                    </Typography>
                </div>
                <div className="grid justify-start items-end dark:bg-black">
                    {/* start of the dark mode */}
                    <div className="flex flex-row gap-3">
                        {options?.map((opt) => (
                            <button
                                key={opt.text} // Fixed the key attribute
                                onClick={() => setTheme(opt.text)}
                                className={`text-xl dark:text-white leading-9 rounded-full m-1 ${
                                    theme === opt.text &&
                                    "text-sky-600 dark:text-sky-600"
                                }`}
                            >
                                {opt.icons}
                            </button>
                        ))}
                    </div>
                    {/* End of the Dark Mode */}
                </div>
            </div>
        </>
    );
}
