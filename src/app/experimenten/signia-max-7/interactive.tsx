"use client";
import Image from "next/image";
import {useEffect, useState} from "react";
import {cdn, euros, maxName, onEar, packshot, type Mode} from "@/features/products/signia-max";
import styles from "../bernafon-smart-directionality/page.module.css";

const colors = [
 ["Silver Grey", "#a0a0a0", ""], ["Beige", "#cfb9a7", "qqAVZnAw3smAPbIGdXZ75UF23Guzm3uA72pf9Kw5dk.jpg"],
 ["Black", "#404040", "nMyLq7uzIdJLuFxuAH1agHGDpTGtVhOVD07laTgfbv.jpg"], ["Chestnut Brown", "#604040", "FaXoIgJacAXmB8MmRlMUOiI4sQsak5cxgGHugwOsXM.jpg"],
 ["Dark Champagne", "#a99b8d", "Psg74Lrwnd5JiXwRFHAA1f1DghYw8kF5NNjKNcqSAN.jpg"], ["Honey Blonde", "#bca586", "VjtQHgnFK6boAsW5ntyCgkmfRu9KyhPaU1wiEP9PNW.jpg"],
 ["Rose Gold", "#b68782", "7XZesH5tqx4oZis5lZ5c2eEyYPe4IdO66JCGsSBZ10.jpg"], ["Titanium Grey", "#808080", "mwN0htG4OuM1RRlBLm8nGikmaCxFqULYQnMROvm0Pe.jpg"],
];

export function Gallery(){
 const [selected,setSelected]=useState(0);
 const [worn,setWorn]=useState(false);
 const [name,, photo]=colors[selected];
 return <div className="cro-complete-image">
  <div className="cro-complete-packshot"><Image unoptimized priority={!worn && selected===0} src={worn ? onEar : photo ? cdn+"products/9816/"+photo : packshot} width={600} height={600} alt={worn ? maxName+" achter het oor" : maxName+" in "+name}/></div>
  <div className={styles.sceneControls} role="group" aria-label="Productweergave">
   <button type="button" aria-pressed={!worn} onClick={()=>setWorn(false)}>Toestel</button>
   <button type="button" aria-pressed={worn} onClick={()=>setWorn(true)}>Gedragen</button>
  </div>
  <div className="flex flex-wrap justify-center gap-1" role="group" aria-label="Kies een kleur">
   {colors.map(([color,hex],i)=><button type="button" key={color} aria-label={color} title={color} aria-pressed={!worn && selected===i} className="grid h-10 w-10 place-items-center rounded-full border border-transparent aria-pressed:border-[#007d60]" onClick={()=>{setSelected(i);setWorn(false)}}><span className="h-5 w-5 rounded-full" style={{background:hex}}/></button>)}
  </div>
  <small aria-live="polite">{worn ? "Zo zit het toestel achter het oor" : name}</small>
 </div>;
}

export function PriceChoice(){
 const [count,setCount]=useState(1);
 return <div className="cro-complete-calc">
  <div className="cro-complete-calc-controls"><fieldset><legend>Aantal hoortoestellen</legend>{[1,2].map(n=><button type="button" key={n} aria-pressed={count===n} onClick={()=>setCount(n)}>{n===1?"Eén":"Twee"}</button>)}</fieldset>
  <p>De getoonde all-inprijs is de toestelprijs. Bespreek uw eventuele vergoeding met uw audicien.</p>
  <a className="cro-complete-textlink" href="https://oogvoororen.nl/vergoedingen">Meer over vergoedingen →</a></div>
  <div className="cro-complete-calc-result" aria-live="polite"><span>All-inprijs {count===1?"voor één hoortoestel":"voor twee hoortoestellen"}</span><strong>{euros(count*2245)}</strong><span>Oplader, 5 jaar service en garantie inbegrepen.</span></div>
 </div>;
}

export function StickyAppointment(){
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  const hero=document.getElementById("max-hero");
  const appointment=document.getElementById("afspraak");
  const update=()=>setVisible(Boolean(hero && appointment && hero.getBoundingClientRect().bottom<0 && appointment.getBoundingClientRect().top>window.innerHeight));
  update();
  window.addEventListener("scroll",update,{passive:true});
  window.addEventListener("resize",update);
  return ()=>{window.removeEventListener("scroll",update);window.removeEventListener("resize",update)};
 },[]);
 return visible && <aside className="cro-complete-sticky"><div><strong>{maxName}</strong><a className="cro-complete-cta" href="#afspraak">Maak een afspraak voor hooradvies</a></div></aside>;
}

const visualLabels: Record<Mode,string[]> = {
 voices:["Geluid uit verschillende richtingen", "Afzonderlijke aandacht per stem", "Luisterrichting past zich aan"],
 noise:["Spraak en achtergrondgeluid", "Achtergrondgeluid herkennen", "Minder nadruk op achtergrondgeluid"],
 scene:["Geluid komt binnen", "De situatie verandert", "De verwerking past zich aan"],
 own:["U bent aan het woord", "Uw stem wordt herkend", "Eigen en andere stemmen apart"],
 connect:["Telefoon of audiobron", "Verbinding met beide toestellen", "Audio in uw hoortoestellen"],
 echo:["Direct geluid", "Weerkaatsing in de ruimte", "Minder invloed van de galm"],
 impact:["Plotse geluidspiek", "De piek wordt herkend", "De tik krijgt minder nadruk"],
 music:["Lage en hoge tonen", "Muziek verwerken", "Klank vergelijken"],
 tinnitus:["Oorsuizen bespreken", "Een instelling kiezen", "Uw ervaring beoordelen"],
 fit:["Pasvorm en gehoor", "Meten in het oor", "Afstemmen en verifiëren"],
};

