import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {cdn,datasheet,euros,featureSheet,liveProduct,manual,maxName,maxRoute,models,videos} from "@/features/products/signia-max";
import {specifications} from "@/features/products/signia-max-specifications";
import {Gallery,PriceChoice,StickyAppointment,Visual} from "./interactive";
import {AppDownloads,Appointment,MaxFooter,MaxHeader} from "./shared";
import styles from "../bernafon-smart-directionality/page.module.css";

export const metadata: Metadata = {
 title: maxName+" | Oogvoororen",
 description:"Bekijk de Signia Pure Charge&Go MaX 7, vergelijk MaX 7, 5 en 3 en ontdek de AI-technologie, Signia One-app en accessoires.",
 robots:{index:false,follow:true},
};

const highlights = [
 {slug:"realtime-conversation-enhancement-ai",label:"Spraakverstaan in groepsgesprekken",text:"Volg het gesprek als meerdere mensen om de beurt aan het woord zijn.",mode:"voices"},
 {slug:"dynamic-noise-control-ai",label:"Rumoeronderdrukking",text:"Versta uw gesprekspartner beter bij afleiding door achtergrondgeluid.",mode:"noise"},
 {slug:"auto-echoshield",label:"Echoreductie",text:"Beperk de invloed van galm in ruimtes met harde vloeren en wanden.",mode:"echo"},
] as const;

const comparison = [
 ["MaX 7",5,2245,"Meeste ondersteuning in groepsgesprekken · automatische galmreductie · richtinggevoelige ondersteuning tijdens wandelen en autoritten"],
 ["MaX 5",4,2045,"Extra ondersteuning bij wisselende gesprekspartners · afzonderlijk luisterprogramma voor galmende ruimtes"],
 ["MaX 3",2,1700,"Ondersteuning bij groepsgesprekken · demping van plots contactgeluid · automatische omgevingsaanpassing"],
] as const;

const accessories = [
 ["TV Sound","Stream tv-geluid rechtstreeks naar uw hoortoestellen op het volume dat u prettig vindt.",184,"tv-hulpmiddelen/signia/tv-sound","GOJBoKHuTSHDQWmTmE0pvWfsO3kq7lUNyEYy67hN-400.webp"],
 ["Signia Remote Control","Regel het volume of wissel van programma met een fysieke afstandsbediening.",110,"afstandbedieningen/signia/signia-remote-control","8hjctYnDZdhPn43qFENrB2msuDkmp87i09Vwt506-400.webp"],
 ["Desktop Charger Pure 2.0","Vaste oplader voor thuis. Bij dit toestel inbegrepen.",180,"opladers/signia/desktop-charger-20","Uxm1nPysKjd0JS8e497LribzwS58UNYZpkJbrHdE-400.webp"],
 ["Portable Charger Pure 2.0","Draagbare oplader met eigen accu, handig voor onderweg.",200,"opladers/signia/desktop-charger-20-1","vXjEAxvYH1wpD423ynOIfYHVnSgW8n6VgUqUSIDO-400.webp"],
] as const;

const maintenance = [
 ["LIHO-onderhoudspakket","liho-onderhoudspakket"],["Signia QuickGuard-filters","https://oogvoororen.nl/webshop/filters/signia/siemens-signia-quickguard-filter"],["Signia miniReceiver 3.0","signia-minireceiver-30"],["Signia Eartips 3.0","signia-eartips-30"],
 ["Signia Sleeves 3.0","signia-sleeves-30"],["Signia Filter 3.0","signia-filter-30"],["Signia Concha Locks 3.0","signia-concha-locks-30"],["Signia RIC Moulds","signia-ric-moulds"],
];

