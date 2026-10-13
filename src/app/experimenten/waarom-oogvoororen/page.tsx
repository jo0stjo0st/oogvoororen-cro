import Link from "next/link";
import Image from "next/image";
import { LabBar } from "@/components/lab-bar";
import { appointmentUrl } from "@/features/products/data";

const steps = [
  { number: "01", title: "We beginnen met uw gehoor", body: "Tijdens een hoortest en adviesgesprek bespreken we uw gehoor, wensen en dagelijkse situaties." },
  { number: "02", title: "Samen kiezen we een oplossing", body: "Samen met de audicien bespreekt u welke hooroplossingen bij uw gehoor, wensen en dagelijkse situaties passen." },
  { number: "03", title: "Vrijblijvend proberen, 5 jaar zekerheid", body: "Tijdens de tweede afspraak start u vrijblijvend met uw proefperiode. We stellen het hoorapparaat zorgvuldig af. Na aanschaf profiteert u van 5 jaar service, nazorg en garantie volgens de voorwaarden." },
];
export default function WhyPage() {
  return <><LabBar /><main className="wide cro-why-page">
    <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
    <p className="eyebrow">Hoofdstuk 4 - voorstel voor de productpagina</p>
    <h1>Waarom kiezen voor Oogvoororen?</h1>
    <p>Dit zelfstandige blok is bedoeld voor direct onder het productgedeelte.</p>
    <section className="cro-why-panel">
      <div className="cro-why-head">
        <p className="eyebrow">Persoonlijke hoorzorg</p>
        <h2>Een goed hoorapparaat begint met goed advies.</h2>
        <p>U hoeft nog niet te weten welk toestel het beste bij u past. Wij helpen u de juiste keuze te maken, met een hoortest en persoonlijke begeleiding.</p>
      </div>
      <div className="cro-why-content">
        <div className="cro-why-visual cro-why-real-photo">
          <Image unoptimized src="https://cdn.oogvoororen.nl/MFFSwTgW7xbsf2gcxH0UokxMywsFI72s4Mx9KKSB-800.webp" alt="Audicien voert een ooronderzoek uit bij een klant" width={800} height={450} />
          <div className="cro-why-photo-caption"><strong>Persoonlijk onderzocht.</strong><span>Deskundig geadviseerd.</span></div>
        </div>
        <div className="cro-why-steps">
          {steps.map(step => <div className="cro-why-step" key={step.number}>
            <span>{step.number}</span>
            <div><h3>{step.title}</h3><p>{step.body}</p></div>
          </div>)}
        </div>
      </div>
      <div className="cro-why-footer">
        <p>Persoonlijk advies, zonder dat u nu al een toestel hoeft te kiezen.</p>
        <Link href={appointmentUrl("original")} className="button cro-why-button">Plan mijn vrijblijvende hoortest</Link>
      </div>
    </section>
    <section className="section">
      <h2>Ontwerpgedachte</h2>
      <p>Een rustige introductie, een echte Oogvoororen-foto van het onderzoek, een tweede foto van het adviesgesprek en drie opeenvolgende stappen. Geen herhaling van de losse voordelen uit het productblok. De belangrijkste boodschap is dat Oogvoororen de keuze begeleidt.</p>
    </section>
  </main></>;
}
