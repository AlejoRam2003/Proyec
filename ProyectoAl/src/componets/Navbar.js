// src/components/Navbar.js
import { Link } from "react-router-dom"
import "../index.css"

export default function Navbar() {
  return (
    <div className="navbar">
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/instalaciones">Instalaciones</Link>
      <Link to="/asignaciones">Asignaciones</Link>
      <Link to="/uso">Uso</Link>
      <Link to="/reportes">Reportes</Link>
    </div>
  )
}
