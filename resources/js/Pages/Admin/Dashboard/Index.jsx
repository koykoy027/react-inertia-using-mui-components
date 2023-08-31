import ShippingCard from "@/Components/Card";
import MainLayout from "@/Layouts/MainLayout";
import { Typography } from "@mui/material";
import React from "react";
import LocalShippingSharpIcon from "@mui/icons-material/LocalShippingSharp";
import CarCrashSharpIcon from "@mui/icons-material/CarCrashSharp";
import ProductionQuantityLimitsSharpIcon from "@mui/icons-material/ProductionQuantityLimitsSharp";

export default function Index({ auth, mustVerifyEmail, status }) {
    return (
        <MainLayout user={auth.user}>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 py-7 w-full">
                <ShippingCard
                    icon={<LocalShippingSharpIcon fontSize="large" />}
                    title="To Be Order"
                    count="1"
                />
                <ShippingCard
                    icon={<CarCrashSharpIcon fontSize="large" />}
                    title="To Be Shipped"
                    count="3"
                />
                <ShippingCard
                    icon={
                        <ProductionQuantityLimitsSharpIcon fontSize="large" />
                    }
                    title="To Be Delivered"
                    count="5"
                />
            </div>
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </MainLayout>
    );
}
