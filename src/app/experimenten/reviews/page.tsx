"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type Review={id:number;name:string;rating:number;date:string;topic:string;text:string};
const topics=["Spraak in rumoer","Geluidskwaliteit","Comfort","Gebruik en bediening"];
const samples=[
  "In een restaurant kan ik gesprekken beter volgen dan met mijn vorige toestel. Het blijft wennen als meerdere mensen tegelijk praten.",
  "De geluidskwaliteit voelt natuurlijker dan ik gewend was. Bij harde achtergrondmuziek is verstaan nog steeds lastig.",
  "Ik draag de toestellen de hele dag. De eerste dagen moest ik aan het geluid wennen, maar na de afstelling gaat het prettig.",
  "De bediening is duidelijk en de instellingen zijn gemakkelijk aan te passen. Telefoneren werkt voor mij goed.",
  "Ik hoor meer kleine geluiden in huis. Dat is prettig, maar sommige geluiden waren in het begin wat fel.",
  "Bij gesprekken met familie merk ik verschil. In grote groepen blijft het afhankelijk van waar iedereen zit.",
  "Het kostte tijd om de juiste afstelling te vinden. Inmiddels ervaar ik meer rust bij het luisteren.",
  "Muziek klinkt voller dan bij mijn oude hoorapparaat. Ik ben vooral tevreden over de details."
];
const reviews:Review[]=Array.from({length:80},(_,i)=>({id:i+1,name:["Maria V.","Jan D.","Annie B.","Peter K.","Els M.","Robert S.","Ingrid P.","Herman L."][i%8],rating:i%13===0?3:i%5===0?4:5,date:`2026-${String(10-Math.floor(i/12)).padStart(2,"0")}-${String(1+(i%27)).padStart(2,"0")}`,topic:topics[i%4],text:samples[i%8]}));
const average=(reviews.reduce((a,r)=>a+r.rating,0)/reviews.length).toFixed(1).replace(".",",");
function Stars({rating}:{rating:number}){return <span className="cro-reviews-stars" aria-label={rating+" van 5 sterren"}>{"★".repeat(rating)}{"☆".repeat(5-rating)}</span>}
export default function ReviewsExperiment(){
 const [open,setOpen]=useState(false);
 const [topic,setTopic]=useState("Alle onderwerpen");
 const [rating,setRating]=useState("Alle scores");
 const [sort,setSort]=useState("recent");
 const [visible,setVisible]=useState(8);
 useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
 useEffect(()=>{const key=(e:KeyboardEvent)=>{if(e.key==="Escape")setOpen(false)};window.addEventListener("keydown",key);return()=>window.removeEventListener("keydown",key)},[]);
 const filtered=reviews.filter(r=>(topic==="Alle onderwerpen"||r.topic===topic)&&(rating==="Alle scores"||r.rating===Number(rating))).sort((a,b)=>sort==="high"?b.rating-a.rating:sort==="low"?a.rating-b.rating:b.date.localeCompare(a.date));
 const openAll=()=>{setOpen(true);setVisible(8)};
 return <main className="wide cro-reviews-page">
  <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
  <p className="eyebrow">CRO-experiment · productreviews</p>
  <h1>Hoe tonen we 80 beoordelingen?</h1>
  <p>Interactieve UI-demo met 80 fictieve testreviews. Alle namen, citaten en cijfers zijn placeholders, geen echte klantervaringen.</p>
  <section className="cro-reviews-card" aria-label="Voorbeeld van reviews op de productpagina">
   <div className="cro-reviews-head"><div><p className="eyebrow">Ervaringen met de Bernafon Encanta 400 Pro</p><h2>Wat vinden gebruikers van dit toestel?</h2></div><span className="cro-reviews-demo">Demo-inhoud</span></div>
   <div className="cro-reviews-summary">
    <div className="cro-reviews-score"><strong>{average}<span>/ 5</span></strong><Stars rating={5}/><small>80 beoordelingen · demogegevens</small></div>
    <div className="cro-reviews-insights"><strong>Samenvatting van ervaringen</strong><p>Gebruikers noemen in deze testgegevens vooral verstaan tijdens gesprekken, geluidsdetails en de periode van wennen aan een nieuwe afstelling. Bij drukke groepsgesprekken blijven de ervaringen wisselend.</p><small>Voorbeeld van een AI-samenvatting. Bij echte reviews uitsluitend genereren op basis van de beschikbare beoordelingen, met bronverwijzing en controle.</small></div>
   </div>
   <div className="cro-reviews-preview">{reviews.slice(0,2).map(r=><article key={r.id}><Stars rating={r.rating}/><p>“{r.text}”</p><small>{r.name} · {r.date} · {r.topic}</small></article>)}</div>
   <button className="cro-reviews-button" onClick={openAll}>Bekijk alle 80 beoordelingen <span aria-hidden="true">→</span></button>
  </section>
  <section className="section"><h2>Wat gebeurt er bij een klik?</h2><p>Op desktop opent een ruim reviewvenster. Op mobiel neemt dit vrijwel het volledige scherm in. Bezoekers kunnen filteren op onderwerp of score, sorteren en steeds acht beoordelingen extra laden, zonder de productpagina te verlaten.</p></section>
  {open&&<div className="cro-reviews-overlay" onMouseDown={e=>{if(e.target===e.currentTarget)setOpen(false)}}>
   <section role="dialog" aria-modal="true" aria-labelledby="reviews-dialog-title" className="cro-reviews-dialog">
    <div className="cro-reviews-dialog-header"><div><span className="cro-reviews-demo">Demo-inhoud</span><h2 id="reviews-dialog-title">Alle beoordelingen ({filtered.length})</h2><p><strong>{average}/5</strong> · 80 beoordelingen van dit toestel</p></div><button className="cro-reviews-close" onClick={()=>setOpen(false)} aria-label="Sluit beoordelingen">×</button></div>
    <div className="cro-reviews-filters">
     <label>Onderwerp<select value={topic} onChange={e=>{setTopic(e.target.value);setVisible(8)}}>{["Alle onderwerpen",...topics].map(t=><option key={t}>{t}</option>)}</select></label>
     <label>Beoordeling<select value={rating} onChange={e=>{setRating(e.target.value);setVisible(8)}}><option>Alle scores</option>{[5,4,3,2,1].map(n=><option key={n} value={n}>{n} sterren</option>)}</select></label>
     <label>Sorteren<select value={sort} onChange={e=>setSort(e.target.value)}><option value="recent">Nieuwste eerst</option><option value="high">Hoogste score</option><option value="low">Laagste score</option></select></label>
    </div>
    <div className="cro-reviews-dialog-list">{filtered.slice(0,visible).map(r=><article key={r.id}><Stars rating={r.rating}/><p>{r.text}</p><small>{r.name} · {r.date} · {r.topic}</small></article>)}{filtered.length===0&&<p>Geen beoordelingen voor deze filters.</p>}{visible<filtered.length&&<button className="cro-reviews-button" onClick={()=>setVisible(v=>v+8)}>Laad 8 beoordelingen meer ({Math.min(visible,filtered.length)} van {filtered.length})</button>}</div>
   </section>
  </div>}
 </main>;
}
