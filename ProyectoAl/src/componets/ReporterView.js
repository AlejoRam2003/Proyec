// src/components/ReportesView.js
import { useEffect, useState } from "react"
import { generarReporteInstalaciones, generarReporteAsignaciones, generarReporteUso } from "../reportes"
import "../index.css"

export default function ReportesView() {
  const [instalaciones, setInstalaciones] = useState([])
  const [asignaciones, setAsignaciones] = useState([])
  const [uso, setUso] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data: inst } = await generarReporteInstalaciones()
      const { data: asig } = await generarReporteAsignaciones()
      const { data: usoData } = await generarReporteUso()
      setInstalaciones(inst || [])
      setAsignaciones(asig || [])
      setUso(usoData || [])
    }
    fetchData()
  }, [])

  return (
    <div className="container">
      <h2>📄 Reportes</h2>

      {/* Reporte de Instalaciones */}
      <h3>Instalaciones</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Tipo</th>
            <th>Estado</th>
            <th>Capacidad</th>
          </tr>
        </thead>
        <tbody>
          {instalaciones.map(i => (
            <tr key={i.id}>
              <td>{i.nombre}</td>
              <td>{i.tipo}</td>
              <td>{i.estado}</td>
              <td>{i.capacidad}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Reporte de Asignaciones */}
      <h3>Asignaciones</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Instalación</th>
            <th>Departamento</th>
            <th>Responsable</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {asignaciones.map(a => (
            <tr key={a.id}>
              <td>{a.instalacion_id}</td>
              <td>{a.departamento}</td>
              <td>{a.responsable}</td>
              <td>{a.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Reporte de Uso */}
      <h3>Uso</h3>
      <table className="report-table">
        <thead>
          <tr>
            <th>Instalación</th>
            <th>Departamento</th>
            <th>Fecha</th>
            <th>Horario</th>
            <th>Actividad</th>
          </tr>
        </thead>
        <tbody>
          {uso.map(u => (
            <tr key={u.id}>
              <td>{u.instalacion_id}</td>
              <td>{u.departamento}</td>
              <td>{u.fecha}</td>
              <td>{u.horario}</td>
              <td>{u.actividad}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
