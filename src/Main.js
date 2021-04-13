import React from "react";
import { Route } from "react-router-dom";

import Artist from "./Artist";

export default function Main() {
  return (
    <main className="main">
      <Route path="/:artistId" component={Artist} />
    </main>
  );
}
