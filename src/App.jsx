import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/home";
import Details from "./components/details";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/meteo" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
