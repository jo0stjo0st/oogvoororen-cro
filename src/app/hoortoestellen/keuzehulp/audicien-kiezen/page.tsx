import { ChapterNavigation } from "../chapter-navigation";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "../guide.module.css";
import { GuideVisual, guidePhotos } from "../visual";

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
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
          <p><Link href="/hoortoestellen/keuzehulp">← Koopgids eerste hoortoestellen</Link></p>
          <p className={styles.kicker}>Hoofdstuk 1 van 5</p>
          <h1>Hoe kiest u een audicien?</h1>
          <p>Bij uw eerste hoortoestellen komt u de audicien ook ná de hoortest tegen. U wilt weten wie u helpt met wennen, waar u terechtkunt als iets onprettig klinkt en hoeveel u zelf moet regelen. Met dit hoofdstuk weet u waar u op kunt letten en wat u bij Oogvoororen kunt verwachten.</p>
          <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
          </div>
          <GuideVisual hero src={guidePhotos.consult} />
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
            <p>Bij Oogvoororen kiest de audicien met u uit alle bekende A-merken. U vertelt in welke situaties u beter wilt horen. De audicien legt uit welke toestellen daarbij passen en wat u kunt merken van verschillen in klank, pasvorm en bediening.</p>
            <p>Heeft u een budget in gedachten of wilt u weten welke mogelijkheden binnen uw vergoeding vallen? Noem dat vroeg in het gesprek. Vraag wat het voordeligste passende toestel biedt en welk verschil u naar verwachting hoort of merkt bij een duurder model.</p>
          </section>
          <section id="locatie" className={styles.section}>
            <h2>Aan huis of in een hoorcentrum?</h2>
            <h3>Een audicien aan huis</h3>
            <p>Een afspraak thuis is prettig als u liever in uw eigen omgeving afspreekt. U bespaart reistijd en uw partner kan gemakkelijk aanschuiven. U kunt de audicien ook meteen laten horen wat u lastig vindt, bijvoorbeeld een gesprek aan tafel terwijl de televisie aanstaat.</p>
            <p>Heeft u een drukke baan? Dan kan het handig zijn om de ene keer thuis af te spreken en de volgende keer op kantoor, bijvoorbeeld tussen twee vergaderingen door. Bespreek bij het plannen of een bezoek op kantoor mogelijk is. Een afspraak thuis is ook praktisch als u minder mobiel bent of vervoer moet regelen.</p>
            <h3>Een afspraak in een hoorcentrum</h3>
            <p>Een hoorcentrum kan praktisch zijn als het op uw route ligt of als u voor een controle of reparatie makkelijk kunt langskomen. Vraag naar de bereikbaarheid, wachttijden en of u voor kleine handelingen een afspraak nodig hebt.</p>
            <p>Bij Oogvoororen kunt u kiezen voor een afspraak aan huis of in een hoorcentrum. Tijdens het plannen bespreken we wat voor u het handigst is. Bij toestellen die het ondersteunen, kunnen sommige bijstellingen ook online.</p>
          </section>
          <section id="onderhoud" className={styles.section}>
            <h2>Hoeveel onderhoud wilt u zelf doen?</h2>
            <p>Veel dagelijks onderhoud kunt u thuis doen, zoals de buitenkant schoonmaken en het toestel opladen of de batterij vervangen. Afhankelijk van het model kunt u ook zelf het oorsmeerfilter of het dopje vervangen. Laat de audicien voordoen hoe dat bij uw toestel gaat en probeer het zelf tijdens de afspraak.</p>
            <p>Heeft u weinig kracht in uw vingers of ziet u kleine onderdelen lastig? Vraag om een model dat u zelf kunt hanteren en spreek af wie helpt als het onderhoud thuis niet lukt. Uw audicien bij Oogvoororen laat u zien welke filters en dopjes bij uw toestel passen en waar u die kunt bestellen.</p>
          </section>
          <section id="begeleiding" className={styles.section}>
            <h2>Hoe beoordeelt u de begeleiding?</h2>
            <p>Een goede afstelling begint met wat u in het dagelijks leven wilt kunnen verstaan. Bij Oogvoororen bespreekt u dat met de audicien. Neem bijvoorbeeld een etentje waar u het gesprek aan de andere kant van de tafel miste. Zo hebt u tijdens het uitproberen iets concreets om op te letten en kunt u bij een vervolgafspraak vertellen wat u merkte.</p>
            <p>Let tijdens het gesprek op wat de audicien doet met uw voorbeelden. Als u vooral moeite hebt met gesprekken in gezelschap, verwacht dan uitleg over wat u in die situatie kunt proberen en hoe u samen beoordeelt of de instelling helpt. Vraag hoe snel u terechtkunt als stemmen scherp klinken, het toestel irriteert of u moeite hebt het in te doen.</p>
          </section>
          <section id="kosten" className={styles.section}>
            <h2>Wat krijgt u voor de prijs?</h2>
            <p>Uw eigen kosten hangen af van het toestel, uw eventuele vergoeding en de accessoires die u nodig hebt. Bij Oogvoororen bespreekt u uw budget tijdens het adviesgesprek. U krijgt uitleg over de prijs en de bijbehorende service.</p>
            <ul>
              <li><strong>Aanschaf.</strong> Zijn de lader, oorstukjes en eventuele accessoires inbegrepen?</li>
              <li><strong>Uitproberen.</strong> Welke voorwaarden en eventuele kosten gelden als u stopt of van model wisselt?</li>
              <li><strong>Nazorg.</strong> Welke controles en bijstellingen zijn inbegrepen, voor hoelang en op welke locaties?</li>
              <li><strong>Reparatie.</strong> Hoe werkt de garantie, wat betaalt u eventueel zelf en is er een leentoestel?</li>
            </ul>
            <p>Bij Oogvoororen betaalt u voor dezelfde hoortoestellen aan huis dezelfde prijs als op locatie. Voor een afspraak aan huis rekenen we geen voorrijkosten.</p>
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
            <details><summary>Kan ik de hoortest en afstelling allebei thuis laten doen?</summary><p>Oogvoororen biedt hoortesten, advies en het afstellen van hoortoestellen ook aan huis. Bij het plannen bespreken we welke afspraak past bij uw vraag.</p></details>
            <details><summary>Waar kan ik terecht als mijn hoortoestel bijgesteld moet worden?</summary><p>Neem contact op met Oogvoororen. We bespreken met u of een afspraak thuis, in een hoorcentrum of online past bij wat er moet worden aangepast.</p></details>
            <details><summary>Kan elke bijstelling online?</summary><p>Vraag of uw toestel en de audicien online bijstellen ondersteunen. Voor een andere pasvorm, een kapot onderdeel of een meting kan een fysieke afspraak nodig zijn.</p></details>
            <details><summary>Hoort onderhoud standaard bij de aankoop?</summary><p>Dat verschilt per aanbieder. Vraag apart naar schoonmaak, vervangende filters en dopjes, periodieke controles en hulp aan huis. Laat op de offerte zetten wat inbegrepen is.</p></details>
          </section>
          <ChapterNavigation
            previous={{ href: "/hoortoestellen/keuzehulp#hoofdstukken", label: "Terug naar de koopgids", title: "Alle hoofdstukken" }}
            next={{ href: "/hoortoestellen/keuzehulp/hoortest-en-intake", label: "Volgend hoofdstuk", title: "De hoortest en het adviesgesprek" }}
          />
        </article>
      </div>
    </>
  );
}
