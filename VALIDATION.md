# Validación local — Cuatro ambientes

- TypeScript y build Vite: correctos.
- Capturas revisadas: output/playwright/ambientes-final-desktop.png y ambientes-final-mobile.png.
- Viewport escritorio 1440×900: cuadrícula en x=0, y=72, ancho=1440, alto=828.
- Sin desbordamiento horizontal: 360, 390, 768, 1024 y 1440 px.
- Enter abre servicio; foco en service-heading.
- Atrás del navegador retorna a cuadrícula y restaura panel-paneles-solares.
- Movimiento reducido: apertura y regreso funcionales.
- View Transitions deshabilitado: apertura funcional sin animación.
- Fotografías ilustrativas identificadas en detalle y documentadas en ASSETS.md. Fotografías reales separadas en galerías.
- Revisión realizada en Chromium local; Safari y Firefox físicos no se probaron. No se publicó nada.

## Piloto de cámaras

- Recorte de equipo grande y fondo independiente; capturas camera-layered-desktop.png y camera-layered-mobile.png revisadas.
- Movimiento de mouse medido: x=5.4 px, y=-2.8 px; al activar movimiento reducido, x=0 px.
- Sin desbordamiento en 360, 390, 768 y 1440 px.
- Apertura y regreso del servicio: correctos. Los cuatro accesos permanecen.

## Cuatro equipos por capas

- Capturas completas revisadas: all-layered-desktop.png y all-layered-mobile.png.
- Movimiento medido en los cuatro paneles (x≈5.4 px en la misma posición relativa del mouse).
- Anchos 360, 390, 768, 1024 y 1440 sin desbordamiento.
- Los cuatro enlaces abren su detalle y permiten regresar; comprobación con movimiento reducido activo.
- Build TypeScript/Vite correcto. Sin publicaciones ni push.

## Galería Nuestra experiencia

- Build TypeScript/Vite correcto.
- 17 fotos en paneles, 10 en climatización; categorías explícitas en las otras vistas.
- Galería horizontal manual con scroll táctil, flechas y fotos ampliables en dialog nativo.
- Flecha derecha cambia a la segunda foto; Escape cierra y devuelve el foco al botón experience-photo.
- Capturas experience-desktop.png y experience-mobile.png inspeccionadas; móvil sin desbordamiento del documento.
- Sin avance automático, ni dependencias adicionales. Todo permanece local.

## Orden del cliente y Más soluciones

Orden DOM y visual verificado: Paneles solares, Aire acondicionado, Cámaras y alarmas, Portones eléctricos. Las cuatro imágenes cargan. Logo de escritorio y enlace móvil abren #mas-soluciones. Los tres servicios adicionales y su consulta por WhatsApp están disponibles. Regreso y acceso directo al portón comprobados. Página adicional en móvil sin desbordamiento. No hay galería atribuida a portones sin fotos propias. Build correcto.

## Catálogo de demostración — 2026-11-17
- Build TypeScript/Vite correcto.
- Navegador: cuatro equipos, búsqueda por modelo y filtro 115 V devuelven un resultado; estado vacío y limpieza funcionan.
- Ficha: cantidad 3 calcula $19,500 MXN; instalación se cotiza aparte; pedido solo simulado, sin envíos ni cobros.
- Escape cierra y restaura foco; móvil 390 px sin desbordamiento horizontal.
- Categoría cámaras oculta; navegación a cámaras elimina el catálogo. Sin errores de ejecución en la comprobación final.
- Revisión visual de catálogo y ficha en escritorio y móvil.
