import Link from "next/link";
import { product, euro } from "@/features/products/data";

const comparisons = [
  {name:"Encanta 100 Connect",price:1495,levels:["Basis","Basis","Basis","Basis"]},
  {name:"Encanta 200 Go",price:1695,levels:["Verbeterd","Verbeterd","Basis","Verbeterd"]},
  {name:"Encanta 300 Engage",price:2195,levels:["Geavanceerd","Geavanceerd","Smart Sensor","Uitgebreid"]},
  {name:"Encanta 400 Pro",price:2395,levels:["Meest uitgebreid","Meest uitgebreid","Smart Sensor + extra verfijning","Meest uitgebreid"]},
];
const audioRows = ["Spraak in rumoer","Groepsgesprekken","Automatische aanpassing","Geluidsdetails"];
export default function ProductInfoChapter() {
  return <main className="wide cro-info-page">
    <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
    <p className="eyebrow">Hoofdstuk 6 · voorstel</p>
    <h1>Productinformatie, maar overzichtelijker</h1>
    <p>De audiologische verschillen staan centraal. De volledige technische gegevens blijven bereikbaar.</p>
    <section className="cro-info-panel">
      <div className="cro-info-heading">
        <p className="eyebrow">Audiologische technologie</p>
        <h2>Wat maakt de Encanta 400 Pro bijzonder?</h2>
        <p>De verschillen tussen de Encanta-modellen zitten vooral in hoe verfijnd ze spraak en achtergrondgeluid verwerken. De 400 Pro biedt binnen deze serie het hoogste technologieniveau, vooral interessant wanneer u veel wilt verstaan in complexe luistersituaties.</p>
      </div>
      <div className="cro-audio-features">
        <article><span>01</span><h3>Spraak verstaan in rumoer</h3><p>Meer ondersteuning wanneer gesprekken en achtergrondgeluiden door elkaar lopen.</p></article>
        <article><span>02</span><h3>Gesprekken in groepen</h3><p>Verfijnde verwerking voor situaties met meerdere sprekers en wisselende geluidsbronnen.</p></article>
        <article><span>03</span><h3>Meer nuance in geluid</h3><p>Uitgebreidere verwerking van geluidsdetails, ook bij muziek en wisselende omgevingen.</p></article>
      </div>
      <div className="cro-info-accordions">
        <details open><summary><span>Wat betekenen deze audiologische voordelen?</span></summary><div className="cro-info-details"><p>De Encanta 400 Pro biedt de meest uitgebreide audiologische mogelijkheden van de Encanta-serie. Een audicien kan uitleggen hoe deze technologie zich vertaalt naar uw eigen gehoor en luisterwensen. Een juiste aanpassing blijft daarbij belangrijk.</p></div></details>
        <details><summary><span>Alle technische specificaties</span><span className="cro-info-summary-hint">{product.specs.length} eigenschappen</span></summary><div className="cro-info-details cro-info-table-wrap"><table><tbody>{product.specs.map(([name,value])=><tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></div></details>
        <details><summary><span>Bluetooth, opladen en app</span></summary><div className="cro-info-details"><p>De Encanta 400 Pro is oplaadbaar en ondersteunt verbinding met compatibele apparaten. Met de Bernafon App kunt u bepaalde instellingen aanpassen. Dit zijn praktische eigenschappen, maar niet de belangrijkste verschillen tussen de technologieniveaus.</p></div></details>
        <details><summary><span>Handleidingen en onderhoud</span></summary><div className="cro-info-details"><div className="cro-info-document-list"><div><strong>Brochure Bernafon Encanta</strong><span>PDF · productbrochure (placeholder)</span></div><div><strong>Gebruikershandleiding miniRITE</strong><span>PDF · handleiding (placeholder)</span></div><div><strong>Onderhoud en reinigen</strong><span>PDF · onderhoudsinstructies (placeholder)</span></div></div></div></details>
      </div>
    </section>
    <section className="cro-info-compare">
      <div className="cro-info-heading"><p className="eyebrow">Vergelijk de technologieniveaus</p><h2>Wat levert een hoger niveau op?</h2><p>De audiologische verwerking wordt uitgebreider naarmate u een hoger niveau kiest. Hieronder ziet u de verschillen in begrijpelijke taal.</p></div>
      <div className="cro-info-table-wrap cro-audio-table"><table><thead><tr><th scope="col">Audiologische eigenschap</th>{comparisons.map(item=><th scope="col" key={item.name}>{item.name}<small>{euro(item.price)}</small></th>)}</tr></thead><tbody>{audioRows.map((label,i)=><tr key={label}><th scope="row">{label}</th>{comparisons.map(item=><td key={item.name}>{item.levels[i]}</td>)}</tr>)}</tbody></table></div>
      <p className="cro-audio-table-note">Dit is een vereenvoudigde, kwalitatieve duiding van de technologieniveaus, geen officiële prestatietest of individuele uitkomstgarantie. Exacte functies en verschillen worden gecontroleerd aan de hand van de fabrikantdocumentatie.</p>
      <details className="cro-info-compare-more"><summary>Meer over de technologie van Bernafon</summary><p>De technische documentatie, audiologische toelichting en vergelijkingsinformatie worden hier op de productpagina zelf getoond. Dit onderdeel kan later de bestaande brochure-inhoud overnemen.</p></details>
    </section>
    <section className="section"><h2>Wat verandert er ten opzichte van nu?</h2><p>De belangrijkste audiologische verschillen tussen de vier technologieniveaus staan direct zichtbaar in één vergelijking. De volledige technische gegevens, connectiviteit en documenten blijven uitklapbaar. Aantal banden gebruiken we niet als koopargument.</p><p>De vergelijkingsniveaus zijn een begrijpelijke interpretatie en moeten voor publicatie per model aan de officiële Bernafon-specificaties worden getoetst.</p></section>
  </main>;
}
