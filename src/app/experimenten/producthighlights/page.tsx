import Link from "next/link";

const technologies = [
  {name:"Smart Sensor",benefit:"Houdt rekening met beweging",description:"Smart Sensor gebruikt informatie over beweging bij de geluidsverwerking. Bijvoorbeeld wanneer u tijdens een gesprek rondloopt in plaats van tegenover iemand te zitten."},
  {name:"Smart Noise Reduction",benefit:"Onderdrukt achtergrondgeluid",description:"Smart Noise Reduction is de benaming van Bernafon voor een functie die storend achtergrondgeluid vermindert. De Encanta 400 biedt binnen de serie het hoogste niveau van deze ruisreductie."},
  {name:"Encanta 400 Pro",benefit:"Het hoogste niveau binnen de serie",description:"De Encanta-serie bestaat uit vier technologieniveaus: 100, 200, 300 en 400. De 400 heeft de meest uitgebreide audiologische functies binnen deze serie. In de vergelijking verderop staan de verschillen per niveau."},
];
export default function ProductHighlights(){
 return <main className="wide cro-highlights-page">
   <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
   <p className="eyebrow">Hoofdstuk 4 · direct onder de producthero</p>
   <h1>Wat maakt de Bernafon Encanta 400 Pro bijzonder?</h1>
   <p>Een compacte, productspecifieke introductie vóór de uitleg over Oogvoororen en de prijscalculator.</p>
   <section className="cro-highlight-panel">
     <p className="eyebrow">Bernafon Encanta 400 Pro</p>
     <h2>Wat doet de technologie in dit toestel?</h2>
     <p className="cro-highlight-intro">De Encanta 400 Pro is het hoogste technologieniveau in de Encanta-serie. Hieronder leggen we de technologie van Bernafon uit en wat die in verschillende luistersituaties kan betekenen.</p>
     <div className="cro-highlight-grid">{technologies.map((t,i)=><article key={t.name}><span className="cro-highlight-number">0{i+1} · {t.name}</span><h3>{t.benefit}</h3><p>{t.description}</p></article>)}</div>
     <div className="cro-highlight-review">
       <div>
         <p className="eyebrow">Klantervaringen met dit toestel</p>
         <h3>Ervaringen van dragers</h3>
         <div className="cro-highlight-review-placeholder" aria-label="Voorbeeld van de plaatsing van een bestaande klantreview">
           <span aria-hidden="true">★★★★★</span>
           <blockquote>Hier staat een bestaande, productspecifieke klantreview in de uiteindelijke pagina. De tekst wordt rechtstreeks uit de aanwezige reviews overgenomen.</blockquote>
           <p>Naam klant · geverifieerde productreview (placeholder)</p>
         </div>
       </div>
     </div>
     <p className="cro-highlight-bottom"><Link href="/experimenten/productinformatie">Bekijk de uitgebreide audiologische vergelijking ↓</Link></p>
   </section>
   <section className="section"><h2>Opbouw binnen de productpagina</h2><p>Dit blok introduceert de specifieke audiologische technologie. Verderop op dezelfde productpagina volgen de volledige vergelijking, bestaande reviews, technische gegevens en handleidingen. De reviewtekst hierboven is uitsluitend een UI-placeholder; er worden geen ervaringen verzonnen.</p></section>
 </main>;
}