import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { ADDRESS_FULL, MAP_LINK, PHONE_DISPLAY, PHONE_TEL, waLink } from "./contact";
import { services, type Service } from "./services";
import { SiteHeader } from "./components/SiteHeader";
import { ServiceGrid } from "./components/ServiceGrid";
import { MoreSolutions } from "./components/MoreSolutions";
import { ServiceDetail } from "./components/ServiceDetail";
function readService() { return services.find(s=>s.id===window.location.hash.slice(1)); }
export default function App() {
 const [active,setActive]=useState<Service|undefined>(readService);
 const [more,setMore]=useState(()=>location.hash === "#mas-soluciones");
 const heading=useRef<HTMLHeadingElement>(null);
 const origin=useRef({id:readService()?.id ?? services[0].id,scroll:0});
 const transition=useRef<ViewTransition|null>(null);
 useEffect(()=>{
  const onHash=()=>{
   if(["#contenido","#contacto","#servicios"].includes(location.hash)) return;
   const next=readService();
   const nextMore=location.hash === "#mas-soluciones";
   if(nextMore) origin.current={id:"mas-soluciones",scroll:window.scrollY};
   transition.current?.skipTransition();
   document.documentElement.style.setProperty("--navigation-duration", next || nextMore ? "420ms" : "320ms");
   const update=()=>{
    flushSync(()=>{setActive(next);setMore(nextMore);});
    window.scrollTo({top:next || nextMore ? 0 : origin.current.scroll,behavior:"instant"});
    if(next || nextMore) heading.current?.focus({preventScroll:true});
    else document.getElementById(origin.current.id === "mas-soluciones" ? (matchMedia("(max-width:700px)").matches ? "more-solutions-mobile" : "more-solutions-desktop") : `panel-${origin.current.id}`)?.focus({preventScroll:true});
   };
   if(document.startViewTransition && !matchMedia("(prefers-reduced-motion: reduce)").matches){
    transition.current=document.startViewTransition(update);
    void transition.current.finished.catch(()=>{});
   } else update();
  };
  window.addEventListener("hashchange",onHash);
  return ()=>{window.removeEventListener("hashchange",onHash);transition.current?.skipTransition();};
 },[]);
 const quote=waLink(active ? `Hola, me interesa ${active.title.toLowerCase()}. Quisiera información para mi casa o negocio.` : "Hola, quisiera información sobre sus servicios y una cotización.");
 return <>
  <a className="skip-link" href="#contenido">Ir al contenido</a>
  <SiteHeader active={active} quote={quote} more={more}/>
  <main id="contenido" tabIndex={-1}>{more ? <MoreSolutions heading={heading}/> : active ? <ServiceDetail service={active} quote={quote} heading={heading}/> : <ServiceGrid onSelect={s=>{origin.current={id:s.id,scroll:window.scrollY};}}/>}</main>
  <footer id="contacto" className="site-footer"><div className="footer-brand"><img src="/brand/simbolo.svg" alt="" width="28" height="28"/><p>Solar Security Automation</p></div><div><a href={MAP_LINK} target="_blank" rel="noopener noreferrer" aria-label={`Cómo llegar a ${ADDRESS_FULL}`}>Yuriria 24, Dolores Hidalgo</a><a className="footer-phone" href={`tel:${PHONE_TEL}`}>{PHONE_DISPLAY}</a></div></footer>
 </>;
}
