"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Switch } from "@/components/ui/switch"
import { 
  User, 
  Building2, 
  Bell, 
  Shield, 
  CreditCard,
  Camera,
  Mail,
  Phone,
  MapPin,
  Save
} from "lucide-react"

export default function PerfilPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSave = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Mi perfil</h1>
        <p className="text-muted-foreground">Gestiona tu informacion personal y preferencias</p>
      </div>

      {/* Perfil Card */}
      <Card className="border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="relative">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-avatar.jpg" alt="Avatar" />
                <AvatarFallback className="text-2xl bg-foreground text-background">JG</AvatarFallback>
              </Avatar>
              <button className="absolute bottom-0 right-0 p-1.5 rounded-full bg-foreground text-background hover:bg-foreground/90 transition-colors">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-semibold">Juan Garcia</h2>
                <Badge variant="secondary" className="text-xs">Plan Pro</Badge>
              </div>
              <p className="text-muted-foreground">juan@empresa.com</p>
              <p className="text-sm text-muted-foreground">Miembro desde Enero 2024</p>
            </div>
            <Button variant="outline" onClick={handleSave} disabled={isLoading}>
              <Save className="h-4 w-4 mr-2" />
              {isLoading ? "Guardando..." : "Guardar cambios"}
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Tabs de configuracion */}
      <Tabs defaultValue="personal" className="space-y-6">
        <TabsList className="bg-muted/50 p-1">
          <TabsTrigger value="personal" className="gap-2">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Personal</span>
          </TabsTrigger>
          <TabsTrigger value="empresa" className="gap-2">
            <Building2 className="h-4 w-4" />
            <span className="hidden sm:inline">Empresa</span>
          </TabsTrigger>
          <TabsTrigger value="notificaciones" className="gap-2">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notificaciones</span>
          </TabsTrigger>
          <TabsTrigger value="seguridad" className="gap-2">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Seguridad</span>
          </TabsTrigger>
          <TabsTrigger value="facturacion" className="gap-2">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Facturacion</span>
          </TabsTrigger>
        </TabsList>

        {/* Tab Personal */}
        <TabsContent value="personal">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Informacion personal</CardTitle>
              <CardDescription>Actualiza tu informacion de contacto</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre</Label>
                  <Input id="nombre" defaultValue="Juan" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="apellidos">Apellidos</Label>
                  <Input id="apellidos" defaultValue="Garcia" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">
                    <span className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Correo electronico
                    </span>
                  </Label>
                  <Input id="email" type="email" defaultValue="juan@empresa.com" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">
                    <span className="flex items-center gap-2">
                      <Phone className="h-4 w-4" />
                      Telefono
                    </span>
                  </Label>
                  <Input id="telefono" type="tel" defaultValue="+34 612 345 678" className="h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="direccion">
                  <span className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    Direccion
                  </span>
                </Label>
                <Input id="direccion" defaultValue="Calle Mayor 123, Madrid" className="h-11" />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Empresa */}
        <TabsContent value="empresa">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Datos de la empresa</CardTitle>
              <CardDescription>Informacion de tu organizacion para las recomendaciones</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="nombreEmpresa">Nombre de la empresa</Label>
                  <Input id="nombreEmpresa" defaultValue="Tu Empresa S.L." className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cif">CIF/NIF</Label>
                  <Input id="cif" defaultValue="B12345678" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sector">Sector de actividad</Label>
                  <Input id="sector" defaultValue="Tecnologia" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empleados">Numero de empleados</Label>
                  <Input id="empleados" type="number" defaultValue="25" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="facturacion">Facturacion anual</Label>
                  <Input id="facturacion" defaultValue="500.000 - 1.000.000 EUR" className="h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="comunidad">Comunidad Autonoma</Label>
                  <Input id="comunidad" defaultValue="Madrid" className="h-11" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Notificaciones */}
        <TabsContent value="notificaciones">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Preferencias de notificaciones</CardTitle>
              <CardDescription>Configura como quieres recibir las alertas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <p className="font-medium">Nuevas subvenciones</p>
                    <p className="text-sm text-muted-foreground">Recibe alertas cuando haya nuevas subvenciones compatibles</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <p className="font-medium">Plazos proximos</p>
                    <p className="text-sm text-muted-foreground">Recordatorios de convocatorias que estan por cerrar</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <p className="font-medium">Actualizaciones de estado</p>
                    <p className="text-sm text-muted-foreground">Cambios en el estado de subvenciones guardadas</p>
                  </div>
                  <Switch defaultChecked />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <p className="font-medium">Newsletter semanal</p>
                    <p className="text-sm text-muted-foreground">Resumen semanal de oportunidades destacadas</p>
                  </div>
                  <Switch />
                </div>
                <Separator />
                <div className="flex items-center justify-between py-3">
                  <div className="space-y-0.5">
                    <p className="font-medium">Notificaciones por SMS</p>
                    <p className="text-sm text-muted-foreground">Recibe alertas urgentes por mensaje de texto</p>
                  </div>
                  <Switch />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Seguridad */}
        <TabsContent value="seguridad">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Seguridad de la cuenta</CardTitle>
              <CardDescription>Gestiona tu contrasena y opciones de seguridad</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="currentPassword">Contrasena actual</Label>
                  <Input id="currentPassword" type="password" className="h-11 max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="newPassword">Nueva contrasena</Label>
                  <Input id="newPassword" type="password" className="h-11 max-w-md" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar nueva contrasena</Label>
                  <Input id="confirmPassword" type="password" className="h-11 max-w-md" />
                </div>
                <Button>Cambiar contrasena</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Autenticacion de dos factores</h3>
                <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-border">
                  <div className="space-y-0.5">
                    <p className="font-medium">2FA desactivado</p>
                    <p className="text-sm text-muted-foreground">Anade una capa extra de seguridad a tu cuenta</p>
                  </div>
                  <Button variant="outline">Activar</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Sesiones activas</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-border">
                    <div className="space-y-0.5">
                      <p className="font-medium">Chrome en Windows</p>
                      <p className="text-sm text-muted-foreground">Madrid, Espana - Activo ahora</p>
                    </div>
                    <Badge>Actual</Badge>
                  </div>
                  <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-border">
                    <div className="space-y-0.5">
                      <p className="font-medium">Safari en iPhone</p>
                      <p className="text-sm text-muted-foreground">Madrid, Espana - Hace 2 dias</p>
                    </div>
                    <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                      Cerrar sesion
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Tab Facturacion */}
        <TabsContent value="facturacion">
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-lg">Plan y facturacion</CardTitle>
              <CardDescription>Gestiona tu suscripcion y metodos de pago</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-lg border border-border bg-muted/30">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">Plan Pro</h3>
                      <Badge className="bg-foreground text-background">Activo</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">49 EUR/mes - Renovacion el 1 de Febrero 2025</p>
                  </div>
                  <Button variant="outline">Cambiar plan</Button>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Metodo de pago</h3>
                <div className="flex items-center justify-between py-3 px-4 rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-6 bg-muted rounded flex items-center justify-center text-xs font-bold">
                      VISA
                    </div>
                    <div>
                      <p className="font-medium">**** **** **** 4242</p>
                      <p className="text-sm text-muted-foreground">Expira 12/26</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Editar</Button>
                </div>
                <Button variant="outline">Anadir metodo de pago</Button>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-medium">Historial de facturas</h3>
                <div className="space-y-2">
                  {[
                    { fecha: "1 Enero 2025", monto: "49,00 EUR" },
                    { fecha: "1 Diciembre 2024", monto: "49,00 EUR" },
                    { fecha: "1 Noviembre 2024", monto: "49,00 EUR" },
                  ].map((factura, index) => (
                    <div key={index} className="flex items-center justify-between py-3 px-4 rounded-lg border border-border">
                      <div>
                        <p className="font-medium">{factura.fecha}</p>
                        <p className="text-sm text-muted-foreground">Plan Pro - Mensual</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="font-medium">{factura.monto}</span>
                        <Button variant="ghost" size="sm">Descargar</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
