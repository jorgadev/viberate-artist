import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";
import Main from "./Main";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Main />
        </div>
      </div>
    </Router>
  );
}

export default App;
