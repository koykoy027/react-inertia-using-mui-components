import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";

export default function StackBars() {
    const chartWidth = window.innerWidth > 768 ? 750 : window.innerWidth - 32;
    const chartHeight = window.innerWidth > 768 ? 350 : 200;

    return (
        <div className="mx-auto flex justify-center">
            <BarChart
                series={[
                    { data: [3, 4, 1, 6, 5], stack: "A", label: "series A1" },
                    { data: [4, 3, 1, 5, 8], stack: "A", label: "series A2" },
                    { data: [4, 2, 5, 4, 1], stack: "B", label: "series B1" },
                    { data: [2, 8, 1, 3, 1], stack: "B", label: "series B2" },
                    { data: [10, 6, 5, 8, 9], label: "series C1" },
                ]}
                width={chartWidth}
                height={chartHeight}
            />
        </div>
    );
}
