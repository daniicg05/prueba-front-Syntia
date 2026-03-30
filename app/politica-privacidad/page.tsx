import Link from "next/link"
import { ArrowLeft, Shield } from "lucide-react"

export default function PoliticaPrivacidadPage() {
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
              <Shield className="h-6 w-6" />
            </div>
            <h1 className="text-3xl font-semibold tracking-tight">Politica de Privacidad</h1>
            <p className="text-muted-foreground">Ultima actualizacion: 1 de Enero de 2025</p>
          </div>

          {/* Contenido legal */}
          <div className="prose prose-neutral max-w-none space-y-8">
            <section className="space-y-4">
              <h2 className="text-xl font-semibold">1. Introduccion</h2>
              <p className="text-muted-foreground leading-relaxed">
                En Syntia nos comprometemos a proteger la privacidad de nuestros usuarios. Esta Politica de Privacidad 
                explica como recopilamos, usamos, almacenamos y protegemos su informacion personal cuando utiliza 
                nuestra plataforma de recomendaciones de subvenciones.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">2. Informacion que recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Recopilamos los siguientes tipos de informacion:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Datos de identificacion personal (nombre, email, telefono)</li>
                <li>Informacion empresarial (nombre de empresa, CIF, sector, tamaño)</li>
                <li>Datos de uso de la plataforma y preferencias</li>
                <li>Informacion tecnica (direccion IP, tipo de navegador)</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">3. Uso de la informacion</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos su informacion para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar recomendaciones personalizadas de subvenciones</li>
                <li>Mejorar nuestros algoritmos de matching con IA</li>
                <li>Enviar notificaciones sobre nuevas convocatorias relevantes</li>
                <li>Gestionar su cuenta y proporcionar soporte</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">4. Base legal para el tratamiento</h2>
              <p className="text-muted-foreground leading-relaxed">
                El tratamiento de sus datos se basa en: el consentimiento otorgado, la ejecucion del contrato 
                de servicios, el cumplimiento de obligaciones legales y nuestro interes legitimo en mejorar 
                nuestros servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">5. Comparticion de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                No vendemos su informacion personal. Podemos compartir datos con:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proveedores de servicios tecnicos que nos ayudan a operar la plataforma</li>
                <li>Autoridades competentes cuando sea legalmente requerido</li>
                <li>Socios con su consentimiento expreso</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">6. Seguridad de los datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad tecnicas y organizativas para proteger sus datos, 
                incluyendo encriptacion, controles de acceso y auditorias periodicas de seguridad.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">7. Retencion de datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conservamos sus datos mientras mantenga una cuenta activa o segun sea necesario para 
                cumplir con obligaciones legales. Puede solicitar la eliminacion de sus datos en cualquier momento.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">8. Sus derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Conforme al RGPD, usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acceder a sus datos personales</li>
                <li>Rectificar datos inexactos</li>
                <li>Solicitar la supresion de sus datos</li>
                <li>Oponerse al tratamiento</li>
                <li>Portabilidad de los datos</li>
                <li>Retirar el consentimiento</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">9. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies para mejorar su experiencia. Puede gestionar sus preferencias de 
                cookies en la configuracion de su navegador o a traves de nuestro panel de cookies.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-xl font-semibold">10. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para ejercer sus derechos o consultas sobre privacidad, contactenos en:{" "}
                <a href="mailto:privacidad@syntia.es" className="text-foreground hover:underline">
                  privacidad@syntia.es
                </a>
              </p>
            </section>
          </div>

          {/* Links relacionados */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground">
              Consulte tambien:{" "}
              <Link href="/terminos-condiciones" className="text-foreground hover:underline">
                Terminos y Condiciones
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
