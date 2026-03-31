"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Sparkles, User, Mail, Lock, ArrowRight, CheckCircle2 } from "lucide-react";
import { authApi } from "@/lib/api";
import { setToken } from "@/lib/auth";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Alert } from "@/components/ui/Alert";

const BENEFITS = [
  "Matching automático con más de 12.000 convocatorias",
  "Datos actualizados desde la BDNS oficial",
  "Guías de solicitud personalizadas",
  "Completamente gratis para empezar",
];

export default function RegistroPage() {
  const router = useRouter();
  const [form, setForm] = useState({ nombre: "", email: "", password: "", confirm: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  function validate() {
    const errors: Record<string, string> = {};
    if (!form.nombre.trim()) errors.nombre = "El nombre es obligatorio";
    if (!form.email.includes("@")) errors.email = "Introduce un correo válido";
    if (form.password.length < 6) errors.password = "Mínimo 6 caracteres";
    if (form.password !== form.confirm) errors.confirm = "Las contraseñas no coinciden";
    return errors;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const errors = validate();
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;
    setError("");
    setLoading(true);
    try {
      const { data } = await authApi.register({
        nombre: form.nombre,
        email: form.email,
        password: form.password,
      });
      setToken(data.token);
      router.push("/dashboard");
    } catch (err: unknown) {
      setError(
        err instanceof Error
          ? err.message
          : "No se pudo crear la cuenta. Inténtalo de nuevo."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-background flex flex-col lg:flex-row">
      {/* Left panel */}
      <div className="hidden lg:flex flex-col justify-between w-[420px] shrink-0 bg-primary px-12 py-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">Syntia</span>
        </Link>

        <div>
          <h2 className="text-3xl font-bold text-white leading-snug mb-6">
            Encuentra financiación pública para tu proyecto
          </h2>
          <ul className="space-y-3">
            {BENEFITS.map((b) => (
              <li key={b} className="flex items-start gap-3 text-white/90 text-sm">
                <CheckCircle2 className="w-4 h-4 mt-0.5 text-white shrink-0" />
                {b}
              </li>
            ))}
          </ul>
        </div>

        <p className="text-white/50 text-xs">
          © {new Date().getFullYear()} Syntia. Todos los derechos reservados.
        </p>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12 lg:px-12">
        {/* Mobile logo */}
        <Link href="/" className="flex items-center gap-2 mb-8 lg:hidden">
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-foreground">Syntia</span>
        </Link>

        <div className="w-full max-w-sm">
          <div className="mb-7">
            <h1 className="text-2xl font-bold text-foreground mb-1">Crear cuenta gratis</h1>
            <p className="text-sm text-foreground-muted">
              Empieza a encontrar subvenciones en minutos
            </p>
          </div>

          {error && <Alert variant="error" message={error} className="mb-5" />}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
            <Input
              label="Nombre o razón social"
              type="text"
              placeholder="Tu empresa o nombre"
              value={form.nombre}
              onChange={(e) => setForm({ ...form, nombre: e.target.value })}
              leftIcon={<User className="w-4 h-4" />}
              error={fieldErrors.nombre}
              required
            />
            <Input
              label="Correo electrónico"
              type="email"
              placeholder="tu@empresa.es"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              leftIcon={<Mail className="w-4 h-4" />}
              error={fieldErrors.email}
              required
              autoComplete="email"
            />
            <Input
              label="Contraseña"
              type="password"
              placeholder="Mínimo 6 caracteres"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              leftIcon={<Lock className="w-4 h-4" />}
              error={fieldErrors.password}
              helper="Mínimo 6 caracteres"
              required
            />
            <Input
              label="Confirmar contraseña"
              type="password"
              placeholder="Repite tu contraseña"
              value={form.confirm}
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              leftIcon={<Lock className="w-4 h-4" />}
              error={fieldErrors.confirm}
              required
            />

            <Button
              type="submit"
              variant="primary"
              size="lg"
              loading={loading}
              icon={<ArrowRight className="w-4 h-4" />}
              className="mt-2 w-full justify-center"
            >
              {loading ? "Creando cuenta..." : "Crear cuenta gratis"}
            </Button>
          </form>

          <p className="mt-4 text-xs text-center text-foreground-subtle">
            Al registrarte aceptas nuestro{" "}
            <Link href="/aviso-legal" className="underline hover:text-foreground">
              aviso legal
            </Link>
          </p>

          <div className="mt-6 text-center">
            <p className="text-sm text-foreground-muted">
              ¿Ya tienes cuenta?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Iniciar sesión
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
