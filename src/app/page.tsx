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
  ["09", "Reviews en vertrouwen", "80 productreviews, samenvatting, filters en uitklapbare beoordelingen."],
  ["10", "Mobiele afspraakbalk", "Een subtiele sticky CTA als afzonderlijk experiment."],
  ["11", "Productspecifieke afspraak", "Het bekeken toestel automatisch meenemen naar de aanvraag."],
];
const pages = [
  {group:"Hoofdpagina’s",items:[["Nieuwe homepage","/experimenten/nieuwe-homepage","In ontwikkeling"],["Hoorapparaten: keuzeportaal","/experimenten/hoorapparaten-overzicht","In ontwikkeling"],["Signia: merkoverzicht","/experimenten/signia-overzicht","In ontwikkeling"],["Audicien aan huis","/experimenten/audicien-aan-huis","In ontwikkeling"],["Hoorcentrum Antwerpen-Berchem","/experimenten/hoorcentrum-berchem","In ontwikkeling"]]},
  {group:"Productpagina’s",items:[["Complete productpagina (NL)","/experimenten/complete-productpagina","In ontwikkeling"],["Productpagina Frans (BE)","/experimenten/page-produit-fr","In ontwikkeling"]]},
  {group:"Losse CRO-experimenten",items:[["Producthero","/experimenten/productblok","Concept"],["Producthighlights","/experimenten/producthighlights","Concept"],["Waarom Oogvoororen","/experimenten/waarom-oogvoororen","Concept"],["Prijscalculator","/experimenten/prijscalculator","Concept"],["Productinformatie","/experimenten/productinformatie","Concept"],["Accessoires","/experimenten/accessoires","Concept"],["Reviews","/experimenten/reviews","Concept"],["Mobiele afspraakbalk","/experimenten/mobiele-afspraakbalk","Concept"],["Productspecifieke afspraak","/experimenten/productspecifieke-afspraak","Concept"]]},
  {group:"Referentie & vergelijking",items:[["Originele productpagina","/original","Referentie"],["Variant A","/variant-a","Referentie"],["Variant B","/variant-b","Referentie"],["Varianten vergelijken","/compare","Referentie"]]}
];
export default function HomePage() {
  return (
    <>
      <LabBar />
      <main id="main-content" className="wide lab-home cro-lab-dashboard"><aside className="cro-lab-sidebar"><div className="cro-lab-sidebar-heading"><strong>Pagina-overzicht</strong><small>Alle concepten op één plek</small></div>{pages.map(section=><div className="cro-lab-navgroup" key={section.group}><h2>{section.group}</h2>{section.items.map(([label,url,status])=><Link href={url} key={url}><span>{label}</span><small>{status}</small></Link>)}</div>)}</aside><div className="cro-lab-main">
        <div className="lab-intro">
          <p className="eyebrow">Oogvoororen · CRO-werkplaats</p>
          <h1>CRO-werkplaats Oogvoororen</h1>
          <p>Alle pagina’s en losse experimenten op één plek. Open links een concept om het te beoordelen, verder te verfijnen en uiteindelijk aan development over te dragen.</p>
        </div>
        <section className="section"><h2>Complete productpagina</h2><p>Alle uitgewerkte hoofdstukken in één doorlopende desktop- en mobiele conceptpagina, inclusief prijsberekening en afspraakformulier.</p><Link className="button primary" href="/experimenten/complete-productpagina">Bekijk de volledige productpagina →</Link> <Link className="button" href="/experimenten/page-produit-fr">Voir la version française (Belgique) →</Link></section>
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
                {id === "01" ? <Link className="cro-experiment-status" href="/experimenten/productblok">Bekijk voor/na →</Link> : id === "04" ? <Link className="cro-experiment-status" href="/experimenten/producthighlights">Bekijk highlights →</Link> : id === "05" ? <Link className="cro-experiment-status" href="/experimenten/waarom-oogvoororen">Bekijk dienstverlening →</Link> : id === "06" ? <Link className="cro-experiment-status" href="/experimenten/prijscalculator">Bekijk calculator →</Link> : id === "07" ? <Link className="cro-experiment-status" href="/experimenten/productinformatie">Bekijk vergelijking →</Link> : id === "08" ? <Link className="cro-experiment-status" href="/experimenten/accessoires">Bekijk accessoires →</Link> : id === "09" ? <Link className="cro-experiment-status" href="/experimenten/reviews">Bekijk reviews →</Link> : id === "10" ? <Link className="cro-experiment-status" href="/experimenten/mobiele-afspraakbalk">Bekijk afspraakbalk →</Link> : id === "11" ? <Link className="cro-experiment-status" href="/experimenten/productspecifieke-afspraak">Bekijk afspraakflow →</Link> : <span className="cro-experiment-status">{id === "02" || id === "03" ? "Onderdeel van de hero" : "Nog te bouwen"}</span>}
              </article>
            ))}
          </div>
        </section>
        <section className="section">
          <h2>Uitgangspunt</h2>
          <p>De productpagina begint met het toestel en de audiologische meerwaarde. Daarna volgen de persoonlijke dienstverlening, de eigen opleg en de verdiepende productinformatie.</p>
          <Image src={product.image} alt={product.name} width={160} height={160} />
        </section>
      </div></main>
    </>
  );
}
