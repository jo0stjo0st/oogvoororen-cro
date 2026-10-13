"use client";
import {useState,type FormEvent} from "react";
export function CompactAppointmentForm({interest,locale="nl"}:{interest:string;locale?:"nl"|"fr"}){
 const fr=locale==="fr";
 const [done,setDone]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const phone=String(data.get("phone")||"").replace(/[\s()./-]/g,"");
  if(!/^(?:0|\+32|0032)[1-9]\d{7,8}$/.test(phone)){setError(fr?"Indiquez un numéro de téléphone belge valide.":"Vul een geldig Belgisch telefoonnummer in.");return}
  setError("");setDone(true);
 }
 if(done)return <div className="cro-compact-success" role="status"><h3>{fr?"Demande de démonstration terminée":"Demoaanvraag afgerond"}</h3><p>{fr?"Aucune donnée n’a été envoyée ni enregistrée. Nous vous contacterions par téléphone.":"Er is niets verzonden of opgeslagen. In de echte flow nemen we telefonisch contact op."}</p><button type="button" onClick={()=>setDone(false)}>{fr?"Réessayer":"Nogmaals proberen"}</button></div>;
 return <form className="cro-compact-form" onSubmit={submit}>
  <input type="hidden" name="product" value={interest}/>
  <p className="cro-compact-intro">{fr?"Laissez-nous vos coordonnées. Nous vous appellerons pour discuter de vos besoins et du rendez-vous.":"Laat uw gegevens achter. We bellen u om uw wensen en de afspraak te bespreken."}</p>
  <label>{fr?"Votre nom":"Uw naam"}<input name="name" required minLength={2} placeholder={fr?"Prénom et nom":"Voor- en achternaam"} autoComplete="off"/></label>
  <label>{fr?"Téléphone":"Telefoonnummer"}<input name="phone" required type="tel" placeholder="Bijvoorbeeld 0470 12 34 56" autoComplete="off" aria-invalid={Boolean(error)}/></label>
  {error&&<p role="alert" className="form-error">{error}</p>}
  <label>{fr?"Code postal":"Postcode"}<input name="postcode" required inputMode="numeric" pattern="[1-9][0-9]{3}" maxLength={4} placeholder="Bijvoorbeeld 2222" autoComplete="off"/></label>
  <p className="cro-compact-help">{fr?"Votre code postal nous permet de trouver un audiologue ou un centre auditif adapté. Nous discuterons de vos préférences par téléphone.":"Met uw postcode kunnen we u koppelen aan de juiste audicien of vestiging. Uw voorkeur bespreken we telefonisch."}</p>
  <button className="cro-sticky-button" type="submit">{fr?"Demander un conseil auditif personnalisé":"Vraag persoonlijk hooradvies aan"}</button>
  <p className="cro-compact-privacy">{fr?"Sans obligation d’achat. Démonstration uniquement : aucune donnée n’est envoyée ou enregistrée.":"Geen aankoopverplichting. Dit is een demo; gegevens worden niet verzonden of opgeslagen."}</p>
 </form>;
}
