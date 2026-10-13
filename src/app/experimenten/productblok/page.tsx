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
  return <article className="cro-proposal cro-proposal-refined">
    <p className="eyebrow">Voorstel 01 · verfijnde productpresentatie</p>
    <h2>Meer focus, zonder een drukke webshop-uitstraling</h2>
    <div className="cro-proposal-grid">
      <div className="cro-product-visual cro-packshot">
        <div className="cro-packshot-image">
          <Image
            unoptimized
            src="https://claso.net/image/catalog/productes-bernafon/bernafon-encanta-landing.png"
            alt="Bernafon Encanta miniRITE met de standaardoplader"
            width={600} height={600}
          />
        </div>
        <div className="cro-image-choices">
          <span className="cro-image-choice-active">Toestel + oplader</span>
          <span>Toestel</span>
          <span>Detail</span>
        </div>
        <p>Voorstel voor packshot; originele productfoto blijft beschikbaar. Afbeelding ter beoordeling, niet voor publicatie gelicentieerd.</p>
      </div>
      <div className="cro-refined-info">
        <p className="cro-review-line"><span aria-hidden="true">★★★★★</span> <strong>9,1/10</strong> <a href={product.source+"#reviews"}>4 productreviews</a></p>
        <h3>Bernafon Encanta 400 miniRITE - Oplaadbaar</h3>
        <p className="cro-intro">Premium oplaadbaar hoorapparaat voor helder verstaan, ook in drukke situaties.</p>
        <div className="cro-price-panel">
          <p className="cro-price-caption">Prijs per hoorapparaat · standaardoplader inbegrepen</p>
          <p className="cro-proposal-price">{euro(product.price)}</p>
          <p className="cro-own-contribution"><strong>Indicatieve eigen opleg 65+: € 1.535,41</strong></p>
          <p className="cro-price-fine">Na een mogelijke tegemoetkoming van de mutualiteit. Uw persoonlijke recht wordt nog bevestigd.</p>
          <a href="/original#prijsberekening" className="cro-price-link">Bereken uw persoonlijke prijs →</a>
        </div>
        <ul className="cro-benefit-list">
          <li><span className="cro-benefit-icon" aria-hidden="true">30</span><span><strong>30 dagen vrijblijvend proberen</strong><small>Indien nodig kan de proefperiode worden verlengd.</small></span></li>
          <li><span className="cro-benefit-icon" aria-hidden="true">⌂</span><span><strong>Audicien aan huis of in een hoorcentrum</strong><small>Persoonlijk advies en professionele begeleiding.</small></span></li>
          <li><span className="cro-benefit-icon" aria-hidden="true">✓</span><span><strong>5 jaar garantie en service</strong><small>Volgens de geldende voorwaarden.</small></span></li>
        </ul>
        <Link href={appointmentUrl("original")} className="button cro-orange-cta">Probeer dit hoorapparaat vrijblijvend →</Link>
        <p className="cro-cta-assurance">Gratis adviesgesprek · Geen aankoopverplichting</p>
        <p className="cro-call">Liever persoonlijk advies? <a href="tel:+3214480179">014 48 01 79</a></p>
        <p className="cro-product-disclaimer">Samen met de audicien bekijkt u of dit toestel bij uw gehoor past.</p>
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
      <p>De afbeelding en tweekolomsopzet blijven. De technische introductie wordt korter, de eigen opleg krijgt een duidelijke plaats, servicevoordelen zijn meteen zichtbaar en de offerteknop maakt plaats voor één dominante proefafspraak. De proefperiode is standaard gericht op afronding na 30 dagen en kan indien nodig worden verlengd. Het packshot en de oranje CTA zijn bewuste visuele voorstellen.</p>
      <p><strong>Te beoordelen:</strong> CTA-tekst, presentatie van de eigen opleg, aantal zichtbare voordelen en het verdwijnen van de offerteknop. Deze onderdelen kunnen later ook afzonderlijk worden getest.</p>
    </section>
  </main></>;
}
