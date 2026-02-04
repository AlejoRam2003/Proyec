// src/asignaciones.js
import { supabase } from "./supabaseClient"

export async function getAsignaciones() {
  return await supabase.from("asignaciones").select("*")
}

export async function addAsignacion(data) {
  return await supabase.from("asignaciones").insert([data])
}

export async function updateAsignacion(id, data) {
  return await supabase.from("asignaciones").update(data).eq("id", id)
}

export async function deleteAsignacion(id) {
  return await supabase.from("asignaciones").delete().eq("id", id)
}
