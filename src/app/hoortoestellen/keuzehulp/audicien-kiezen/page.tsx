import type { Metadata } from "next";
import Link from "next/link";
import styles from "../guide.module.css";

export const metadata: Metadata = {
  title: "Een audicien kiezen voor uw eerste hoortoestellen | Oogvoororen",
  description: "Vergelijk audiciens op merkkeuze, afspraken aan huis of op locatie, uitleg over onderhoud, begeleiding en totale kosten.",
};

const contents = [
  ["keuzevrijheid", "Keuze uit merken en modellen"],
  ["locatie", "Aan huis of in een hoorcentrum"],
  ["onderhoud", "Hulp bij dagelijks onderhoud"],
  ["begeleiding", "Tijd en aandacht voor begeleiding"],
  ["kosten", "Prijs en inbegrepen service"],
  ["checklist", "Vragen voor uw eerste gesprek"],
  ["vragen", "Veelgestelde vragen"],
];

export default function Page() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.wrap}>
          <p><Link href="/hoortoestellen/keuzehulp">← Koopgids eerste hoortoestellen</Link></p>
          <p className={styles.kicker}>Hoofdstuk 1 van 5</p>
          <h1>Hoe kiest u een audicien?</h1>
          <p>Bij uw eerste hoortoestellen komt u de audicien ook ná de hoortest tegen. U wilt weten wie u helpt met wennen, waar u terechtkunt als iets onprettig klinkt en hoeveel u zelf moet regelen. Met deze vragen vergelijkt u de begeleiding die u straks krijgt.</p>
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud hoofdstuk">
          <strong>In dit hoofdstuk</strong>
          <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </nav>
        <article>
          <section id="keuzevrijheid" className={styles.section}>
            <h2>Hoeveel keuze hebt u uit merken en modellen?</h2>
            <p>Vraag welke merken en modellen de audicien voor uw situatie kan aanbieden én welke u daadwerkelijk kunt uitproberen. Een breed assortiment geeft meer mogelijkheden om verschillen in klank, pasvorm en bediening te ervaren. Vraag de audicien om bij elk voorstel uit te leggen wat u er in uw dagelijkse leven aan hebt.</p>
            <p>Heeft u een budget in gedachten of wilt u weten welke mogelijkheden binnen uw vergoeding vallen? Noem dat vroeg in het gesprek. Vraag wat het voordeligste passende toestel biedt en welk verschil u naar verwachting hoort of merkt bij een duurder model.</p>
          </section>
          <section id="locatie" className={styles.section}>
            <h2>Aan huis of in een hoorcentrum?</h2>
            <h3>Een audicien aan huis</h3>
            <p>Een afspraak thuis scheelt reistijd en kan uitkomst bieden als lopen, autorijden of vervoer regelen lastig is. Een partner of mantelzorger kan makkelijker aansluiten. U kunt ook ter plekke laten zien in welke situaties u moeite hebt met verstaan, bijvoorbeeld wanneer de televisie aanstaat of iemand vanuit de keuken praat.</p>
            <h3>Een afspraak in een hoorcentrum</h3>
            <p>Een hoorcentrum kan praktisch zijn als het op uw route ligt of als u voor een controle of reparatie makkelijk kunt langskomen. Vraag naar de bereikbaarheid, wachttijden en of u voor kleine handelingen een afspraak nodig hebt.</p>
            <p>Vraag per stap waar die kan plaatsvinden. De locatie voor de hoortest, eerste afstelling en latere controles kan verschillen. Vraag ook of u kunt wisselen tussen thuis, het hoorcentrum en online bijstellen.</p>
          </section>
          <section id="onderhoud" className={styles.section}>
            <h2>Hoeveel onderhoud wilt u zelf doen?</h2>
            <p>Veel dagelijks onderhoud kunt u thuis doen, zoals de buitenkant schoonmaken en het toestel opladen of de batterij vervangen. Afhankelijk van het model kunt u ook zelf het oorsmeerfilter of het dopje vervangen. Laat de audicien voordoen hoe dat bij uw toestel gaat en probeer het zelf tijdens de afspraak.</p>
            <p>Heeft u weinig kracht in uw vingers of ziet u kleine onderdelen lastig? Vraag om een model dat u zelf kunt hanteren en spreek af wie helpt als het onderhoud thuis niet lukt. Vraag ook wat losse filters en dopjes kosten en hoe u eraan komt. <a href="https://rnid.org.uk/information-and-support/hearing-aids/cleaning-maintaining/">Onderhoudsinstructies van RNID</a></p>
          </section>
          <section id="begeleiding" className={styles.section}>
            <h2>Hoe beoordeelt u de begeleiding?</h2>
            <p>Een zelfstandige hoorspecialist, keten en optiekzaak met hoorzorg kunnen hun afspraken verschillend organiseren. Vraag bij elk type aanbieder hoeveel tijd er is voor de eerste afstelling, of u bij vervolgafspraken dezelfde audicien ziet en wie u helpt als die afwezig is. Als u terechtkunt bij een optiekzaak, vraag dan op welke dagen de audicien aanwezig is.</p>
            <p>Let tijdens het gesprek op wat de audicien doet met uw voorbeelden. Als u vooral moeite hebt met gesprekken in gezelschap, verwacht dan uitleg over wat u in die situatie kunt proberen en hoe u samen beoordeelt of de instelling helpt. Vraag hoe snel u terechtkunt als stemmen scherp klinken, het toestel irriteert of u moeite hebt het in te doen.</p>
          </section>
          <section id="kosten" className={styles.section}>
            <h2>Wat krijgt u voor de prijs?</h2>
            <p>Bij een prijsgerichte aanbieder kan een lage aanschafprijs aantrekkelijk zijn. De prijs van een specialist kan meer begeleiding omvatten. Vraag beide om een schriftelijk overzicht van wat u zelf betaalt voor één of twee toestellen, inclusief de onderdelen en hulp die u verwacht nodig te hebben.</p>
            <ul>
              <li><strong>Aanschaf.</strong> Zijn de lader, oorstukjes en eventuele accessoires inbegrepen?</li>
              <li><strong>Uitproberen.</strong> Welke voorwaarden en eventuele kosten gelden als u stopt of van model wisselt?</li>
              <li><strong>Nazorg.</strong> Welke controles en bijstellingen zijn inbegrepen, voor hoelang en op welke locaties?</li>
              <li><strong>Reparatie.</strong> Hoe werkt de garantie, wat betaalt u eventueel zelf en is er een leentoestel?</li>
            </ul>
            <p>Heeft u vooral behoefte aan hulp dichtbij of aan huis? Vraag dan naar de kosten én wachttijd voor precies die afspraak. Zo vergelijkt u aanbiedingen op de dienstverlening die u echt gaat gebruiken.</p>
          </section>
          <section id="checklist" className={`${styles.section} ${styles.callout}`}>
            <h2>Vijf vragen voor uw eerste gesprek</h2>
            <ul>
              <li>Welke merken en modellen kan ik binnen mijn budget uitproberen?</li>
              <li>Waar vinden de eerste afstelling en de vervolgafspraken plaats?</li>
              <li>Kunt u mij laten oefenen met indoen, opladen en schoonmaken?</li>
              <li>Wie helpt mij als een instelling of de pasvorm niet goed voelt?</li>
              <li>Wat betaal ik zelf en wat is daarbij inbegrepen?</li>
            </ul>
          </section>
          <section id="vragen" className={`${styles.section} ${styles.faq}`}>
            <h2>Veelgestelde vragen</h2>
            <details><summary>Kan ik de hoortest en afstelling allebei thuis laten doen?</summary><p>Dat verschilt per aanbieder en soms per type afspraak. Vraag vooraf welke afspraken thuis kunnen, of u voor bepaalde metingen naar een hoorcentrum moet en of er bezoekkosten zijn.</p></details>
            <details><summary>Kan ik bij een andere audicien terecht voor bijstellingen?</summary><p>Vraag de nieuwe audicien of die uw merk en model kan bijstellen, wat dit kost en of de oorspronkelijke aanbieder bepaalde service of garantie blijft verzorgen.</p></details>
            <details><summary>Kan elke bijstelling online?</summary><p>Vraag of uw toestel en de audicien online bijstellen ondersteunen. Voor een andere pasvorm, een kapot onderdeel of een meting kan een fysieke afspraak nodig zijn.</p></details>
            <details><summary>Hoort onderhoud standaard bij de aankoop?</summary><p>Dat verschilt per aanbieder. Vraag apart naar schoonmaak, vervangende filters en dopjes, periodieke controles en hulp aan huis. Laat op de offerte zetten wat inbegrepen is.</p></details>
          </section>
          <p><Link className={styles.action} href="/hoortoestellen/keuzehulp#hoofdstukken">Terug naar de hoofdstukken →</Link></p>
        </article>
      </div>
    </>
  );
}
