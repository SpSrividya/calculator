import "./App.css";
// import Converter from "./components/organisms/Converter/Converter";
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1 className="App-title">Welcome to My App</h1>
      </header> */}
      <div className="menu">
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
        </ul>
      </div>
      <div className="App-intro">
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
