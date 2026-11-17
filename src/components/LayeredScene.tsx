import { useEffect, useRef } from "react";
import { scene, type Service } from "../services";

/** Two independent image planes. Pointer movement never rerenders React. */
export function LayeredScene({service}: {service:Service}) {
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const layer=root.current;
  const surface=layer?.closest<HTMLElement>(".service-panel, .detail-photo");
  if(!layer || !surface) return;
  const reduce=matchMedia("(prefers-reduced-motion: reduce)");
  const fine=matchMedia("(hover: hover) and (pointer: fine)");
  let frame=0;
  let x=0,y=0;
  const reset=()=>{cancelAnimationFrame(frame);frame=0;x=y=0;layer.style.setProperty("--pointer-x","0px");layer.style.setProperty("--pointer-y","0px");};
  const move=(event:PointerEvent)=>{
   if(reduce.matches || !fine.matches || event.pointerType!=="mouse") return;
   const rect=surface.getBoundingClientRect();
   x=((event.clientX-rect.left)/rect.width-.5)*18;
   y=((event.clientY-rect.top)/rect.height-.5)*14;
   if(!frame)frame=requestAnimationFrame(()=>{layer.style.setProperty("--pointer-x",`${x}px`);layer.style.setProperty("--pointer-y",`${y}px`);frame=0;});
  };
  surface.addEventListener("pointermove",move,{passive:true});
  surface.addEventListener("pointerleave",reset);
  surface.addEventListener("focusout",reset);
  reduce.addEventListener("change",reset);
  fine.addEventListener("change",reset);
  return ()=>{reset();surface.removeEventListener("pointermove",move);surface.removeEventListener("pointerleave",reset);surface.removeEventListener("focusout",reset);reduce.removeEventListener("change",reset);fine.removeEventListener("change",reset);};
 },[]);
 return <div ref={root} className="product-scene scene" style={{viewTransitionName:`scene-${service.id}`}} aria-hidden="true">
  {service.id !== "portones-electricos" && <img className="product-backdrop" src={service.id === "camaras-de-seguridad" ? "/images/camera-layered/background.webp" : `${scene(service)}.webp`} alt="" width="1536" height="1024" decoding="async" />}
  <div className="product-backdrop-wash" />
  <div className="product-foreground" style={{viewTransitionName:`product-${service.id}`}}><img src={service.id === "camaras-de-seguridad" ? "/images/camera-layered/camera.webp" : `/images/services/producto-${service.id}.webp`} alt="" width="1536" height="1024" decoding="async" /></div>
 </div>;
}
