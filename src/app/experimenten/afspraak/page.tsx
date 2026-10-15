"use client";
import Image from "next/image";
import Link from "next/link";
import {useState,type FormEvent} from "react";

const faqs=[
 ["Is een afspraak echt vrijblijvend?","Ja. U krijgt persoonlijk advies en kunt hoorapparaten vrijblijvend uitproberen. U beslist zelf of u verder wilt."],
 ["Kan de audicien ook bij mij thuis komen?","Ja, wij bieden hoorzorg aan huis in Nederland. Tijdens het telefoongesprek bespreken we wat er bij u thuis mogelijk is."],
 ["Wanneer word ik gebeld?","Na uw aanvraag nemen we doorgaans binnen één werkdag telefonisch contact met u op om uw wensen en de afspraak te bespreken."],
 ["Moet ik al weten welk hoorapparaat ik wil?","Nee, juist niet. De audicien bespreekt uw gehoor en wensen en helpt u bij het vergelijken van passende mogelijkheden."]
];
function AppointmentRequest(){
 const [sent,setSent]=useState(false);
 const [error,setError]=useState("");
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();
  const fd=new FormData(e.currentTarget);
  const phone=String(fd.get("phone")||"").replace(/[\s()./-]/g,"");
  if(!/^(?:\+31|0031|0)[1-9]\d{8}$/.test(phone)){setError("Vul een geldig Nederlands telefoonnummer in.");return;}
  setError("");setSent(true);
 }
 if(sent)return <div className="cro-appointment-preview-success" role="status"><span aria-hidden="true">✓</span><h3>Zo ziet de bevestiging eruit</h3><p>Uw gegevens zijn niet verzonden. Dit is een ontwerpversie van de afspraakpagina.</p><button type="button" onClick={()=>setSent(false)}>Formulier opnieuw bekijken</button></div>;
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
export default function AppointmentPage(){
 const [open,setOpen]=useState<number|null>(null);
 const [menuOpen,setMenuOpen]=useState(false);
 return <div className="cro-appointment-page">
  <div className="cro-appointment-top"><div className="wide"><span>★★★★★ <b>9,4</b> klantwaardering</span><a href="tel:+31854863743">Vragen? Bel 085 - 486 37 43</a></div></div>
  <header className="cro-appointment-header"><div className="wide cro-appointment-header-inner"><Link href="/experimenten/nieuwe-homepage" aria-label="Oogvoororen homepage"><Image src="/assets/logo-white.svg" alt="Oogvoororen" width={207} height={50} priority/></Link><button className="cro-appointment-menu" type="button" aria-expanded={menuOpen} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?"Sluiten ×":"Menu ☰"}</button><nav className={menuOpen?"open":""} aria-label="Hoofdnavigatie"><a href="https://oogvoororen.nl/hoortoestellen">Hoorapparaten</a><a href="https://oogvoororen.nl/audicien-aan-huis">Audicien aan huis</a><a href="https://oogvoororen.nl/onze-hoorcentra">Hoorcentra</a><a href="https://oogvoororen.nl/contact">Contact</a></nav><a className="cro-appointment-header-phone" href="tel:+31854863743">☎ 085 - 486 37 43</a></div></header>
  <main>
   <div className="wide cro-appointment-lab-link"><Link href="/">← CRO-werkplaats</Link><span>Afspraakpagina Nederland</span></div>
   <section className="cro-appointment-hero"><div className="wide cro-appointment-hero-layout"><div className="cro-appointment-hero-copy"><p className="cro-appointment-eyebrow"><span/> Persoonlijke hoorzorg, op uw manier</p><h1>Maak een <em>vrijblijvende afspraak</em></h1><p className="cro-appointment-lead">Een hoortest, deskundig advies of een nieuw hoorapparaat? We helpen u graag verder, bij u thuis of in een van onze hoorcentra.</p><ul className="cro-appointment-checks"><li>Persoonlijk advies van een gediplomeerde audicien</li><li>Vrijblijvend hoorapparaten uitproberen</li><li>U kiest: aan huis of in een hoorcentrum</li></ul><div className="cro-appointment-call"><span className="cro-appointment-call-icon" aria-hidden="true">☎</span><div><small>Liever direct contact?</small><a href="tel:+31854863743">085 - 486 37 43</a><span>We helpen u graag telefonisch.</span></div></div><div className="cro-appointment-assurance"><strong>★★★★★ <span>9,4 / 10</span></strong><p>Beoordeeld door onze klanten</p></div></div>
   <div className="cro-appointment-form-card" id="afspraak"><div className="cro-appointment-form-head"><p>AFSPRAAK AANVRAGEN</p><h2>Waarmee kunnen we u helpen?</h2><span>Vul uw gegevens in. We bellen u om de afspraak samen in te plannen.</span></div><AppointmentRequest/></div></div></section>
   <div className="cro-appointment-trust"><div className="wide"><span>✓ Geheel vrijblijvend</span><span>✓ Alle bekende A-merken</span><span>✓ 5 jaar service en garantie bij aankoop</span><span>✓ Hoorzorg door heel Nederland</span></div></div>
   <section className="wide cro-appointment-steps"><div className="cro-appointment-section-title"><p>ZO WERKT HET</p><h2>In drie eenvoudige stappen</h2><span>Van uw aanvraag tot persoonlijk hooradvies.</span></div><div className="cro-appointment-step-grid"><article><b>01</b><h3>Vraag uw afspraak aan</h3><p>Vul het korte formulier in of bel ons rechtstreeks.</p></article><article><b>02</b><h3>We bellen u terug</h3><p>We bespreken uw wensen en plannen samen een passend moment.</p></article><article><b>03</b><h3>Persoonlijk hooradvies</h3><p>Onze audicien helpt u thuis of in het hoorcentrum met een hoortest en advies.</p></article></div></section>
   <section className="cro-appointment-faq-wrap"><div className="wide cro-appointment-faq-layout"><div><p className="cro-appointment-section-kicker">VEELGESTELDE VRAGEN</p><h2>Goed om te weten</h2><p>We maken het graag eenvoudig. Heeft u nog vragen? Bel ons gerust.</p><a href="tel:+31854863743">Bel 085 - 486 37 43 →</a></div><div className="cro-appointment-faqs">{faqs.map(([q,a],i)=><div className="cro-appointment-faq" key={q}><button type="button" aria-expanded={open===i} onClick={()=>setOpen(open===i?null:i)}>{q}<span aria-hidden="true">{open===i?"−":"+"}</span></button>{open===i&&<p>{a}</p>}</div>)}</div></div></section>
   <section className="cro-appointment-final"><div className="wide"><div><h2>We nemen graag de tijd voor u</h2><p>Maak vrijblijvend kennis met onze hoorzorg.</p></div><a href="#afspraak">Maak een afspraak ↑</a></div></section>
  </main><footer className="cro-appointment-footer"><div className="wide"><Image src="/assets/logo.svg" alt="Oogvoororen" width={175} height={42}/><span>Persoonlijke hoorzorg in Nederland</span><a href="tel:+31854863743">085 - 486 37 43</a></div></footer>
 </div>;
}
