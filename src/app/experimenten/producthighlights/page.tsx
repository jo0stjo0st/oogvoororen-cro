import Link from "next/link";
import { product } from "@/features/products/data";

const highlights=[
  {title:"Spraak in rumoer",body:"Meer ondersteuning om gesprekken te volgen in restaurants en andere drukke omgevingen."},
  {title:"Groepsgesprekken",body:"Geavanceerde geluidsverwerking wanneer meerdere mensen tegelijk spreken."},
  {title:"Geluidsdetails",body:"Uitgebreidere verwerking van nuances in stemmen, omgevingsgeluiden en muziek."},
  {title:"Persoonlijk af te stellen",body:"Uw audicien stemt de uitgebreide audiologische mogelijkheden af op uw gehoor."},
];
export default function ProductHighlights(){
 return <main className="wide cro-highlights-page">
   <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
   <p className="eyebrow">Hoofdstuk 4 · nieuw productblok direct na de hero</p>
   <h1>Waarom kiezen voor de Encanta 400 Pro?</h1>
   <p>Een compact productinhoudelijk blok vóór de uitleg over Oogvoororen, de prijscalculator en de uitgebreide vergelijking.</p>
   <section className="cro-highlight-panel">
     <p className="eyebrow">Bernafon Encanta 400 Pro</p>
     <h2>Haal meer uit ieder gesprek.</h2>
     <p className="cro-highlight-intro">Het hoogste audiologische technologieniveau binnen de Encanta-serie. Voor wie ook in uitdagende luistersituaties zoveel mogelijk wil verstaan.</p>
     <div className="cro-highlight-grid">{highlights.map((h,i)=><article key={h.title}><span className="cro-highlight-number">0{i+1}</span><h3>{h.title}</h3><p>{h.body}</p></article>)}</div>
     <div className="cro-highlight-review">
       <div><p className="eyebrow">Ervaringen met dit hoorapparaat</p><h3>Wat zeggen gebruikers?</h3><p>Naast de audiologische voordelen tonen we hier één echte, relevante productreview. Bij voorkeur over spraakverstaan of geluidskwaliteit, met de originele beoordeling en bronvermelding.</p></div>
       <a href={product.source+"#reviews"} target="_blank" rel="noreferrer">Lees de bestaande productreviews ↗</a>
     </div>
     <p className="cro-highlight-bottom"><Link href="/experimenten/productinformatie">Vergelijk de Encanta-technologieniveaus →</Link></p>
   </section>
   <section className="section"><h2>Ontwerpkeuze</h2><p>De highlights staan bewust vóór de dienstverlening en prijsberekening. De volledige audiologische vergelijking en technische specificaties blijven in het latere informatieblok. We voegen pas een letterlijk reviewcitaat toe nadat de exacte tekst en bron zijn gecontroleerd.</p></section>
 </main>;
}