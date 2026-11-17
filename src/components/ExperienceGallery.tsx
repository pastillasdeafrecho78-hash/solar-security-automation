import { useEffect, useRef, useState } from "react";
import { experiencePhotos } from "../experience";
import { Arrow } from "./Arrow";
export function ExperienceGallery({serviceId}:{serviceId:string}) {
 const group=serviceId==="paneles-solares"?"solar":serviceId==="aire-acondicionado"?"aire":null;
 const photos=experiencePhotos.filter(p=>!group || p.group===group);
 const [selected,setSelected]=useState<number|null>(null);
 const [edges,setEdges]=useState({start:true,end:false});
 const track=useRef<HTMLDivElement>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 const photo=selected===null ? null : photos[selected];
 useEffect(()=>{
  const el=track.current;if(!el)return;
  const update=()=>setEdges({start:el.scrollLeft<4,end:el.scrollLeft+el.clientWidth>=el.scrollWidth-4});
  const observer=new ResizeObserver(update);observer.observe(el);el.addEventListener("scroll",update,{passive:true});update();
  return()=>{observer.disconnect();el.removeEventListener("scroll",update);};
 },[]);
 function slide(direction:number){const el=track.current;if(el)el.scrollBy({left:direction*el.clientWidth*.85,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"});}
 function open(index:number){setSelected(index);dialog.current?.showModal();}
 function close(){dialog.current?.close();setSelected(null);}
 function change(direction:number){setSelected(index=>index===null?0:(index+direction+photos.length)%photos.length);}
 useEffect(()=>{
  if(selected===null)return;
  const old=document.body.style.overflow;document.body.style.overflow="hidden";
  return()=>{document.body.style.overflow=old;};
 },[selected]);
 return <section className="experience" aria-labelledby="experience-title">
  <div className="experience-heading"><div><h2 id="experience-title">Nuestra experiencia</h2></div><div className="gallery-controls"><button type="button" disabled={edges.start} onClick={()=>slide(-1)} aria-label="Ver fotos anteriores"><Arrow back/></button><button type="button" disabled={edges.end} onClick={()=>slide(1)} aria-label="Ver más fotos"><Arrow/></button></div></div>
  <div ref={track} className="experience-track" aria-label="Fotografías de nuestros trabajos" tabIndex={0}>
   {photos.map((p,index)=><button type="button" className="experience-photo" key={p.id} onClick={()=>open(index)} aria-label={`Ampliar: ${p.title}`}><span className="experience-image"><img src={`/images/experience/${String(p.id).padStart(3,"0")}-thumb.webp`} alt={p.title} width={p.width} height={p.height} loading="lazy"/><span className="photo-expand" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 4H4v4m12-4h4v4M4 16v4h4m12-4v4h-4"/></svg></span></span></button>)}
  </div>
  <dialog ref={dialog} className="photo-dialog" aria-labelledby="large-photo-title" onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)close();}} onKeyDown={event=>{if(event.key==="ArrowRight"){event.preventDefault();change(1);}if(event.key==="ArrowLeft"){event.preventDefault();change(-1);}}}>
   {photo && <div className="photo-viewer"><header><span id="large-photo-title" className="sr-only">{photo.title}</span><button type="button" onClick={close} autoFocus aria-label="Cerrar fotografía">Cerrar <span aria-hidden="true">×</span></button></header><div className="photo-viewer-stage"><button type="button" className="viewer-prev" onClick={()=>change(-1)} aria-label="Fotografía anterior"><Arrow back/></button><img key={photo.id} src={`/images/experience/${String(photo.id).padStart(3,"0")}.webp`} alt={photo.title} width={photo.width} height={photo.height}/><button type="button" className="viewer-next" onClick={()=>change(1)} aria-label="Fotografía siguiente"><Arrow/></button></div></div>}
  </dialog>
 </section>;
}
