import { LabBar } from "@/components/lab-bar";
import { Header, Footer } from "@/components/site-shell";
import { product } from "@/features/products/data";
export default function Page() {
  return (
    <>
      <LabBar />
      <Header variant="variant-a" />
      <main id="main-content" className="wide information">
        <p className="eyebrow">Voorwaarden en verantwoording</p>
        <h1>Persoonlijke hoorzorg, heldere informatie</h1>
        <section id="aan-huis" className="section">
          <h2>Audicien aan huis in Vlaanderen</h2>
          <p>
            Oogvoororen biedt advies, hoortesten en bijregeling aan huis.
            Volgens de Belgische bronpagina vindt de eerste afstelling tijdens
            de proefperiode altijd plaats in een hoorcentrum.
          </p>
          <a
            href="https://oogvoororen.be/audicien-aan-huis"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk de actuele dienstverlening ↗
          </a>
        </section>
        <section id="hoorcentra" className="section">
          <h2>Hoorcentra in Vlaanderen</h2>
          <p>
            De bronwebsite vermeldt 17 vestigingen, waaronder Wiekevorst, Gent,
            Antwerpen, Brugge en Hasselt. De demo plant geen locatie of tijdstip
            in.
          </p>
          <a
            href="https://oogvoororen.be/onze-hoorcentra"
            target="_blank"
            rel="noreferrer"
          >
            Bekijk alle actuele hoorcentra ↗
          </a>
        </section>
        <section id="proefperiode" className="section">
          <h2>Vrijblijvend proberen</h2>
          <p>
            De Belgische website vermeldt een vrijblijvende proefperiode. Een
            vaste duur van 60 dagen is daar tijdens deze inspectie niet
            bevestigd. Daarom belooft de demo geen vaste termijn. Bespreek duur
            en voorwaarden met de audicien.
          </p>
          <a
            href="https://oogvoororen.be/audicien-aan-huis"
            target="_blank"
            rel="noreferrer"
          >
            Bron: audicien aan huis ↗
          </a>
        </section>
        <section id="garantie" className="section">
          <h2>Vijf jaar garantie en service</h2>
          <p>
            De productpagina vermeldt vijf jaar service en garantie. De
            garantiepagina beschrijft garantie voor defecten bij normaal gebruik
            van het toestel en receivers, en twee tot vijf jaar accugarantie
            afhankelijk van de fabrikant. Normale capaciteitsafname, onjuist
            gebruik, verlies en diefstal zijn niet automatisch gedekt.
          </p>
          <a
            href="https://oogvoororen.be/garantie-reparaties"
            target="_blank"
            rel="noreferrer"
          >
            Lees de volledige voorwaarden ↗
          </a>
        </section>
        <section id="mutualiteit" className="section">
          <h2>Tegemoetkoming van uw mutualiteit</h2>
          <p>
            De calculator toont de standaardtarieven vanaf 1 januari 2026 voor
            een geconventioneerde audicien, zonder voorkeurregeling. Het is een
            voorbeeldberekening, geen vaststelling van uw recht.
          </p>
          <p>
            Een voorschrift en goedkeuring zijn nodig. Ook gehoorverlies,
            gehoorwinst, de lijst van erkende toestellen en de termijn sinds een
            vorige vergoeding spelen mee. Extra voordelen per mutualiteit en
            bijzondere regelingen zijn niet meegerekend.
          </p>
          <p>
            Onder 18 jaar: € 1.451,56 voor één toestel, € 2.875,21 voor twee.
            Van 18 t/m 64: € 884,59 en € 1.751,01. Vanaf 65: € 859,59 en €
            1.701,46.
          </p>
          <div className="download-links">
            <a
              href="https://www.riziv.fgov.be/SiteCollectionDocuments/tarief_audiciens_20260101.pdf"
              target="_blank"
              rel="noreferrer"
            >
              RIZIV-tarieven 2026 (PDF) ↗
            </a>
            <a
              href="https://oogvoororen.be/mutualiteiten"
              target="_blank"
              rel="noreferrer"
            >
              Mutualiteiten bij Oogvoororen ↗
            </a>
            <a
              href="https://www.riziv.fgov.be/nl/thema-s/verzorging-kosten-en-terugbetaling/wat-het-ziekenfonds-terugbetaalt/medische-hulpmiddelen-medisch-materiaal/niet-implanteerbare-medische-hulpmiddelen/hoortoestellen"
              target="_blank"
              rel="noreferrer"
            >
              RIZIV-aanvraagprocedure ↗
            </a>
          </div>
        </section>
        <section id="privacy" className="section">
          <h2>Privacy in deze testomgeving</h2>
          <p>
            Vul fictieve gegevens in. De demo verstuurt en bewaart geen
            formuliergegevens. Er zijn geen CRM-koppelingen, betaalfuncties,
            analysetrackers of advertentiepixels toegevoegd. Er volgen geen
            echte afspraken. Hosting kan normale technische toegangslogs
            bijhouden.
          </p>
          <p>
            De site heeft noindex en nofollow. Dat verhindert indexering op
            verzoek, maar beschermt de site niet met een wachtwoord. Vercel
            Deployment Protection moet via de Vercel-projectinstellingen worden
            geconfigureerd.
          </p>
        </section>
        <section className="section">
          <h2>Bronnen en benaderingen</h2>
          <p>
            De productgegevens zijn gecontroleerd op {product.verifiedAt}. De
            bron noemt dit toestel inmiddels “Infinio Ultra I90”. De foto’s, het
            logo en Open Sans zijn afkomstig van de bestaande site.
          </p>
          <p>
            Original benadert de hoofdlayout, CTA’s en sectievolgorde. De
            volledige mega-menu’s, kleurafhankelijke productfoto’s, alle
            technische rijen en productiepop-ups zijn vereenvoudigd. De bron
            toont verschillende reviewaantallen; de demo verzint geen reviews.
          </p>
          <a href={product.source} target="_blank" rel="noreferrer">
            Open de oorspronkelijke productpagina ↗
          </a>
        </section>
      </main>
      <Footer />
    </>
  );
}
