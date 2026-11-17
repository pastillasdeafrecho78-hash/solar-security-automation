import { services, type Service } from "../services";
import { Arrow } from "./Arrow";
import { BrandArrival } from "./BrandArrival";
import { SceneImage } from "./SceneImage";
export function ServiceGrid({onSelect}: {onSelect:(service:Service)=>void}) {
 return <section aria-labelledby="home-title" className="home-layout">
  <h1 id="home-title" className="sr-only">Mejoramos tu lugar: energía, confort y seguridad</h1>
  <div id="servicios" className="service-grid">
   {services.map((service,index)=><a id={`panel-${service.id}`} href={`#${service.id}`} className={`service-panel ${service.id}`} key={service.id} onClick={()=>onSelect(service)} style={{viewTransitionName:`surface-${service.id}`}} aria-labelledby={`title-${service.id}`} aria-describedby={`intro-${service.id}`}>
    <SceneImage service={service} priority={index===0}/><div className="panel-shade" />
    <div className="panel-content"><h2 id={`title-${service.id}`}>{service.title}</h2><p id={`intro-${service.id}`}>{service.intro}</p><span className="panel-action" aria-hidden="true">Explorar servicio <span className="panel-arrow"><Arrow /></span></span></div>
   </a>)}
   <BrandArrival/>
  </div>
  <a className="mobile-more-solutions" id="more-solutions-mobile" href="#mas-soluciones"><img src="/brand/simbolo.svg" alt="" width="52" height="50"/><span><strong>Más soluciones</strong><small>Accesos, bombeo solar e internet</small></span><Arrow/></a>
 </section>;
}
