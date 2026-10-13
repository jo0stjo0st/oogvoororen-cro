import Link from "next/link";
import Image from "next/image";
import { LabBar } from "@/components/lab-bar";
import { product } from "@/features/products/data";

const experiments = [
  ["01", "Producthero en primaire CTA", "Product, prijs, persoonlijk hooradvies en duidelijke hoofdactie."],
  ["02", "Prijs en eigen opleg", "Heldere toestelprijs, indicatieve tegemoetkoming en inbegrepen service."],
  ["03", "Direct zichtbare voordelen", "Vrijblijvend proberen, persoonlijke begeleiding en service."],
  ["04", "Waarom de Encanta 400 Pro?", "Audiologische highlights en echte productervaring, direct na de hero."],
  ["05", "Waarom Oogvoororen?", "Persoonlijke dienstverlening en het adviestraject."],
  ["06", "Eenvoudige prijscalculator", "Leeftijd, aantal toestellen en indicatieve eigen opleg."],
  ["07", "Audiologische vergelijking en specificaties", "Technologieniveaus vergelijken, details uitklapbaar."],
  ["08", "Accessoires ordenen", "Inbegrepen, optioneel en onderhoud apart presenteren."],
  ["09", "Reviews en vertrouwen", "Uitgebreide productervaringen en bedrijfsreviews."],
  ["10", "Mobiele afspraakbalk", "Een subtiele sticky CTA als afzonderlijk experiment."],
  ["11", "Productspecifieke afspraak", "Het bekeken toestel automatisch meenemen naar de aanvraag."],
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
                {id === "01" ? <Link className="cro-experiment-status" href="/experimenten/productblok">Bekijk voor/na →</Link> : id === "04" ? <Link className="cro-experiment-status" href="/experimenten/producthighlights">Bekijk highlights →</Link> : id === "05" ? <Link className="cro-experiment-status" href="/experimenten/waarom-oogvoororen">Bekijk dienstverlening →</Link> : id === "06" ? <Link className="cro-experiment-status" href="/experimenten/prijscalculator">Bekijk calculator →</Link> : id === "07" ? <Link className="cro-experiment-status" href="/experimenten/productinformatie">Bekijk vergelijking →</Link> : <span className="cro-experiment-status">{id === "02" || id === "03" ? "Onderdeel van de hero" : "Nog te bouwen"}</span>}
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <h2>Uitgangspunt</h2>
          <p>De productpagina begint met het toestel en de audiologische meerwaarde. Daarna volgen de persoonlijke dienstverlening, de eigen opleg en de verdiepende productinformatie.</p>
          <Image src={product.image} alt={product.name} width={160} height={160} />
        </section>
      </main>
    </>
  );
}
