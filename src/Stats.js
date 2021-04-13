import React from "react";

export default function Stats({ popularity }) {
  return (
    <div className="col stats">
      <div className="col-content">
        <div className="stats-sheet">
          <label>Most popular in</label>
          {popularity.map((pop, idx) => {
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
          })}
        </div>
      </div>
    </div>
  );
}
