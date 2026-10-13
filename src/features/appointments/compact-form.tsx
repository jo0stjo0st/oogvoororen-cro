"use client";
import {useState,type FormEvent} from "react";
export function CompactAppointmentForm({interest}:{interest:string}){
 const [done,setDone]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const data=new FormData(e.currentTarget);
  const phone=String(data.get("phone")||"").replace(/[\s()./-]/g,"");
  if(!/^(?:0|\+32|0032)[1-9]\d{7,8}$/.test(phone)){setError("Vul een geldig Belgisch telefoonnummer in.");return}
  setError("");setDone(true);
 }
 if(done)return <div className="cro-compact-success" role="status"><h3>Demoaanvraag afgerond</h3><p>Er is niets verzonden of opgeslagen. In de echte flow nemen we telefonisch contact op.</p><button type="button" onClick={()=>setDone(false)}>Nogmaals proberen</button></div>;
 return <form className="cro-compact-form" onSubmit={submit}>
  <input type="hidden" name="product" value={interest}/>
  <p className="cro-compact-intro">Laat uw gegevens achter. We bellen u om uw wensen en de afspraak te bespreken.</p>
  <label>Uw naam<input name="name" required minLength={2} placeholder="Voor- en achternaam" autoComplete="off"/></label>
  <label>Telefoonnummer<input name="phone" required type="tel" placeholder="Bijvoorbeeld 0470 12 34 56" autoComplete="off" aria-invalid={Boolean(error)}/></label>
  {error&&<p role="alert" className="form-error">{error}</p>}
  <label>Postcode<input name="postcode" required inputMode="numeric" pattern="[1-9][0-9]{3}" maxLength={4} placeholder="Bijvoorbeeld 2222" autoComplete="off"/></label>
  <p className="cro-compact-help">Met uw postcode kunnen we u koppelen aan de juiste audicien of vestiging. Uw voorkeur bespreken we telefonisch.</p>
  <button className="cro-sticky-button" type="submit">Vraag persoonlijk hooradvies aan</button>
  <p className="cro-compact-privacy">Geen aankoopverplichting. Dit is een demo; gegevens worden niet verzonden of opgeslagen.</p>
 </form>;
}
