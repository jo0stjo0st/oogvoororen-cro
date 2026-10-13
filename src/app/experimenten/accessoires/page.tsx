import Link from "next/link";
import { product, euro, appointmentUrl } from "@/features/products/data";

const optional = product.accessories.filter(a=>a.name!=="Desk Charger");
const groups = [
 {name:"TV en verbinding",description:"Accessoires die geluid van andere apparaten naar het hoorapparaat kunnen sturen.",items:optional.filter(a=>["TV-A Adapter","SoundClip-A","Easy LE Adapter"].includes(a.name))},
 {name:"Bediening en opladen",description:"Extra manieren om het toestel te bedienen of op te laden.",items:optional.filter(a=>["RC-A Remote Control","Charger Plus miniRITE"].includes(a.name))}
];
export default function AccessoriesChapter(){
 return <main className="wide cro-accessories-page">
  <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
  <p className="eyebrow">Hoofdstuk 8 · accessoires</p>
  <h1>Wat is inbegrepen en wat kunt u erbij gebruiken?</h1>
  <p>Ontwerp voor de bestaande productpagina van de Bernafon Encanta 400 Pro. De productnamen en indicatieve prijzen komen uit de CRO-productdata; afbeeldingen zijn UI-placeholders. Compatibiliteit en pakketinhoud controleren we vóór publicatie.</p>
  <section className="cro-accessories-section">
   <div className="cro-accessories-heading"><div><p className="eyebrow">Bij het toestel</p><h2>Dit heeft u nodig om te beginnen</h2></div></div>
   <div className="cro-accessories-included">
    <div className="cro-accessories-placeholder" aria-hidden="true"><span>Afbeelding oplader</span></div>
    <div><span className="cro-accessories-tag">Inbegrepen volgens CRO-productdata</span><h3>Desk Charger</h3><p>De standaardoplader voor de Encanta miniRITE. U hoeft deze bij de getoonde pakketinhoud niet apart aan te schaffen.</p><p className="cro-accessories-muted">Losse catalogusprijs: {euro(225)} · niet als meerprijs berekend</p></div>
   </div>
  </section>
  <section className="cro-accessories-section">
   <div className="cro-accessories-heading"><div><p className="eyebrow">Optionele accessoires</p><h2>Handig in specifieke situaties</h2><p>U hoeft deze accessoires niet standaard mee te bestellen. Bekijk wat ze doen en bespreek met de audicien of u ze nodig hebt.</p></div></div>
   {groups.map(group=><div className="cro-accessories-group" key={group.name}>
     <h3>{group.name}</h3><p>{group.description}</p>
     <div className="cro-accessories-grid">{group.items.map(a=><article key={a.name}>
       <div className="cro-accessories-placeholder" aria-hidden="true"><span>Productafbeelding</span></div>
       <div className="cro-accessories-item-copy"><h4>{a.name}</h4><p>{a.note}</p><strong>{euro(a.price)}</strong><small>Indicatieve prijs · compatibiliteit te controleren</small></div>
     </article>)}</div>
   </div>)}
  </section>
  <section className="cro-accessories-section">
   <div className="cro-accessories-heading"><div><p className="eyebrow">Onderhoud</p><h2>Onderhoud en vervangende onderdelen</h2><p>Filters, domes en andere verbruiksartikelen hangen af van de uitvoering en de gekozen aanpassing. De audicien legt uit welke onderdelen voor uw toestel van toepassing zijn.</p></div></div>
   <div className="cro-accessories-maintenance"><div className="cro-accessories-placeholder" aria-hidden="true"><span>Onderhoudsproducten</span></div><div><h3>Welke onderdelen moet ik vervangen?</h3><p>Hier tonen we de bijbehorende onderhoudsproducten zodra de juiste uitvoering is vastgesteld. Geen willekeurige accessoires of ongecontroleerde prijzen.</p></div></div>
  </section>
  <section className="cro-accessories-cta"><div><h2>Welk accessoire is voor u nuttig?</h2><p>De audicien bekijkt samen met u uw gehoor, dagelijkse situaties en eventuele accessoires. U hoeft vooraf niets te kiezen.</p></div><div><Link className="cro-accessories-cta-button" href={appointmentUrl("variant-a")}>Maak een afspraak voor persoonlijk hooradvies</Link><small>Persoonlijk advies · Geen aankoopverplichting</small></div></section>
  <section className="section"><h2>Ontwerpuitgangspunt</h2><p>Dit is één hoofdstuk binnen de bestaande productpagina. De afspraakknop is een rustige herhaling van de hoofdactie. Er is bewust geen winkelmandje: de keuze voor toestel en accessoires volgt uit het persoonlijke advies.</p></section>
 </main>;
}
