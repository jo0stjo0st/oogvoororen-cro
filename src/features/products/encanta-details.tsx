import Image from "next/image";
import { euro, product } from "./data";

const levels = [
  { name: "Encanta 400 Pro", score: 5, description: "Beste spraakverstaan in rumoer binnen de serie · volgt hoofd- en lichaamsbewegingen · meest uitgebreide demping van plotse geluiden · tot 12 dB rumoerreductie" },
  { name: "Encanta 300 Engage", score: 4, description: "Voor gesprekken in gezelschap · past de richting aan bij beweging · dempt plotse geluiden · tot 10 dB rumoerreductie" },
  { name: "Encanta 200 Go", score: 2, description: "Voor rustige gesprekken en dagelijkse situaties · dempt plotse geluiden · tot 8 dB rumoerreductie" },
];

const specs = [
  { title: "Algemeen", rows: [
    ["Releasejaar", "2024"], ["Oplaadbaar", "Ja"], ["Batterijtype", "Lithium-ion"],
    ["Batterijduur", "Verwacht: circa 24 uur, afhankelijk van gebruik"],
    ["Volumeregelaar", "Ja"], ["Programmaschakelaar", "Ja"], ["Ringleiding", "Ja, via luisterspoel"],
    ["Kanalen", "24"], ["Aanpasbanden", "24"], ["Frequentiebandbreedte", "10 kHz"],
    ["Luisterprogramma’s", "4"], ["Stof- en vochtbestendigheid", "IP68"],
    ["Android", "Ja, met compatibele toestellen"], ["Apple", "Ja, met compatibele toestellen"],
    ["Bluetooth Auracast", "Niet vermeld als beschikbaar op de Oogvoororen-productpagina"],
  ] },
  { title: "Audiologisch", rows: [
    ["Adaptieve directionaliteit", "Ja, met Smart Directionality"], ["Binaurale directionaliteit", "Ja"],
    ["Ruimtelijke oriëntatie", "Ja"], ["360°-spraakverstaan", "Ja"], ["Ruisonderdrukking", "Ja"],
    ["Rumoeronderdrukking", "Smart Noise Reduction, tot 12 dB"],
    ["Spraakherkenning", "Ja"], ["Versterking van zachte spraak", "Ja"],
    ["Aanpassing aan de luisteromgeving", "Ja, met Smart Sensor"], ["Windruisonderdrukking", "Ja"],
    ["Demping van plotse geluiden", "Transient Noise Reduction"], ["Muziekprogramma", "Music Experience"],
    ["Communicatie tussen beide toestellen", "Ja"], ["Tinnitusmaskeerder", "Tinnitus SoundSupport"],
    ["CROS-compatibiliteit", "Ja"],
  ] },
  { title: "Extra functies", rows: [
    ["Online aanpasbaar", "Ja"], ["Tikbediening (Tap Control)", "Ja"], ["Gezondheidsfuncties", "Nee"],
  ] },
];

const brochure = "https://damcdn.demant.com/4d8e5d6b-38ad-473a-b056-b108009df458/274504NL_BE_CBR_Encanta%20MNR%20T_24.1_Original%20file.pdf";
const manual = "https://cdn.oogvoororen.nl/9QOYW1bxVofsYTIAML9vsBNseuWDXpaGR6lwNE2O.pdf";
const datasheet = "https://cdn.oogvoororen.nl/J4UZ10kkl4T8X8fuYtfivcB4fY1KJmbeB3uKCNk3.pdf";

