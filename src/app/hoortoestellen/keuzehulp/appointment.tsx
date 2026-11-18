import { AppointmentRequest } from "@/features/appointments/appointment-request-nl";
import styles from "./guide.module.css";

export function GuideAppointment() {
  return (
    <section id="afspraak" className={styles.appointment}>
      <div className={`${styles.wrap} ${styles.split} ${styles.appointmentGrid}`}>
        <div>
          <p className={styles.kicker}>Persoonlijk hooradvies van Oogvoororen</p>
          <h2>Liever direct een afspraak maken met de audicien?</h2>
          <p>Bij Oogvoororen begint u met een vrijblijvende hoortest en persoonlijk advies. We bespreken wat u beter wilt verstaan en welke hoortoestellen daarbij passen.</p>
          <ul className={styles.benefits}>
            <li><strong>Keuze uit alle bekende A-merken</strong><span>Samen kiest u wat past bij uw gehoor, dagelijks leven en budget.</span></li>
            <li><strong>Bij u thuis of in een hoorcentrum</strong><span>U kiest zelf waar u afspreekt. Aan huis rekenen we geen voorrijkosten.</span></li>
            <li><strong>Vrijblijvend uitproberen</strong><span>Ervaar thuis en onderweg wat de toestellen voor u doen.</span></li>
            <li><strong>Vijf jaar service en garantie bij aankoop</strong><span>Ook na uw aankoop kunt u bij ons terecht voor hulp en bijstellingen.</span></li>
          </ul>
        </div>
        <div className="cro-appointment-form-card">
          <div className="cro-appointment-form-head">
            <h3>Vraag een afspraak aan</h3>
            <span>We bellen u om de afspraak samen in te plannen.</span>
          </div>
          <AppointmentRequest />
        </div>
      </div>
    </section>
  );
}
