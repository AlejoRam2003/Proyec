// src/components/DashboardView.js
import { useEffect, useState } from "react"
import { getInstalaciones } from "../instalaciones"
import { Dashboard } from "../dashboard"

export default function DashboardView() {
  const [instalaciones, setInstalaciones] = useState([])

  useEffect(() => {
    async function fetchData() {
      const { data } = await getInstalaciones()
      setInstalaciones(data || [])
    }
    fetchData()
  }, [])

  return (
    <div>
      <h2>Dashboard</h2>
      <Dashboard instalaciones={instalaciones} />
    </div>
  )
}
