import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductSiteFooter, ProductSiteHeader } from "@/components/product-site-shell";
import { CompactAppointmentForm } from "@/features/appointments/compact-form";
import { features } from "@/features/products/bernafon-feature-content";
import { FeatureScenes, FeatureVisual } from "./feature-visual";
import styles from "../../bernafon-smart-directionality/page.module.css";

const product = "/experimenten/complete-productpagina#specificaties";
const levels = ["100 Connect", "200 Go", "300 Engage", "400 Pro"];
type Props = { params: Promise<{ feature: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(features).map(feature => ({ feature }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const content = features[(await params).feature];
  if (!content) notFound();
  return { title: `Bernafon ${content.name} uitgelegd | Oogvoororen`, description: content.intro };
}

export default async function Page({ params }: Props) {
  const content = features[(await params).feature];
  if (!content) notFound();
  const { name, intro, explanation, steps, scenes, levels: availability, note, faq, trial, related } = content;
  return (
    <>
      <ProductSiteHeader />
      <main id="main-content" className="wide cro-complete-page">
        <nav aria-label="Broodkruimel" className="cro-complete-back"><Link href={product}>← Terug naar de Encanta 400 Pro</Link></nav>
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">Technologie in uw hoorapparaat</p>
            <h1>Bernafon {name}</h1>
            <p className="cro-complete-lead">{intro}</p>
            <a className="cro-complete-cta" href="#voorbeelden">Bekijk de voorbeelden ↓</a>
          </div>
          <Image src="/images/audicien-aan-huis/advies-aan-huis.webp" alt="Een audioloog toont een hoorapparaat tijdens een adviesgesprek" width={760} height={510} priority />
        </section>
        <nav className={styles.contents} aria-label="Op deze pagina">
          <a href="#werking">Hoe werkt het?</a><a href="#voorbeelden">Voorbeelden</a><a href="#verschillen">Verschillen per model</a><a href="#uitproberen">Zelf uitproberen</a><a href="#vragen">Veelgestelde vragen</a>
        </nav>
        <section className="cro-complete-section" id="werking">
          <h2>Hoe werkt {name}?</h2>
          <div className="cro-complete-cards">
            {steps.map(({ title, text, diagram }) => <article key={title}><FeatureVisual diagram={diagram} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <div className={styles.note}>
            <p>{explanation}</p>
            <ul className={styles.legend}>{related.map(([label, href]) => <li key={href}><Link href={href}>Lees ook over {label} →</Link></li>)}</ul>
          </div>
        </section>
        <section className="cro-complete-section" id="voorbeelden">
          <h2>Wat merkt u in de praktijk?</h2>
          <p>Kies een voorbeeld en bekijk wat de functie in die situatie kan doen.</p>
          <FeatureScenes scenes={scenes} />
        </section>
        <section className="cro-complete-section" id="verschillen">
          <h2>{name} per Encanta-model</h2>
          <div className="cro-complete-table">
            <table>
              <thead><tr><th scope="col">Encanta miniRITE</th><th scope="col">{name}</th></tr></thead>
              <tbody>{levels.map((level, i) => <tr key={level}><th scope="row">{level}</th><td>{availability[i]}</td></tr>)}</tbody>
            </table>
          </div>
          <p>{note}</p>
          <p><Link href={product}>Vergelijk de toestellen op de Encanta-productpagina →</Link></p>
        </section>
        <section className={`cro-complete-section ${styles.tryLayout}`} id="uitproberen">
          <div><h2>Probeer het met uw eigen luistervoorbeeld</h2><p>{trial}</p></div>
          <Image src="/images/audicien-aan-huis/uitslag-bespreken.webp" alt="Een audioloog bespreekt een hoortest met een klant" width={760} height={510} />
        </section>
        <section className="cro-complete-section" id="vragen">
          <h2>Veelgestelde vragen over {name}</h2>
          {faq.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </section>
        <section className="cro-complete-section cro-complete-appointment" id="afspraak">
          <div><h2>Zelf ervaren wat bij u past?</h2><p>Uw audioloog helpt u de geschikte hoorapparaten te vergelijken en vrijblijvend uit te proberen.</p></div>
          <div className="cro-complete-form"><h3>Vraag uw afspraak aan</h3><CompactAppointmentForm interest={`Bernafon ${name}`} /></div>
        </section>
      </main>
      <ProductSiteFooter />
    </>
  );
}
