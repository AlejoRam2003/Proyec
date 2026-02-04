// src/components/Login.js
import { useState } from "react"
import { signIn } from "../auth"
import { useNavigate } from "react-router-dom"
import "../index.css"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  async function handleLogin() {
    try {
      await signIn(email, password)
      navigate("/dashboard")
    } catch (err) {
      alert("Error: " + err.message)
    }
  }

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  )
}


