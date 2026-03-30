import Link from "next/link"
import { Sparkles, Database, BookOpen, ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-xl font-semibold tracking-tight text-foreground">
            Syntia
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Funcionalidades
            </Link>
            <Link href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Como funciona
            </Link>
            <Link href="/aviso-legal" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Aviso legal
            </Link>
          </nav>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm" className="text-sm">
                Iniciar sesion
              </Button>
            </Link>
            <Link href="/registro">
              <Button size="sm" className="text-sm">
                Registrarse
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Impulsado por IA
            </div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Encuentra subvenciones para tu proyecto
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Syntia analiza tu proyecto con inteligencia artificial y encuentra las subvenciones publicas mas compatibles de la Base de Datos Nacional de Subvenciones.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/registro">
                <Button size="lg" className="gap-2">
                  Empezar gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button variant="outline" size="lg">
                  Iniciar sesion
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-y border-border bg-card">
          <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-border md:grid-cols-4">
            {[
              { value: "+5.000", label: "Convocatorias analizadas" },
              { value: "98%", label: "Precision en matching" },
              { value: "+200", label: "Empresas activas" },
              { value: "24h", label: "Actualizacion de datos" },
            ].map((stat, index) => (
              <div key={index} className="px-6 py-10 text-center">
                <div className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Todo lo que necesitas para acceder a financiacion publica
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Herramientas inteligentes que simplifican la busqueda y gestion de subvenciones
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              <Card className="border-border bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Matching con IA</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Nuestro motor de IA analiza tu proyecto y lo compara con miles de convocatorias para encontrar las mas adecuadas, con una puntuacion de compatibilidad precisa.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Analisis automatico", "Puntuacion de compatibilidad", "Actualizacion en tiempo real"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Database className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Integracion con BDNS</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Acceso directo a la Base de Datos Nacional de Subvenciones, actualizada en tiempo real con convocatorias de todas las administraciones publicas espanolas.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Datos oficiales", "Todas las administraciones", "Sin intermediarios"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-border bg-card transition-shadow hover:shadow-md">
                <CardContent className="p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">Guias personalizadas</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">
                    Para cada subvencion compatible, genera automaticamente una guia paso a paso de solicitud adaptada a tu proyecto y perfil de entidad.
                  </p>
                  <ul className="mt-6 space-y-3">
                    {["Instrucciones claras", "Documentacion requerida", "Plazos y requisitos"].map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Check className="h-4 w-4 text-emerald-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How it Works Section */}
        <section id="how-it-works" className="border-t border-border bg-muted/50 px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Como funciona
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                Tres sencillos pasos para encontrar la financiacion perfecta para tu proyecto
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {[
                {
                  step: "01",
                  title: "Describe tu proyecto",
                  description: "Introduce los detalles de tu proyecto: sector, objetivos, presupuesto y tipo de entidad.",
                },
                {
                  step: "02",
                  title: "Analisis con IA",
                  description: "Nuestra inteligencia artificial compara tu proyecto con todas las convocatorias disponibles.",
                },
                {
                  step: "03",
                  title: "Recibe recomendaciones",
                  description: "Obtén un listado de subvenciones ordenadas por compatibilidad con guías de solicitud.",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-6xl font-semibold text-border">{item.step}</div>
                  <h3 className="mt-4 text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="border-t border-border px-4 py-24 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Empieza a encontrar subvenciones hoy
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Crea tu cuenta gratuita y descubre las oportunidades de financiacion que mejor se adaptan a tu proyecto.
            </p>
            <div className="mt-10">
              <Link href="/registro">
                <Button size="lg" className="gap-2">
                  Crear cuenta gratis
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-foreground">Syntia</div>
          <nav className="flex items-center gap-6">
            <Link href="/aviso-legal" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Aviso legal
            </Link>
            <Link href="mailto:informacion@syntia.es" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              Contacto
            </Link>
          </nav>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Syntia
          </div>
        </div>
      </footer>
    </div>
  )
}
