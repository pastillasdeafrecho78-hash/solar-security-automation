import type { Service } from "../services";
import { Arrow } from "./Arrow";
export function SiteHeader({active, quote, more = false}: {active?:Service;quote:string;more?:boolean}) {
 return <header className={`site-header ${active || more ? "detail-header" : "home-header"}`}>
  <a className="brand" href="#inicio" aria-label="Solar Security Automation, inicio"><img className="brand-symbol" src="/brand/simbolo.svg" alt="" width="54" height="51" /><span className="brand-lockup"><img src="/brand/nombre.svg" alt="Solar Security Automation" width="248" height="36" /><span>Mejoramos tu lugar.</span></span></a>
  <nav className="header-nav" aria-label="Navegación principal"><a className="services-return" href="#inicio">{(active || more) && <Arrow back />}{active || more ? "Todos los servicios" : "Servicios"}</a>{active || more ? <span className="current-service">{active?.title ?? "Más soluciones"}</span> : <a href="#contacto">Contacto</a>}</nav>
  <a className="contact-link" href={quote} target="_blank" rel="noopener noreferrer"><span>{active ? "Consultar servicio" : "Cotiza tu proyecto"}</span><Arrow /></a>
 </header>;
}
