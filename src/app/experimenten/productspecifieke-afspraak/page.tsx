import Link from "next/link";
import Image from "next/image";
import {AppointmentForm} from "@/features/appointments/form";
import {product} from "@/features/products/data";
export default function AppointmentChapter(){
 return <main className="wide cro-booking-page">
  <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
  <p className="eyebrow">Hoofdstuk 11 · productspecifieke afspraak</p>
  <h1>Persoonlijk hooradvies aanvragen</h1>
  <p>De klant komt vanaf de productpagina. We onthouden het bekeken toestel, zonder te suggereren dat de klant dit toestel al heeft gekozen.</p>
  <div className="cro-booking-layout">
   <div className="cro-booking-explainer">
    <h2>Goed horen begint met persoonlijk advies</h2>
    <p>Vertel ons hoe we u kunnen bereiken. We bespreken uw wensen en maken samen een afspraak voor een hoortest en advies.</p>
    <div className="cro-booking-product"><Image src={product.image} alt="" width={112} height={112}/><div><span>U bekeek dit hoorapparaat</span><strong>{product.name}</strong><p>We nemen dit mee in het gesprek. U hoeft nu nog niets te kiezen.</p></div></div>
    <h3>Hoe werkt het?</h3>
    <ol className="cro-booking-steps"><li>We nemen contact met u op om uw wensen te bespreken.</li><li>We plannen een afspraak voor een hoortest en persoonlijk advies.</li><li>Daarna bespreekt u samen met de audicien welke toestellen passend zijn.</li></ol>
    <div className="cro-booking-assurance"><strong>Geen aankoopverplichting</strong><p>Het formulier is een aanvraag voor persoonlijk hooradvies, geen bestelling van een hoorapparaat.</p></div>
   </div>
   <div className="cro-booking-form"><h2>Vraag uw afspraak aan</h2><AppointmentForm interest={product.slug} variant="variant-a" kind="afspraak"/></div>
  </div>
  <section className="section"><h2>Wat testen we hier?</h2><p>Het toestel wordt als context meegenomen en is zichtbaar voor de bezoeker. De primaire actie blijft persoonlijk hooradvies. De demo verstuurt of bewaart geen gegevens. Voor de echte website kunnen de bestaande afsprakenflow en gegevensverwerking worden aangesloten.</p></section>
 </main>;
}
