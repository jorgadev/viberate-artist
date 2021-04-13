import React from "react";
import { ResponsiveBar } from "@nivo/bar";

export default function Bar({ popularity }) {
  const data = [];
  let dataObj = {};

  const theme = {
    labels: { text: { fontSize: 12, fontWeight: "bold" } },
    grid: {
      line: {
        stroke: "white",
        strokeWidth: 4,
      },
    },
  };

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
      height={150}
      layout="horizontal"
      data={data}
      indexBy={(_index) => _index.value + ""}
      keys={["value"]}
      colors={["#000"]}
      colorBy="indexValue"
      groupMode="stacked"
      enableGridX={false}
      enableGridY={true}
      borderRadius={1}
      label={(_label) => _label.data.id}
      padding={0.9}
      labelFormat={(d) => <tspan y={-10}>{d}</tspan>}
      labelTextColor="black"
      motionStiffness={170}
      motionDamping={26}
      theme={theme}
    />
  );
}
