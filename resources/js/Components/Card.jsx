import React from "react";
import PropTypes from "prop-types";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const ShippingCard = ({ title, count, icon }) => {
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent className="flex flex-cols-3 gap-4 items-center">
                <Typography sx={{ fontSize: 24 }} color="primary" gutterBottom>
                    {icon}
                </Typography>
                <div className="grid grid-col">
                    <Typography variant="header" component="div">
                        {title}
                    </Typography>
                    <Typography
                        variant="button"
                        sx={{ mb: 1.5 }}
                        color="text.secondary"
                    >
                        {count}
                    </Typography>
                </div>
            </CardContent>
        </Card>
    );
};

ShippingCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
};

export default ShippingCard;
