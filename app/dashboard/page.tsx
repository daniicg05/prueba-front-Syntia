"use client"

import Link from "next/link"
import { TrendingUp, FolderOpen, Star, Plus, ArrowRight, FileText } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// Mock data for demonstration
const mockData = {
  totalRecomendaciones: 24,
  proyectosActivos: 3,
  oportunidades: 8,
  topRecomendaciones: {
    "Proyecto de Innovacion Digital": [
      {
        id: 1,
        puntuacion: 92,
        convocatoria: { titulo: "Programa Kit Digital 2024" },
        explicacion: "Alta compatibilidad con los requisitos de digitalizacion empresarial",
      },
      {
        id: 2,
        puntuacion: 85,
        convocatoria: { titulo: "Ayudas CDTI - Proyectos I+D" },
        explicacion: "Alineado con los objetivos de innovacion tecnologica",
      },
    ],
    "Expansion Internacional": [
      {
        id: 3,
        puntuacion: 88,
        convocatoria: { titulo: "ICEX Next - Internacionalizacion" },
        explicacion: "Cumple criterios de expansion a nuevos mercados",
      },
    ],
  },
}

function ScoreBadge({ score }: { score: number }) {
  const variant = score >= 90 ? "default" : score >= 70 ? "secondary" : "outline"
  return (
    <Badge variant={variant} className="tabular-nums">
      {score}%
    </Badge>
  )
}

export default function DashboardPage() {
  const user = { name: "Usuario" }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Bienvenido, {user.name}
          </h1>
          <p className="mt-1 text-muted-foreground">
            Aqui tienes el resumen de tu actividad en Syntia
          </p>
        </div>
        <Link href="/proyectos/nuevo">
          <Button className="gap-2">
            <Plus className="h-4 w-4" />
            Nuevo proyecto
          </Button>
        </Link>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-semibold tabular-nums text-foreground">
                {mockData.totalRecomendaciones}
              </div>
              <div className="text-sm text-muted-foreground">Recomendaciones totales</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <FolderOpen className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-semibold tabular-nums text-foreground">
                {mockData.proyectosActivos}
              </div>
              <div className="text-sm text-muted-foreground">Proyectos activos</div>
            </div>
          </CardContent>
        </Card>

        <Card className="sm:col-span-2 lg:col-span-1">
          <CardContent className="flex items-center gap-4 p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
              <Star className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="text-2xl font-semibold tabular-nums text-foreground">
                {mockData.oportunidades}
              </div>
              <div className="text-sm text-muted-foreground">Oportunidades en roadmap</div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Recommendations */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Top recomendaciones por proyecto</CardTitle>
          <Link href="/proyectos">
            <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {Object.entries(mockData.topRecomendaciones).map(([proyectoNombre, recs]) => (
              <div key={proyectoNombre} className="space-y-4">
                <div className="flex items-center gap-2">
                  <FolderOpen className="h-4 w-4 text-muted-foreground" />
                  <h3 className="font-medium text-foreground">{proyectoNombre}</h3>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {recs.map((rec) => (
                    <div
                      key={rec.id}
                      className="group flex flex-col gap-3 rounded-lg border border-border bg-card p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">
                            {rec.convocatoria.titulo}
                          </span>
                        </div>
                        <ScoreBadge score={rec.puntuacion} />
                      </div>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {rec.explicacion}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Empty State (shown when no projects) */}
      {Object.keys(mockData.topRecomendaciones).length === 0 && (
        <Card>
          <CardContent className="flex flex-col items-center justify-center py-12 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
              <FolderOpen className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="mt-4 text-lg font-medium text-foreground">
              Aun no tienes proyectos ni recomendaciones
            </h3>
            <p className="mt-2 max-w-sm text-muted-foreground">
              Crea tu primer proyecto para empezar a recibir recomendaciones de subvenciones
            </p>
            <Link href="/proyectos/nuevo" className="mt-6">
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Crear tu primer proyecto
              </Button>
            </Link>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
