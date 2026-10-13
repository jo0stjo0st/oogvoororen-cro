"use client";
import Link from "next/link";
import {useEffect,useState} from "react";
import {product,appointmentUrl} from "@/features/products/data";
export default function StickyChapter(){
 const [show,setShow]=useState(false);
 const [enabled,setEnabled]=useState(true);
 useEffect(()=>{
  const onScroll=()=>{const el=document.getElementById("sticky-demo-hero");setShow(Boolean(el&&el.getBoundingClientRect().bottom<70))};
  onScroll();window.addEventListener("scroll",onScroll,{passive:true});
  return()=>window.removeEventListener("scroll",onScroll);
 },[]);
 return <main className="wide cro-sticky-page">
  <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
  <p className="eyebrow">Hoofdstuk 10 · afspraakbalk</p>
  <h1>Een afspraakknop die bereikbaar blijft</h1>
  <p>Scroll door deze voorbeeldproductpagina. De afspraakbalk verschijnt pas nadat de eerste afspraakknop uit beeld is.</p>
  <label className="cro-sticky-toggle"><input type="checkbox" checked={enabled} onChange={e=>setEnabled(e.target.checked)}/> Afspraakbalk tonen</label>
  <section id="sticky-demo-hero" className="cro-sticky-hero">
   <div><p className="eyebrow">Bernafon Encanta 400 Pro</p><h2>{product.name}</h2><p>Oplaadbaar hoortoestel. De audicien onderzoekt uw gehoor en bespreekt de mogelijkheden.</p><Link className="cro-sticky-button" href={appointmentUrl("variant-a")}>Maak een afspraak voor persoonlijk hooradvies</Link><small>Persoonlijk advies · Geen aankoopverplichting</small></div>
  </section>
  <section className="cro-sticky-content"><h2>Technologie en eigenschappen</h2><p>Hier staat de uitleg van de specifieke technologie van dit toestel, met de volledige specificaties verderop.</p></section>
  <section className="cro-sticky-content"><h2>Vergelijk de modellen</h2><p>Een overzicht van de verschillen tussen de technologieniveaus helpt bezoekers bij hun keuze.</p></section>
  <section className="cro-sticky-content"><h2>Ervaringen van gebruikers</h2><p>Reviews, ervaringen en een samenvatting geven extra context bij de technische informatie.</p></section>
  <section className="cro-sticky-content"><h2>Persoonlijk advies</h2><p>Bespreek uw gehoor en wensen met een audicien.</p><Link className="cro-sticky-button" href={appointmentUrl("variant-a")}>Maak een afspraak voor persoonlijk hooradvies</Link></section>
  {enabled&&show&&<aside className="cro-sticky-bar" aria-label="Afspraak maken"><div className="cro-sticky-bar-inner"><div className="cro-sticky-context"><strong>Bernafon Encanta 400 Pro</strong><span>Geen aankoopverplichting</span></div><Link className="cro-sticky-button" href={appointmentUrl("variant-a")}>Maak een afspraak voor persoonlijk hooradvies</Link></div></aside>}
 </main>;
}
