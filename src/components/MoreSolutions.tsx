import type { RefObject } from "react";
import { Arrow } from "./Arrow";
import { waLink } from "../contact";
const solutions=[
 {id:"accesos",title:"Videoporteros y control de acceso",text:"Identifica a tus visitas y consulta cómo controlar el acceso a tu casa o negocio.",paths:["M6 3h12v18H6z","M9 6h6v5H9z","M10 16h4","M11 19h2"]},
 {id:"bombas",title:"Bombas solares autónomas",text:"Cuéntanos dónde necesitas mover agua y revisamos las opciones de bombeo con energía solar.",paths:["M12 2c-2 4-7 9-7 13a7 7 0 0014 0c0-4-5-9-7-13z","M8 16c0 2 2 3 4 3"]},
 {id:"internet",title:"Distribución de internet en tu lugar",text:"Consulta opciones para distribuir la conexión y atender las necesidades de cobertura de tu espacio.",paths:["M3 9a14 14 0 0118 0","M6 13a9 9 0 0112 0","M9 17a4 4 0 016 0","M12 21h.01"]},
];
export function MoreSolutions({heading}:{heading:RefObject<HTMLHeadingElement|null>}){
 return <section className="more-solutions-page" aria-labelledby="more-heading">
  <a className="back-link" href="#inicio"><Arrow back/> Los cuatro servicios principales</a>
  <div className="more-solutions-intro"><img src="/brand/simbolo.svg" alt="" width="64" height="62"/><h1 id="more-heading" ref={heading} tabIndex={-1}>Más soluciones<br/>para tu espacio.</h1><p>Además de paneles solares, climatización, cámaras, alarmas y portones, también podemos ayudarte con estas necesidades.</p></div>
  <div className="solutions-list">{solutions.map(s=><article key={s.id} className="solution-row"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{s.paths.map(d=><path d={d} key={d}/>)}</svg><div><h2>{s.title}</h2><p>{s.text}</p></div><a href={waLink(`Hola, me interesa ${s.title.toLowerCase()}. ¿Me pueden dar información?`)} target="_blank" rel="noopener noreferrer" aria-label={`Consultar ${s.title.toLowerCase()} por WhatsApp`}>Consultar <Arrow/></a></article>)}</div>
 </section>;
}
