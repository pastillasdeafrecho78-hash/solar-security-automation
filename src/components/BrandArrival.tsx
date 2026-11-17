import { useEffect, useState } from "react";
import { Arrow } from "./Arrow";
let arrivalPlayed=false;
function shouldPlay(){
 return !arrivalPlayed && !matchMedia("(prefers-reduced-motion: reduce)").matches;
}
/** The same mark remains at the grid intersection after its backdrop disappears. */
export function BrandArrival(){
 const [phase,setPhase]=useState<"opening"|"revealing"|"settled">(()=>shouldPlay()?"opening":"settled");
 useEffect(()=>{
  arrivalPlayed=true;
  if(phase!=="opening")return;
  const reveal=window.setTimeout(()=>setPhase("revealing"),650);
  const finish=window.setTimeout(()=>setPhase("settled"),1450);
  const skip=(event:KeyboardEvent)=>{if(event.key==="Escape")setPhase("settled");};
  const reduce=matchMedia("(prefers-reduced-motion: reduce)");
  const preference=()=>{if(reduce.matches)setPhase("settled");};
  window.addEventListener("keydown",skip);reduce.addEventListener("change",preference);
  return ()=>{clearTimeout(reveal);clearTimeout(finish);window.removeEventListener("keydown",skip);reduce.removeEventListener("change",preference);};
 // One entrance per mounted homepage; phase changes must not cancel its finish timer.
 // eslint-disable-next-line react-hooks/exhaustive-deps
 },[]);
 return <>
  <svg className="brand-outline-defs" width="0" height="0" aria-hidden="true"><defs><filter id="brand-background-outline" x="-15%" y="-30%" width="130%" height="160%" colorInterpolationFilters="sRGB"><feMorphology in="SourceAlpha" operator="dilate" radius="1.6" result="expanded"/><feFlood floodColor="#f1f1ed" result="outlineColor"/><feComposite in="outlineColor" in2="expanded" operator="in" result="outline"/><feMerge><feMergeNode in="outline"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs></svg>
  {phase!=="settled" && <div className={`brand-arrival-veil ${phase}`} aria-hidden="true"/>}
  <a id="more-solutions-desktop" href="#mas-soluciones" className={`intersection-brand ${phase}`} aria-label="Más soluciones de Solar Security Automation" tabIndex={phase === "settled" ? 0 : -1} aria-hidden={phase !== "settled"}>
   <img className="intersection-symbol" src="/brand/simbolo.svg" alt="" width="90" height="84"/>
   <img className="intersection-wordmark" src="/brand/nombre.svg" alt="" width="190" height="28"/>
   <span className="intersection-cta">Más soluciones <Arrow/></span>
  </a>
 </>;
}
