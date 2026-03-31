export interface JWTPayload {
  sub: string;
  rol: string;
  exp: number;
  iat: number;
}

function decodePayload(token: string): JWTPayload | null {
  try {
    const part = token.split(".")[1];
    const decoded = Buffer.from(
      part.replace(/-/g, "+").replace(/_/g, "/"),
      "base64"
    ).toString("utf-8");
    return JSON.parse(decoded) as JWTPayload;
  } catch {
    return null;
  }
}

export function getToken(): string | null {
  if (typeof document === "undefined") return null;
  return (
    document.cookie
      .split("; ")
      .find((row) => row.startsWith("syntia_token="))
      ?.split("=")[1] ?? null
  );
}

export function getUser(): JWTPayload | null {
  const token = getToken();
  if (!token) return null;
  return decodePayload(token);
}

export function setToken(token: string): void {
  const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
  document.cookie = `syntia_token=${token}; path=/; expires=${expires}; SameSite=Lax`;
}

export function logout(): void {
  document.cookie = "syntia_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  window.location.href = "/";
}
