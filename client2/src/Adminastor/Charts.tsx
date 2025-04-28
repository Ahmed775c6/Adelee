import React from 'react';
import { Line, Bar, Doughnut, Pie, PolarArea, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement } from 'chart.js';

// Register necessary components with Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, ArcElement);

// Define the type for allowed chart types
type ChartType = 'line' | 'bar' | 'doughnut' | 'pie' | 'polarArea' | 'radar';

// Map chart types to components
const chartTypes: Record<ChartType, React.ComponentType<any>> = {
    line: Line,
    bar: Bar,
    doughnut: Doughnut,
    pie: Pie,
    polarArea: PolarArea,
    radar: Radar,
};

interface CustomizableChartProps {
    type?: ChartType;
    data: any;
    options?: any;
    backgroundColor?: string;
    borderColor?: string;
}

const CustomizableChart: React.FC<CustomizableChartProps> = ({
    type = 'line',
    data,
    options,
    backgroundColor,
    borderColor,
}) => {
    // Select the chart component based on the type
    const ChartComponent = chartTypes[type];

    // Chart data structure, allowing customization via props
    const chartData = {
        ...data,
        datasets: data.datasets.map((dataset: any) => ({
            ...dataset,
            backgroundColor: dataset.backgroundColor || backgroundColor,
            borderColor: dataset.borderColor || borderColor,
        })),
    };

    // Default options with responsive and legend control
    const chartOptions = {
        responsive: true,
        plugins: {
            legend: {
                display: options?.showLegend ?? true,
                position: options?.legendPosition || 'top',
            },
        },
        ...options,
    };

    return <ChartComponent data={chartData} options={chartOptions} />;
};

export default CustomizableChart;
