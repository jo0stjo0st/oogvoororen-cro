import Link from "next/link";
import { LabBar } from "@/components/lab-bar";
import { appointmentUrl } from "@/features/products/data";

const steps = [
  { number: "01", title: "We beginnen met uw gehoor", body: "Tijdens een hoortest en adviesgesprek bespreken we uw gehoor, wensen en dagelijkse situaties." },
  { number: "02", title: "Samen kiezen we een oplossing", body: "U kunt online toestellen vergelijken. Onze audicien adviseert welke mogelijkheden werkelijk bij uw gehoor passen." },
  { number: "03", title: "U krijgt persoonlijke begeleiding", body: "Als u een toestel gaat proberen, helpen we bij de afstelling, het gebruik en de nazorg." },
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
        <div className="cro-why-visual">
          <span>Persoonlijke aandacht</span>
          <strong>Bij u thuis of in een hoorcentrum</strong>
          <p>Voor de definitieve versie gebruiken we bij voorkeur een eigen foto van een audicien en klant.</p>
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
      <p>Een rustige introductie, één groot beeldvlak en drie opeenvolgende stappen. Geen herhaling van de losse voordelen uit het productblok. De belangrijkste boodschap is dat Oogvoororen de keuze begeleidt.</p>
    </section>
  </main></>;
}
