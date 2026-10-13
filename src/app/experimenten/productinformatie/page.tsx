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
        <p className="eyebrow">De audiologische verschillen</p>
        <h2>Wat krijgt u bij een hoger technologieniveau?</h2>
        <p>De Encanta 400 Pro biedt binnen deze serie de meest uitgebreide ondersteuning voor spraakverstaan en luistercomfort, juist in moeilijke geluidsomgevingen. Dit zijn de verschillen die ertoe doen.</p>
      </div>
      <div className="cro-info-compare-table">
        <table>
          <thead><tr><th>Luistersituatie en technologie</th>{levels.map((l,i)=><th key={l.name} className={i===3?"cro-info-best":""}>{l.name}<small>{l.sub}</small></th>)}</tr></thead>
          <tbody>
            <tr><th>Gesprekken in rumoer</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.speech}</td>)}</tr>
            <tr><th>Luistercomfort bij lawaai</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.noise}</td>)}</tr>
            <tr><th>Gesprekken met meerdere sprekers</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.group}</td>)}</tr>
            <tr><th>Smart Sensor voor automatische aanpassing aan beweging</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.sensor}</td>)}</tr>
            <tr><th>Smart Noise Reduction</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}>{l.reduction}</td>)}</tr>
            <tr><th>Prijs per toestel</th>{levels.map((l,i)=><td key={l.name} className={i===3?"cro-info-best":""}><strong>{euro(l.price)}</strong></td>)}</tr>
          </tbody>
        </table>
      </div>
      <p className="cro-info-table-note">De omschrijvingen zijn kwalitatieve duidingen van de productniveaus, geen klinische scores. De vermelde maximale ruisonderdrukking is afkomstig uit de technische documentatie van Bernafon. Prijzen zijn overgenomen uit de CRO-demo.</p>
      <div className="cro-info-explain">
        <h3>Waarom kiezen voor de Encanta 400 Pro?</h3>
        <p>De 400 combineert de meest uitgebreide ruisonderdrukking van de serie met Smart Sensor en de hoogste ondersteuning voor groepsgesprekken in complexe situaties. Voor wie maximale audiologische prestaties wil, is dit binnen de Encanta-familie het hoogste niveau.</p>
        <p><a href="https://www.bernafon.nl/for-professionals/the-encanta-family" target="_blank" rel="noreferrer">Bekijk de toelichting van Bernafon ↗</a></p>
      </div>
      <div className="cro-info-accordions">
        <details><summary><span>Alle technische specificaties</span><span className="cro-info-summary-hint">{product.specs.length} specificaties</span></summary>
          <div className="cro-info-details cro-info-table-wrap"><table><tbody>{product.specs.map(([name,value])=><tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></div>
        </details>
        <details><summary><span>App, Bluetooth en dagelijks gebruik</span><span className="cro-info-summary-hint">Praktische informatie</span></summary><div className="cro-info-details"><p>De Encanta 400 Pro is oplaadbaar en kan verbinding maken met compatibele apparaten. De Bernafon App biedt bediening van bepaalde instellingen. Uw audicien helpt u bij de compatibiliteit en het instellen.</p></div></details>
        <details><summary><span>Brochures, handleidingen en onderhoud</span><span className="cro-info-summary-hint">Documenten</span></summary><div className="cro-info-details"><a href={product.source+"#downloads"} target="_blank" rel="noreferrer">Bekijk documenten op de productpagina ↗</a></div></details>
      </div>
    </section>
    <section className="section"><h2>Wat verandert er ten opzichte van nu?</h2><p>De belangrijkste audiologische verschillen tussen de vier technologieniveaus staan direct zichtbaar in één vergelijking. De volledige technische gegevens, connectiviteit en documenten blijven uitklapbaar. Aantal banden gebruiken we niet als koopargument.</p><p>Dit is een ontwerpvoorstel met de gegevens uit de huidige CRO-demo. We controleren de productgegevens nog tegen de Belgische bronpagina voordat dit definitief wordt.</p></section>
  </main>;
}
