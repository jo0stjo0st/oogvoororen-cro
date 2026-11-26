import type {Metadata} from "next";
import Link from "next/link";
import {notFound,permanentRedirect} from "next/navigation";
import {maxFeatures,maxName,maxRoute,models} from "@/features/products/signia-max";
import {Scenes,Visual} from "../interactive";
import {AppDownloads,Appointment,MaxFooter,MaxHeader} from "../shared";
import styles from "../../bernafon-smart-directionality/page.module.css";

const functionLabels: Record<string, string> = {
 "acoustic-intelligence":"Automatische geluidsverwerking",
 "realtime-conversation-enhancement-ai":"Spraakverstaan in groepsgesprekken",
 "dynamic-noise-control-ai":"Ruis- en rumoeronderdrukking",
 "ambient-scene-adaptation-ai":"Automatische aanpassing aan de luisteromgeving",
 "own-voice-processing-ai":"Eigenstemherkenning",
 "spatial-speechfocus":"Spraak van opzij en achteren volgen",
 "auto-echoshield":"Echoreductie",
 "soundsmoothing-2-0":"Demping van plotselinge geluiden",
 "ewindscreen-2-0":"Windruisonderdrukking",
 "oneconnect":"Bluetooth, streaming en ringleiding",
 "signia-one":"Bediening via de app",
 "hd-music":"Muziekprogramma",
 "tinnitustherapie":"Tinnitusgeluiden en tinnitustherapie",
 "speechstabilizer":"Spraakherkenning en behoud van spraakdetails",
 "truear-360":"Ruimtelijke oriëntatie en richtmicrofoons",
 "spatial-configurator":"Handmatig de luisterrichting instellen",
 "telecare":"Online aanpassen",
 "autofit":"Meten en instellen bij de audicien",
 "augmented-focus":"Spraak en omgevingsgeluid apart verwerken",
 "e2e-wireless":"Communicatie tussen beide hoortoestellen",
 "adaptive-streaming-volume":"Automatisch streamvolume",
 "feedback-cancellation":"Fluitonderdrukking",
 "frequentiecompressie":"Frequentiecompressie",
 "smart-optimizer":"Geleidelijk wennen aan versterking",
};

type Props={params:Promise<{feature:string}>};
export const dynamicParams=false;
export function generateStaticParams(){return maxFeatures.map(({slug})=>({feature:slug}));}

export async function generateMetadata({params}:Props):Promise<Metadata>{
 const {feature}=await params;
 const entry=maxFeatures.find(({slug})=>slug===feature);
 if(!entry) notFound();
 return {title:(functionLabels[entry.slug] ?? entry.name)+" | Signia MaX | Oogvoororen",description:entry.intro,robots:{index:false,follow:true}};
}

export default async function SigniaFeature({params}:Props){
 const {feature}=await params;
 if(feature==="dynamic-noise-control-ai") permanentRedirect("/hoorapparaat-technologie/rumoeronderdrukking/signia/dynamic-noise-control-ai?toestel=pure-max-7");
 const entry=maxFeatures.find(({slug})=>slug===feature);
 if(!entry) notFound();
 const related=maxFeatures.filter(candidate=>candidate.slug!==entry.slug && (candidate.mode===entry.mode || (entry.slug==="acoustic-intelligence" && ["realtime-conversation-enhancement-ai","dynamic-noise-control-ai","ambient-scene-adaptation-ai","own-voice-processing-ai"].includes(candidate.slug))));
 return <><MaxHeader/><main className="wide cro-complete-page" id="main-content">
  <nav className="cro-complete-back" aria-label="Broodkruimel"><Link href={maxRoute+"#technologie"}>← Terug naar de {maxName}</Link></nav>
  <section className={styles.hero}><div><p className="eyebrow">Technologie in uw Signia-hoortoestel</p><h1>{functionLabels[entry.slug] ?? entry.name}</h1><p className="cro-complete-lead">{entry.intro}</p>{functionLabels[entry.slug] && <p><strong>Uitvoering van Signia:</strong> {entry.name}</p>}<a href="#voorbeelden" className="cro-complete-cta">Bekijk de voorbeelden ↓</a></div><Visual mode={entry.mode} stage={2}/></section>
  <nav className={styles.contents} aria-label="Op deze pagina"><a href="#werking">Hoe werkt het?</a><a href="#voorbeelden">Voorbeelden</a><a href="#vergelijking">Per MaX-model</a><a href="#vragen">Veelgestelde vragen</a><a href="#afspraak">Afspraak</a></nav>
  <section className="cro-complete-section" id="werking"><h2>Hoe werkt het?</h2><div className="cro-complete-cards">{entry.steps.map((step,i)=><article key={step}><Visual mode={entry.mode} stage={i}/><h3>Stap {i+1}</h3><p>{step}</p></article>)}</div></section>
  <section className="cro-complete-section" id="voorbeelden"><h2>Wat merkt u in de praktijk?</h2><p>Kies een situatie en bekijk wat de functie daar kan doen.</p><Scenes mode={entry.mode} examples={entry.examples}/></section>
  <section className="cro-complete-section" id="vergelijking"><h2>Uitvoering per MaX-model volgens Signia</h2>
   <div className="cro-complete-table"><table><thead><tr><th scope="col">Signia Pure Charge&amp;Go</th><th scope="col">{entry.name}</th></tr></thead><tbody>{models.map((model,i)=><tr key={model}><th scope="row">{model}</th><td>{entry.levels[i]}</td></tr>)}</tbody></table></div>
   <p>Hier ziet u hoe Signia deze techniek uitvoert. In de productvergelijking vindt u de scores voor de generieke functie.</p>
   <Link className="cro-complete-textlink" href={maxRoute+"#specificaties"}>Naar de Oogvoororen-specificaties →</Link>
  </section>
  {entry.slug==="signia-one" && <section className="cro-complete-section"><h2>Download Signia One</h2><AppDownloads/></section>}
  <section className="cro-complete-section" id="vragen"><h2>Veelgestelde vragen</h2><details><summary>{entry.faq[0]}</summary><p>{entry.faq[1]}</p></details>
   <details><summary>Hoe kan ik deze functie zelf uitproberen?</summary><p>Neem één herkenbaar luistervoorbeeld mee naar uw afspraak. Tijdens de proef kunt u het toestel in die situatie gebruiken en uw ervaringen met de audicien bespreken.</p></details>
  </section>
  <section className="cro-complete-section"><h2>Meer technologie ontdekken</h2><div className={styles.contents}>
   {(related.length?related:maxFeatures.filter(({slug})=>slug==="acoustic-intelligence" || slug==="realtime-conversation-enhancement-ai")).map(item=><Link href={maxRoute+"/"+item.slug} key={item.slug}>{functionLabels[item.slug] ?? item.name} →</Link>)}
  </div></section>
  <Appointment interest={maxName+" — "+entry.name}/>
 </main><MaxFooter/></>;
}
