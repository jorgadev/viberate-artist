import { Route } from "react-router-dom";

import Home from "./Home";
import Artist from "./Artist";

function Main() {
  return (
    <main className="main">
      <Route exact path="/" component={Home} />
      <Route exact path="/:artistId" component={Artist} />
    </main>
  );
}

export default Main;
