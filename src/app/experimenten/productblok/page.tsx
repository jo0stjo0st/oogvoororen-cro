import Link from "next/link";
import Image from "next/image";
import { product, euro, appointmentUrl } from "@/features/products/data";
import { LabBar } from "@/components/lab-bar";

function ProductVisual() {
  return <div className="cro-product-visual"><Image src={product.image} alt={product.name} width={440} height={440} /><p>Sand Beige · Inclusief lader</p></div>;
}
function Before() {
  return <article className="cro-proposal">
    <p className="eyebrow">Bestaande presentatie · inhoudelijke referentie</p>
    <h2>Huidig productblok</h2>
    <div className="cro-proposal-grid">
      <ProductVisual />
      <div>
        <p className="small">Lees alle 4 reviews</p>
        <h3>Bernafon Encanta 400 miniRITE - Oplaadbaar</h3>
        <p>De Bernafon Encanta 400 Pro is het premium model van de productfamilie, met technologie voor een hoge geluidskwaliteit en spraakverstaanbaarheid.</p>
        <p className="small">Prijs | Toon de berekening</p>
        <p className="cro-proposal-price">{euro(product.price)}</p>
        <p>Eigen opleg: € 1.535,41 na tegemoetkoming voor een 65-plusser.</p>
        <details><summary>Geen verborgen kosten</summary><p>Geen verplichte pakketten of voorrijkosten.</p></details>
        <details><summary>5 jaar service</summary><p>Persoonlijke service volgens de voorwaarden.</p></details>
        <details><summary>5 jaar volledige garantie</summary><p>Garantie volgens de voorwaarden.</p></details>
        <Link href={appointmentUrl("original")} className="button primary">Ik wil een afspraak maken</Link>
        <p><Link href={appointmentUrl("original",product.slug,"offerte")}>Ik wil een offerte ontvangen</Link></p>
      </div>
    </div>
  </article>;
}
function After() {
  return <article className="cro-proposal">
    <p className="eyebrow">Voorstel 01 · alleen het productblok</p>
    <h2>Prijs, zekerheid en één duidelijke actie</h2>
    <div className="cro-proposal-grid">
      <ProductVisual />
      <div>
        <p className="small">Bernafon · oplaadbaar · 4 productreviews</p>
        <h3>Bernafon Encanta 400 miniRITE - Oplaadbaar</h3>
        <p>Premium hoorapparaat voor helder verstaan, ook in uitdagende luistersituaties.</p>
        <p className="small">Prijs per toestel, inclusief standaardoplader</p>
        <p className="cro-proposal-price">{euro(product.price)}</p>
        <p><strong>Indicatieve eigen opleg 65+: € 1.535,41</strong></p>
        <p className="small">De tegemoetkoming hangt af van uw persoonlijke situatie. <a href="/original#prijsberekening">Bekijk de berekening</a>.</p>
        <ul className="cro-proposal-benefits">
          <li>Vrijblijvend uitproberen met persoonlijk advies</li>
          <li>Een audicien aan huis of in een hoorcentrum</li>
          <li>5 jaar garantie en service volgens de voorwaarden</li>
          <li>Geen verborgen kosten</li>
        </ul>
        <Link href={appointmentUrl("original")} className="button primary">Probeer dit hoorapparaat vrijblijvend</Link>
        <p className="small">Samen met de audicien bekijkt u of dit toestel bij uw gehoor past.</p>
        <p className="small">Liever bellen? <a href="tel:+3214480179">014 48 01 79</a></p>
      </div>
    </div>
  </article>;
}
export default function ProductBlockExperiment() {
  return <><LabBar /><main className="wide cro-experiment-page">
    <p><Link href="/">← Terug naar de CRO-werkplaats</Link></p>
    <h1>Hoofdstuk 1: het productblok</h1>
    <p>Dit is een losse inhoudelijke voor/na-proef, geen redesign en nog geen pixelnauwkeurige kopie van de live website. De oorspronkelijke productpagina blijft ongewijzigd. Prijzen en voorwaarden moeten vóór publicatie opnieuw worden gecontroleerd.</p>
    <div className="cro-proposals"><Before /><After /></div>
    <section className="section"><h2>Wat verandert er precies?</h2>
      <p>De afbeelding en tweekolomsopzet blijven. De technische introductie wordt korter, de eigen opleg krijgt een duidelijke plaats, servicevoordelen zijn meteen zichtbaar en de offerteknop maakt plaats voor één dominante proefafspraak. De proefperiode wordt bewust nog niet als 60 dagen geclaimd zolang die voor België niet bevestigd is.</p>
      <p><strong>Te beoordelen:</strong> CTA-tekst, presentatie van de eigen opleg, aantal zichtbare voordelen en het verdwijnen van de offerteknop. Deze onderdelen kunnen later ook afzonderlijk worden getest.</p>
    </section>
  </main></>;
}
