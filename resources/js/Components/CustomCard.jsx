import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const CustomCard = ({ title, count, icon }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent className="flex flex-cols-3 gap-4 items-center">
                <Typography
                    sx={{ fontSize: 24 }}
                    color="text.secondary"
                    gutterBottom
                >
                    {icon}
                </Typography>
                <div className="grid grid-rows-2">
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {count}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

CustomCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
};

export default CustomCard;