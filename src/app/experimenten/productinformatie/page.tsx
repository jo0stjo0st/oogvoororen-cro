import Link from "next/link";
import { product, euro } from "@/features/products/data";

const highlights = [
  { label: "Oplaadbaar", detail: "Geen losse batterijen vervangen" },
  { label: "Bluetooth", detail: "Verbinding met compatibele apparaten" },
  { label: "Premium uitvoering", detail: "Encanta 400 Pro" },
];
export default function ProductInfoChapter() {
  return <main className="wide cro-info-page">
    <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
    <p className="eyebrow">Hoofdstuk 6 · voorstel</p>
    <h1>Productinformatie, maar overzichtelijker</h1>
    <p>De technische informatie blijft beschikbaar. Alleen de volgorde en zichtbaarheid veranderen.</p>
    <section className="cro-info-panel">
      <div className="cro-info-heading">
        <p className="eyebrow">Over de Bernafon Encanta 400 Pro</p>
        <h2>Wat kunt u van dit hoorapparaat verwachten?</h2>
        <p>Een oplaadbaar premium hoorapparaat, ontworpen om gesprekken en dagelijkse luistersituaties comfortabeler te maken. Uw audicien bespreekt welke functies voor uw gehoor belangrijk zijn.</p>
      </div>
      <div className="cro-info-highlights">
        {highlights.map(item=><div key={item.label}><strong>{item.label}</strong><span>{item.detail}</span></div>)}
      </div>
      <div className="cro-info-accordions">
        <details open>
          <summary><span>Eigenschappen en dagelijks gebruik</span><span className="cro-info-summary-hint">Direct zichtbaar</span></summary>
          <div className="cro-info-details">
            <p>De Encanta 400 Pro is het hoogste technologieniveau binnen de Encanta-serie. Het toestel is oplaadbaar en biedt functies voor gesprekken, muziek en verbinding met compatibele telefoons.</p>
            <ul><li>Oplaadbare lithium-ion accu</li><li>Bluetooth voor compatibele apparaten</li><li>Verschillende luisterprogramma's</li><li>Ondersteuning bij luisteren in rumoerige situaties</li></ul>
          </div>
        </details>
        <details>
          <summary><span>Alle technische specificaties</span><span className="cro-info-summary-hint">{product.specs.length} specificaties</span></summary>
          <div className="cro-info-details cro-info-table-wrap"><table><tbody>{product.specs.map(([name,value])=><tr key={name}><th scope="row">{name}</th><td>{value}</td></tr>)}</tbody></table></div>
        </details>
        <details>
          <summary><span>App, verbindingen en compatibiliteit</span><span className="cro-info-summary-hint">Meer informatie</span></summary>
          <div className="cro-info-details"><p>Met de Bernafon App kunt u bepaalde instellingen aanpassen. Of uw telefoon en accessoires geschikt zijn, hangt af van het model en de softwareversie. De audicien helpt u bij het koppelen en instellen.</p></div>
        </details>
        <details>
          <summary><span>Brochures, handleidingen en onderhoud</span><span className="cro-info-summary-hint">Documenten</span></summary>
          <div className="cro-info-details"><p>Alle handleidingen en onderhoudsinformatie blijven bereikbaar.</p><a href={product.source+"#downloads"} target="_blank" rel="noreferrer">Bekijk de documenten op de productpagina ↗</a></div>
        </details>
      </div>
    </section>
    <section className="cro-info-compare">
      <div className="cro-info-heading"><p className="eyebrow">Modellen vergelijken</p><h2>Wat zijn de verschillen binnen de Encanta-serie?</h2><p>Bekijk de modellen naast elkaar. Het beste toestel hangt niet alleen van het technologieniveau af, maar vooral van uw gehoor en luisterwensen.</p></div>
      <div className="cro-info-table-wrap"><table><thead><tr><th scope="col">Model</th><th scope="col">Prijs per toestel</th><th scope="col">Kanalen</th></tr></thead><tbody>{product.comparisons.map((item,i)=><tr key={item.name} className={i===0?"cro-info-selected":""}><th scope="row">{item.name}{i===0&&<small>Dit toestel</small>}</th><td>{euro(item.price)}</td><td>{item.channels}</td></tr>)}</tbody></table></div>
      <details className="cro-info-compare-more"><summary>Wat betekenen de technische verschillen?</summary><p>Meer kanalen of een hoger technologieniveau betekent niet automatisch dat een toestel voor iedereen beter is. Uw audicien beoordeelt welke eigenschappen bij uw gehoorverlies en dagelijkse luistersituaties passen.</p></details>
    </section>
    <section className="section"><h2>Wat verandert er ten opzichte van nu?</h2><p>De bestaande technische gegevens en modelvergelijking blijven behouden. De belangrijkste eigenschappen staan bovenaan. Specificaties, app-informatie en documenten zijn afzonderlijk uitklapbaar. De modelvergelijking blijft direct zichtbaar, omdat dit een belangrijke reden is om verder te lezen.</p><p>Dit is een ontwerpvoorstel met de gegevens uit de huidige CRO-demo. We controleren de productgegevens nog tegen de Belgische bronpagina voordat dit definitief wordt.</p></section>
  </main>;
}
