// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://sbphwshnuqqmouphzani.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicGh3c2hudXFxbW91cGh6YW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzAwNTMxNzUsImV4cCI6MjA4NTYyOTE3NX0.jgUetQ3-T5QdT_0KZiiGcUfRjI93h6MBb3bpa-1eUQs"
export const supabase = createClient(supabaseUrl, supabaseKey)
