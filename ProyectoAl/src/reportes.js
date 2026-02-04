// src/reportes.js
import { supabase } from "./supabaseClient"

export async function generarReporteInstalaciones() {
  return await supabase.from("instalaciones").select("*")
}

export async function generarReporteAsignaciones() {
  return await supabase.from("asignaciones").select("*")
}

export async function generarReporteUso() {
  return await supabase.from("uso").select("*")
}
