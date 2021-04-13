import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function Bar({ popularity }) {
  // Data that will be passed as keys and props for bar
  const data = [];
  let dataObj = {};

  // Custom theme for bar
  const theme = {
    labels: {
      text: { fontSize: 12, fontWeight: "bold" },
    },
    grid: {
      line: {
        stroke: "white",
        strokeWidth: 4,
      },
    },
  };

  // For each popularity create single bar
  popularity.forEach((pop) => {
    dataObj = {
      id: pop.city,
      label: pop.city,
      value: pop.percentage,
    };
    data.push(dataObj);
  });

  return (
    <ResponsiveBar
      layout="horizontal"
      data={data}
      indexBy={(_index) => _index.value + ""}
      keys={["value"]}
      colors={["#000"]}
      colorBy="indexValue"
      groupMode="grouped"
      enableGridX={false}
      enableGridY={true}
      borderRadius={1}
      label={(_label) => _label.data.id}
      padding={0.9}
      labelFormat={(d) => (
        <tspan x={0} y={-10} textAnchor="start">
          {d}
        </tspan>
      )}
      labelTextColor="black"
      theme={theme}
      animate={false}
    />
  );
}
