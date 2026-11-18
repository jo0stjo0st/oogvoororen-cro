import { ChapterNavigation } from "./chapter-navigation";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./guide.module.css";
import { GuideVisual, guidePhotos } from "./visual";

export const metadata: Metadata = {
  title: "Ik koop mijn eerste hoortoestellen | Oogvoororen Koopgids",
  description: "Van een audicien kiezen tot wennen aan uw eerste hoortoestellen. Vijf stappen om te weten wat u kunt verwachten en welke vragen u kunt stellen.",
};

const chapters = [
  { title: "Een audicien kiezen", image: guidePhotos.consult, text: "Vergelijk keuzevrijheid, afspraken aan huis of op locatie, de tijd voor begeleiding en wat u voor uw geld krijgt.", href: "/hoortoestellen/keuzehulp/audicien-kiezen" },
  { title: "De hoortest en het adviesgesprek", image: guidePhotos.test, text: "Van het eerste telefoongesprek tot de hoortest en persoonlijk hooradvies.", href: "/hoortoestellen/keuzehulp/hoortest-en-intake" },
  { title: "Hoortoestellen kiezen", image: guidePhotos.device, text: "Leer welke functies in uw dagelijks leven verschil kunnen maken en waar u voor betaalt bij een duurder model." },
  { title: "Uitproberen en wennen", image: guidePhotos.trial, text: "Weet waar u tijdens de proefperiode op kunt letten en wanneer u een instelling laat aanpassen." },
  { title: "Onderhoud, service en nazorg", image: guidePhotos.followup, text: "Lees wat u thuis kunt doen en waar u op let bij bijstellingen, reparaties en garantie." },
];

export default function Page() {
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
          <p className={styles.kicker}>Koopgids van Oogvoororen</p>
          <h1>Ik koop mijn eerste hoortoestellen</h1>
          <p>Een gesprek volgen aan tafel, uw kleinkind verstaan op de achterbank of een vergadering kunnen bijhouden. Uw eerste hoortoestellen kiest u met die momenten in gedachten. In deze koopgids leest u welke keuzes u onderweg maakt, van uw eerste afspraak tot de nazorg.</p>
          <div className={styles.actions}>
            <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
            <a href="#hoofdstukken">Bekijk de hoofdstukken</a>
          </div>
          </div>
          <GuideVisual hero src={guidePhotos.trial} />
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud koopgids">
          <strong>In deze koopgids</strong>
          <ol>
            <li><a href="#voor-wie">Voor wie is deze koopgids?</a></li>
            <li><a href="#hoofdstukken">De vijf hoofdstukken</a></li>
            <li><a href="#voorbereiden">Uw eerste afspraak</a></li>
            <li><a href="#vragen">Veelgestelde vragen</a></li>
          </ol>
        </nav>
        <div>
          <section id="voor-wie" className={styles.section}>
            <h2>Voor wie is deze koopgids?</h2>
            <p>Voor iedereen die voor het eerst hoortoestellen overweegt. Misschien merkt u dat u vaker om herhaling vraagt, of heeft u al een hoortest gehad en vraagt u zich af wat de volgende stap is. U kunt de gids ook gebruiken als u uw partner of ouder helpt bij de keuze.</p>
          </section>
          <section id="hoofdstukken" className={styles.section}>
            <h2>Van eerste afspraak tot nazorg</h2>
            <ol className={styles.chapters}>
              {chapters.map(({ title, text, href, image }, index) => (
                <li key={title} id={`hoofdstuk-${index + 1}`}>
                  <GuideVisual src={image} />
                  <div>
                  <h3>{index + 1}. {href ? <Link href={href}>{title} →</Link> : title}</h3>
                  <p>{text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section id="voorbereiden" className={styles.section}>
            <h2>Zo bereidt u uw eerste afspraak voor</h2>
            <p>Schrijf twee of drie situaties op waarin u beter wilt horen. Waar was u, wie sprak er en wat maakte het lastig? Denk bijvoorbeeld aan een collega die zacht praat of een restaurant waar meerdere gesprekken door elkaar lopen. Die voorbeelden geven de audicien iets concreets om op door te vragen.</p>
            <p>Neem eventueel iemand mee met wie u vaak praat. Diegene kan voorbeelden aanvullen en met u meeluisteren naar de uitleg over de vervolgstappen.</p>
          </section>
          <section id="vragen" className={`${styles.section} ${styles.faq}`}>
            <h2>Veelgestelde vragen</h2>
            <details><summary>Moet ik vóór mijn eerste afspraak al een merk kiezen?</summary><p>U kunt beginnen met te vertellen wat u beter wilt verstaan en wat u belangrijk vindt, zoals draagcomfort of eenvoudig onderhoud. Vraag de audicien daarna welke toestellen daarbij passen.</p></details>
            <details><summary>Moet ik bij mijn eerste afspraak meteen beslissen?</summary><p>Bij Oogvoororen is een adviesafspraak vrijblijvend. De audicien bespreekt uw gehoor en wensen met u. Daarna bepaalt u zelf of u verder wilt.</p></details>
            <details><summary>Hoe vergelijk ik prijzen van hoortoestellen?</summary><p>Vraag of de prijs per toestel of voor twee geldt, wat u uiteindelijk zelf betaalt en welke accessoires, controles en bijstellingen zijn inbegrepen.</p></details>
          </section>
          <ChapterNavigation next={{ href: "/hoortoestellen/keuzehulp/audicien-kiezen", label: "Lees hoofdstuk 1", title: "Een audicien kiezen" }} />
        </div>
      </div>
    </>
  );
}
