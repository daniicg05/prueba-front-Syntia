import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Volver al inicio</span>
          </Link>
        </div>
      </header>

      {/* Contenido */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-8">
          {/* Titulo */}
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-foreground text-background">
              <FileText className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Terminos y Condiciones</h1>
            <p className="text-muted-foreground">Ultima actualizacion: 1 de Enero de 2025</p>
          </div>

          {/* Contenido legal */}
          <div className="prose prose-neutral max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Aceptacion de los terminos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar la plataforma Syntia, usted acepta estos Terminos y Condiciones en su 
                totalidad. Si no esta de acuerdo con alguna parte de estos terminos, no debera utilizar 
                nuestros servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Descripcion del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syntia es una plataforma de recomendaciones de subvenciones que utiliza inteligencia artificial 
                para analizar proyectos y encontrar las subvenciones publicas mas compatibles. Nuestros servicios incluyen:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Busqueda y filtrado de subvenciones publicas</li>
                <li>Recomendaciones personalizadas basadas en el perfil de la empresa</li>
                <li>Alertas de nuevas convocatorias</li>
                <li>Guias y recursos para la solicitud de ayudas</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Registro y cuenta de usuario</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para acceder a ciertas funcionalidades, debera crear una cuenta proporcionando informacion 
                veraz y actualizada. Usted es responsable de mantener la confidencialidad de sus credenciales 
                y de todas las actividades realizadas bajo su cuenta.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Planes y tarifas</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syntia ofrece diferentes planes de suscripcion. Los precios y caracteristicas de cada plan 
                estan disponibles en nuestra pagina de precios. Nos reservamos el derecho de modificar las 
                tarifas con previo aviso de 30 dias.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">5. Uso aceptable</h2>
              <p className="text-muted-foreground leading-relaxed">
                El usuario se compromete a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Utilizar el servicio unicamente para fines legitimos</li>
                <li>No intentar acceder a sistemas o datos no autorizados</li>
                <li>No reproducir, distribuir o modificar el contenido sin autorizacion</li>
                <li>Proporcionar informacion veraz sobre su empresa y proyectos</li>
                <li>No utilizar el servicio para actividades ilegales o fraudulentas</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">6. Propiedad intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el contenido de la plataforma, incluyendo textos, graficos, logos, iconos, imagenes, 
                software y codigo fuente, es propiedad de Syntia o sus licenciantes y esta protegido por 
                leyes de propiedad intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">7. Limitacion de responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                Syntia proporciona informacion sobre subvenciones publicas con fines informativos. No 
                garantizamos la exactitud, actualidad o integridad de la informacion. La decision de 
                solicitar una subvencion y el resultado de dicha solicitud es responsabilidad exclusiva 
                del usuario. Syntia no sera responsable de:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Errores u omisiones en la informacion de subvenciones</li>
                <li>Decisiones tomadas basadas en nuestras recomendaciones</li>
                <li>Interrupciones del servicio por causas tecnicas o de fuerza mayor</li>
                <li>Danos indirectos, incidentales o consecuentes</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">8. Fuentes de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                La informacion sobre subvenciones proviene de fuentes publicas oficiales, incluyendo la 
                Base de Datos Nacional de Subvenciones (BDNS) y otras fuentes gubernamentales. Recomendamos 
                siempre verificar la informacion en las fuentes oficiales antes de realizar cualquier solicitud.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">9. Cancelacion y reembolsos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puede cancelar su suscripcion en cualquier momento desde su panel de usuario. Las 
                cancelaciones seran efectivas al final del periodo de facturacion actual. No se realizan 
                reembolsos por periodos parciales, salvo en casos excepcionales a nuestra discrecion.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">10. Modificaciones</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar estos terminos en cualquier momento. Los cambios 
                entraran en vigor tras su publicacion en la plataforma. El uso continuado del servicio 
                tras las modificaciones implica la aceptacion de los nuevos terminos.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">11. Ley aplicable y jurisdiccion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estos terminos se rigen por la legislacion espanola. Para cualquier controversia, las 
                partes se someten a los juzgados y tribunales de Madrid, renunciando a cualquier otro 
                fuero que pudiera corresponderles.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">12. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para cualquier consulta sobre estos terminos, contactenos en:{" "}
                <a href="mailto:legal@syntia.es" className="text-foreground hover:underline">
                  legal@syntia.es
                </a>
              </p>
            </section>
          </div>

          {/* Links relacionados */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Consulte tambien:{" "}
              <Link href="/politica-privacidad" className="text-foreground hover:underline">
                Politica de Privacidad
              </Link>
              {" "} | {" "}
              <Link href="/aviso-legal" className="text-foreground hover:underline">
                Aviso Legal
              </Link>
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm text-muted-foreground">
          Syntia 2025. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  )
}
