import type { Metadata } from "next";
import Link from "next/link";
import { ChapterNavigation } from "@/app/hoortoestellen/keuzehulp/chapter-navigation";
import { GuideVisual, guidePhotos } from "@/app/hoortoestellen/keuzehulp/visual";
import styles from "@/app/hoortoestellen/keuzehulp/guide.module.css";
import { chapters, guidePath } from "./chapters";

export const metadata: Metadata = {
  title: "Mes premiers appareils auditifs | Guide Oogvoororen",
  description: "Cinq chapitres pour choisir votre audiologue, comprendre votre bilan, essayer vos premiers appareils auditifs et organiser le suivi.",
};

export default function Page() {
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <p className={styles.kicker}>Le guide d’Oogvoororen</p>
            <h1>Mes premiers appareils auditifs</h1>
            <p>Suivre une conversation à table, comprendre votre petit-enfant à l’arrière de la voiture ou participer à une réunion. Vos premiers appareils se choisissent en pensant à ces moments. Ce guide vous accompagne du premier rendez-vous au suivi.</p>
            <div className={styles.actions}>
              <a className={styles.action} href="#afspraak">Prendre rendez-vous sans engagement →</a>
              <a href="#chapitres">Voir les chapitres</a>
            </div>
          </div>
          <GuideVisual hero src={guidePhotos.trial} />
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Sommaire du guide">
          <strong>Dans ce guide</strong>
          <ol>
            <li><a href="#pour-qui">À qui s’adresse ce guide ?</a></li>
            <li><a href="#chapitres">Les cinq chapitres</a></li>
            <li><a href="#preparation">Votre premier rendez-vous</a></li>
            <li><a href="#questions">Questions fréquentes</a></li>
          </ol>
        </nav>
        <article>
          <section className={styles.section} id="pour-qui">
            <h2>À qui s’adresse ce guide ?</h2>
            <p>À toute personne qui envisage de porter des appareils auditifs pour la première fois. Vous demandez peut-être plus souvent de répéter, ou vous avez déjà passé un test et vous vous demandez quelle est la suite. Le guide peut aussi vous aider à accompagner un proche dans son choix.</p>
          </section>
          <section className={styles.section} id="chapitres">
            <h2>Du premier rendez-vous au suivi</h2>
            <ol className={styles.chapters}>
              {chapters.map(({ slug, title, image, summary }, index) => (
                <li key={slug}>
                  <GuideVisual src={image} />
                  <div>
                    <h3>{index + 1}. <Link href={`${guidePath}/${slug}`}>{title} →</Link></h3>
                    <p>{summary}</p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
          <section className={styles.section} id="preparation">
            <h2>Comment préparer votre premier rendez-vous</h2>
            <p>Notez deux ou trois situations dans lesquelles vous souhaitez mieux entendre. Où étiez-vous, qui parlait et qu’est-ce qui vous gênait ? Un exemple précis aide l’audiologue à comprendre vos besoins.</p>
            <p>Si vous le souhaitez, venez avec une personne à qui vous parlez souvent. Elle peut compléter vos observations et écouter les explications avec vous.</p>
          </section>
          <section className={`${styles.section} ${styles.faq}`} id="questions">
            <h2>Questions fréquentes</h2>
            <details><summary>Dois-je choisir une marque avant mon premier rendez-vous ?</summary><p>Vous pouvez commencer par expliquer ce que vous voulez mieux comprendre et ce qui compte pour vous, comme le confort ou la facilité d’entretien. L’audiologue vous présente ensuite les appareils adaptés.</p></details>
            <details><summary>Dois-je décider dès le premier rendez-vous ?</summary><p>Le bilan et les conseils sont sans engagement. Vous décidez ensuite si vous souhaitez aller plus loin.</p></details>
            <details><summary>Comment comparer les prix ?</summary><p>Demandez si le prix concerne un ou deux appareils, ce que vous paierez et quels accessoires, contrôles et réglages sont inclus.</p></details>
          </section>
          <ChapterNavigation locale="fr" next={{ href: `${guidePath}/${chapters[0].slug}`, label: "Lire le chapitre 1", title: chapters[0].title }} />
        </article>
      </div>
    </>
  );
}
