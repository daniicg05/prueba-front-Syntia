"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { proyectosApi } from "@/lib/api";
import { Card } from "@/components/ui/Card";
import { ScoreBadge } from "@/components/ui/Badge";
import { Alert } from "@/components/ui/Alert";
import { SkeletonCard } from "@/components/ui/Skeleton";
import {
  ArrowLeft,
  Sparkles,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Filter,
  Search,
} from "lucide-react";

interface Recomendacion {
  id: number;
  puntuacion: number;
  explicacion: string;
  convocatoria: {
    titulo: string;
    organismo?: string;
    presupuesto?: number;
    fechaInicio?: string;
    fechaFin?: string;
    url?: string;
  };
}

interface Proyecto {
  id: number;
  nombre: string;
  descripcion: string;
  sector?: string;
}

export default function ProyectoDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [proyecto, setProyecto] = useState<Proyecto | null>(null);
  const [recomendaciones, setRecomendaciones] = useState<Recomendacion[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [minScore, setMinScore] = useState(0);
  const [expandedId, setExpandedId] = useState<number | null>(null);

  useEffect(() => {
    const pid = parseInt(id, 10);
    Promise.all([proyectosApi.get(pid), proyectosApi.recomendaciones(pid)])
      .then(([pRes, rRes]) => {
        setProyecto(pRes.data as Proyecto);
        setRecomendaciones(rRes.data as Recomendacion[]);
      })
      .catch(() => setError("No se pudieron cargar los datos del proyecto"))
      .finally(() => setLoading(false));
  }, [id]);

  const filtered = recomendaciones.filter(
    (r) =>
      r.puntuacion >= minScore &&
      (search === "" ||
        r.convocatoria.titulo.toLowerCase().includes(search.toLowerCase()) ||
        r.convocatoria.organismo?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {/* Header */}
      <div className="mb-7">
        <Link
          href="/proyectos"
          className="inline-flex items-center gap-1.5 text-sm text-foreground-muted hover:text-foreground mb-4 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a proyectos
        </Link>
        {proyecto && (
          <>
            <h1 className="text-2xl font-bold text-foreground">{proyecto.nombre}</h1>
            <p className="text-foreground-muted mt-1 text-sm max-w-2xl leading-relaxed">
              {proyecto.descripcion}
            </p>
            {proyecto.sector && (
              <span className="inline-block mt-2 text-xs font-medium bg-primary-light text-primary px-2.5 py-0.5 rounded-full border border-primary/20">
                {proyecto.sector}
              </span>
            )}
          </>
        )}
      </div>

      {error && <Alert variant="error" message={error} className="mb-5" />}

      {/* Filters */}
      {!loading && recomendaciones.length > 0 && (
        <Card padding="sm" className="mb-5">
          <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <div className="relative flex-1 max-w-sm">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground-muted" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar convocatoria u organismo..."
                className="w-full pl-9 pr-3 py-2 rounded-lg border border-border bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-foreground-muted" />
              <span className="text-sm text-foreground-muted">Puntuación mínima:</span>
              <select
                value={minScore}
                onChange={(e) => setMinScore(parseInt(e.target.value))}
                className="rounded-lg border border-border bg-surface text-sm py-2 px-2 focus:outline-none focus:ring-2 focus:ring-primary/30"
              >
                <option value={0}>Todas</option>
                <option value={50}>50%+</option>
                <option value={70}>70%+</option>
                <option value={85}>85%+</option>
              </select>
            </div>
            <span className="text-sm text-foreground-muted ml-auto">
              {filtered.length} resultado{filtered.length !== 1 ? "s" : ""}
            </span>
          </div>
        </Card>
      )}

      {/* Loading state */}
      {loading && (
        <div className="space-y-3">
          {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
        </div>
      )}

      {/* Empty state */}
      {!loading && recomendaciones.length === 0 && !error && (
        <Card className="text-center py-14">
          <Sparkles className="w-12 h-12 text-foreground-subtle mx-auto mb-3" />
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Aún no hay recomendaciones
          </h2>
          <p className="text-sm text-foreground-muted max-w-xs mx-auto">
            El análisis de tu proyecto está en proceso. Vuelve en unos minutos.
          </p>
        </Card>
      )}

      {/* Recommendations list */}
      {!loading && filtered.length > 0 && (
        <div className="space-y-3">
          {filtered.map((rec) => {
            const isExpanded = expandedId === rec.id;
            return (
              <Card
                key={rec.id}
                className="hover:shadow-md transition-all cursor-pointer"
                onClick={() => setExpandedId(isExpanded ? null : rec.id)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 flex-wrap">
                      <ScoreBadge score={rec.puntuacion} />
                      <h3 className="text-sm font-semibold text-foreground leading-snug">
                        {rec.convocatoria.titulo}
                      </h3>
                    </div>
                    {rec.convocatoria.organismo && (
                      <p className="text-xs text-foreground-muted mt-1">
                        {rec.convocatoria.organismo}
                      </p>
                    )}
                  </div>
                  <button
                    className="p-1 text-foreground-muted hover:text-foreground shrink-0"
                    aria-label={isExpanded ? "Contraer" : "Expandir"}
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {isExpanded && (
                  <div className="mt-4 pt-4 border-t border-border space-y-3">
                    <p className="text-sm text-foreground-muted leading-relaxed">
                      {rec.explicacion}
                    </p>
                    <div className="flex flex-wrap gap-3 text-xs text-foreground-muted">
                      {rec.convocatoria.presupuesto && (
                        <span>
                          Dotación:{" "}
                          <strong className="text-foreground">
                            {rec.convocatoria.presupuesto.toLocaleString("es-ES")} €
                          </strong>
                        </span>
                      )}
                      {rec.convocatoria.fechaFin && (
                        <span>
                          Cierre:{" "}
                          <strong className="text-foreground">
                            {new Date(rec.convocatoria.fechaFin).toLocaleDateString("es-ES")}
                          </strong>
                        </span>
                      )}
                    </div>
                    {rec.convocatoria.url && (
                      <a
                        href={rec.convocatoria.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                      >
                        Ver convocatoria oficial
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {!loading && filtered.length === 0 && recomendaciones.length > 0 && (
        <Card className="text-center py-10">
          <p className="text-foreground-muted">
            Ninguna convocatoria coincide con tu búsqueda. Prueba a cambiar los filtros.
          </p>
        </Card>
      )}
    </div>
  );
}
