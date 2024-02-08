import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Allproducts from "./pages/Allproducts";
import Admin from "./pages/admin/Admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Allproducts />} path="/products?" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
