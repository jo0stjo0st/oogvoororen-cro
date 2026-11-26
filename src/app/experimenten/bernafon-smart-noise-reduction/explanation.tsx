import Image from "next/image";
import Link from "next/link";
import { CompactAppointmentForm } from "@/features/appointments/compact-form";
import { NoiseDiagram, NoiseScenes } from "./noise-visuals";
import styles from "../bernafon-smart-directionality/page.module.css";

const product = "/experimenten/complete-productpagina#specificaties";
const directionality = "/experimenten/bernafon-smart-directionality";

const steps = [
  { stage: "input", title: "Spraak en rumoer komen binnen", text: "De microfoons vangen tegelijk de stem van uw gesprekspartner en de geluiden rondom u op." },
  { stage: "analysis", title: "Het toestel analyseert het geluid", text: "De geluidsverwerking schat in waar het signaal vooral uit spraak bestaat en waar achtergrondgeluid overheerst. Bernafon gebruikt hiervoor patroonherkenning die met machine learning is ontwikkeld." },
  { stage: "output", title: "De achtergrond krijgt minder nadruk", text: "Het toestel kan de versterking van delen met vooral achtergrondgeluid verminderen. Daardoor kan de stem makkelijker te volgen zijn en kan het luisteren rustiger aanvoelen." },
] as const;

const levels = [
  ["Encanta 100 Connect", 6, "Basisniveau voor rustige dagelijkse situaties."],
  ["Encanta 200 Go", 8, "Meer ruimte voor demping bij één-op-ééngesprekken met achtergrondgeluid."],
  ["Encanta 300 Engage", 10, "Meer instelmogelijkheden. Smart Sensor kan beweging meenemen bij wisselende sprekers."],
  ["Encanta 400 Pro", 12, "Het hoogste maximum en de meeste instellingen binnen de Encanta-serie."],
] as const;

const questions = [
  ["Verdwijnt alle achtergrondruis?", "U blijft omgevingsgeluid horen. De functie kan bepaalde achtergrondgeluiden zachter maken. Stemmen die door elkaar lopen, galm en rumoer dicht bij de spreker kunnen het verstaan nog steeds lastig maken."],
  ["Is 12 dB hetzelfde als 12 dB stiller in de hele ruimte?", "Het getal is de maximale demping die Bernafon voor deze functie opgeeft. Hoeveel demping het apparaat toepast, hangt af van het geluid en de gekozen instellingen."],
  ["Wat is het verschil met Smart Directionality?", "Smart Directionality kijkt naar de richting waaruit geluid komt. Smart Noise Reduction vermindert de versterking van delen die vooral achtergrondgeluid bevatten. De functies kunnen samenwerken."],
  ["Helpt dit ook tegen een plotselinge klap?", "Encanta heeft daarvoor een afzonderlijke functie, Transient Noise Reduction. Die is bedoeld voor korte, plotse geluiden zoals rinkelend bestek."],
  ["Kan ik zelf bepalen hoeveel rumoer wordt gedempt?", "Uw audioloog kan de instellingen bij de aanpassing afstemmen. Bespreek of u vooral minder luisterinspanning wilt of juist meer van de omgeving wilt blijven horen."],
];

