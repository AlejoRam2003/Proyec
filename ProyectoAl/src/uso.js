// src/uso.js
import { supabase } from "./supabaseClient"

export async function getUso() {
  return await supabase.from("uso").select("*")
}

export async function addUso(data) {
  return await supabase.from("uso").insert([data])
}

export async function updateUso(id, data) {
  return await supabase.from("uso").update(data).eq("id", id)
}

export async function deleteUso(id) {
  return await supabase.from("uso").delete().eq("id", id)
}
