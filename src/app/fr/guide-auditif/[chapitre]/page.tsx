import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GuideChapter } from "@/app/hoortoestellen/keuzehulp/guide-chapter";
import { chapters, guidePath } from "../chapters";

type ChapterPageProps = { params: Promise<{ chapitre: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return chapters.map(({ slug }) => ({ chapitre: slug }));
}

export async function generateMetadata({ params }: ChapterPageProps): Promise<Metadata> {
  const { chapitre } = await params;
  const chapter = chapters.find(({ slug }) => slug === chapitre);
  if (!chapter) notFound();
  return { title: `${chapter.title} | Guide auditif Oogvoororen`, description: chapter.summary };
}

export default async function Page({ params }: ChapterPageProps) {
  const { chapitre } = await params;
  const index = chapters.findIndex(({ slug }) => slug === chapitre);
  const chapter = chapters[index];
  if (!chapter) notFound();
  const previous = chapters[index - 1];
  const next = chapters[index + 1];

  return (
    <GuideChapter locale="fr" chapter={{
      ...chapter,
      number: index + 1,
      previous: previous
        ? { href: `${guidePath}/${previous.slug}`, label: "Chapitre précédent", title: previous.title }
        : { href: `${guidePath}#chapitres`, label: "Retour au guide", title: "Tous les chapitres" },
      next: next
        ? { href: `${guidePath}/${next.slug}`, label: "Chapitre suivant", title: next.title }
        : { href: "/fr/rendez-vous", label: "Votre prochaine étape", title: "Prendre rendez-vous sans engagement", primary: true },
    }} />
  );
}
