# Catálogo de equipos — demostración local

## Estado
Cuatro aires ficticios, precios de prueba MXN e imagen genérica claramente identificados. No hay inventario real, cobros, reserva ni envío de pedidos. El pedido se prepara solo en memoria y se pierde al cerrar la ficha.

## Categorías y servicio
`src/catalog/data.ts` separa productos normalizados, configuración por servicio y filtro puro. Al entrar a un servicio el catálogo recibe únicamente las categorías permitidas: no utiliza el buscador para simular ese aislamiento. Aire acondicionado está habilitado; cámaras tiene una configuración deshabilitada y un producto demo para comprobar que no se filtra a Aire. Habilitar otra categoría requiere datos y activar su configuración; los filtros de capacidad, voltaje y tecnología aparecen solo en aire; búsqueda y precio se reutilizan para cualquier categoría. Las capacidades y voltajes se derivan de los productos cargados.

## Productos
Campos de entrada: id único, category, name, model, brand opcional, description, image, price numérico, currency MXN, specs (características), published y demo. En aires: capacityBtu, voltage y technology. El buscador usa nombre, modelo, marca y especificaciones; filtros de capacidad, voltaje y tecnología; orden por precio. Solo se muestran productos publicados de las categorías admitidas.

## Carga futura
La futura interfaz de Excel/CSV/documentos debe convertir sus filas a estos productos, revisar errores, previsualizar cambios y confirmar la publicación. Todavía no existe importador ni administración, API, base de datos o checkout. No convertir automáticamente texto ambiguo de un documento en precio/inventario confirmado. Reemplazar productos ficticios antes de publicar una oferta real.

## Interacción
El botón Ver catálogo de equipos lleva a la sección del servicio sin cambiar rutas. La ficha permite cantidad de prueba 1–5, consulta opcional de instalación por separado y resumen simulado. No transmite datos a WhatsApp ni llama servicios externos.
