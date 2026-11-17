import type { RefObject } from "react";
import { services, type Service } from "../services";
import { PHONE_DISPLAY, PHONE_TEL } from "../contact";
import { Arrow } from "./Arrow";
import { ProductCatalog } from "./ProductCatalog";
import { catalogByService } from "../catalog/data";
import { ExperienceGallery } from "./ExperienceGallery";
import { SceneImage } from "./SceneImage";
export function ServiceDetail({service,quote,heading}: {service:Service;quote:string;heading:RefObject<HTMLHeadingElement|null>}) {
 return <section className="service-detail" aria-labelledby="service-heading">
  <div className={`detail-photo ${service.id === "camaras-de-seguridad" ? "camera-detail" : ""}`} style={{viewTransitionName:`surface-${service.id}`}}><SceneImage service={service} priority/><small>Ambiente ilustrativo</small></div>
  <div className="detail-copy"><a className="back-link" href="#inicio"><Arrow back/> Todos los servicios</a><h1 id="service-heading" ref={heading} tabIndex={-1}>{service.title}</h1><p className="detail-intro">{service.intro}</p><p>{service.description}</p><ul>{service.features.map(f=><li key={f}>{f}</li>)}</ul>{catalogByService[service.id]?.enabled && <button type="button" className="catalog-jump primary-link" onClick={()=>{document.getElementById("catalog-title")?.focus({preventScroll:true});document.getElementById("catalogo-equipos")?.scrollIntoView({behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});}}>Ver catálogo de equipos <Arrow/></button>}<a className="primary-link" href={quote} target="_blank" rel="noopener noreferrer">Consultar por WhatsApp <Arrow/></a><a className="call-link" href={`tel:${PHONE_TEL}`}>O llámanos al {PHONE_DISPLAY}</a></div>
  <ProductCatalog key={`catalog-${service.id}`} serviceId={service.id}/>
  <nav className="other-services" aria-label="Otros servicios"><h2>¿Qué más necesita tu espacio?</h2><div>{services.filter(s=>s.id!==service.id).map(s=><a key={s.id} href={`#${s.id}`}>{s.title}<Arrow/></a>)}</div></nav>
  {(service.id === "paneles-solares" || service.id === "aire-acondicionado") && <ExperienceGallery key={`gallery-${service.id}`} serviceId={service.id}/>}
 </section>;
}
