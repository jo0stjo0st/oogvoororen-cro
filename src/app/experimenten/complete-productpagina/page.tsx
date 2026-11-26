"use client";
import Link from "next/link";
import Image from "next/image";
import {useEffect,useState} from "react";
import {product,euro} from "@/features/products/data";
import {calculatePrice,type Age} from "@/features/products/pricing";
import {ProductSiteHeader,ProductSiteFooter} from "@/components/product-site-shell";
import {ProductReviews} from "@/features/reviews/product-reviews";
import { EncantaTechnicalDetails, EncantaAccessories, EncantaProfessionals } from "@/features/products/encanta-details";
import {CompactAppointmentForm} from "@/features/appointments/compact-form";

const highlights=[
 {title:"Verstaan bij achtergrondgeluid",body:"De geluidsverwerking van de Encanta 400 Pro is gericht op situaties waarin spraak en andere geluiden tegelijk aanwezig zijn. Hoeveel voordeel u merkt, hangt af van uw gehoor en de aanpassing."},
 {title:"Aanpassing aan luistersituaties",body:"Het toestel verwerkt geluid afhankelijk van de omgeving. De precieze werking van de functies wordt voor publicatie getoetst aan de documentatie van Bernafon."},
 {title:"Oplaadbaar en verbonden",body:"De miniRITE is oplaadbaar en ondersteunt verbinding met compatibele apparaten. Uw audicien controleert welke verbindingen voor uw telefoon mogelijk zijn."}
];

