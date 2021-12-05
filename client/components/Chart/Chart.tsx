import React, { useState } from "react";
import { LineChart, TLineChartDataProp } from "react-native-wagmi-charts";
import { Timeseries } from "../../models";

interface ChartProps {
  currentPrice: number;
  timeseries: Timeseries[];
}

export const Chart = ({ currentPrice, timeseries }: ChartProps) => {
  const [chartData, setChartData] = useState<TLineChartDataProp>([]);

  //   useEffect(() => {
  //     console.log("inside useEffect");

  //     if (timeseries) {
  //       console.log("inside if");
  //       const data = timeseries.map((snapshot) => {
  //         const timestamp = getTime(new Date(snapshot.time_period_start));
  //         return { timestamp, value: snapshot.rate_high };
  //       });
  //       console.log("data", data);
  //       setChartData(data);
  //     }
  //   }, [timeseries]);

  const data = [
    {
      timestamp: 1625945400000,
      value: 33575.25,
    },
    {
      timestamp: 1625946300000,
      value: 33545.25,
    },
    {
      timestamp: 1625947200000,
      value: 33510.25,
    },
    {
      timestamp: 1625948100000,
      value: 33215.25,
    },
  ];

  //   if (chartData.length === 0) {
  //     return null;
  //   }

  return (
    <LineChart.Provider data={data}>
      <LineChart>
        <LineChart.Path />
      </LineChart>
    </LineChart.Provider>
  );
};

export default Chart;
