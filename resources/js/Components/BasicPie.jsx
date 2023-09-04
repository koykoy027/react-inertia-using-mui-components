import * as React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

export default function BasicPie() {
    return (
        <div class="mx-auto w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
            <PieChart
                series={[
                    {
                        data: [
                            { id: 0, value: 10, label: "series A" },
                            { id: 1, value: 15, label: "series B" },
                            { id: 2, value: 20, label: "series C" },
                        ],
                    },
                ]}
                width={300}
                height={200}
            />
        </div>
    );
}
