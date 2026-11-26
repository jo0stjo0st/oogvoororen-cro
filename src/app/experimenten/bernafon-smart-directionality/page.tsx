import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ProductSiteFooter, ProductSiteHeader } from "@/components/product-site-shell";
import { CompactAppointmentForm } from "@/features/appointments/compact-form";
import { ListeningScenes } from "./listening-scenes";
import styles from "./page.module.css";

const productPage = "/experimenten/complete-productpagina";

export const metadata: Metadata = {
  title: "Bernafon Smart Directionality uitgelegd | Oogvoororen",
  description: "Ontdek hoe Bernafon Encanta geluid uit verschillende richtingen verwerkt, wat Smart Sensor toevoegt en welk model bij uw luistersituaties past.",
};

const levels = [
  ["Encanta 100 Connect", "Smart Directionality niet beschikbaar", "Een brede luisterstand vangt geluid uit alle richtingen op. Er is wel adaptieve directionaliteit als afzonderlijke richtingmodus."],
  ["Encanta 200 Go", "Smart Directionality", "Helpt vooral bij één-op-ééngesprekken in rumoer. Het toestel kan nagaan uit welke richting lawaai komt. Dit niveau heeft geen Smart Sensor."],
  ["Encanta 300 Engage", "Smart Directionality + Smart Sensor", "Voor gesprekken met wisselende sprekers. Het toestel kan hoofd- en lichaamsbeweging gebruiken om de luisterrichting en rumoeronderdrukking aan te passen."],
  ["Encanta 400 Pro", "Smart Directionality + Smart Sensor", "De meeste instelmogelijkheden binnen deze serie. Geschikt om te vergelijken wanneer u vaak in drukke en wisselende gesprekssituaties zit."],
];

const questions = [
  ["Moet ik Smart Directionality zelf inschakelen?", "Dat hangt af van de instellingen en het luisterprogramma dat uw audioloog heeft gekozen. In een passend automatisch programma kan het toestel de richting zelf aanpassen. Vraag bij de afstelling welke programma’s u hebt en wanneer u ze gebruikt."],
  ["Moet ik mijn hoofd altijd naar de spreker draaien?", "Kijk uw gesprekspartner aan wanneer dat kan. Dat helpt u om gezichtsuitdrukkingen mee te nemen en geeft de microfoons vaak een gunstige positie. Bij de 300 en 400 kan Smart Sensor beweging meenemen wanneer u van gesprekspartner wisselt."],
  ["Hoor ik met een richtingmicrofoon nog wat naast of achter mij gebeurt?", "Geluid uit andere richtingen kan minder nadruk krijgen. In een brede luisterstand blijft meer van de omgeving hoorbaar. Uw audioloog kan met u nagaan welke balans prettig is, bijvoorbeeld in een gesprek aan tafel of onderweg."],
  ["Werkt dit ook bij galm of als iedereen tegelijk praat?", "Het helpt vooral als spraak en storend geluid uit verschillende richtingen komen. Als meerdere stemmen door elkaar praten, lawaai uit dezelfde richting komt of een ruimte sterk galmt, kan verstaan lastig blijven."],
  ["Kan ik het verschil vóór aankoop ervaren?", "Ja. Bespreek een situatie die u lastig vindt, zoals een etentje of een vergadering, en vraag welke Encanta-modellen u kunt vergelijken. Probeer de hoorapparaten ook uit in uw eigen omgeving."],
];

