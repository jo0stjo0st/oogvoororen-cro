import type { ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { euro, product } from "./data";

const levels = [
  { name: "Encanta 400 Pro", score: 5, description: "Beste spraakverstaan in rumoer binnen de serie · volgt hoofd- en lichaamsbewegingen · meest uitgebreide demping van plotse geluiden · tot 12 dB rumoerreductie" },
  { name: "Encanta 300 Engage", score: 4, description: "Voor gesprekken in gezelschap · past de richting aan bij beweging · dempt plotse geluiden · tot 10 dB rumoerreductie" },
  { name: "Encanta 200 Go", score: 2, description: "Voor rustige gesprekken en dagelijkse situaties · dempt plotse geluiden · tot 8 dB rumoerreductie" },
];

const specs: { title: string; rows: [string, ReactNode][] }[] = [
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
    ["Aanpassing aan de luisteromgeving", <>Ja, met <Link href="/experimenten/bernafon/smart-sensor" className="underline">Smart Sensor</Link></>], ["Windruisonderdrukking", "Ja"],
    ["Demping van plotse geluiden", <Link href="/experimenten/bernafon/transient-noise-reduction" className="underline">Transient Noise Reduction</Link>], ["Muziekprogramma", <Link href="/experimenten/bernafon/music-experience" className="underline">Music Experience</Link>],
    ["Communicatie tussen beide toestellen", "Ja"], ["Tinnitusmaskeerder", <Link href="/experimenten/bernafon/tinnitus-soundsupport" className="underline">Tinnitus SoundSupport</Link>],
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
                  <tr key={label}><th scope="row">{label}</th><td>{value === "Ja, met Smart Directionality" ? (
                    <>Ja, met <Link href="/experimenten/bernafon-smart-directionality" className="underline">Smart Directionality</Link></>
                  ) : value === "Smart Noise Reduction, tot 12 dB" ? (
                    <><Link href="/experimenten/bernafon-smart-noise-reduction" className="underline">Smart Noise Reduction</Link>, tot 12 dB</>
                  ) : value}</td></tr>
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
      <div className="mt-3 border-t border-[#dfe8e1] pt-5">
        <h3>Bernafon App</h3>
        <p>Regel het volume van uw hoorapparaten, wissel van luisterprogramma en bekijk het batterijniveau op uw smartphone.</p>
        <div className="flex flex-wrap gap-3">
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-current px-4 py-2 font-semibold"
            href="https://apps.apple.com/be/app/bernafon-app/id1597062293"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M17.1 12.3c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.7C7.2 7.6 5 9.5 5 12.9c0 2.5 1 5.1 2.2 6.7.6.8 1.2 1.6 2.1 1.6.9 0 1.3-.6 2.5-.6 1.3 0 1.7.6 2.7.6.9 0 1.5-.8 2.1-1.6.7-.9 1.2-2 1.5-3.1-.1 0-2.1-.8-2.1-3.2zM15 6.2c.5-.7.9-1.6.8-2.5-.8 0-1.8.6-2.4 1.2-.5.6-1 1.5-.9 2.4.9.1 1.8-.4 2.5-1.1z" />
            </svg>
            App Store (iOS)
          </a>
          <a
            className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-current px-4 py-2 font-semibold"
            href="https://play.google.com/store/apps/details?id=com.bernafon.bernafonapp&hl=nl"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
              <path fill="#4285F4" d="M3 3v18l9-9z" />
              <path fill="#34A853" d="M3 3l9 9 3.5-3.5L4.5 2.6a1 1 0 0 0-1.5.4z" />
              <path fill="#FBBC04" d="m12 12 3.5 3.5 4.9-2.6a1 1 0 0 0 0-1.8l-4.9-2.6z" />
              <path fill="#EA4335" d="m3 21 9-9 3.5 3.5-11 5.9A1 1 0 0 1 3 21z" />
            </svg>
            Google Play (Android)
          </a>
        </div>
      </div>
    </section>
  );
}

