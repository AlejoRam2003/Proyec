// src/auth.js
import { supabase } from "./supabaseClient"

export async function signUp(email, password, role) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password
  })
  if (error) throw error

  await supabase.from("perfiles").insert([{ user_id: data.user.id, role }])
}

export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })
  if (error) throw error
  return data.user
}

export async function getUserRole(user_id) {
  const { data } = await supabase.from("perfiles").select("role").eq("user_id", user_id).single()
  return data?.role
}
