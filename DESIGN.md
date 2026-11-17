# Cuatro ambientes

Dirección elegida y autorizada por el usuario. Inicio inmersivo de cuatro servicios residenciales con escenas coherentes, divisores finos y sin tarjetas.

Fraunces en títulos; Outfit en navegación y lectura. Marca naranja #ff6900, header blanco, tinta #242428. Las cuatro escenas comparten luz natural cálida y materiales residenciales; cada servicio tiene su propio encuadre y sombra de lectura.

Escritorio: header de 72 px y cuadrícula 2 × 2 de 100svh menos header, mínimo 560 px para no comprimir contenido. Móvil hasta 700 px: header de 64 px y cuatro paneles apilados de al menos 320 px. Detalle con header persistente y regreso visible. Contacto permanece debajo del escenario.

Componentes separados: SiteHeader, ServiceGrid, SceneImage y ServiceDetail. Hashes y lógica de contacto conservados. Expansión mediante View Transitions con actualización síncrona de React; fallback inmediato y movimiento reducido. Retorno conserva foco y posición; acceso directo no simula origen. Hover leve solo con mouse; toque y teclado abren directamente.

Desarrollo local exclusivamente, sin push ni Vercel. Imágenes de ambientes ilustrativas, fotos reales como evidencia separada dentro de los servicios.

## Revisión vigente: cuatro equipos por capas, fondos claros

Sustituye la dirección de escenas a pantalla completa. Los cuatro cuadrantes utilizan LayeredScene: fondo contextual de baja opacidad y equipo grande independiente, texto oscuro estable y acento naranja compartido. No existe un cuadrante oscuro aislado. Se conservan la retícula inmersiva, Fraunces/Outfit, navegación y transición al detalle. El desplazamiento de primer plano llega a ±9 px horizontal y ±7 px vertical; el fondo se desplaza en sentido contrario con 35% de esa amplitud. Se activa solo con mouse fino y se restablece al salir; movimiento reducido y tacto permanecen estáticos. Los equipos son ilustrativos, no modelos comerciales verificados.
