import type { Metadata } from "next";
import Link from "next/link";
import { ChapterNavigation } from "../chapter-navigation";
import styles from "../guide.module.css";
import { Audiogram } from "./audiogram";
import { GuideVisual, guidePhotos } from "../visual";

export const metadata: Metadata = {
  title: "Intake, hoortest en adviesgesprek | Oogvoororen Koopgids",
  description: "Van het eerste telefoongesprek tot persoonlijk hooradvies. Lees wat Oogvoororen onderzoekt, wat de uitslag betekent en hoe u zich voorbereidt.",
};

const contents = [
  ["intake", "De telefonische intake"],
  ["afspraak-bij-de-audicien", "Uw dagelijkse luistersituaties"],
  ["hoortest", "Wat meet de hoortest?"],
  ["advies", "Van uitslag naar advies"],
  ["voorbereiden", "Zo bereidt u zich voor"],
  ["vragen", "Veelgestelde vragen"],
];

export default function Page() {
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <p><Link href="/hoortoestellen/keuzehulp">← Koopgids eerste hoortoestellen</Link></p>
            <p className={styles.kicker}>Hoofdstuk 2 van 5</p>
            <h1>Uw intake, hoortest en adviesgesprek</h1>
            <p>U hoort dat iemand iets zegt, maar aan een volle tafel mist u de helft van het gesprek. Bij Oogvoororen bespreken we wanneer dat gebeurt, meten we uw gehoor en legt de audicien uit welke vervolgstap bij u past.</p>
            <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
          </div>
          <GuideVisual hero src={guidePhotos.test} />
        </div>
      </div>

      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud hoofdstuk">
          <strong>In dit hoofdstuk</strong>
          <ol>{contents.map(([id, label]) => <li key={id}><a href={`#${id}`}>{label}</a></li>)}</ol>
        </nav>
        <article>
          <section id="intake" className={styles.section}>
            <h2>De telefonische intake</h2>
            <p>Na uw aanvraag bellen we u. We vragen wat u merkt, wanneer verstaan lastig is en of uw gehoor al eens is getest. Vertel gerust wat u zelf wilt uitzoeken. Misschien wilt u weten waarom vergaderingen zoveel energie kosten of bent u benieuwd of hoortoestellen bij u passen.</p>
            <p>Daarna bespreken we de afspraak met de audicien. U kunt aangeven of u liever thuis of in een hoorcentrum afspreekt. Wat u tijdens de intake vertelt, helpt de audicien om tijdens de afspraak gericht door te vragen.</p>
          </section>

          <section id="afspraak-bij-de-audicien" className={styles.section}>
            <h2>Wat wilt u weer makkelijker kunnen verstaan?</h2>
            <p>De audicien vraagt door op situaties uit uw dagelijks leven. Gaat een gesprek thuis prima, maar mist u opmerkingen tijdens een teamoverleg? Vertel waar u zat, wie u lastig verstond en of er tegelijk andere mensen praatten. Hoe concreter het voorbeeld, hoe makkelijker u samen kunt bepalen wat u wilt verbeteren.</p>
            <div className={styles.callout}>
              <p><strong>Maak uw wens concreet.</strong> ‘Ik wil mijn kleinkind verstaan als het naast me zit en de televisie aanstaat’ geeft u iets herkenbaars om straks op te letten als u hoortoestellen uitprobeert.</p>
            </div>
          </section>

          <section id="hoortest" className={styles.section}>
            <h2>Wat meet de hoortest?</h2>
            <p>De audicien legt uit welke metingen nodig zijn en bekijkt zo nodig uw oren. De twee metingen hieronder geven elk antwoord op een andere vraag.</p>
            <h3>De piepjestest</h3>
            <p>U geeft aan wanneer u een toon hoort. De audicien meet per oor hoe zacht een toon op verschillende toonhoogtes mag zijn voordat u hem niet meer hoort. Die uitkomst komt in een grafiek, het toonaudiogram.</p>
            <Audiogram kind="tone" />
            <h3>De woordjestest</h3>
            <p>U herhaalt woorden die u op verschillende volumes hoort. Daarmee onderzoekt de audicien hoe goed u spraak verstaat en wat harder aanbieden voor uw verstaan doet. De uitslag komt in een spraakaudiogram.</p>
            <Audiogram kind="speech" />
            <p>Na afloop legt de audicien uit wat de uitslag voor u betekent. Vraag gerust hoe de resultaten aansluiten bij wat u thuis of op het werk ervaart.</p>
          </section>

          <section id="advies" className={styles.section}>
            <h2>Van testuitslag naar persoonlijk advies</h2>
            <p>De audicien legt de metingen naast wat u in het dagelijks leven wilt verbeteren. Als hoortoestellen passend zijn, bespreekt u welke mogelijkheden aansluiten bij uw gehoor, uw draagwensen en uw budget. U hoort ook wat u in lastige situaties, zoals een druk restaurant, redelijkerwijs kunt verwachten.</p>
            <p>Wilt u hoortoestellen uitproberen? Dan spreekt u af waar u op gaat letten. Probeer bijvoorbeeld opnieuw een maaltijd met familie of een overleg op het werk. Tijdens een vervolgafspraak bespreekt u wat makkelijker ging en wat nog aandacht nodig heeft.</p>
          </section>

          <section id="voorbereiden" className={`${styles.section} ${styles.callout}`}>
            <h2>Zo bereidt u zich voor</h2>
            <ul>
              <li>Bedenk twee situaties waarin u graag makkelijker wilt verstaan.</li>
              <li>Heeft u een eerdere testuitslag? Neem die gerust mee.</li>
              <li>Schrijf vragen op over comfort, bediening, kosten of uitproberen.</li>
              <li>Nodig eventueel uw partner, familielid of iemand anders uit die uw situatie goed kent.</li>
            </ul>
          </section>

          <section id="vragen" className={`${styles.section} ${styles.faq}`}>
            <h2>Veelgestelde vragen</h2>
            <details><summary>Is de telefonische intake hetzelfde als de hoortest?</summary><p>De intake is een gesprek over wat u merkt en wat u wilt verbeteren. De audicien meet uw gehoor tijdens de afspraak.</p></details>
            <details><summary>Kan het onderzoek ook bij mij thuis?</summary><p>Ja, bij Oogvoororen kunt u voor de hoortest en het adviesgesprek thuis of in een hoorcentrum afspreken. Uw voorkeur geeft u aan bij het plannen.</p></details>
            <details><summary>Mag ik iemand meenemen?</summary><p>Ja. Iemand die u goed kent kan voorbeelden aanvullen en meeluisteren naar de uitleg van de audicien.</p></details>
            <details><summary>Moet ik tijdens het adviesgesprek een toestel kiezen?</summary><p>De afspraak is vrijblijvend. U kunt de uitleg laten bezinken en rustig beslissen of u hoortoestellen wilt uitproberen.</p></details>
          </section>

          <ChapterNavigation
            previous={{ href: "/hoortoestellen/keuzehulp/audicien-kiezen", label: "Vorig hoofdstuk", title: "Een audicien kiezen" }}
            next={{ href: "/hoortoestellen/keuzehulp/hoortoestel-kiezen", label: "Volgend hoofdstuk", title: "Hoortoestellen kiezen" }}
          />
        </article>
      </div>
    </>
  );
}
