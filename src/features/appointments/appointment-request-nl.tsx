"use client";

import { useState, type FormEvent } from "react";

export function AppointmentRequest(){
 const [sent,setSent]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const phone=String(fd.get("phone")||"").replace(/[\s()./-]/g,"");
  if(!/^(?:\+31|0031|0)[1-9]\d{8}$/.test(phone)){setError("Vul een geldig Nederlands telefoonnummer in.");return;}
  setError("");setSent(true);
 }
 if(sent)return <div className="cro-appointment-preview-success" role="status"><span aria-hidden="true">✓</span><h3>Zo ziet de bevestiging eruit</h3><p>Uw gegevens zijn niet verzonden. Dit is een demoformulier.</p><button type="button" onClick={()=>setSent(false)}>Formulier opnieuw bekijken</button></div>;
 return <form className="cro-appointment-request-form" onSubmit={submit}>
  <fieldset className="cro-appointment-choices"><legend>Waar wilt u geholpen worden?</legend><div className="cro-appointment-choice-grid">
   <label><input type="radio" name="location" value="thuis" defaultChecked/><span><strong>⌂ &nbsp; Bij mij thuis</strong><small>De audicien komt naar u toe</small></span></label>
   <label><input type="radio" name="location" value="hoorcentrum"/><span><strong>▣ &nbsp; In een hoorcentrum</strong><small>Op een locatie in de buurt</small></span></label>
   <label><input type="radio" name="location" value="overleg"/><span><strong>♡ &nbsp; In overleg</strong><small>Ik weet het nog niet</small></span></label>
  </div></fieldset>
  <div className="cro-appointment-fields"><label>Voornaam <input name="firstName" autoComplete="given-name" required placeholder="Uw voornaam"/></label><label>Achternaam <input name="lastName" autoComplete="family-name" required placeholder="Uw achternaam"/></label><label>Telefoonnummer <input name="phone" autoComplete="tel" type="tel" required placeholder="06 12345678" aria-invalid={Boolean(error)}/></label><label>Postcode <input name="postcode" autoComplete="postal-code" required pattern="[1-9][0-9]{3}\s?[A-Za-z]{2}" title="Bijvoorbeeld 1234 AB" placeholder="1234 AB"/></label><label className="cro-appointment-full">E-mailadres <span className="cro-appointment-optional">(optioneel)</span><input name="email" autoComplete="email" type="email" placeholder="naam@voorbeeld.nl"/></label><label className="cro-appointment-full">Wilt u iets toelichten? <span className="cro-appointment-optional">(optioneel)</span><textarea name="message" rows={2} placeholder="Bijvoorbeeld wanneer u het beste bereikbaar bent"/></label></div>
  {error&&<p className="cro-appointment-error" role="alert">{error}</p>}
  <button className="cro-appointment-submit" type="submit">Maak vrijblijvend een afspraak <span aria-hidden="true">→</span></button>
  <p className="cro-appointment-privacy">✓ Geen aankoopverplichting &nbsp; · &nbsp; We bellen u persoonlijk terug</p>
  <p className="cro-appointment-demo-note">Ontwerpversie: het formulier verzendt nog geen gegevens.</p>
 </form>;
}
