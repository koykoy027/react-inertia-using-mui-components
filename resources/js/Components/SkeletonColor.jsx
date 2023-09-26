import * as React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

export default function CustomSkeleton({
    backgroundColor,
    skeletonColor,
    width,
    height,
}) {
    return (
        <Box
            sx={{
                bgcolor: backgroundColor || "#121212",
                p: 8,
                width: "100%",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <Skeleton
                sx={{ bgcolor: skeletonColor || "grey.900" }}
                variant="rectangular"
                width={width || 210}
                height={height || 118}
            />
        </Box>
    );
}