export default function SigniaMaxProduct(){
 return <><MaxHeader/><main className="wide cro-complete-page" id="main-content">
  <nav className="cro-complete-back" aria-label="Broodkruimel"><a href="https://oogvoororen.nl/hoortoestellen/signia">Signia-hoortoestellen</a><span> / Pure Charge&Go MaX 7</span></nav>
  <section id="max-hero" className="cro-complete-hero">
   <Gallery/>
   <div className="cro-complete-hero-copy">
    <p className="eyebrow">Signia · Multi-adaptive Xperience</p>
    <h1>{maxName}</h1>
    <p>Het meest uitgebreide MaX-hoortoestel. Ontwikkeld om spraak te volgen wanneer meerdere mensen praten of de omgeving verandert.</p>
    <a href="#reviews">★ 9,7 uit 32 beoordelingen ↓</a>
    <div className="cro-complete-price"><span>All-inprijs per hoortoestel</span><strong>{euros(2245)}</strong><span>Oplader inbegrepen</span><a href="#prijs">Bekijk uw prijs ↓</a></div>
    <ul className="cro-complete-benefits"><li><span aria-hidden="true">✓</span>Vrijblijvend uitproberen</li><li><span aria-hidden="true">✓</span>Aan huis of in een hoorcentrum</li><li><span aria-hidden="true">✓</span>5 jaar service en garantie</li></ul>
    <a className="cro-complete-cta" href="#afspraak">Maak een afspraak voor hooradvies</a>
   </div>
  </section>
  <nav className={styles.contents} aria-label="Op deze pagina"><a href="#technologie">Technologie</a><a href="#reviews">Reviews</a><a href="#prijs">Prijs</a><a href="#specificaties">Vergelijken</a><a href="#accessoires">Accessoires</a><a href="#afspraak">Afspraak</a></nav>
  <section className="cro-complete-section" id="technologie">
   <p className="eyebrow">Over dit toestel</p><h2>Wat maakt de Signia MaX 7 bijzonder?</h2>
   <p className="cro-complete-lead">Volg wisselende stemmen in een gesprek, beperk hinderlijk achtergrondgeluid en blijf verbonden met uw telefoon. Bekijk per functie hoe het toestel reageert.</p>
   <div className="cro-complete-cards">{highlights.map(({slug,label,text,mode})=><article key={slug}><Visual mode={mode} stage={1}/><h3><Link className="underline" href={maxRoute+"/"+slug}>{label}</Link></h3><p>{text}</p></article>)}</div>
   <div className="mt-6">
    <p><a className="cro-complete-textlink" href="#specificaties">Vergelijk alle specificaties →</a></p>
    <details><summary>Omschrijving</summary><p>De Pure Charge&amp;Go MaX 7 is het topmodel van Signia MaX. Vier gespecialiseerde netwerken werken samen aan het verwerken van spraak, achtergrondgeluid, de luistersituatie en uw eigen stem. Zo kan het toestel de verwerking aanpassen als sprekers wisselen of als het drukker wordt om u heen.</p><p>Het toestel is oplaadbaar en wordt geleverd met een oplader. Via OneConnect kunt u met geschikte apparaten telefoneren en audio streamen. Er is ook een luisterspoel voor ringleidingen.</p></details>
    <details><summary>Plus- en minpunten</summary><ul className="cro-complete-benefits"><li><span aria-hidden="true">✓</span>Vier AI-netwerken werken samen</li><li><span aria-hidden="true">✓</span>Gericht op verstaan in drukke groepsgesprekken</li><li><span aria-hidden="true">✓</span>Winnaar Hearing Technology Innovator Award 2026</li><li><span aria-hidden="true">✓</span>Bluetooth Classic en LE Audio</li><li><span aria-hidden="true">−</span>Auracast vereist volgens de productinformatie een software-update</li></ul></details>
   </div>
  </section>
  <section className="cro-complete-reviews-section" id="reviews">
   <div className="cro-reviews-card"><div className="cro-reviews-head"><div><p className="eyebrow">Ervaringen van klanten</p><h2>Reviews van de Signia Pure Charge&Go MaX 7</h2></div></div>
    <div className="cro-reviews-summary"><div className="cro-reviews-score"><strong>9,7 <span>/ 10</span></strong><span className="encanta-stars" aria-hidden="true">★★★★★</span><small>32 beoordelingen op Oogvoororen</small></div><div><h3>Op een prettige manier fantastische hoortoestellen aanschaffen</h3><p>Jan licht in zijn beoordeling de heldere klank, prettige bediening en hulp bij het aanmeten uit.</p><small>Jan · 16 november 2026 · MaX 7</small></div></div>
    <p className="mt-5"><a className="cro-complete-textlink" href={liveProduct+"#reviews"}>Lees alle beoordelingen bij Oogvoororen →</a></p>
   </div>
  </section>
  <section className="cro-complete-section cro-complete-service"><div><p className="eyebrow">Waarom Oogvoororen?</p><h2>Probeer het toestel in uw eigen omgeving</h2><ol className="cro-complete-steps"><li><span>1</span><p>Plan een hoortest en adviesgesprek, aan huis of in een hoorcentrum.</p></li><li><span>2</span><p>Vergelijk samen hoortoestellen en technologieniveaus.</p></li><li><span>3</span><p>Probeer uw keuze vrijblijvend uit in gesprekken die voor u tellen.</p></li></ol><a href="#afspraak" className="cro-complete-textlink">Vraag persoonlijk hooradvies aan →</a></div><Image src="/images/audicien-aan-huis/advies-aan-huis.webp" alt="Een audicien bespreekt een hoortoestel tijdens een adviesgesprek" width={760} height={510}/></section>
  <section className="cro-complete-section" id="prijs"><p className="eyebrow">Prijs en vergoeding</p><h2>Wat kost de Signia MaX 7?</h2><PriceChoice/></section>
  <section className="cro-complete-section" id="specificaties">
   <p className="eyebrow">Vergelijk de MaX-serie</p><h2>Welke Signia MaX past bij u?</h2><p>De sterren geven aan hoe uitgebreid de ondersteuning voor groepsgesprekken is volgens Signia.</p>
   <div className="cro-complete-levels">{comparison.map(([name,score,price,description])=><article key={name}><h3>{name}</h3><span className="encanta-stars" role="img" aria-label={score+" van 5 sterren"}>{"★".repeat(score)}<span>{"☆".repeat(5-score)}</span></span><p>{description}</p><strong>{euros(price)} per toestel</strong></article>)}</div>
   <details><summary>Bekijk alle technische specificaties</summary>
    <p>Basis, Geavanceerd en Ultiem geven per functie het verschil tussen deze drie uitvoeringen aan. Klik op een specificatie met een link voor uitleg over de uitvoering van Signia.</p>
    <div className="cro-complete-table"><table aria-label="Vergelijk de specificaties van Signia MaX 7, 5 en 3">
     <thead><tr><th scope="col">Specificatie</th>{models.map(model=><th scope="col" key={model}>{model}</th>)}</tr></thead>
     {specifications.map(group=><tbody key={group.label}>
      <tr><th className="encanta-spec-group" scope="rowgroup" colSpan={4}>{group.label}</th></tr>
      {group.rows.map(({label,values,detail})=><tr key={label}>
       <th scope="row">{detail?<Link className="underline" href={maxRoute+"/"+detail}>{label}</Link>:label}</th>
       {values.map((value,i)=><td key={models[i]}>{value}</td>)}
      </tr>)}
     </tbody>)}
    </table></div>
   </details>
   <details><summary>Handleidingen en productdocumenten</summary><div className="download-links"><a href={manual}>Handleiding Pure Charge&amp;Go MaX (PDF) ↓</a><a href="/documents/signia-max-7-productbrochure.pdf" download>Consumentenbrochure MaX 7 (PDF) ↓</a></div></details>
   <div className="mt-3 border-t border-[#dfe8e1] pt-5"><div className="flex items-center gap-3"><Image unoptimized src={cdn+"sZTcZFko7xpct61F1IvJ1zKgrXe7n2jgZqUtdhWd.png"} width={48} height={48} alt=""/><h3>Signia One-app</h3></div><p>Pas het volume aan, wissel van luisterprogramma en controleer de batterijstatus op uw telefoon.</p><AppDownloads/><p className="mt-4"><Link className="underline" href={maxRoute+"/signia-one"}>Lees hoe Signia One werkt →</Link></p></div>
  </section>
  <section className="cro-complete-section" id="accessoires"><p className="eyebrow">Aanvullingen voor uw hoortoestel</p><h2>Accessoires, onderhoud en onderdelen</h2>
   <div className="cro-complete-accessories">{accessories.map(([name,description,price,path,photo])=><article key={name}><Image className="mb-4 h-36 w-full object-contain" unoptimized src={cdn+photo} width={180} height={150} alt={name}/><h3>{name}</h3><p>{description}</p><strong>{name.startsWith("Desktop")?"Inbegrepen":euros(price)}</strong><p className="!min-h-0"><a className="underline" href={"https://oogvoororen.nl/webshop/"+path}>Bekijk {name} →</a></p></article>)}</div>
   <details className="mt-6"><summary>Onderhoud en vervangende onderdelen</summary><p>Zoek het juiste onderdeel in de webshop voor de Signia MaX 7. Uw audicien kan helpen controleren welke maat of uitvoering u draagt.</p><ul>{maintenance.map(([name,id])=><li key={name}><a className="underline" href={id.startsWith("https://")?id:liveProduct+"#bijproducten"}>{name}</a></li>)}</ul><a className="cro-complete-textlink" href="https://oogvoororen.nl/webshop/onderhoudsartikelen">Bekijk onderhoudsartikelen in de webshop →</a></details>
   <details><summary>Instructievideo’s voor de Signia MaX</summary><p>Bekijk de productvideo’s voor hulp bij dagelijks gebruik en onderhoud.</p><a className="cro-complete-textlink" href={videos}>Bekijk de instructievideo’s →</a></details>
  </section>
  <section className="cro-complete-section"><h2>Veelgestelde vragen</h2>
   <details><summary>Wat is het verschil tussen Signia MaX en Signia IX?</summary><p>MaX is het platform waarop vier netwerken de verwerking van onder meer stemmen, achtergrondgeluid en uw eigen stem op elkaar afstemmen. Deze serie gebruikt de Signia One-app.</p></details>
   <details><summary>Kan ik de MaX 7 aan huis uitproberen?</summary><p>Bij Oogvoororen kunt u een hoortest en adviesgesprek aan huis of in een hoorcentrum aanvragen. Samen bespreekt u of dit toestel bij uw gehoor en wensen past.</p></details>
   <details><summary>Kan ik handsfree bellen?</summary><p>Dat kan met een compatibele Bluetooth-verbinding. Neem uw smartphone mee naar de afspraak om de koppeling uit te proberen.</p></details>
  </section>
  <Appointment/>
  <section className="cro-complete-section" id="voor-audiciens"><details className="!border-0 !p-0">
   <summary className="flex cursor-pointer items-center justify-between gap-4"><h2 className="!m-0">Voor audiciens</h2><span aria-hidden="true">⌄</span></summary>
   <div className="download-links mt-6"><a href={datasheet}>Specsheet ↓</a><a href={datasheet+"#page=4"}>Aanpasbereik per receiver ↓</a><a href={featureSheet}>Functieoverzicht MaX 7, 5 en 3 ↓</a></div>
   <h3 className="mt-7">Tips &amp; tricks</h3>
   <details><summary>Wanneer zijn Dynamic AI Focus Streams beschikbaar?</summary><p>Het functieoverzicht specificeert deze voor bilaterale aanpassingen met actieve e2e-koppeling. MaX 7 heeft drie streams, MaX 5 één.</p></details>
   <details><summary>Hoe vergelijk ik het aanpasbereik van de receivers?</summary><p>Gebruik de grafieken voor S, M, P en HP in het datablad. Neem de gekozen akoestische koppeling mee bij de verificatie.</p></details>
   <details><summary>Moet Own Voice Processing AI apart worden gekalibreerd?</summary><p>Signia vermeldt voor MaX dat aparte kalibratie van de eigen stem niet nodig is bij een bilaterale aanpassing. Vraag wel hoe de eigen stem klinkt en controleer zo nodig de pasvorm.</p></details>
   <p className="mt-6"><strong>Nieuwsgierig of er vacatures bij ons beschikbaar zijn?</strong></p><a className="cro-complete-cta" href="https://oogvoororen.nl/vacatures">Bekijk onze vacatures →</a>
  </details></section>
  <StickyAppointment/>
 </main><MaxFooter/></>;
}
