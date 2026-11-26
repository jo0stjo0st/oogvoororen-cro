import Image from "next/image";
import Link from "next/link";
import {CompactAppointmentForm} from "@/features/appointments/compact-form";
import {liveProduct,maxName,maxRoute} from "@/features/products/signia-max";
export const storeLinks = [
 ["App Store (iOS)", "https://apps.apple.com/nl/app/signia-one/id6759666876"],
 ["Google Play (Android)", "https://play.google.com/store/apps/details?id=com.wsa.henosis.signia&hl=nl"],
];

export function MaxHeader(){
 return <header className="cro-site-header">
  <div className="cro-site-top"><div className="wide"><a href="tel:+31852250685">085 - 225 0685</a><a href="#afspraak" className="cro-site-top-cta">Afspraak maken</a></div></div>
  <div className="cro-site-brand"><div className="wide cro-site-brand-inner">
   <a href="https://oogvoororen.nl/"><Image src="/assets/logo-white.svg" width={210} height={49} alt="Oogvoororen"/></a>
   <nav className="flex flex-wrap gap-x-5 gap-y-2 text-white" aria-label="Hoofdnavigatie"><a href="https://oogvoororen.nl/hoortoestellen">Hoortoestellen</a><Link href={maxRoute+"#technologie"}>MaX-technologie</Link><a href="https://oogvoororen.nl/webshop">Webshop</a></nav>
  </div></div>
 </header>;
}

export function MaxFooter(){
 return <footer className="cro-site-footer"><div className="wide"><div className="cro-site-footer-bottom">
  <span>© Oogvoororen</span><a href="tel:+31852250685">085 - 225 0685</a><a href="https://oogvoororen.nl/contact">Contact</a><a href="#afspraak">Persoonlijk hooradvies</a>
 </div></div></footer>;
}

export function Appointment({interest=maxName}:{interest?:string}){
 return <section id="afspraak" className="cro-complete-section cro-complete-appointment">
  <div><p className="eyebrow">Persoonlijk hooradvies</p><h2>Ervaar de Signia MaX tijdens een vrijblijvende proef</h2><p>Vertel uw audicien in welke situaties u beter wilt verstaan. Samen bespreekt u de pasvorm, mogelijkheden en welk MaX-niveau bij u past.</p><a className="cro-complete-cta" href={liveProduct}>Vraag een afspraak aan bij Oogvoororen →</a></div>
  <div className="cro-complete-form"><h3>Voorbeeld van het afspraakformulier</h3><CompactAppointmentForm country="NL" interest={interest}/></div>
 </section>;
}

export function AppDownloads(){
 return <div className="mt-5 flex flex-wrap gap-3">
  {storeLinks.map(([label,url],i)=><a key={url} href={url} className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-current px-4 py-2 font-semibold">
   <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    {i===0 ? <path fill="currentColor" d="M17.1 12.3c0-2 1.6-3 1.7-3.1-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.5.8-3.2.8s-1.7-.8-2.8-.7C7.2 7.6 5 9.5 5 12.9c0 2.5 1 5.1 2.2 6.7.6.8 1.2 1.6 2.1 1.6.9 0 1.3-.6 2.5-.6 1.3 0 1.7.6 2.7.6.9 0 1.5-.8 2.1-1.6.7-.9 1.2-2 1.5-3.1-.1 0-2.1-.8-2.1-3.2zM15 6.2c.5-.7.9-1.6.8-2.5-.8 0-1.8.6-2.4 1.2-.5.6-1 1.5-.9 2.4.9.1 1.8-.4 2.5-1.1z"/> : <><path fill="#4285F4" d="M3 3v18l9-9z"/><path fill="#34A853" d="M3 3l9 9 3.5-3.5z"/><path fill="#FBBC04" d="m12 12 3.5 3.5 6-3.5-6-3.5z"/><path fill="#EA4335" d="m3 21 9-9 3.5 3.5z"/></>}
   </svg>{label}</a>)}
 </div>;
}
