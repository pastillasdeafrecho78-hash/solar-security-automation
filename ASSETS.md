# Procedencia de imágenes

- public/brand/: símbolo y nombre vectorizados a partir del logo aportado. El SVG de nombre usa los trazados del archivo restaurado, con letras oscuras para el encabezado blanco.
- public/images/services/paneles.webp: foto 034 del catálogo del cliente.
- public/images/services/paneles-obra.webp: foto 001 del catálogo del cliente.
- public/images/services/aire.webp: foto 065 del catálogo del cliente.
- public/images/services/aire-obra.webp: foto 067 del catálogo del cliente.
- public/images/services/calentadores.webp: imagen ilustrativa generada con image_gen de un calentador de tubos al vacío, sin marca, sobre techo residencial mexicano. No representa un trabajo propio verificado.
- public/images/services/camaras.webp: imagen ilustrativa generada con image_gen de una cámara bullet sin marca en muro residencial. No representa un trabajo propio verificado.

Estas dos ilustraciones se identifican como tales en la vista individual de servicio. No se cambiaron ni retocaron las fotos reales; se exportaron a WebP.

## Revisión 2 — portada de productos

Los cuatro `producto-*.webp` son ilustraciones fotográficas generadas con image_gen, con fondo transparente: calentador de tubos al vacío, arreglo de cuatro paneles, agrupación de minisplit/unidad exterior y cámara bullet. Se pidió iluminación de estudio neutra coherente, equipos completos, materiales realistas y ausencia de logos, letras, entorno o afirmaciones comerciales. No son fotos de obras propias ni modelos comerciales confirmados. Los PNG fuente se conservan junto a los WebP. Las fotos reales continúan en las vistas de paneles y climatización.

## Cuatro ambientes — portada final

`public/images/environments/` contiene cuatro escenas residenciales ilustrativas generadas mediante image_gen: terraza con calentador, casa con paneles, sala con minisplit y acceso con cámara. No representan obras, clientes o modelos comerciales verificados. Se solicitó una serie común con luz natural de tarde, aplanados claros, terracota discreta, vegetación y espacios mexicanos residenciales accesibles; sin personas, logos ni texto. Los archivos `-mobile.webp` ofrecen encuadres específicos. Los PNG originales están en `design-assets/ambientes`, fuera del directorio público. Los detalles identifican las escenas como ambientes ilustrativos; las galerías solares y de climatización conservan fotos reales del cliente.

## Piloto de cámara por capas

`images/camera-layered/background.webp`: edición con image_gen de la escena existente para retirar la cámara pequeña y suavizar el fondo. `camera.webp`: restauración mediante image_gen del recorte ilustrativo existente, con transparencia. Se conservaron forma y ángulo de la referencia. No se utilizó una fotografía real de producto del cliente porque no hay una cámara propia identificada en el lote. Los PNG de trabajo están en design-assets/camera-layered. El piloto usa dos planos de movimiento y texto estable; no sustituye los otros tres cuadrantes. Inspiración de interacción: CSS-only Sliding Panels (shshaw) y presentación por capas de las referencias examinadas en FreeFrontend. Se adapta el mecanismo, no se copian imágenes ni una plantilla.

## Cuatro cuadrantes unificados

LayeredScene reutiliza los recortes ilustrativos producto-calentadores-solares.webp, producto-paneles-solares.webp, producto-aire-acondicionado.webp y camera-layered/camera.webp. Los fondos son las escenas ya existentes de cada servicio (la de cámara usa la edición sin equipo), atenuadas por CSS para actuar como contexto secundario. No se generaron nuevos equipos ni se modificaron las fotografías reales del cliente en esta revisión.

## Nuestra experiencia

27 fotografías reales exportadas desde los originales del ZIP de WhatSie, sin retoques: 17 solares (IDs 001,013,027,032,034,049,053,054,015,028,036,037,038,042,051,052,056) y 10 de climatización (065,067,070,075,080,082,086,087,088,058). `src/experience.ts` conserva la correspondencia por ID con el inventario del Escritorio. Archivos completos WebP y miniaturas independientes para carga diferida en `public/images/experience`. No se agregan clientes, ubicaciones, potencias o resultados no confirmados. En calentadores y cámaras, la sección declara expresamente que muestra trabajos de solar y climatización hasta disponer de material propio de esos servicios.

## Portones y soluciones adicionales

Se revisó el inventario de 88 imágenes: no hay instalaciones identificables de portones, alarmas, videoporteros, bombas ni redes. Las galerías reales se limitan ahora a los servicios solares y de climatización. El portón es una ilustración de equipo generada con image_gen tomando el icono de portón del cartel original (foto 063) como referencia de categoría y estilo, sin inventar una obra propia. PNG fuente en design-assets/portones-electricos.png y WebP en public/images/services/producto-portones-electricos.webp. Las soluciones adicionales usan iconos geométricos SVG y textos de consulta, sin fotos de instalaciones ajenas.
