import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, MessageCircle, Users, Calendar, Bell, TrendingUp, Calculator, Heart, Phone } from "lucide-react"

export default function InmobotLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
            RealSync: el primer asistente inmobiliario que <span className="text-blue-600">entiende, responde</span> y te
            ayuda a <span className="text-blue-600">cerrar más ventas</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Automatizá tu atención al cliente con inteligencia artificial que no solo responde, sino que asesora como un
            humano.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg shadow-lg">
              Solicitá tu demo gratis
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Quiero probarlo 30 días
            </Button>
          </div>
        </div>
      </section>

      {/* What is RealSync Section */}
      <section className="bg-slate-100/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8">¿Qué es RealSync?</h2>
            <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
              RealSync es una solución todo en uno para inmobiliarias chicas que quieren mejorar su atención al cliente
              sin perder el toque humano. Desde WhatsApp o Instagram, RealSync responde, asiste, sugiere propiedades, y
              te ayuda a convertir más leads en ventas reales.
            </p>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-center">¿Cómo funciona RealSync?</h2>
            <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              RealSync combina inteligencia artificial avanzada con conocimiento inmobiliario para crear un asistente que
              entiende, aprende y mejora con cada interacción.
            </p>

            {/* Main Process Flow */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">1</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Conectá tus canales</h3>
                  <p className="text-slate-600">
                    Vinculá WhatsApp Business, Instagram y tu sitio web. RealSync se integra en minutos sin cambiar tu
                    forma de trabajar.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Cargá tu inventario</h3>
                  <p className="text-slate-600">
                    Subí tus propiedades con fotos, precios y características. RealSync aprende tu estilo y las
                    preferencias de tu zona.
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-blue-600">3</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">Dejá que trabaje</h3>
                  <p className="text-slate-600">
                    RealSync atiende 24/7, califica leads, agenda visitas y te notifica solo cuando necesita tu
                    intervención humana.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Technical Details */}
            <div className="bg-slate-50 rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">¿Qué tecnología tiene RealSync?</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <MessageCircle className="h-4 w-4 text-white" />
                    </div>
                    Motor de Conversación Inteligente
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Procesamiento de lenguaje natural específico para inmobiliarias</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Reconoce intenciones: compra, alquiler, venta, consulta de precio</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Adapta el tono según el perfil del cliente (formal, casual, urgente)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Maneja objeciones comunes automáticamente</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <TrendingUp className="h-4 w-4 text-white" />
                    </div>
                    Sistema de Recomendaciones
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Algoritmo que cruza presupuesto, ubicación y preferencias</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Aprende de interacciones previas para mejorar sugerencias</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Detecta cambios en criterios durante la conversación</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Sugiere alternativas cuando no hay match exacto</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <Calendar className="h-4 w-4 text-white" />
                    </div>
                    Automatización Inteligente
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Integración con Google Calendar y calendarios externos</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Confirmación automática de citas por WhatsApp</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Recordatorios personalizados antes de visitas</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Reprogramación automática en caso de cancelaciones</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-slate-900 mb-4 flex items-center">
                    <div className="bg-blue-600 w-8 h-8 rounded-lg flex items-center justify-center mr-3">
                      <Calculator className="h-4 w-4 text-white" />
                    </div>
                    Tasador Inteligente (Beta)
                  </h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Análisis de propiedades comparables en tiempo real</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Considera ubicación, m², antigüedad y amenities</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Datos actualizados del mercado local</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                      <span>Estimaciones con rango de confianza</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flow Diagram */}
            <div className="bg-gradient-to-r from-blue-50 to-slate-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Flujo de una conversación típica</h3>
              <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Cliente consulta</h4>
                  <p className="text-sm text-slate-600">"Busco un 2 ambientes en Palermo hasta $200k"</p>
                </div>

                <div className="hidden md:block text-blue-300">→</div>

                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    <Users className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">RealSync analiza</h4>
                  <p className="text-sm text-slate-600">Procesa criterios y busca en inventario</p>
                </div>

                <div className="hidden md:block text-blue-300">→</div>

                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    <Heart className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Sugiere opciones</h4>
                  <p className="text-sm text-slate-600">Envía 3 propiedades con fotos y detalles</p>
                </div>

                <div className="hidden md:block text-blue-300">→</div>

                <div className="flex flex-col items-center text-center flex-1">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold mb-3">
                    <Calendar className="h-6 w-6" />
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Agenda visita</h4>
                  <p className="text-sm text-slate-600">Coordina horario automáticamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Functionalities Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">¿Qué hace RealSync?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <MessageCircle className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Responde consultas automáticamente</h3>
                      <p className="text-slate-600">
                        En WhatsApp, Instagram y Web con respuestas inteligentes y naturales.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Detecta qué quiere cada cliente</h3>
                      <p className="text-slate-600">
                        Y sugiere propiedades relevantes según sus necesidades específicas.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calendar className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Automatiza el agendado de visitas</h3>
                      <p className="text-slate-600">Coordina horarios y confirma citas sin intervención manual.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Bell className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Recuerda a los interesados</h3>
                      <p className="text-slate-600">Hace seguimiento automático de leads que aún no respondieron.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <TrendingUp className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">Prioriza leads automáticamente</h3>
                      <p className="text-slate-600">Según su interés y urgencia para maximizar conversiones.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Calculator className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-2">
                        Estima precios inteligentemente
                        <Badge variant="secondary" className="ml-2 text-xs">
                          BETA
                        </Badge>
                      </h3>
                      <p className="text-slate-600">Con datos reales del mercado para tasaciones precisas.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-100/50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12 text-center">
              ¿Por qué mejor que Pulpo Chat?
            </h2>
            <Card className="shadow-lg">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b bg-slate-50">
                        <th className="text-left p-4 font-semibold text-slate-900">Funcionalidad</th>
                        <th className="text-center p-4 font-semibold text-slate-600">Pulpo Chat</th>
                        <th className="text-center p-4 font-semibold text-blue-600">RealSync</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-4 text-slate-900">Respuestas automáticas básicas</td>
                        <td className="p-4 text-center">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </td>
                        <td className="p-4 text-center">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b bg-slate-50/50">
                        <td className="p-4 text-slate-900">Sugerencia automática de inmuebles</td>
                        <td className="p-4 text-center text-slate-400">No</td>
                        <td className="p-4 text-center">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 text-slate-900">Tasador inteligente por zona</td>
                        <td className="p-4 text-center text-slate-400">No</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <Badge variant="secondary" className="text-xs">
                              BETA
                            </Badge>
                          </div>
                        </td>
                      </tr>
                      <tr className="border-b bg-slate-50/50">
                        <td className="p-4 text-slate-900">Tono empático personalizado</td>
                        <td className="p-4 text-center text-slate-400">No</td>
                        <td className="p-4 text-center">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-4 text-slate-900">Lead scoring automático</td>
                        <td className="p-4 text-center text-slate-400">No</td>
                        <td className="p-4 text-center">
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        </td>
                      </tr>
                      <tr>
                        <td className="p-4 text-slate-900">Acompañamiento personalizado</td>
                        <td className="p-4 text-center text-slate-400">No</td>
                        <td className="p-4 text-center">
                          <div className="flex items-center justify-center gap-2">
                            <Check className="h-5 w-5 text-green-500" />
                            <span className="text-sm text-blue-600 font-medium">(vos)</span>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Probá RealSync gratis por 30 días.</h2>
            <p className="text-xl text-blue-100 mb-8">Sin riesgos. Sin tarjetas. Con tu ayuda, lo hacemos aún mejor.</p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg shadow-lg">
              Agendá tu demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-slate-400 text-sm mb-4 md:mb-0">© 2024 RealSync. Todos los derechos reservados.</div>
            <Button variant="outline" className="border-green-500 text-green-500 hover:bg-green-500 hover:text-white">
              <Phone className="h-4 w-4 mr-2" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