export function EncantaTechnicalDetails() {
  return (
    <section className="cro-complete-section" id="specificaties">
      <h2>Welke Encanta past bij u?</h2>
      <p>Sterren geven het technologieniveau binnen de Encanta-serie aan.</p>
      <div className="cro-complete-levels">
        {levels.map(({ name, score, description }) => (
          <article key={name}>
            <h3>{name}</h3>
            <span className="encanta-stars" role="img" aria-label={`${score} van 5 sterren`}>
              {"★".repeat(score)}<span>{"☆".repeat(5 - score)}</span>
            </span>
            <p>{description}</p>
          </article>
        ))}
      </div>
      <details>
        <summary>Bekijk alle technische specificaties</summary>
        <div className="cro-complete-table">
          <table aria-label="Specificaties van de Bernafon Encanta 400 Pro miniRITE">
            {specs.map(group => (
              <tbody key={group.title}>
                <tr><th colSpan={2} className="encanta-spec-group">{group.title}</th></tr>
                {group.rows.map(([label, value]) => (
                  <tr key={label}><th scope="row">{label}</th><td>{value}</td></tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </details>
      <details>
        <summary>Handleidingen en productdocumenten</summary>
        <div className="download-links">
          <a href={brochure}>Consumentenbrochure (PDF) ↓</a>
          <a href={manual}>Handleiding Encanta miniRITE (PDF) ↓</a>
        </div>
      </details>
    </section>
  );
}

const store = "https://oogvoororen.be/webshop/";
const photos = "https://cdn.oogvoororen.nl/";
const accessories = [
  { name: "TV-A Adapter", path: "tv-hulpmiddelen/bernafon/bernafon-tv-a-tv-adapter", photo: "49b6b35ff625296ea9eeb8e15a431aab-400.webp" },
  { name: "SoundClip-A", path: "telefonie/bernafon/bernafon-soundclip-a", photo: "5004f0d7eaa1fbfa05a8d0c3f3d21681-400.webp" },
  { name: "RC-A Remote Control", path: "afstandbedieningen/bernafon/bernafon-rc-a", photo: "d706e54920a7889699727e1062dc4b6b-400.webp" },
  { name: "Desk Charger", path: "opladers/bernafon/desk-charger-1", photo: "UH0pGt7WsefYq5gVBAb7yB4QbHkVLhsHKBYMHigI-400.webp" },
  { name: "Charger Plus miniRITE", path: "opladers/bernafon/charger-plus-minirite", photo: "wT6qIXOlzAKEsIahkFiJUi8cqAvpaFtppYuBDZLl-400.webp" },
  { name: "Easy LE Adapter", path: "telefonie/bernafon/bernafon-easy-le-adapter", photo: "kwuigXBWAfXz981ih2wnmp2m8BXyxmBARoKLMM2V-400.webp" },
];

const maintenance = [
  ["miniFit-domes", "domes"],
  ["ProWax miniFit-filters", "filters/oticon/oticon-prowax-minifit"],
  ["ProWax-filters", "filters/oticon/oticon-prowax"],
  ["Reinigings- en onderhoudsartikelen", "onderhoudsartikelen"],
  ["miniFit Detect-receivers", "receivers"],
];

export function EncantaAccessories() {
  return (
    <section className="cro-complete-section" id="accessoires">
      <h2>Accessoires bij uw Encanta</h2>
      <div className="cro-complete-accessories">
        {accessories.map(({ name, path, photo }) => {
          const accessory = product.accessories.find(item => item.name === name);
          return (
            <article key={name}>
              <a href={store + path} className="encanta-accessory-link">
                <Image unoptimized src={photos + photo} alt="" width={180} height={140} />
                <h3>{name}</h3>
              </a>
              <p>{accessory?.note}</p>
              <strong>{name === "Desk Charger" ? "Inbegrepen bij het toestel" : accessory && euro(accessory.price)}</strong>
            </article>
          );
        })}
      </div>
      <details>
        <summary>Onderhoud en vervangende onderdelen</summary>
        <h3>Bestellen in de webshop</h3>
        <p>Controleer welk type filter, dome of receiver op uw toestel zit. Laat maatwerk-oorstukjes zo nodig door uw audioloog nakijken.</p>
        <ul className="encanta-maintenance">
          {maintenance.map(([name, path]) => <li key={name}><a href={store + path}>{name} →</a></li>)}
        </ul>
        <h3>Instructievideo’s</h3>
        <p><a href="https://oogvoororen.be/video-cursus/oticon/onderhoud-oticon-ric-modellen">Bekijk de instructievideo’s voor de RIC-onderdelen →</a></p>
      </details>
    </section>
  );
}

export function EncantaProfessionals() {
  return (
    <section className="cro-complete-section" id="voor-audiciens" aria-labelledby="encanta-professionals-title">
      <details className="encanta-professionals">
        <summary>
          <h2 id="encanta-professionals-title">Voor audiciens</h2>
          <span className="encanta-professionals-toggle" aria-hidden="true" />
        </summary>
        <div className="download-links">
          <a href={datasheet}>Specsheet Encanta miniRITE (PDF) ↓</a>
          <a href="/downloads/bernafon-encanta-minirite-aanpasbereik.pdf" download>Aanpasbereik per receiver (PDF) ↓</a>
        </div>
        <h3>Tips &amp; tricks</h3>
        <div className="encanta-professional-faq">
          <h4>Welke receiver kies ik?</h4>
          <p>Vergelijk het audiogram met het aanpasbereik van de 60-, 85-, 100- of 105-receiver. Houd rekening met de gekozen akoestische koppeling en verifieer de versterking op het oor.</p>
        </div>
        <div className="encanta-professional-faq">
          <h4>Hoe stel ik de demping van plotse geluiden af?</h4>
          <p>De 400 biedt zes instellingen voor Transient Noise Reduction. Bespreek bij welke geluiden de drager last ervaart en beoordeel bij een bijstelling het effect op comfort en verstaan.</p>
        </div>
        <div className="encanta-professional-faq">
          <h4>Wat kan ik aanpassen voor gesprekken in rumoer?</h4>
          <p>Vergelijk de instellingen voor Smart Directionality en de Speech and Noise Balancer. Gebruik een herkenbare gesprekssituatie om samen te beoordelen hoeveel nadruk op spraak prettig is.</p>
        </div>
        <div className="encanta-professional-faq">
          <h4>Hoe maak ik een instelling voor muziekluisteraars?</h4>
          <p>Probeer het programma Music Experience en laat de drager luisteren naar een bekend muziekfragment. Bespreek of de balans en het volume prettig zijn.</p>
        </div>
        <div className="cro-complete-included encanta-jobs">
          <div>
            <h3>Nieuwsgierig of er vacatures bij ons beschikbaar zijn?</h3>
            <a className="cro-complete-cta" href="https://oogvoororen.be/vacatures">Bekijk onze 8 vacatures →</a>
          </div>
        </div>
      </details>
    </section>
  );
}