export default function Page() {
  return (
    <>
      <ProductSiteHeader />
      <main id="main-content" className="wide cro-complete-page">
        <nav aria-label="Broodkruimel" className="cro-complete-back">
          <Link href={`${productPage}#specificaties`}>← Terug naar de Encanta 400 Pro</Link>
        </nav>
        <section className={styles.hero}>
          <div>
            <p className="eyebrow">Technologie in uw hoorapparaat</p>
            <h1>Bernafon Smart Directionality</h1>
            <p className="cro-complete-lead">Aan een drukke tafel wilt u vooral volgen wat uw gesprekspartner zegt. Smart Directionality laat uw hoorapparaten de nadruk aanpassen aan de richting waaruit geluid komt. Zo kan een gesprek beter te volgen zijn als er tegelijk geroezemoes om u heen is.</p>
            <a className="cro-complete-cta" href="#luistersituaties">Bekijk hoe het werkt ↓</a>
          </div>
          <Image src="/images/audicien-aan-huis/advies-aan-huis.webp" alt="Een audioloog laat een hoorapparaat zien tijdens een adviesgesprek" width={760} height={510} priority />
        </section>

        <nav className={styles.contents} aria-label="Op deze pagina">
          <a href="#werking">Hoe werkt het?</a>
          <a href="#luistersituaties">Luistersituaties</a>
          <a href="#verschillen">Verschillen per model</a>
          <a href="#uitproberen">Zelf uitproberen</a>
          <a href="#vragen">Veelgestelde vragen</a>
        </nav>

        <section className="cro-complete-section" id="werking">
          <h2>Van breed luisteren naar gerichte aandacht</h2>
          <div className="cro-complete-cards">
            <article><h3>De microfoons vangen geluid op</h3><p>De microfoons van het hoorapparaat krijgen geluid uit verschillende richtingen binnen. Door hun signalen te combineren, kan het toestel geluid uit de ene richting meer nadruk geven dan geluid uit een andere richting.</p></article>
            <article><h3>De richting kan mee veranderen</h3><p>Smart Directionality beoordeelt de richting van het storende geluid. Daardoor kan het hoorapparaat de microfoons gerichter inzetten wanneer rumoer een gesprek moeilijker maakt.</p></article>
            <article><h3>Beweging geeft extra informatie</h3><p>Op de Encanta 300 en 400 gebruikt Smart Sensor ook hoofd- en lichaamsbeweging. Dat kan helpen om de instellingen aan te passen als u van één gesprekspartner naar een bredere groep overschakelt.</p></article>
          </div>
          <div className={styles.note}>
            <h3>Directionaliteit en rumoeronderdrukking werken samen</h3>
            <p>Directionaliteit gaat over <strong>waar</strong> het geluid vandaan komt. Smart Noise Reduction helpt achtergrondgeluid te dempen. Smart Sensor kan op de 300 en 400 de instellingen van beide aanpassen op basis van beweging. Het zijn verschillende functies die elkaar aanvullen.</p>
          </div>
        </section>

        <section className="cro-complete-section" id="luistersituaties">
          <h2>Hoe verandert de nadruk per gesprek?</h2>
          <p>Kies een situatie om te zien waarom breed luisteren soms nuttig is en gerichter luisteren op andere momenten kan helpen.</p>
          <ListeningScenes />
        </section>

        <section className="cro-complete-section" id="verschillen">
          <h2>Welke Encanta heeft Smart Directionality?</h2>
          <div className="cro-complete-table">
            <table>
              <thead><tr><th scope="col">Model</th><th scope="col">Technologie</th><th scope="col">Wat betekent dat voor u?</th></tr></thead>
              <tbody>{levels.map(([model, technology, meaning]) => (
                <tr key={model}><th scope="row">{model}</th><td>{technology}</td><td>{meaning}</td></tr>
              ))}</tbody>
            </table>
          </div>
          <p><Link href={`${productPage}#specificaties`}>Vergelijk de Encanta-modellen op de productpagina →</Link></p>
        </section>

        <section className={`cro-complete-section ${styles.tryLayout}`} id="uitproberen">
          <div>
            <h2>Probeer het in een situatie die u kent</h2>
            <p>Neem een concrete situatie mee naar uw afspraak. Bijvoorbeeld een etentje waarbij u degene tegenover u hoort, maar moeite hebt om iemand verderop te verstaan.</p>
            <ol>
              <li>Beschrijf waar uw gesprekspartner zit en waar het lawaai vandaan komt.</li>
              <li>Vergelijk waar mogelijk een rustig gesprek en een gesprek met achtergrondgeluid.</li>
              <li>Let tijdens het proberen op verstaan, luisterinspanning en hoeveel u van de omgeving mee krijgt.</li>
            </ol>
            <p>Uw gehoor, de pasvorm en instellingen bepalen mee wat u merkt. Een audioloog kan met u beoordelen of gerichter luisteren in uw dagelijkse situaties iets toevoegt.</p>
          </div>
          <Image src="/images/audicien-aan-huis/uitslag-bespreken.webp" alt="Audioloog bespreekt de resultaten van een hoortest met een klant" width={760} height={510} />
        </section>

        <section className="cro-complete-section" id="vragen">
          <h2>Veelgestelde vragen over Smart Directionality</h2>
          {questions.map(([question, answer]) => (
            <details key={question}><summary>{question}</summary><p>{answer}</p></details>
          ))}
        </section>

        <section className="cro-complete-section cro-complete-appointment" id="afspraak">
          <div>
            <h2>Zelf horen wat het verschil is?</h2>
            <p>Vertel ons wanneer u moeite hebt met verstaan. Uw audioloog helpt u om de juiste toestellen te vergelijken en vrijblijvend uit te proberen.</p>
          </div>
          <div className="cro-complete-form"><h3>Vraag uw afspraak aan</h3><CompactAppointmentForm interest="Bernafon Smart Directionality" /></div>
        </section>
      </main>
      <ProductSiteFooter />
    </>
  );
}
