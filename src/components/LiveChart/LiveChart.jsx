import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LiveChart = ({ historialData }) => {
  const [data, setData] = useState([["Date", "Price"]]);

  useEffect(() => {
    let dataCopy = [["Date", "Price"]];
    if (historialData.prices) {
      historialData.prices.map((item) => {
        dataCopy.push([
          `${new Date(item[0]).toLocaleDateString().slice(0, -5)}`,
          item[1],
        ]);
      });
      setData(dataCopy);
    }
  }, [historialData]);

  return (
    <div>
      <Chart chartType="LineChart" data={data} height="100%" legendToggle />
    </div>
  );
};

export default LiveChart;
