import React from "react";

import Bar from "./Bar";

export default function Stats({ popularity }) {
  return (
    <div className="col stats">
      <div className="col-content">
        <div className="stats-sheet">
          <label>Most popular in</label>
          <div style={{ height: "200px", width: "100%" }}>
            <Bar popularity={popularity} />
          </div>
        </div>
      </div>
    </div>
  );
}
