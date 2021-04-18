import { ResponsiveBar } from "@nivo/bar";

function Stats({ popularity }) {
  const data = [];
  popularity.forEach((pop, idx) => {
    data.push({
      id: pop.city,
      label: pop.name,
      value: pop.percentage,
    });
  });

  return (
    <div className="col stats">
      <div className="col-content">
        <div
          className="stats-sheet"
          style={{
            width: "100%",
            height: "15em",
          }}
        >
          <label>Most popular in</label>
          <ResponsiveBar
            height={200}
            maxValue={100}
            layout="horizontal"
            data={data}
            indexBy={(_index) => _index.value + ""}
            keys={["value"]}
            colors={["#000"]}
            enableGridX={false}
            enableGridY={true}
            padding={0.8}
            label={(_label) => _label.data.id}
            labelFormat={(d) => (
              <tspan textAnchor="start" x={0} y={-8}>
                {d}
              </tspan>
            )}
            axisLeft={null}
            axisBottom={null}
            labelTextColor="black"
            animate={false}
            theme={{ grid: { line: { stroke: "#FFF", strokeWidth: "8px" } } }}
          />
        </div>
      </div>
    </div>
  );
}

export default Stats;
