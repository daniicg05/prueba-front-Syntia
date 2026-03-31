const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

function getHeaders(): HeadersInit {
  if (typeof document === "undefined") return { "Content-Type": "application/json" };
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("syntia_token="))
    ?.split("=")[1];
  return {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
  };
}

async function request<T>(path: string, options?: RequestInit): Promise<{ data: T }> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { ...getHeaders(), ...(options?.headers ?? {}) },
  });
  if (!res.ok) {
    const msg = await res.text().catch(() => "Error desconocido");
    throw new Error(msg || `HTTP ${res.status}`);
  }
  const data: T = await res.json();
  return { data };
}

export const authApi = {
  login: (body: { email: string; password: string }) =>
    request<{ token: string }>("/auth/login", {
      method: "POST",
      body: JSON.stringify(body),
    }),
  register: (body: { nombre: string; email: string; password: string }) =>
    request<{ token: string }>("/auth/registro", {
      method: "POST",
      body: JSON.stringify(body),
    }),
};

export const dashboardApi = {
  get: () => request<unknown>("/dashboard"),
};

export const proyectosApi = {
  list: () => request<unknown[]>("/proyectos"),
  get: (id: number) => request<unknown>(`/proyectos/${id}`),
  create: (body: unknown) =>
    request<unknown>("/proyectos", { method: "POST", body: JSON.stringify(body) }),
  delete: (id: number) => request<void>(`/proyectos/${id}`, { method: "DELETE" }),
  recomendaciones: (id: number) => request<unknown[]>(`/proyectos/${id}/recomendaciones`),
};

export const guiasApi = {
  list: () => request<unknown[]>("/guias"),
  get: (id: number) => request<unknown>(`/guias/${id}`),
};

export const perfilApi = {
  get: () => request<unknown>("/perfil"),
  update: (body: unknown) =>
    request<unknown>("/perfil", { method: "PUT", body: JSON.stringify(body) }),
};
