import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { AboutUs } from "../pages/AboutUs";
import { Home } from "../pages/Home";

export default function AppRouter() {
    return (
        //Se crean las rutas para las paginas utilizando react-router-dom
        <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/dashboard" element={< Dashboard />} />
            <Route path="/about-us" element={< AboutUs />} />
        </Routes>
    );
}