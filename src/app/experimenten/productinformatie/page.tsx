import Link from "next/link";
import { product, euro } from "@/features/products/data";

const levels = [
  {name:"Encanta 100",sub:"Connect",price:1495,environment:"Rustige situaties",speech:"Gesprekken met één persoon",noise:"Basis",group:"Beperkt",sensor:"Nee",reduction:"Tot 6 dB"},
  {name:"Encanta 200",sub:"Go",price:1695,environment:"Drukkere situaties",speech:"Eén-op-één in rumoer",noise:"Meer ondersteuning",group:"Basis",sensor:"Nee",reduction:"Tot 8 dB"},
  {name:"Encanta 300",sub:"Engage",price:2195,environment:"Groepsgesprekken",speech:"Meerdere sprekers",noise:"Geavanceerd",group:"Geavanceerd",sensor:"Ja",reduction:"Tot 10 dB"},
  {name:"Encanta 400",sub:"Pro",price:2395,environment:"Ook zeer complex",speech:"Maximale ondersteuning",noise:"Hoogste niveau",group:"Hoogste niveau",sensor:"Ja",reduction:"Tot 12 dB"},
];
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
        <details><summary><span>Handleidingen en onderhoud</span></summary><div className="cro-info-details"><a href={product.source+"#downloads"} target="_blank" rel="noreferrer">Bekijk de documenten op de oorspronkelijke productpagina ↗</a></div></details>
      </div>
    </section>
    <section className="cro-info-compare">
      <div className="cro-info-heading"><p className="eyebrow">Vergelijk de technologieniveaus</p><h2>Wat levert een hoger niveau op?</h2><p>De audiologische verwerking wordt uitgebreider naarmate u een hoger niveau kiest. Hieronder ziet u de verschillen in begrijpelijke taal.</p></div>
      <div className="cro-info-table-wrap cro-audio-table"><table><thead><tr><th scope="col">Audiologische eigenschap</th>{comparisons.map(item=><th scope="col" key={item.name}>{item.name}<small>{euro(item.price)}</small></th>)}</tr></thead><tbody>{audioRows.map((label,i)=><tr key={label}><th scope="row">{label}</th>{comparisons.map(item=><td key={item.name}>{item.levels[i]}</td>)}</tr>)}</tbody></table></div>
      <p className="cro-audio-table-note">Dit is een vereenvoudigde, kwalitatieve duiding van de technologieniveaus, geen officiële prestatietest of individuele uitkomstgarantie. Exacte functies en verschillen worden gecontroleerd aan de hand van de fabrikantdocumentatie.</p>
      <details className="cro-info-compare-more"><summary>Meer over de technologie van Bernafon</summary><p>De fabrikant beschrijft onder andere de audiologische verschillen tussen de niveaus en de rol van Smart Sensor en spraak-/ruisverwerking.</p><a href="https://www.bernafon.nl/products/hearing-aids/family/encanta" target="_blank" rel="noreferrer">Bekijk de officiële Encanta-familie ↗</a></details>
    </section>
    <section className="section"><h2>Wat verandert er ten opzichte van nu?</h2><p>De belangrijkste audiologische verschillen tussen de vier technologieniveaus staan direct zichtbaar in één vergelijking. De volledige technische gegevens, connectiviteit en documenten blijven uitklapbaar. Aantal banden gebruiken we niet als koopargument.</p><p>De vergelijkingsniveaus zijn een begrijpelijke interpretatie en moeten voor publicatie per model aan de officiële Bernafon-specificaties worden getoetst.</p></section>
  </main>;
      <div className="cro-info-compare-table" style={{overflowX:"auto"}}>
        <table>
          <thead><tr><th scope="col">Luistersituatie en technologie</th>{levels.map((l,i)=><th scope="col" key={l.name} className={i===3?"cro-info-best":""}>{l.name}<small>{l.sub}</small></th>)}</tr></thead>
          <tbody>
            <tr><th scope="row">Gesprekken in rumoer</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.speech}</td>)}</tr>
            <tr><th scope="row">Luistercomfort bij lawaai</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.noise}</td>)}</tr>
            <tr><th scope="row">Groepsgesprekken</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.group}</td>)}</tr>
            <tr><th scope="row">Smart Sensor</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.sensor}</td>)}</tr>
            <tr><th scope="row">Smart Noise Reduction</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.reduction}</td>)}</tr>
            <tr><th scope="row">Prijs per toestel</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}><strong>{euro(l.price)}</strong></td>)}</tr>
          </tbody>
        </table>
      </div>
}