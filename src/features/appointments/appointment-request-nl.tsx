"use client";

import { useState, type FormEvent } from "react";

export function AppointmentRequest({ locale = "nl" }: { locale?: "nl" | "fr" } = {}){
 const fr = locale === "fr";
 const [sent,setSent]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const phone=String(fd.get("phone")||"").replace(/[\s()./-]/g,"");
  if(!/^(?:\+31|0031|0)[1-9]\d{8}$/.test(phone)){setError(fr ? "Saisissez un numéro de téléphone néerlandais valide." : "Vul een geldig Nederlands telefoonnummer in.");return;}
  setError("");setSent(true);
 }
 if(sent)return <div className="cro-appointment-preview-success" role="status"><span aria-hidden="true">✓</span><h3>{fr ? "Aperçu de la confirmation" : "Zo ziet de bevestiging eruit"}</h3><p>{fr ? "Vos coordonnées n’ont pas été envoyées. Ceci est un formulaire de démonstration." : "Uw gegevens zijn niet verzonden. Dit is een demoformulier."}</p><button type="button" onClick={()=>setSent(false)}>{fr ? "Revenir au formulaire" : "Formulier opnieuw bekijken"}</button></div>;
 return <form className="cro-appointment-request-form" onSubmit={submit}>
  <fieldset className="cro-appointment-choices"><legend>{fr ? "Où souhaitez-vous être reçu ?" : "Waar wilt u geholpen worden?"}</legend><div className="cro-appointment-choice-grid">
   <label><input type="radio" name="location" value="thuis" defaultChecked/><span><strong>⌂ &nbsp; {fr ? "À domicile" : "Bij mij thuis"}</strong><small>{fr ? "L’audiologue se déplace chez vous" : "De audicien komt naar u toe"}</small></span></label>
   <label><input type="radio" name="location" value="hoorcentrum"/><span><strong>▣ &nbsp; {fr ? "En centre auditif" : "In een hoorcentrum"}</strong><small>{fr ? "Dans un centre près de chez vous" : "Op een locatie in de buurt"}</small></span></label>
   <label><input type="radio" name="location" value="overleg"/><span><strong>♡ &nbsp; {fr ? "À convenir" : "In overleg"}</strong><small>{fr ? "Je n’ai pas encore de préférence" : "Ik weet het nog niet"}</small></span></label>
  </div></fieldset>
  <div className="cro-appointment-fields"><label>{fr ? "Prénom" : "Voornaam"} <input name="firstName" autoComplete="given-name" required placeholder={fr ? "Votre prénom" : "Uw voornaam"}/></label><label>{fr ? "Nom" : "Achternaam"} <input name="lastName" autoComplete="family-name" required placeholder={fr ? "Votre nom" : "Uw achternaam"}/></label><label>{fr ? "Téléphone" : "Telefoonnummer"} <input name="phone" autoComplete="tel" type="tel" required placeholder="06 12345678" aria-invalid={Boolean(error)}/></label><label>{fr ? "Code postal" : "Postcode"} <input name="postcode" autoComplete="postal-code" required pattern="[1-9][0-9]{3}\s?[A-Za-z]{2}" title={fr ? "Par exemple 1234 AB" : "Bijvoorbeeld 1234 AB"} placeholder="1234 AB"/></label><label className="cro-appointment-full">{fr ? "Adresse e-mail" : "E-mailadres"} <span className="cro-appointment-optional">{fr ? "(facultatif)" : "(optioneel)"}</span><input name="email" autoComplete="email" type="email" placeholder={fr ? "nom@exemple.nl" : "naam@voorbeeld.nl"}/></label><label className="cro-appointment-full">{fr ? "Souhaitez-vous préciser quelque chose ?" : "Wilt u iets toelichten?"} <span className="cro-appointment-optional">{fr ? "(facultatif)" : "(optioneel)"}</span><textarea name="message" rows={2} placeholder={fr ? "Par exemple, vos disponibilités pour un appel" : "Bijvoorbeeld wanneer u het beste bereikbaar bent"}/></label></div>
  {error&&<p className="cro-appointment-error" role="alert">{error}</p>}
  <button className="cro-appointment-submit" type="submit">{fr ? "Prendre rendez-vous sans engagement" : "Maak vrijblijvend een afspraak"} <span aria-hidden="true">→</span></button>
  <p className="cro-appointment-privacy">✓ {fr ? "Sans obligation d’achat" : "Geen aankoopverplichting"} &nbsp; · &nbsp; {fr ? "Nous vous rappelons personnellement" : "We bellen u persoonlijk terug"}</p>
  <p className="cro-appointment-demo-note">{fr ? "Version de démonstration. Le formulaire n’envoie aucune donnée." : "Ontwerpversie: het formulier verzendt nog geen gegevens."}</p>
 </form>;
}
