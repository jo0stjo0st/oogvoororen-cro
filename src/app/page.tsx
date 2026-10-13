import Link from "next/link";
import Image from "next/image";
import { LabBar } from "@/components/lab-bar";
import { product } from "@/features/products/data";

const experiments = [
  ["01", "Producthero en primaire CTA", "Een dominante proefafspraak in plaats van twee gelijkwaardige acties."],
  ["02", "Prijs en eigen opleg", "Heldere toestelprijs, indicatieve tegemoetkoming en inbegrepen service."],
  ["03", "Direct zichtbare voordelen", "Proefperiode, audicien aan huis en garantie bij de prijs."],
  ["04", "Waarom Oogvoororen?", "Persoonlijke dienstverlening direct onder het productblok."],
  ["05", "Eenvoudiger prijsberekening", "Leeftijd, aantal toestellen en eigen opleg zonder verwarring."],
  ["06", "Keuzehulp en vergelijking", "Een begrijpelijke modelkeuze vóór de technische specificaties."],
  ["07", "Accessoires ordenen", "Inbegrepen, optioneel en onderhoud apart presenteren."],
  ["08", "Reviews en vertrouwen", "Relevante productervaringen en Belgische bedrijfsreviews."],
  ["09", "Mobiele afspraakbalk", "Een subtiele sticky CTA als afzonderlijk experiment."],
  ["10", "Productspecifieke afspraak", "Het gekozen toestel automatisch meenemen naar de aanvraag."],
];
export default function HomePage() {
  return (
    <>
      <LabBar />
      <main id="main-content" className="wide lab-home">
        <div className="lab-intro">
          <p className="eyebrow">Oogvoororen · CRO-werkplaats</p>
          <h1>Verbeter de bestaande productpagina, onderdeel voor onderdeel.</h1>
          <p>Geen redesign. Eerst een betrouwbare reproductie van de huidige productpagina. Daarna beoordelen we losse wijzigingen, zonder dat de rest van de pagina verandert.</p>
        </div>
        <section className="section">
          <h2>Stap 1: de originele productpagina</h2>
          <p>Referentie: <a href={product.source} target="_blank" rel="noreferrer">{product.name}</a>. De lokale reproductie is nog in ontwikkeling en mag pas als baseline worden gebruikt nadat de desktop- en mobiele weergave zijn gecontroleerd.</p>
          <Link className="button primary" href="/original">Bekijk de huidige reproductie →</Link>
        </section>
        <section className="section">
          <h2>Stap 2: losse CRO-onderdelen</h2>
          <p>Dit is de backlog van afzonderlijke voorstellen. Per onderdeel maken we straks een visuele vergelijking: bestaand versus voorgesteld. Pas na goedkeuring combineren we wijzigingen.</p>
          <div className="cro-experiment-list">
            {experiments.map(([id, title, detail]) => (
              <article className="cro-experiment" key={id}>
                <span className="cro-experiment-number">{id}</span>
                <div><h3>{title}</h3><p>{detail}</p></div>
                {id === "01" ? <Link className="cro-experiment-status" href="/experimenten/productblok">Bekijk voor/na →</Link> : id === "04" ? <Link className="cro-experiment-status" href="/experimenten/waarom-oogvoororen">Bekijk hoofdstuk 4 →</Link> : id === "05" ? <Link className="cro-experiment-status" href="/experimenten/prijscalculator">Bekijk calculator →</Link> : <span className="cro-experiment-status">Nog te bouwen</span>}
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <h2>Uitgangspunt</h2>
          <p>De productpagina moet meteen antwoord geven op drie vragen: wat kost het mij, kan ik vrijblijvend proberen en waarom kiezen voor Oogvoororen? Met behoud van alle bestaande productinformatie verderop.</p>
          <Image src={product.image} alt={product.name} width={160} height={160} />
        </section>
      </main>
    </>
  );
}