const store = "https://oogvoororen.be/webshop/";
const photos = "https://cdn.oogvoororen.nl/";
const accessories = [
  { name: "TV-A Adapter", note: "Stream het geluid van uw televisie rechtstreeks naar uw hoorapparaten, op het volume dat u prettig vindt.", path: "tv-hulpmiddelen/bernafon/bernafon-tv-a-tv-adapter", photo: "49b6b35ff625296ea9eeb8e15a431aab-400.webp" },
  { name: "SoundClip-A", note: "Handig voor één-op-ééngesprekken met achtergrondgeluid, bijvoorbeeld onderweg op de fiets. Uw gesprekspartner draagt de clip en u hoort diens stem rechtstreeks in uw hoorapparaten.", path: "telefonie/bernafon/bernafon-soundclip-a", photo: "5004f0d7eaa1fbfa05a8d0c3f3d21681-400.webp" },
  { name: "RC-A Remote Control", note: "Regel het volume en wissel van luisterprogramma met één druk op de knop. U hoeft uw telefoon er niet bij te pakken.", path: "afstandbedieningen/bernafon/bernafon-rc-a", photo: "d706e54920a7889699727e1062dc4b6b-400.webp" },
  { name: "Desk Charger", note: "De standaardoplader voor uw Encanta miniRITE.", path: "opladers/bernafon/desk-charger-1", photo: "UH0pGt7WsefYq5gVBAb7yB4QbHkVLhsHKBYMHigI-400.webp" },
  { name: "Charger Plus miniRITE", note: "Reisoplader met ingebouwde powerbank. Laad uw hoorapparaten ook onderweg op, zonder stopcontact.", path: "opladers/bernafon/charger-plus-minirite", photo: "wT6qIXOlzAKEsIahkFiJUi8cqAvpaFtppYuBDZLl-400.webp" },
  { name: "Easy LE Adapter", note: "Stream audio rechtstreeks naar uw hoorapparaten vanaf een compatibel apparaat met een USB-C-aansluiting.", path: "telefonie/bernafon/bernafon-easy-le-adapter", photo: "kwuigXBWAfXz981ih2wnmp2m8BXyxmBARoKLMM2V-400.webp" },
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
        {accessories.map(({ name, path, photo, note }) => {
          const accessory = product.accessories.find(item => item.name === name);
          return (
            <article key={name}>
              <a href={store + path} className="encanta-accessory-link">
                <Image unoptimized src={photos + photo} alt="" width={180} height={140} />
                <h3>{name}</h3>
              </a>
              <p>{note}</p>
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
        <details className="encanta-professional-faq">
          <summary>Welke receiver kies ik?</summary>
          <p>Vergelijk het audiogram met het aanpasbereik van de 60-, 85-, 100- of 105-receiver. Houd rekening met de gekozen akoestische koppeling en verifieer de versterking op het oor.</p>
        </details>
        <details className="encanta-professional-faq">
          <summary>Hoe stel ik de demping van plotse geluiden af?</summary>
          <p>De 400 biedt zes instellingen voor Transient Noise Reduction. Bespreek bij welke geluiden de drager last ervaart en beoordeel bij een bijstelling het effect op comfort en verstaan.</p>
        </details>
        <details className="encanta-professional-faq">
          <summary>Wat kan ik aanpassen voor gesprekken in rumoer?</summary>
          <p>Vergelijk de instellingen voor <Link href="/experimenten/bernafon-smart-directionality">Smart Directionality</Link> en de Speech and Noise Balancer. Gebruik een herkenbare gesprekssituatie om samen te beoordelen hoeveel nadruk op spraak prettig is.</p>
        </details>
        <details className="encanta-professional-faq">
          <summary>Hoe maak ik een instelling voor muziekluisteraars?</summary>
          <p>Probeer het programma Music Experience en laat de drager luisteren naar een bekend muziekfragment. Bespreek of de balans en het volume prettig zijn.</p>
        </details>
        <details className="encanta-professional-faq">
          <summary>Hoe vergelijk ik twee instellingen bij hetzelfde luisterfragment? (Demo)</summary>
          <p>In dit fictieve voorbeeld zet u de huidige instelling naast een proefinstelling. U speelt hetzelfde gespreksfragment voor beide af en noteert bij welke versie de drager de stem makkelijker volgt.</p>
          <figure className="encanta-software-demo">
            <div className="encanta-software-bar"><strong>Aanpasdemo</strong><span>Fictieve software</span></div>
            <div className="encanta-software-content">
              <h4>Luistervergelijking</h4>
              <dl>
                <div><dt>A · Huidige instelling</dt><dd>Standaard spraakfocus</dd></div>
                <div><dt>B · Proefinstelling</dt><dd>Extra spraakfocus</dd></div>
              </dl>
              <p><strong>Luisterfragment</strong> · Gesprek aan tafel</p>
            </div>
            <figcaption>Schermmock-up met voorbeeldinstellingen. De namen en de werkwijze zijn verzonnen.</figcaption>
          </figure>
        </details>
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