export function EncantaNoiseExplanation() {
  return (
    <>
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">Technologie in uw hoorapparaat</p>
            <h1>Bernafon Smart Noise Reduction</h1>
            <p className="cro-complete-lead">De afzuigkap staat aan, aan de volgende tafel wordt gepraat en iemand stelt u een vraag. Smart Noise Reduction kan achtergrondgeluid zachter maken, zodat er meer ruimte is voor het gesprek dat u wilt volgen.</p>
            <a className="cro-complete-cta" href="#luistersituaties">Bekijk hoe het werkt ↓</a>
          </div>
          <Image src="/images/audicien-aan-huis/advies-aan-huis.webp" alt="Een audioloog toont een hoorapparaat tijdens een adviesgesprek" width={760} height={510} priority />
        </section>
        <nav className={styles.contents} aria-label="Op deze pagina">
          <a href="#werking">Hoe werkt het?</a><a href="#luistersituaties">Luistersituaties</a><a href="#verschillen">Verschillen per model</a><a href="#uitproberen">Zelf uitproberen</a><a href="#vragen">Veelgestelde vragen</a>
        </nav>
        <section className="cro-complete-section" id="werking">
          <h2>Van spraak en rumoer naar een rustiger gesprek</h2>
          <div className="cro-complete-cards">
            {steps.map(({ stage, title, text }) => <article key={stage}><NoiseDiagram stage={stage} /><h3>{title}</h3><p>{text}</p></article>)}
          </div>
          <p className={styles.illustrationNote}>Schematische weergave van spraak en achtergrondgeluid.</p>
          <div className={styles.note}>
            <h3>Rumoer dempen en gerichter luisteren</h3>
            <p>Smart Noise Reduction helpt de achtergrond zachter te maken. <Link href={directionality}>Smart Directionality</Link> verandert de nadruk op geluid uit verschillende richtingen. Bij de Encanta 300 en 400 kan Smart Sensor beweging meenemen bij het bijstellen van beide.</p>
          </div>
        </section>
        <section className="cro-complete-section" id="luistersituaties">
          <h2>Wat kan het verschil zijn in uw dagelijks leven?</h2>
          <p>Kies een omgeving en vergelijk schematisch hoe spraak en rumoer binnenkomen en hoe de verwerking de achtergrond kan dempen.</p>
          <NoiseScenes />
        </section>
        <section className="cro-complete-section" id="verschillen">
          <h2>Hoeveel rumoer kan elke Encanta dempen?</h2>
          <div className="cro-complete-table"><table>
            <thead><tr><th scope="col">Model</th><th scope="col">Maximale rumoerreductie</th><th scope="col">Wat betekent dat voor u?</th></tr></thead>
            <tbody>{levels.map(([model, maximum, meaning]) => <tr key={model}><th scope="row">{model}</th><td>Tot {maximum} dB</td><td>{meaning}</td></tr>)}</tbody>
          </table></div>
          <p>Dit zijn de maxima die Bernafon per model opgeeft. Het effect in de praktijk hangt onder meer af van het soort rumoer, de positie van de spreker, uw gehoor en de afstelling.</p>
          <p><Link href={product}>Vergelijk de Encanta-modellen op de productpagina →</Link></p>
        </section>
        <section className={`cro-complete-section ${styles.tryLayout}`} id="uitproberen">
          <div>
            <h2>Probeer het met een gesprek dat u vaak voert</h2>
            <ol>
              <li>Vertel uw audioloog waar u last hebt van achtergrondgeluid en welke stem u wilt volgen.</li>
              <li>Vergelijk in dezelfde situatie hoe het gesprek klinkt met verschillende instellingen.</li>
              <li>Let op wat u verstaat, hoeveel moeite het kost en welke omgevingsgeluiden u nog wilt horen.</li>
            </ol>
          </div>
          <Image src="/images/audicien-aan-huis/uitslag-bespreken.webp" alt="Audioloog bespreekt een hoortest met een klant" width={760} height={510} />
        </section>
        <section className="cro-complete-section" id="vragen">
          <h2>Veelgestelde vragen over Smart Noise Reduction</h2>
          {questions.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}
        </section>
        <section className="cro-complete-section cro-complete-appointment" id="afspraak">
          <div><h2>Zelf horen wat het verschil is?</h2><p>Vertel ons in welke situaties rumoer u afleidt. Uw audioloog helpt u de geschikte toestellen te vergelijken en vrijblijvend uit te proberen.</p></div>
          <div className="cro-complete-form"><h3>Vraag uw afspraak aan</h3><CompactAppointmentForm interest="Bernafon Smart Noise Reduction" /></div>
        </section>
    </>
  );
}
