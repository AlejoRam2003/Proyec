// src/components/Register.js
import { useState } from "react"
import { signUp } from "../auth"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [role, setRole] = useState("Consulta")

  async function handleRegister() {
    try {
      await signUp(email, password, role)
      alert("Usuario registrado con rol: " + role)
    } catch (err) {
      alert("Error: " + err.message)
    }
  }

  return (
    <div>
      <h2>Registro</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <select onChange={e => setRole(e.target.value)}>
        <option>Administrador</option>
        <option>Operador</option>
        <option>Consulta</option>
      </select>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  )
}
