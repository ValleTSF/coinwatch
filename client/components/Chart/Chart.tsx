import { getTime } from "date-fns";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { LineChart, TLineChartDataProp } from "react-native-wagmi-charts";
import { Timeseries } from "../../models";

interface ChartProps {
  timeseries: Timeseries[];
}

export const Chart = ({ timeseries }: ChartProps) => {
  const [chartData, setChartData] = useState<TLineChartDataProp>([]);
  const { width } = Dimensions.get("window");

  useEffect(() => {
    if (timeseries) {
      const data = timeseries.map((snapshot) => {
        const timestamp = getTime(new Date(snapshot.time_period_start));
        return { timestamp, value: snapshot.rate_high };
      });
      setChartData(data);
    }
  }, [timeseries]);

  return (
    <LineChart.Provider data={chartData}>
      <LineChart width={width * 0.9}>
        <LineChart.Path color="#5f99f5">
          <LineChart.Gradient color="white" />
        </LineChart.Path>
        <LineChart.CursorCrosshair>
          <LineChart.Tooltip>
            <LineChart.PriceText
              style={{
                color: "green",
                fontWeight: "bold",
              }}
              precision={4}
              format={({ value }) => {
                "worklet";
                return `${value} $`;
              }}
            />
          </LineChart.Tooltip>
          <LineChart.Tooltip position="bottom">
            <LineChart.DatetimeText
              style={{
                color: "white",
                fontWeight: "bold",
              }}
              format={({ value }) => {
                "worklet";
                const date = new Date(value);
                return date.toLocaleDateString("en-se");
              }}
            />
          </LineChart.Tooltip>
        </LineChart.CursorCrosshair>
      </LineChart>
    </LineChart.Provider>
  );
};

export default Chart;