export default function CompleteProductPage(){
 const [age,setAge]=useState<Age>("senior");
 const [count,setCount]=useState(1);
 const [eligible,setEligible]=useState(true);
 const [showSticky,setShowSticky]=useState(false);

 const examplePrice=calculatePrice("senior",1,"standard");
 const result=calculatePrice(age,count,eligible?"standard":"own");
 useEffect(()=>{
  const update=()=>{const el=document.getElementById("complete-hero");setShowSticky(Boolean(el&&el.getBoundingClientRect().bottom<90))};
  update();window.addEventListener("scroll",update,{passive:true});return()=>window.removeEventListener("scroll",update);
 },[]);

 return <><ProductSiteHeader locale="nl"/><main className="wide cro-complete-page" id="top">
  <p className="cro-complete-back"><Link href="/">← Terug naar de CRO-werkplaats</Link> <span>Samengestelde conceptpagina · niet gepubliceerd</span></p>
  <section id="complete-hero" className="cro-complete-hero">
   <div className="cro-complete-image"><div className="cro-complete-packshot"><Image unoptimized src="https://claso.net/image/catalog/productes-bernafon/bernafon-encanta-landing.png" alt="Bernafon Encanta miniRITE met oplader, voorbeeldpackshot" width={560} height={560}/></div><div className="cro-complete-image-choices"><span className="cro-complete-choice-active">Toestel + oplader</span><span>Toestel</span><span>Detail</span></div><small>Voorbeeldpackshot ter beoordeling · beeldrechten nog controleren</small></div>
   <div className="cro-complete-hero-copy"><p className="eyebrow">Bernafon · Encanta</p><h1>Bernafon Encanta 400 Pro miniRITE</h1><p>Oplaadbaar hoortoestel met het hoogste technologieniveau binnen de Encanta-serie.</p>
    <div className="cro-complete-price"><span>Prijs per hoorapparaat</span><strong>{euro(product.price)}</strong><div className="cro-complete-own-payment"><span>Indicatieve eigen opleg voor 65+</span><b>{euro(examplePrice.net ?? examplePrice.total)}</b></div><a href="#prijs">Bereken uw persoonlijke prijs ↓</a></div>
    <ul className="cro-complete-benefits"><li><span aria-hidden="true">✓</span>Persoonlijk hooradvies en hoortest</li><li><span aria-hidden="true">✓</span>Vrijblijvend proberen na het advies</li><li><span aria-hidden="true">✓</span>5 jaar service en garantie</li></ul>
    <a className="cro-complete-cta" href="#afspraak">Maak een afspraak voor persoonlijk hooradvies</a><p className="cro-complete-assurance">Persoonlijk advies · Geen aankoopverplichting</p>
   </div>
  </section>
  <section className="cro-complete-section" id="technologie"><p className="eyebrow">Over dit toestel</p><h2>Wat maakt de Encanta 400 Pro bijzonder?</h2><p className="cro-complete-lead">De belangrijkste eigenschappen in begrijpelijke taal. De audicien helpt u beoordelen of dit toestel bij uw gehoor en dagelijks leven past.</p><div className="cro-complete-cards">{highlights.map((x,i)=><article key={x.title}><span className="cro-complete-feature-mark" aria-hidden="true">{String(i+1).padStart(2,"0")}</span><h3>{x.title}</h3><p>{x.body}</p></article>)}</div>
   <details>
    <summary>Omschrijving</summary>
    <p>De Bernafon Encanta 400 Pro is het topmodel van de Encanta-reeks en beschikt over alle functies uit de serie. De geluidsverwerking is ontworpen voor helder geluid en om gesprekken ook in rumoerige situaties beter te kunnen volgen.</p>
    <p>Met <Link href="/experimenten/bernafon/smart-sensor" className="underline">Smart Sensor</Link> herkent het hoorapparaat bewegingen van uw hoofd en lichaam. Op basis daarvan kan het automatisch bijsturen uit welke richting geluid nadruk krijgt en hoeveel achtergrondgeluid het dempt. Dat komt van pas wanneer u wisselt tussen een gesprek met één persoon en een gesprek met meerdere mensen.</p>
    <p>Dankzij de brede frequentieband geeft de Encanta 400 Pro zowel lage als hoge tonen weer. Het programma <Link href="/experimenten/bernafon/music-experience" className="underline">Music Experience</Link> versterkt bastonen tot 80 Hz. In een onderzoek van Bernafon verkoos 85% van de deelnemende muzikanten dit programma boven het standaardprogramma voor spraak bij het luisteren naar muziek.</p>
    <p>Met een compatibele Apple- of Android-telefoon kunt u rechtstreeks audio streamen en het hoorapparaat bedienen via de Bernafon-app. Bluetooth Low Energy beperkt het stroomverbruik tijdens het streamen. De oplaadbare accu ondersteunt ook snelladen.</p>
   </details>
   <details>
    <summary>Plus- en minpunten</summary>
    <ul className="cro-complete-benefits">
     <li><span aria-hidden="true">✓</span>Speciaal muziekprogramma, geschikt voor muziekliefhebbers</li>
     <li><span aria-hidden="true">✓</span>Herkent hoofd- en lichaamsbewegingen</li>
     <li><span aria-hidden="true">✓</span>Ergonomisch ontwerp</li>
    </ul>
   </details>
  </section>
  <section className="cro-complete-reviews-section" id="reviews"><ProductReviews/></section>
  <section className="cro-complete-section cro-complete-service"><div><p className="eyebrow">Waarom Oogvoororen?</p><h2>Een goed hoorapparaat begint met goed advies</h2><p>We verkopen toestellen van verschillende fabrikanten. Daarom kijken we eerst naar uw gehoor, wensen en dagelijkse situaties.</p><ol className="cro-complete-steps"><li><span>01</span><p>We beginnen met een hoortest en advies.</p></li><li><span>02</span><p>We bespreken samen passende toestellen.</p></li><li><span>03</span><p>Bij een volgende afspraak kunt u een toestel vrijblijvend proberen.</p></li></ol><a href="#afspraak" className="cro-complete-textlink">Vraag persoonlijk hooradvies aan →</a></div><Image unoptimized src="https://cdn.oogvoororen.nl/MFFSwTgW7xbsf2gcxH0UokxMywsFI72s4Mx9KKSB-800.webp" alt="Audicien onderzoekt het oor van een klant" width={520} height={340}/></section>
  <section className="cro-complete-section" id="prijs"><p className="eyebrow">Prijs en tegemoetkoming</p><h2>Wat betaalt u zelf?</h2><p className="cro-complete-lead">Kies uw situatie voor een indicatieve berekening. U hoeft geen persoonsgegevens in te vullen.</p><div className="cro-complete-calc"><div className="cro-complete-calc-controls"><fieldset><legend>Uw leeftijd</legend>{[{v:"senior",t:"65 jaar of ouder"},{v:"adult",t:"18 tot 64 jaar"},{v:"child",t:"Jonger dan 18 jaar"}].map(x=><button key={x.v} aria-pressed={age===x.v} onClick={()=>setAge(x.v as Age)}>{x.t}</button>)}</fieldset><fieldset><legend>Aantal hoorapparaten</legend>{[1,2].map(n=><button key={n} aria-pressed={count===n} onClick={()=>setCount(n)}>{n===1?"Eén":"Twee"}</button>)}</fieldset><fieldset><legend>Tegemoetkoming mutualiteit</legend><button aria-pressed={eligible} onClick={()=>setEligible(true)}>Toon indicatie</button><button aria-pressed={!eligible} onClick={()=>setEligible(false)}>Zelf betalen</button></fieldset></div><div className="cro-complete-calc-result" aria-live="polite"><span>Prijs {count===1?"hoorapparaat":"hoorapparaten"}</span><strong>{euro(result.total)}</strong><span>Indicatieve tegemoetkoming: - {euro(result.compensation??0)}</span><div><span>Indicatieve eigen opleg</span><b>{euro(result.net??result.total)}</b></div><small>Geen definitieve prijs of toezegging van vergoeding. De audicien controleert uw aanspraak en de geldende voorwaarden.</small></div></div></section>
  <EncantaTechnicalDetails />
  <EncantaAccessories />
  <section className="cro-complete-section cro-complete-appointment" id="afspraak"><div><p className="eyebrow">Persoonlijk hooradvies</p><h2>Bespreek uw gehoor met een audicien</h2><p>U hoeft nog geen hoorapparaat te kiezen. We bellen u om uw wensen en de afspraak te bespreken.</p><p>Met uw postcode koppelen we u aan een geschikte audicien of vestiging. De locatie bespreken we telefonisch.</p><p className="cro-complete-assurance">Geen aankoopverplichting</p></div><div className="cro-complete-form"><h3>Vraag uw afspraak aan</h3><CompactAppointmentForm interest={product.slug}/></div></section>
  <EncantaProfessionals />
  {showSticky&&<aside className="cro-complete-sticky"><div><strong>Bernafon Encanta 400 Pro</strong><a href="#afspraak" className="cro-complete-cta">Maak een afspraak voor persoonlijk hooradvies</a></div></aside>}

 </main><ProductSiteFooter locale="nl"/></>;
}
