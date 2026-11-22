import Image from "next/image";
import Link from "next/link";
import { CompactAppointmentForm } from "@/features/appointments/compact-form";
import styles from "@/app/hoortoestellen/keuzehulp/guide.module.css";

const guide = "/be/hoorapparaten/keuzehulp";

export default function FlemishGuideLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="cro-appointment-header">
        <div className="wide cro-appointment-header-inner">
          <Link href={guide}>
            <Image src="/assets/logo-white.svg" alt="Oogvoororen" width={207} height={50} />
          </Link>
          <nav aria-label="Vlaamse koopgids">
            <Link href={guide}>Koopgids</Link>
            <Link href="/be/tegemoetkoming">Tegemoetkoming</Link>
          </nav>
          <a className="cro-appointment-header-phone" href="tel:+3214480179">014 48 01 79</a>
        </div>
      </header>
      <main id="main-content" className={styles.guide}>
        {children}
        <section id="afspraak" className={styles.appointment}>
          <div className={`${styles.wrap} ${styles.split} ${styles.appointmentGrid}`}>
            <div>
              <p className={styles.kicker}>Persoonlijk hooradvies in Vlaanderen</p>
              <h2>Maak vrijblijvend een afspraak met een audioloog</h2>
              <p>We bespreken wat u beter wilt verstaan, welke hoorapparaten daarbij passen en hoe u een tegemoetkoming kunt aanvragen.</p>
              <ul className={styles.benefits}>
                <li><strong>Keuze uit bekende A-merken</strong><span>Advies op basis van uw gehoor, dagelijks leven en budget.</span></li>
                <li><strong>Aan huis of in een hoorcentrum</strong><span>We bespreken vooraf welke afspraken in uw situatie thuis kunnen.</span></li>
                <li><strong>Vrijblijvend uitproberen</strong><span>Ervaar het verschil in uw eigen luisteromgeving.</span></li>
                <li><strong>Vijf jaar service en garantie bij aankoop</strong><span>Ook na uw aankoop helpen we met bijstellingen en nazorg.</span></li>
              </ul>
            </div>
            <div className="cro-appointment-form-card">
              <div className="cro-appointment-form-head"><h3>Vraag persoonlijk hooradvies aan</h3></div>
              <div className={styles.callout}><CompactAppointmentForm interest="Koopgids Vlaanderen" /></div>
            </div>
          </div>
        </section>
      </main>
      <footer className="cro-site-footer">
        <div className="wide">
          <div className="cro-site-footer-grid">
            <div><Image src="/assets/logo.svg" alt="Oogvoororen" width={205} height={48} /><p>Persoonlijke hoorzorg in Vlaanderen.</p></div>
            <div>
              <h3>Uw eerste hoorapparaten</h3>
              <Link href={guide}>Vlaamse koopgids</Link>
              <Link href="/be/tegemoetkoming">Tegemoetkoming via uw mutualiteit</Link>
              <Link href="/experimenten/audicien-aan-huis">Audioloog aan huis</Link>
            </div>
            <div>
              <h3>Contact</h3>
              <a href="tel:+3214480179">014 48 01 79</a>
              <a href="#afspraak">Maak een afspraak</a>
            </div>
          </div>
          <div className="cro-site-footer-bottom">
            <span>© Oogvoororen</span><span>Demoversie</span>
            <Link href="/hoortoestellen/keuzehulp">Koopgids Nederland</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
