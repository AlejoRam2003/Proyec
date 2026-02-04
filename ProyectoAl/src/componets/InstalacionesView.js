// src/components/InstalacionesView.js
import { useEffect, useState } from "react"
import { getInstalaciones, addInstalacion, deleteInstalacion } from "../instalaciones"

export default function InstalacionesView() {
  const [instalaciones, setInstalaciones] = useState([])
  const [nombre, setNombre] = useState("")

  async function fetchData() {
    const { data } = await getInstalaciones()
    setInstalaciones(data || [])
  }

  useEffect(() => { fetchData() }, [])

  async function handleAdd() {
    await addInstalacion({ nombre, tipo: "Aula", estado: "Activo", capacidad: 30 })
    fetchData()
  }

  async function handleDelete(id) {
    await deleteInstalacion(id)
    fetchData()
  }

  return (
    <div>
      <h2>Instalaciones</h2>
      <input placeholder="Nombre" onChange={e => setNombre(e.target.value)} />
      <button onClick={handleAdd}>Agregar</button>
      <ul>
        {instalaciones.map(i => (
          <li key={i.id}>
            {i.nombre} - {i.tipo}
            <button onClick={() => handleDelete(i.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
