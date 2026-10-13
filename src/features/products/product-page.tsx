import Image from "next/image";
import Link from "next/link";
import { LabBar } from "@/components/lab-bar";
import { Header, Footer } from "@/components/site-shell";
import { ProductGallery } from "./gallery";
import { PriceCalculator } from "./price-calculator";
import { product, euro, appointmentUrl, type Variant } from "./data";
import { OriginalPrice } from "./reference-interactions";
export function AppointmentCTA({ variant }: { variant: Variant }) {
  return (
    <div className="appointment-cta">
      <Link className="button primary" href={appointmentUrl(variant)}>
        {variant === "variant-b"
          ? "Probeer dit hoorapparaat vrijblijvend"
          : variant === "original"
            ? "Ik wil een afspraak maken"
            : "Maak een vrijblijvende afspraak"}
        <span aria-hidden="true"> →</span>
      </Link>
      <p className="small">
        {variant === "variant-b"
          ? "Onze audicien bekijkt samen met u of dit toestel bij uw gehoor past."
          : "Persoonlijk advies, zonder aankoopverplichting."}
      </p>
      {variant !== "original" && (
        <a className="phone-link" href="tel:+3214480179">
          Liever bellen? 014 48 01 79
        </a>
      )}
    </div>
  );
}
export function BenefitList() {
  return (
    <ul className="benefits">
      <li>Audicien aan huis in Vlaanderen</li>
      <li>Vrijblijvend proberen met begeleiding</li>
      <li>Vijf jaar garantie en service</li>
    </ul>
  );
}
export function HowItWorks() {
  return (
    <section id="uitproberen" className="section">
      <p className="eyebrow">Stap voor stap</p>
      <h2>Zo werkt vrijblijvend uitproberen</h2>
      <ol className="steps">
        <li>
          <h3>Vertel ons uw wensen</h3>
          <p>
            Vraag een adviesgesprek aan. De audicien bespreekt uw gehoor en
            luistersituaties.
          </p>
        </li>
        <li>
          <h3>Een toestel dat bij u past</h3>
          <p>
            Samen kiest u een geschikte hooroplossing. De eerste afstelling
            vindt plaats in een hoorcentrum.
          </p>
        </li>
        <li>
          <h3>Ervaar het in uw dagelijks leven</h3>
          <p>
            Probeer het toestel met persoonlijke begeleiding. Beslis pas daarna
            over uw aankoop.
          </p>
        </li>
      </ol>
    </section>
  );
}
function Description() {
  return (
    <section id="omschrijving" className="section">
      <div className="two-col">
        <div>
          <p className="eyebrow">Over dit toestel</p>
          <h2>Meer gemak in uw dagelijkse gesprekken</h2>
          <p>
            De Audéo Infinio is de opvolger van de Phonak Lumity. Het
            Ultra-model gebruikt de ERA-chip en AutoSense 7.0 om de instellingen
            aan uw omgeving aan te passen.
          </p>
          <details>
            <summary>Meer over de technologie</summary>
            <p>
              Bluetooth maakt verbinding met compatibele telefoons mogelijk. Met
              de myPhonak-app kunt u het volume en instellingen aanpassen. De
              audicien legt uit welke functies geschikt zijn voor u.
            </p>
          </details>
        </div>
        <div>
          <h3>Plus- en minpunten</h3>
          <ul className="plain-list">
            <li>
              Verbeterde spraakverstaanbaarheid en minder luisterinspanning.
            </li>
            <li>Oplaadbaar, zonder kleine losse batterijen.</li>
            <li>Ultra-upgrade voor efficiëntere verwerking.</li>
            <li>Dit model heeft geen Sphere-technologie.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
function Service() {
  return (
    <section id="waarom" className="service-section section">
      <div className="two-col">
        <Image
          src="/assets/audicien.webp"
          width={800}
          height={600}
          alt="Audicien van Oogvoororen bij haar auto"
          className="service-photo"
          sizes="(max-width: 760px) 100vw, 50vw"
        />
        <div>
          <p className="eyebrow">Scherpe online prijzen. Persoonlijke zorg.</p>
          <h2>Waarom kiezen voor Oogvoororen?</h2>
          <div className="service-item">
            <h3>Persoonlijk advies bij u thuis</h3>
            <p>
              Een audicien helpt u in uw vertrouwde omgeving. De eerste
              afstelling tijdens de proefperiode gebeurt in een hoorcentrum.
            </p>
          </div>
          <div className="service-item">
            <h3>Eerst vrijblijvend proberen</h3>
            <p>
              Ontdek met begeleiding of het toestel aansluit bij uw gehoor en
              dagelijks leven.
            </p>
          </div>
          <div className="service-item">
            <h3>Ook na aankoop goed geholpen</h3>
            <p>
              Vijf jaar service en garantie bij normaal gebruik. Voor accu’s
              gelden fabrikantafhankelijke voorwaarden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
function Reviews() {
  return (
    <section id="reviews" className="section">
      <p className="eyebrow">Ervaringen met dit toestel</p>
      <h2>Wat klanten vertellen</h2>
      <p>
        De bronpagina toont twee ervaringen, ook afkomstig van de Nederlandse en
        Duitse websites. De score bovenaan en het aantal in de reviewsectie
        verschillen op de bron.
      </p>
      <div className="review-grid">
        <article className="review">
          <p className="review-score">9 / 10</p>
          <h3>Zeer Goed gehoorapparaat</h3>
          <blockquote>
            “Zeer prettig en deskundig geholpen bij Intoears te Maastricht.”
          </blockquote>
          <p className="small">Robert · 10 februari 2025 · Nederland</p>
        </article>
        <article className="review">
          <p className="review-score">8,5 / 10</p>
          <h3>Positieve ervaring, met aandachtspunten</h3>
          <p>
            Deze klant vindt het toestel comfortabel en de service goed, maar
            had meer verwacht van de gesprekskwaliteit en mist automatische
            volumeregeling bij muziek.
          </p>
          <p className="small">S · 1 december 2025 · Duitsland · samengevat</p>
        </article>
      </div>
      <a
        className="text-link"
        href={product.source + "#reviews"}
        target="_blank"
        rel="noreferrer"
      >
        Lees de volledige ervaringen op de bronwebsite ↗
      </a>
    </section>
  );
}
function Specs() {
  return (
    <section id="specificaties" className="section">
      <h2>Technische specificaties</h2>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label="Technische specificaties"
      >
        <table>
          <tbody>
            {product.specs.map(([name, value]) => (
              <tr key={name}>
                <th scope="row">{name}</th>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
function Comparison() {
  return (
    <section id="variaties" className="section">
      <h2>Vergelijk de Infinio-modellen</h2>
      <p>
        De audicien helpt u bepalen welk technologieniveau bij uw gehoor en
        wensen past.
      </p>
      <div
        className="table-scroll"
        tabIndex={0}
        role="region"
        aria-label="Vergelijking Infinio modellen"
      >
        <table>
          <thead>
            <tr>
              <th scope="col">Model</th>
              <th scope="col">Prijs per toestel</th>
              <th scope="col">Kanalen</th>
              <th scope="col">Bespreken</th>
            </tr>
          </thead>
          <tbody>
            {product.comparisons.map((p) => (
              <tr key={p.name}>
                <th scope="row">{p.name}</th>
                <td>{euro(p.price)}</td>
                <td>{p.channels}</td>
                <td>
                  <Link href={appointmentUrl("variant-a", p.name)}>
                    Vraag advies
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p>
        De Sphere Ultra I90 staat op de bronpagina voor {euro(2795)} per
        toestel. Dit is een ander model met Sphere-technologie.
      </p>
    </section>
  );
}
function Accessories() {
  return (
    <section id="accessoires" className="section">
      <h2>Accessoires voor extra gemak</h2>
      <p>
        Bespreek welke accessoires u nodig heeft. De standaardlader is
        inbegrepen.
      </p>
      <div className="accessory-list">
        {product.accessories.map((a) => (
          <details key={a.name}>
            <summary>
              {a.name}
              <span>{euro(a.price)}</span>
            </summary>
            <p>{a.note}</p>
            <Link
              href={appointmentUrl("variant-a", product.slug, "accessoire")}
            >
              Bespreek dit tijdens uw afspraak
            </Link>
          </details>
        ))}
      </div>
    </section>
  );
}
function Apps() {
  return (
    <section id="apps" className="section">
      <h2>myPhonak en onderhoud</h2>
      <p>
        Met de myPhonak-app kunt u de luisterinstellingen aanpassen. De audicien
        helpt u met het koppelen, gebruik en onderhoud.
      </p>
      <details>
        <summary>Geschikte onderhoudsartikelen</summary>
        <p>
          De bronpagina vermeldt Phonak Domes 4.0, Cerustop-filters, Concha Lock
          4.0, RIC moulds, Receiver 6.0 en EasyGuard-domes. Laat de audicien de
          geschikte maat en uitvoering kiezen.
        </p>
      </details>
    </section>
  );
}
function Downloads() {
  return (
    <section id="downloads" className="section">
      <h2>Brochures en handleidingen</h2>
      <div className="download-links">
        <a
          href="https://cdn.oogvoororen.nl/9239-twwe7ArkKQ1TxNrosOoaGIIgZRRwVNdncSmHiACR.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Handleiding Phonak Audéo Infinio (PDF) ↗
        </a>
        <a
          href="https://cdn.oogvoororen.nl/9239-K3P6vKprvHHphTuP9iaTwt2lOaWngGTIbvQzavKW.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Datablad Phonak Audéo Infinio (PDF) ↗
        </a>
      </div>
    </section>
  );
}
function Warranty() {
  return (
    <section id="garantie" className="section">
      <h2>Garantie en service</h2>
      <p>
        Vijf jaar garantie op het hoorapparaat en receivers bij normaal gebruik,
        en vijf jaar service. Voor de oplaadbare accu geldt volgens de algemene
        garantiepagina een fabrikantafhankelijke termijn van twee tot vijf jaar.
        Verlies en diefstal vallen niet onder de standaardgarantie.
      </p>
      <Link href="/informatie#garantie" className="text-link">
        Bekijk de voorwaarden
      </Link>
    </section>
  );
}
function ReferenceBenefits() {
  return (
    <div className="reference-benefits">
      {[
        [
          "Geen verborgen kosten",
          "De bron vermeldt een all-in prijs, met standaardlader. Eventuele extra accessoires worden afzonderlijk besproken.",
        ],
        [
          "5 jaar service",
          "Persoonlijke begeleiding en service na uw aankoop.",
        ],
        [
          "5 jaar volledige garantie",
          "Garantie op het toestel en receivers bij normaal gebruik. Accuvoorwaarden verschillen per fabrikant.",
        ],
      ].map(([title, text]) => (
        <details key={title}>
          <summary>{title}</summary>
          <p>{text}</p>
        </details>
      ))}
    </div>
  );
}
export function ProductPage({ variant }: { variant: Variant }) {
  const original = variant === "original";
  const conversion = variant === "variant-b";
  return (
    <div className={`product-page ${variant}`}>
      <LabBar active={variant} />
      <Header variant={variant} />
      <div className="breadcrumb">
        <div className="wide">
          <Link href="/">Home</Link>
          <span>/</span>
          <Link href="/original">Hoorapparaten</Link>
          <span>/</span>
          <span>Phonak</span>
          {original && (
            <>
              <span>/</span>
              <span>{product.name}</span>
            </>
          )}
        </div>
      </div>
      <main id="main-content">
        <section className="product-hero wide">
          <div className="mobile-title">
            <p className="eyebrow">Phonak · oplaadbaar</p>
            <h1>{product.name}</h1>
          </div>
          <ProductGallery original={original} />
          <div className="product-info">
            {original ? (
              <p className="source-rating">
                <span className="stars">★★★★★</span>{" "}
                <a href="#reviews">Lees alle 1 reviews</a>
              </p>
            ) : (
              <p className="eyebrow desktop-title">Phonak · oplaadbaar</p>
            )}
            <h1 className="desktop-title">{product.name}</h1>
            {!conversion && (
              <p className="description">
                {original ? product.originalDescription : product.description}
              </p>
            )}
            {original ? (
              <OriginalPrice />
            ) : (
              <>
                <p className="price-label">
                  Prijs per hoorapparaat, inclusief btw en lader
                </p>
                <p className="hero-price">{euro(product.price)}</p>
                <p className="compensation-note">
                  Mogelijk een tegemoetkoming van uw mutualiteit.{" "}
                  <a href="#prijsberekening">
                    Bereken uw indicatieve eigen opleg
                  </a>
                  .
                </p>
                {conversion && (
                  <p className="description">
                    Horen op uw manier, met een oplaadbaar toestel en
                    persoonlijke begeleiding.
                  </p>
                )}
              </>
            )}
            {original ? <ReferenceBenefits /> : <BenefitList />}
            <AppointmentCTA variant={variant} />
            {original && (
              <>
                <Link
                  className="button secondary"
                  href={appointmentUrl(variant, product.slug, "offerte")}
                >
                  Ik wil een offerte ontvangen
                </Link>
                <p className="small">Geheel gratis en vrijblijvend.</p>
                <h3>Samen kiezen we het perfecte hoortoestel:</h3>
                <ol className="reference-steps">
                  <li>Vraag een vrijblijvende hoortest en adviesgesprek aan</li>
                  <li>
                    Onze audicien belt u voor een kort gesprek en het maken van
                    een afspraak
                  </li>
                  <li>Een uitgebreide hoortest en persoonlijk advies</li>
                  <li>
                    Samen kiest u een hoorapparaat om vrijblijvend uit te
                    proberen
                  </li>
                </ol>
                <Link href="#variaties" className="text-link">
                  Toevoegen aan vergelijker
                </Link>
              </>
            )}
            {!original && (
              <p className="visit-note">
                De eerste afstelling tijdens uw proefperiode gebeurt in een
                hoorcentrum.
              </p>
            )}
          </div>
        </section>
        {original && (
          <nav className="product-tabs wide" aria-label="Productinformatie">
            {[
              ["omschrijving", "Omschrijving"],
              ["reviews", "Reviews"],
              ["variaties", "Variaties"],
              ["specificaties", "Tech-levels"],
              ["apps", "Apps"],
              ["accessoires", "Accessoires"],
              ["downloads", "Downloads"],
              ["garantie", "Garantie"],
            ].map(([id, label]) => (
              <a key={id} href={"#" + id}>
                {label}
              </a>
            ))}
          </nav>
        )}
        <div className="wide below-product">
          {conversion && <Service />}
          {!original && (
            <section id="prijsberekening" className="section">
              <p className="eyebrow">Duidelijkheid over uw kosten</p>
              <h2>Wat betaalt u zelf?</h2>
              <p>
                Een of twee toestellen, met of zonder tegemoetkoming. Bekijk een
                indicatie voor uw situatie.
              </p>
              <PriceCalculator />
            </section>
          )}
          {!original && <HowItWorks />}
          <Description />
          {original ? (
            <>
              <Reviews />
              <Comparison />
              <Specs />
              <Apps />
              <Accessories />
              <Downloads />
              <Warranty />
            </>
          ) : (
            <>
              <Reviews />
              <Specs />
              <Comparison />
              <Apps />
              <Accessories />
              <Downloads />
              <Warranty />
            </>
          )}
          <section className="closing section">
            <h2>Ontdek wat bij uw gehoor past</h2>
            <p>Bespreek uw wensen met een professionele audicien.</p>
            <AppointmentCTA variant={variant} />
          </section>
          <p className="source-note">
            Broninformatie en prijzen gecontroleerd op {product.verifiedAt}.
            Deze demo is een momentopname.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
