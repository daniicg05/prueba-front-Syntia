"use client"

import Link from "next/link"
import { Sparkles, Database, BookOpen, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function LandingPage() {
  return (
      <div className="min-h-screen bg-background">

        {/* Header */}
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
            <Link href="/" className="text-xl font-semibold">
              Syntia
            </Link>

            <nav className="hidden md:flex gap-8 text-sm text-muted-foreground">
              <Link href="#features">Funcionalidades</Link>
              <Link href="#how-it-works">Cómo funciona</Link>
            </nav>

            <div className="flex gap-3">
              <Link href="/login">
                <Button variant="ghost">Iniciar sesión</Button>
              </Link>
              <Link href="/registro">
                <Button>Registrarse</Button>
              </Link>
            </div>
          </div>
        </header>

        <main>

          {/* HERO */}
          <section className="relative overflow-hidden px-4 py-28">

            {/* Fondo */}
            <div className="absolute inset-0 -z-10">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-background to-emerald-500/30" />
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,#ccc_1px,transparent_1px),linear-gradient(to_bottom,#ccc_1px,transparent_1px)] [background-size:40px_40px]" />
            </div>

            <div className="mx-auto max-w-3xl text-center">

              {/* Badge */}
              <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border bg-card px-4 py-1.5 text-sm text-muted-foreground shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Impulsado por IA
              </motion.div>

              {/* Título */}
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-bold sm:text-6xl"
              >
                Encuentra subvenciones{" "}
                <span className="text-primary">perfectas</span> para tu proyecto
              </motion.h1>

              {/* Texto */}
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto"
              >
                Syntia analiza tu proyecto y encuentra automáticamente las subvenciones públicas más compatibles.
              </motion.p>

              {/* Botones */}
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/registro">
                  <Button size="lg" className="shadow-lg shadow-primary/30">
                    Empezar gratis
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>

                <Link href="/login">
                  <Button variant="ghost" size="lg">
                    Iniciar sesión
                  </Button>
                </Link>
              </motion.div>

              {/* Texto pequeño */}
              <div className="mt-6 text-sm text-muted-foreground">
                Sin tarjeta · Gratis · Resultados en segundos
              </div>

              {/* Mockup */}
              <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-16 flex justify-center"
              >
                <div className="rounded-xl border bg-card shadow-2xl p-2">
                  <img
                      src="/mockup.png"
                      className="rounded-lg animate-[float_6s_ease-in-out_infinite]"
                      alt="App preview"
                  />
                </div>
              </motion.div>

            </div>
          </section>

          {/* FEATURES */}
          <section id="features" className="py-28">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-3xl font-bold">Funcionalidades</h2>

              <div className="mt-16 grid md:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-8">
                    <Sparkles className="mb-4 text-primary" />
                    IA inteligente
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <Database className="mb-4 text-primary" />
                    Datos oficiales
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <BookOpen className="mb-4 text-primary" />
                    Guías paso a paso
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

        </main>
      </div>
  )
}