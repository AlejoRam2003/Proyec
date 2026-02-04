// src/roles.js
export function canEdit(role) {
  return role === "Administrador" || role === "Operador"
}

export function canDelete(role) {
  return role === "Administrador"
}

export function canView(role) {
  return ["Administrador", "Operador", "Consulta"].includes(role)
}
