import logo from "./logo.svg";
import "./App.css";

// Does'nt work
// import { CobrowseIO } from "cobrowse-sdk-js";

const CobrowseIO = require("cobrowse-sdk-js");

function App() {
  CobrowseIO.license = process.env.REACT_APP_COBROWSE_LICENSE;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Start Your Cobrowsing session by clicking below.
        </p>

        <button className="cobrowsing" onClick={() => CobrowseIO.start()}>Start Cobrowsing Session</button>
      </header>
    </div>
  );
}

export default App;
