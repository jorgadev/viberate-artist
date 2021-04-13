import React from "react";

import Bar from "./Bar";

export default function Stats({ popularity }) {
  return (
    <div className="col stats">
      <div className="col-content">
        <div className="stats-sheet">
          <label>Most popular in</label>
          <div style={{ height: "400px", width: "100%" }}>
            <Bar popularity={popularity} />
          </div>
          {/* {popularity.map((pop, idx) => {
            return (
              <div className="row" key={idx}>
                <h5>{pop.city}</h5>
                <div className="graph-line">
                  <span
                    className="line"
                    style={{ width: `${pop.percentage}%` }}
                  >
                    {pop.percentage}%
                  </span>
                </div>
              </div>
            );
          })} */}
        </div>
      </div>
    </div>
  );
}
