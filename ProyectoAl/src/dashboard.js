// src/dashboard.js
import { Bar } from "react-chartjs-2"

export function Dashboard({ instalaciones }) {
  const data = {
    labels: instalaciones.map(i => i.nombre),
    datasets: [
      {
        label: "Capacidad",
        data: instalaciones.map(i => i.capacidad),
        backgroundColor: "#36A2EB"
      }
    ]
  }

  return <Bar data={data} />
}
