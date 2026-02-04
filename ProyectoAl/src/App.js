// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
import DashboardView from "./components/DashboardView"
import InstalacionesView from "./components/InstalacionesView"
import AsignacionesView from "./components/AsignacionesView"
import UsoView from "./components/UsoView"
import ReportesView from "./components/ReportesView"
import Navbar from "./components/Navbar"
import './index.css'


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<DashboardView />} />
        <Route path="/instalaciones" element={<InstalacionesView />} />
        <Route path="/asignaciones" element={<AsignacionesView />} />
        <Route path="/uso" element={<UsoView />} />
        <Route path="/reportes" element={<ReportesView />} />
      </Routes>
    </Router>
  )
}

export default App
