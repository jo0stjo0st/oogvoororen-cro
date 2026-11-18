import type { Metadata } from "next";
import Link from "next/link";
import GuideLayout from "../hoortoestellen/keuzehulp/layout";
import styles from "../hoortoestellen/keuzehulp/guide.module.css";

export const metadata: Metadata = {
  title: "Vergoeding voor hoortoestellen | Oogvoororen",
  description: "Lees hoe vergoeding, eigen bijdrage en eigen risico voor hoortoestellen werken.",
};

export default function Page() {
  return (
    <GuideLayout>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p><Link href="/hoortoestellen/keuzehulp/hoortoestel-kiezen#prijs">← Terug naar prijzen in de koopgids</Link></p>
          <h1>Vergoeding voor hoortoestellen</h1>
          <p>Oogvoororen heeft afspraken met alle Nederlandse zorgverzekeraars. Tijdens het adviesgesprek bekijken we welk toestel bij uw gehoor past en wat u zelf betaalt.</p>
          <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
        </div>
      </section>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud vergoedingen">
          <strong>Op deze pagina</strong>
          <ol>
            <li><a href="#basisverzekering">Basisverzekering</a></li>
            <li><a href="#eigen-bijdrage">Eigen bijdrage en eigen risico</a></li>
            <li><a href="#andere-mogelijkheden">Aanvullend verzekerd of particulier</a></li>
          </ol>
        </nav>
        <article>
          <section className={styles.section} id="basisverzekering">
            <h2>Wanneer komt u in aanmerking?</h2>
            <p>De audicien kijkt naar uw hoortest en wat u in het dagelijks leven wilt kunnen verstaan. Met het hoorprotocol bepaalt de audicien welke categorie hoortoestellen past. De basisverzekering vergoedt onder voorwaarden een toestel uit de passende categorie.</p>
          </section>
          <section className={styles.section} id="eigen-bijdrage">
            <h2>Wat betaalt u zelf?</h2>
            <p>Voor volwassenen vergoedt de basisverzekering doorgaans 75% van het afgesproken tarief. U betaalt 25% wettelijke eigen bijdrage. Als uw eigen risico nog openstaat, kan dat daarnaast gelden voor het deel dat de basisverzekering vergoedt.</p>
            <p>Bij een afgesproken tarief van € 625 per toestel is de eigen bijdrage € 156,25 en de vergoeding € 468,75, vóór verrekening van eventueel openstaand eigen risico.</p>
          </section>
          <section className={styles.section} id="andere-mogelijkheden">
            <h2>Aanvullend verzekerd of particulier</h2>
            <p>Een aanvullende verzekering kan een deel van uw eigen bijdrage vergoeden. Kiest u een toestel buiten het aanbod dat voor vergoeding in aanmerking komt, dan kan de vergoeding anders uitvallen. Neem uw polisgegevens mee naar het adviesgesprek. Samen bekijken we wat voor uw keuze geldt.</p>
          </section>
        </article>
      </div>
    </GuideLayout>
  );
}
