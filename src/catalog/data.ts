/** Demo data only. Replace through a future importer; the UI consumes normalized products. */
export type ProductCategory = "air-conditioning" | "security-cameras";
export type Product = {
 id:string; category:ProductCategory; name:string; model:string; brand?:string;
 description:string; image:string; price:number; currency:"MXN";
 specs:Record<string,string>; capacityBtu?:number; voltage?:115|220;
 technology?:"inverter"|"convencional"; published:boolean; demo:boolean;
};
export type CatalogConfig = { enabled:boolean; title:string; categories:readonly ProductCategory[] };
export const catalogByService:Record<string,CatalogConfig>={
 "aire-acondicionado":{enabled:true,title:"Catálogo de aires acondicionados",categories:["air-conditioning"]},
 "camaras-de-seguridad":{enabled:false,title:"Catálogo de cámaras",categories:["security-cameras"]},
};
const airImage="/images/services/producto-aire-acondicionado.webp";
export const products:Product[]=[
 {id:"demo-ac-12",category:"air-conditioning",name:"Minisplit Inverter 12,000 BTU",model:"DEMO-12I",description:"Equipo de ejemplo para probar la selección de un minisplit inverter. Las características y el precio no corresponden a una oferta comercial.",image:airImage,price:6500,currency:"MXN",specs:{Capacidad:"12,000 BTU",Voltaje:"220 V",Tecnología:"Inverter",Incluye:"Unidad interior y exterior (ejemplo)"},capacityBtu:12000,voltage:220,technology:"inverter",published:true,demo:true},
 {id:"demo-ac-18",category:"air-conditioning",name:"Minisplit Inverter 18,000 BTU",model:"DEMO-18I",description:"Producto ficticio para comparar capacidades y probar el flujo de pedido. No indica inventario disponible.",image:airImage,price:9600,currency:"MXN",specs:{Capacidad:"18,000 BTU",Voltaje:"220 V",Tecnología:"Inverter",Incluye:"Unidad interior y exterior (ejemplo)"},capacityBtu:18000,voltage:220,technology:"inverter",published:true,demo:true},
 {id:"demo-ac-24",category:"air-conditioning",name:"Minisplit Inverter 24,000 BTU",model:"DEMO-24I",description:"Equipo de demostración para explorar otra capacidad. Precio, modelo y características son de prueba.",image:airImage,price:12800,currency:"MXN",specs:{Capacidad:"24,000 BTU",Voltaje:"220 V",Tecnología:"Inverter",Incluye:"Unidad interior y exterior (ejemplo)"},capacityBtu:24000,voltage:220,technology:"inverter",published:true,demo:true},
 {id:"demo-ac-115",category:"air-conditioning",name:"Minisplit convencional 12,000 BTU",model:"DEMO-12C",description:"Producto ficticio para probar filtros de voltaje y tecnología. No es un modelo comercial confirmado.",image:airImage,price:5200,currency:"MXN",specs:{Capacidad:"12,000 BTU",Voltaje:"115 V",Tecnología:"Convencional",Incluye:"Unidad interior y exterior (ejemplo)"},capacityBtu:12000,voltage:115,technology:"convencional",published:true,demo:true},
 // Kept out of the air-conditioning catalog; future UI activation is a config change.
 {id:"demo-camera",category:"security-cameras",name:"Cámara de seguridad de prueba",model:"DEMO-CAM",description:"Ejemplo para comprobar el filtrado interno por categoría.",image:"/images/camera-layered/camera.webp",price:1500,currency:"MXN",specs:{Tipo:"Ejemplo de cámara exterior"},published:true,demo:true},
];
export const money=(amount:number)=>new Intl.NumberFormat("es-MX",{style:"currency",currency:"MXN",maximumFractionDigits:0}).format(amount);
export type CatalogFilters={query:string;capacity:string;voltage:string;technology:string;sort:"featured"|"price-asc"|"price-desc"};
export const initialFilters:CatalogFilters={query:"",capacity:"",voltage:"",technology:"",sort:"featured"};
const normalize=(s:string)=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
export function filterProducts(items:readonly Product[],categories:readonly ProductCategory[],filters:CatalogFilters):Product[]{
 const query=normalize(filters.query.trim());
 const result=items.filter(p=>p.published && categories.includes(p.category) && (!query || normalize([p.name,p.model,p.brand,...Object.values(p.specs)].join(" ")).includes(query)) && (!filters.capacity || String(p.capacityBtu)===filters.capacity) && (!filters.voltage || String(p.voltage)===filters.voltage) && (!filters.technology || p.technology===filters.technology));
 if(filters.sort!=="featured")result.sort((a,b)=>filters.sort==="price-asc"?a.price-b.price:b.price-a.price);
 return result;
}
