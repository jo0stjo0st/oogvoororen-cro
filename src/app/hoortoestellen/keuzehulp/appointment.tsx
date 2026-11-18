import { AppointmentRequest } from "@/features/appointments/appointment-request-nl";
import styles from "./guide.module.css";

export function GuideAppointment() {
  return (
    <section id="afspraak" className={styles.appointment}>
      <div className={`${styles.wrap} ${styles.split}`}>
        <div>
          <p className={styles.kicker}>Persoonlijk hooradvies van Oogvoororen</p>
          <h2>Liever direct een afspraak maken met de audicien?</h2>
          <p>Vertel ons wat u beter wilt verstaan. Samen plannen we een vrijblijvende afspraak bij u thuis of in een van onze hoorcentra.</p>
          <a className={styles.action} href="https://oogvoororen.nl/afspraak">Maak een afspraak op Oogvoororen.nl →</a>
        </div>
        <div className="cro-appointment-form-card">
          <p className={styles.formNote}>Voorbeeldformulier. Gebruik de knop naar Oogvoororen.nl om een afspraak aan te vragen.</p>
          <AppointmentRequest />
        </div>
      </div>
    </section>
  );
}
