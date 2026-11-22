import type { Metadata } from "next";
import Link from "next/link";
import { rates } from "@/features/products/pricing";
import styles from "@/app/hoortoestellen/keuzehulp/guide.module.css";

export const metadata: Metadata = {
  title: "Tegemoetkoming voor hoorapparaten in België | Oogvoororen",
  description: "Lees wanneer uw mutualiteit tegemoetkomt, welke stappen u doorloopt en hoe u uw eigen opleg berekent.",
};

const sections = [
  ["voorwaarden", "Wanneer komt uw mutualiteit tegemoet?"],
  ["aanvraag", "Hoe vraagt u de tegemoetkoming aan?"],
  ["eigen-opleg", "Wat betaalt u zelf?"],
  ["hernieuwing", "Wanneer kunt u opnieuw een tegemoetkoming krijgen?"],
];

const ageGroups = [
  { label: "Jonger dan 18 jaar", amounts: rates.child },
  { label: "18 t/m 64 jaar", amounts: rates.adult },
  { label: "65 jaar en ouder", amounts: rates.senior },
];

const euros = new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" });

export default function Page() {
  return (
    <>
      <section className={styles.hero}>
        <div className={styles.wrap}>
          <p><Link href="/be/hoorapparaten/keuzehulp/hoorapparaten-kiezen#prijs">← Terug naar prijzen in de Vlaamse koopgids</Link></p>
          <h1>Tegemoetkoming voor hoorapparaten</h1>
          <p>De Belgische verplichte ziekteverzekering komt onder voorwaarden tegemoet via uw mutualiteit. Hier leest u hoe de aanvraag werkt en hoe u weet wat u zelf betaalt.</p>
          <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
        </div>
      </section>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud tegemoetkoming">
          <strong>Op deze pagina</strong>
          <ol>{sections.map(([id, title]) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}</ol>
        </nav>
        <article>
          <section id="voorwaarden" className={styles.section}>
            <h2>{sections[0][1]}</h2>
            <p>Volgens de RIZIV-voorwaarden hebt u in de gewone regeling minstens 35 dB gehoorverlies aan het oor waarvoor u een hoorapparaat nodig hebt. Het hoorapparaat moet minstens 5 dB gehoorwinst opleveren, op de RIZIV-lijst staan en geleverd worden door een erkend audicien. Uw audioloog bespreekt welke voorwaarden op uw situatie van toepassing zijn.</p>
          </section>
          <section id="aanvraag" className={styles.section}>
            <h2>{sections[1][1]}</h2>
            <ol className={styles.applicationSteps}>
              <li><strong>Voorschrift voor de proef.</strong> Een neus-, keel- en oorarts (NKO-arts) onderzoekt uw gehoor en kan een proef met hoorapparaten voorschrijven.</li>
              <li><strong>Hoorapparaten uitproberen.</strong> Bezorg het voorschrift aan uw audioloog. Voor een eerste hoorapparaat duurt de proef minstens 28 kalenderdagen. Volwassenen vullen ook een vragenlijst in.</li>
              <li><strong>Testverslag en definitief voorschrift.</strong> Uw audioloog meet de gehoorwinst en bezorgt het verslag aan de NKO-arts. Die beslist of een definitief voorschrift aangewezen is.</li>
              <li><strong>Goedkeuring en aflevering.</strong> De adviserend arts van uw mutualiteit beoordeelt het dossier. Na goedkeuring levert uw audioloog het definitieve apparaat af en krijgt u het getuigschrift voor uw mutualiteit.</li>
            </ol>
          </section>
          <section id="eigen-opleg" className={styles.section}>
            <h2>{sections[2][1]}</h2>
            <p>De wettelijke tegemoetkoming volgt de Belgische RIZIV-tarieven. Het bedrag hangt onder meer af van uw leeftijd, of het om één of twee hoorapparaten gaat en de toepasselijke regeling. Uw mutualiteit kan daarnaast aanvullende voordelen bieden.</p>
            <table className={styles.reimbursementTable}>
              <caption>Standaardtegemoetkoming volgens de RIZIV-tarieven vanaf 1 januari 2026, bij een geconventioneerde audioloog en zonder voorkeurregeling.</caption>
              <thead>
                <tr><th scope="col">Leeftijd</th><th scope="col">1 hoorapparaat</th><th scope="col">2 hoorapparaten</th></tr>
              </thead>
              <tbody>
                {ageGroups.map(({ label, amounts }) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {amounts.map(amount => <td key={amount}>{euros.format(amount)}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
            <p>Bij Oogvoororen zijn er hoorapparaten met een eigen opleg vanaf circa € 50 per toestel na tegemoetkoming. Er zijn ook modellen met een hogere eigen opleg. Wat u zelf betaalt, hangt af van het model en uw recht op tegemoetkoming.</p>
            <div className={styles.callout}>
              <p><strong>Zo leest u uw offerte.</strong> Trek de toepasselijke tegemoetkoming af van de prijs van de hoorapparaten. Het verschil is uw eigen opleg. Laat ook vermelden welke accessoires, zoals een lader, inbegrepen zijn en of er nog aparte kosten zijn.</p>
            </div>
          </section>
          <section id="hernieuwing" className={styles.section}>
            <h2>{sections[3][1]}</h2>
            <p>De gewone hernieuwingstermijn is vijf jaar voor volwassenen en drie jaar voor wie jonger is dan 18. In bepaalde medische situaties gelden uitzonderingen. Uw audioloog kan met u nagaan wanneer een nieuwe aanvraag mogelijk is.</p>
          </section>
        </article>
      </div>
    </>
  );
}
