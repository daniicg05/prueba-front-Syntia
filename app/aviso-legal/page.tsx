import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AvisoLegalPage() {
  const sections = [
    {
      title: "1. Responsable del sitio e informacion de contacto",
      content: (
        <ul className="list-inside list-disc space-y-1 text-muted-foreground">
          <li>Titular: NOMBRE O RAZON SOCIAL</li>
          <li>NIF/CIF: XXXXXXXX-X</li>
          <li>Domicilio: DIRECCION COMPLETA</li>
          <li>
            Correo:{" "}
            <a href="mailto:informacion@syntia.es" className="text-foreground underline underline-offset-4 hover:text-primary">
              informacion@syntia.es
            </a>
          </li>
        </ul>
      ),
    },
    {
      title: "2. Informacion general",
      content:
        "Syntia es una plataforma tecnologica de ayuda a la busqueda de subvenciones y financiacion publica para empresas y entidades. El acceso y uso de esta plataforma esta sujeto a las condiciones descritas en el presente aviso legal.",
    },
    {
      title: "3. Finalidad y objetivos del servicio",
      content:
        "Syntia ofrece un servicio de analisis automatizado de proyectos mediante inteligencia artificial para identificar convocatorias de subvenciones publicas potencialmente compatibles, consultando la Base de Datos Nacional de Subvenciones (BDNS) del Ministerio de Hacienda.",
    },
    {
      title: "4. Uso del sitio",
      content:
        "La persona usuaria se compromete a hacer un uso licito del sitio y de sus contenidos, evitando conductas que puedan dañar, bloquear o sobrecargar la plataforma.",
    },
    {
      title: "5. Condiciones de uso del servicio",
      content:
        "El uso del servicio tiene caracter informativo y orientativo. La persona usuaria es responsable de verificar en fuentes oficiales los requisitos, plazos y bases de cada convocatoria antes de adoptar decisiones.",
    },
    {
      title: "6. Limitacion de responsabilidad",
      content:
        "Las recomendaciones generadas por Syntia tienen caracter meramente orientativo. La plataforma no garantiza la concesion de ninguna subvencion ni asume responsabilidad por las decisiones tomadas en base a la informacion proporcionada. Se recomienda verificar siempre la informacion oficial en las fuentes originales.",
    },
    {
      title: "7. Propiedad intelectual e industrial",
      content: (
        <div className="space-y-4">
          <p>
            Los contenidos de este sitio (textos, diseño, logotipos, codigo fuente, imagenes y demas elementos) son titularidad de Syntia o de terceros con licencia, y estan protegidos por la normativa de propiedad intelectual e industrial.
          </p>
          <p>
            Queda prohibida su reproduccion, distribucion, transformacion o comunicacion publica, total o parcial, sin autorizacion previa y expresa del titular.
          </p>
        </div>
      ),
    },
    {
      title: "8. Proteccion de datos",
      content:
        "Los datos personales facilitados seran tratados conforme al Reglamento (UE) 2016/679 (RGPD) y la Ley Organica 3/2018 (LOPDGDD). Los datos se utilizan exclusivamente para la prestacion del servicio y no seran cedidos a terceros sin consentimiento expreso.",
    },
    {
      title: "9. Legislacion aplicable",
      content: "El presente aviso legal se rige por la legislacion española.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-background">
        <div className="mx-auto flex h-16 max-w-4xl items-center px-4 sm:px-6 lg:px-8">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Volver al inicio
            </Button>
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Aviso Legal
        </h1>
        <p className="mt-4 text-muted-foreground">
          Ultima actualizacion: {new Date().toLocaleDateString("es-ES", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="mt-12 space-y-12">
          {sections.map((section, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-lg font-semibold text-foreground">{section.title}</h2>
              {typeof section.content === "string" ? (
                <p className="leading-relaxed text-muted-foreground">{section.content}</p>
              ) : (
                section.content
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-sm font-medium text-foreground">Syntia</div>
          <div className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Syntia
          </div>
        </div>
      </footer>
    </div>
  )
}
