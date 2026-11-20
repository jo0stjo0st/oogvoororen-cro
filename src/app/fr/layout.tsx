import { FrenchGuideFooter, FrenchGuideHeader } from "./guide-site-shell";
import { AppointmentRequest } from "@/features/appointments/appointment-request-nl";
import styles from "../hoortoestellen/keuzehulp/guide.module.css";

export default function FrenchLayout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="fr">
      <a className="skip-link" href="#main-content">Aller au contenu</a>
      <FrenchGuideHeader />
      <main id="main-content" className={styles.guide}>
        {children}
        <section id="afspraak" className={styles.appointment}>
          <div className={`${styles.wrap} ${styles.split} ${styles.appointmentGrid}`}>
            <div>
              <p className={styles.kicker}>Un conseil auditif personnalisé avec Oogvoororen</p>
              <h2>Vous préférez prendre rendez-vous avec un audiologue ?</h2>
              <p>Le bilan auditif et les conseils sont sans engagement. Nous discutons de ce que vous aimeriez mieux comprendre et des appareils qui peuvent vous aider.</p>
              <ul className={styles.benefits}>
                <li><strong>Les grandes marques d’appareils auditifs</strong><span>Un choix adapté à votre audition, à votre quotidien et à votre budget.</span></li>
                <li><strong>À domicile ou en centre auditif</strong><span>Vous choisissez le lieu. Les visites à domicile se font sans frais de déplacement.</span></li>
                <li><strong>Un essai sans engagement</strong><span>Essayez vos appareils dans vos situations habituelles.</span></li>
                <li><strong>Cinq ans de service et de garantie à l’achat</strong><span>Nous restons disponibles pour les réglages et le suivi.</span></li>
              </ul>
            </div>
            <div className="cro-appointment-form-card">
              <div className="cro-appointment-form-head">
                <h3>Demander un rendez-vous</h3>
                <span>Nous vous rappelons pour fixer le rendez-vous avec vous.</span>
              </div>
              <AppointmentRequest locale="fr" />
            </div>
          </div>
        </section>
      </main>
      <FrenchGuideFooter />
    </div>
  );
}