const ink="#193a38";
const green="#007d60";
const orange="#bc601e";
const pale="#d8eee5";

export function Visual({mode,stage}:{mode:Mode;stage:number}){
 const title=visualLabels[mode][stage];
 const linked=mode==="connect" || mode==="fit";
 const people=mode==="voices";
 const wave=mode==="noise" || mode==="music" || mode==="tinnitus";
 return <svg className={styles.illustration} viewBox="0 0 280 150" role="img" aria-label={title}>
  {people && <>
   <path d={stage===0?"M140 95 83 42Q140 4 197 42Z":stage===1?"M140 95 207 24Q225 32 230 53Z":"M140 95 39 53Q140 -8 241 53Z"} fill={pale} stroke={green} strokeDasharray="5 4"/>
   {[52,140,228,140].map((x,i)=><g key={i} transform={`translate(${x} ${i===3?96:i===1?31:48})`} fill={i===3?ink:i===((stage+1)%3)?green:orange}><circle cy="-7" r="7"/><path d="M-11 13a11 11 0 0 1 22 0Z"/></g>)}
  </>}
  {mode==="own" && <>
   <circle cx="58" cy="55" r="19" fill={pale} stroke={green} strokeWidth="2"/>
   <path d="M39 94q0-21 19-21t19 21" fill={pale} stroke={green} strokeWidth="2"/>
   <path d="M82 58q12-17 24 0t24 0t24 0t24 0t24 0t24 0" fill="none" stroke={green} strokeWidth="3"/>
   {stage>0 && <rect x="132" y="32" width="79" height="50" rx="10" fill="none" stroke={green} strokeDasharray="4 4"/>}
   {stage===2 && <path d="M101 92q12-11 24 0t24 0t24 0t24 0t24 0" fill="none" stroke={orange} strokeWidth="2"/>}
  </>}
  {mode==="scene" && <>
   {[0,1,2].map(i=><rect key={i} x={22+i*83} y="37" width="70" height="63" rx="12" fill={stage===i?pale:"white"} stroke={stage===i?green:"#bccfc4"} strokeWidth="2"/>)}
   <path d="M40 75v-15l17-10 17 10v15Z M120 61h40v19h-40z M127 53h26v8 M202 75h42m-37-14h32m-26-9h20" fill="none" stroke={ink} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
   <path d="M39 107h201" fill="none" stroke={green} strokeDasharray="4 5"/>
  </>}
  {wave && <>
   <path d="M25 58q12-21 23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0" fill="none" stroke={green} strokeWidth="3"/>
   <path d={`M25 93q12-${stage===2?6:18} 23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0t23 0`} fill="none" stroke={orange} strokeWidth="2" strokeDasharray={stage===1?"5 4":undefined}/>
   {stage===1 && <rect x="19" y="75" width="242" height="36" rx="8" fill="none" stroke={orange} strokeDasharray="4 4"/>}
  </>}
  {linked && <>
   <rect x="23" y="26" width="61" height="77" rx="10" fill={pale} stroke={ink} strokeWidth="2"/>
   <path d="M36 55h35m-35 11h25m-25 11h35" fill="none" stroke={green} strokeWidth="2"/>
   <path d="M91 66H187m-12-8 12 8-12 8" fill="none" stroke={stage===0?ink:green} strokeDasharray={stage===0?"4 5":undefined} strokeWidth="2"/>
   <path d="M204 86V51a12 12 0 0 1 24 0v17q0 13 13 13m-12 16h18" fill="none" stroke={stage===2?green:ink} strokeWidth="5" strokeLinecap="round"/>
  </>}
  {(mode==="echo" || mode==="impact") && <>
   <path d="M22 104H255" stroke={ink} opacity=".35"/>
   {mode==="impact" && <path d={`M22 95h88l14 -${stage===2?24:65} 14 ${stage===2?24:65}h117`} fill="none" stroke={orange} strokeWidth="3"/>}
   {mode==="echo" && [0,1,2,3].map(i=><path key={i} d={`M${28+i*53} 97q22 -${i===0?72:stage===2?15:48-i*7} 44 0`} fill="none" stroke={i===0?green:orange} opacity={i===0?1:1/(i+0.4)} strokeWidth="3"/>)}
   {stage===1 && <rect x={mode==="echo"?80:111} y="25" width={mode==="echo"?172:28} height="81" rx="5" fill="none" stroke={orange} strokeDasharray="4 3"/>}
  </>}
  <text x="140" y="135" textAnchor="middle" fill={ink} fontSize="12">{title}</text>
 </svg>;
}

export function Scenes({mode,examples}:{mode:Mode;examples:[string,string][]}){
 const [active,setActive]=useState(0);
 return <figure className={styles.demo}>
  <div className={styles.sceneControls} role="group" aria-label="Kies een praktijksituatie">{examples.map(([title],i)=><button type="button" aria-pressed={i===active} onClick={()=>setActive(i)} key={title}>{title}</button>)}</div>
  <div className={styles.sceneBody} aria-live="polite"><Visual mode={mode} stage={active}/><div><h3>{examples[active][0]}</h3><p>{examples[active][1]}</p></div></div>
  <figcaption>Schematische illustratie van het principe.</figcaption>
 </figure>;
}
