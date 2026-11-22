import Link from "next/link";
import { ChapterNavigation } from "./chapter-navigation";
import { GuideVisual } from "./visual";
import styles from "./guide.module.css";

export type GuideChapterContent = {
  number: number;
  title: string;
  intro: string;
  image: string;
  sections: { id: string; title: string; paragraphs?: string[]; points?: string[]; image?: string; illustration?: React.ReactNode; note?: { title: string; text: string; link?: { href: string; label: string } } }[];
  faq: [string, string][];
  previous: NonNullable<Parameters<typeof ChapterNavigation>[0]["previous"]>;
  next?: Parameters<typeof ChapterNavigation>[0]["next"];
};

export function GuideChapter({ chapter, locale = "nl", guideHref }: { chapter: GuideChapterContent; locale?: "nl" | "fr"; guideHref?: string }) {
  const fr = locale === "fr";
  const faqHeading = fr ? "Questions fréquentes" : "Veelgestelde vragen";
  return (
    <>
      <div className={styles.hero}>
        <div className={`${styles.wrap} ${styles.split}`}>
          <div>
            <p><Link href={guideHref ?? (fr ? "/fr/guide-auditif" : "/hoortoestellen/keuzehulp")}>{fr ? "← Guide des premiers appareils auditifs" : guideHref ? "← Koopgids eerste hoorapparaten" : "← Koopgids eerste hoortoestellen"}</Link></p>
            <p className={styles.kicker}>{fr ? "Chapitre" : "Hoofdstuk"} {chapter.number} {fr ? "sur" : "van"} 5</p>
            <h1>{chapter.title}</h1>
            <p>{chapter.intro}</p>
            <a className={styles.action} href="#afspraak">{fr ? "Prendre rendez-vous sans engagement" : "Maak vrijblijvend een afspraak"} →</a>
          </div>
          <GuideVisual hero src={chapter.image} />
        </div>
      </div>
      <div className={`${styles.wrap} ${styles.body}`}>
        <nav className={styles.contents} aria-label={fr ? "Sommaire du chapitre" : "Inhoud hoofdstuk"}>
          <strong>{fr ? "Dans ce chapitre" : "In dit hoofdstuk"}</strong>
          <ol>
            {chapter.sections.map(({ id, title }) => <li key={id}><a href={`#${id}`}>{title}</a></li>)}
            <li><a href="#vragen">{faqHeading}</a></li>
          </ol>
        </nav>
        <article>
          {chapter.sections.map(({ id, title, paragraphs, points, image, illustration, note }) => (
            <section id={id} key={id} className={points ? `${styles.section} ${styles.callout}` : styles.section}>
              <h2>{title}</h2>
              {image && <div className={styles.sectionImage}><GuideVisual src={image} /></div>}
              {paragraphs?.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              {illustration}
              {points && <ul>{points.map(point => <li key={point}>{point}</li>)}</ul>}
              {note && (
                <aside className={styles.callout}>
                  <h3>{note.title}</h3>
                  <p>{note.text}</p>
                  {note.link && <Link href={note.link.href}>{note.link.label} →</Link>}
                </aside>
              )}
            </section>
          ))}
          <section id="vragen" className={`${styles.section} ${styles.faq}`}>
            <h2>{faqHeading}</h2>
            {chapter.faq.map(([question, answer]) => (
              <details key={question}><summary>{question}</summary><p>{answer}</p></details>
            ))}
          </section>
          <ChapterNavigation previous={chapter.previous} next={chapter.next} locale={locale} />
        </article>
      </div>
    </>
  );
}
