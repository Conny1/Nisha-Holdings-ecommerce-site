import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Allproducts from "./pages/Allproducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Allproducts} path="/products?" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
