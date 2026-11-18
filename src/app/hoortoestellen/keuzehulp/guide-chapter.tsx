import Link from "next/link";
import { ChapterNavigation } from "./chapter-navigation";
import { GuideVisual } from "./visual";
import styles from "./guide.module.css";

export type GuideChapterContent = {
  number: number;
  title: string;
  intro: string;
  image: string;
  sections: { id: string; title: string; paragraphs?: string[]; points?: string[]; image?: string; note?: { title: string; text: string } }[];
  faq: [string, string][];
  previous: NonNullable<Parameters<typeof ChapterNavigation>[0]["previous"]>;
  next?: Parameters<typeof ChapterNavigation>[0]["next"];
};

export function GuideChapter({ chapter }: { chapter: GuideChapterContent }) {
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <p><Link href="/hoortoestellen/keuzehulp">← Koopgids eerste hoortoestellen</Link></p>
            <p className={styles.kicker}>Hoofdstuk {chapter.number} van 5</p>
            <h1>{chapter.title}</h1>
            <p>{chapter.intro}</p>
            <a className={styles.action} href="#afspraak">Maak vrijblijvend een afspraak →</a>
          </div>
          <GuideVisual hero src={chapter.image} />
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label="Inhoud hoofdstuk">
          <strong>In dit hoofdstuk</strong>
          <ol>
            {chapter.sections.map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}
            <li><a href="#vragen">Veelgestelde vragen</a></li>
          </ol>
        </nav>
        <article>
          {chapter.sections.map(({ id, title, paragraphs, points, image, note }) => (
            <section id={id} key={id} className={points ? `${styles.section} ${styles.callout}` : styles.section}>
              <h2>{title}</h2>
              {image && <div className={styles.sectionImage}><GuideVisual src={image} /></div>}
              {paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {points && <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>}
              {note && (
                <aside className={styles.callout}>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                </aside>
              )}
            </section>
          ))}
          <section id="vragen" className={`${styles.section} ${styles.faq}`}>
            <h2>Veelgestelde vragen</h2>
            {chapter.faq.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </section>
          <ChapterNavigation previous={chapter.previous} next={chapter.next} />
        </article>
      </div>
    </>
  );
}
