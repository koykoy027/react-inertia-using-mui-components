import React, { useCallback } from "react";
import Button from "@mui/material/Button";
import { SnackbarProvider, useSnackbar } from "notistack";

function SnackbarExample() {
    const { enqueueSnackbar } = useSnackbar();
    const handleClickVariant = (variant) => () => {
        // variant could be success, error, warning, info, or default
        enqueueSnackbar("The user is Added!", { variant });
    };

    return (
        <React.Fragment>
            <Button
                type="submit"
                variant="contained"
                onClick={handleClickVariant("success")}
            >
                Submit
            </Button>
        </React.Fragment>
    );
}

export default function IntegrationNotistack() {
    return (
        <SnackbarProvider maxSnack={3}>
            <SnackbarExample />
        </SnackbarProvider>
    );
}
