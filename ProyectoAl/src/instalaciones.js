// src/instalaciones.js
import { supabase } from "./supabaseClient"

export async function getInstalaciones() {
  return await supabase.from("instalaciones").select("*")
}

export async function addInstalacion(data) {
  return await supabase.from("instalaciones").insert([data])
}

export async function updateInstalacion(id, data) {
  return await supabase.from("instalaciones").update(data).eq("id", id)
}

export async function deleteInstalacion(id) {
  return await supabase.from("instalaciones").delete().eq("id", id)
}
