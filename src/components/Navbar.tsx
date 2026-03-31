"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { getUser, logout } from "@/lib/auth";
import {
  LayoutDashboard,
  FolderOpen,
  BookOpen,
  User,
  LogOut,
  Menu,
  X,
  Sparkles,
} from "lucide-react";

const NAV_LINKS = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/proyectos", label: "Mis proyectos", icon: FolderOpen },
  { href: "/guias", label: "Guías", icon: BookOpen },
  { href: "/perfil", label: "Perfil", icon: User },
];

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const user = getUser();
  const [mobileOpen, setMobileOpen] = useState(false);

  function handleLogout() {
    logout();
    router.push("/");
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/dashboard" className="flex items-center gap-2 font-semibold text-foreground">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-white" />
          </div>
          <span className="text-lg font-bold tracking-tight">Syntia</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-light text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-surface-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          {user && (
            <span className="text-sm text-foreground-muted font-medium">
              {user.sub?.split("@")[0]}
            </span>
          )}
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm text-foreground-muted hover:text-foreground hover:bg-surface-muted transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Salir
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-surface-muted"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-surface px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary-light text-primary"
                    : "text-foreground-muted hover:text-foreground hover:bg-surface-muted"
                }`}
              >
                <Icon className="w-4 h-4" />
                {label}
              </Link>
            );
          })}
          <div className="border-t border-border mt-2 pt-2">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-3 py-2.5 w-full rounded-lg text-sm text-foreground-muted hover:text-foreground hover:bg-surface-muted transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Cerrar sesión
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
