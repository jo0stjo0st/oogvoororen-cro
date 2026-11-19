import Link from "next/link";
import styles from "./guide.module.css";

type ChapterLink = { href: string; title: string; label: string };

export function ChapterNavigation({ previous, next }: { previous?: ChapterLink; next?: ChapterLink & { primary?: boolean } }) {
  return (
    <nav className={styles.chapterNavigation} aria-label="Hoofdstuknavigatie">
      {previous && (
        <Link href={previous.href}>
          <span>← {previous.label}</span>
          <strong>{previous.title}</strong>
        </Link>
      )}
      {next && (
        <Link className={next.primary ? `${styles.nextChapter} ${styles.action}` : styles.nextChapter} href={next.href}>
          <span>{next.label} →</span>
          <strong>{next.title}</strong>
        </Link>
      )}
    </nav>
  );
}
