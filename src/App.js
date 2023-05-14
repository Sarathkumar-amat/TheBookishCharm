import { Routes,Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.png";
import MockAPI from "./MockAPI";
import { Landing } from "./pages/Landing";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Landing />}/>
        <Route path="/mockman" element={<MockAPI/>}/>
        </Routes>
    </div>
  );
}

export default App;
