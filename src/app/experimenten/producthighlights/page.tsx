import Link from "next/link";

const technologies = [
  {name:"Smart Sensor",benefit:"Volgt de luistersituatie",description:"De Encanta 400 Pro gebruikt sensortechnologie om beter rekening te houden met beweging en wisselende gesprekken. Dat is vooral relevant als u niet steeds stil tegenover één spreker zit."},
  {name:"Smart Noise Reduction",benefit:"Verwerkt storend geluid verfijnder",description:"De hoogste uitvoering binnen de Encanta-familie biedt de meest uitgebreide ruisreductie. Niet alleen dát achtergrondgeluid wordt verwerkt is relevant, maar hoe verfijnd dit gebeurt terwijl spraak hoorbaar blijft."},
  {name:"Uitgebreide audiologische verwerking",benefit:"Meer ruimte voor nuance",description:"Het topniveau van de serie combineert de meest uitgebreide mogelijkheden voor complexe luisteromgevingen met een rijkere verwerking van geluidsdetails. De audicien stemt dit op uw gehoor af."},
];
export default function ProductHighlights(){
 return <main className="wide cro-highlights-page">
   <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
   <p className="eyebrow">Hoofdstuk 4 · direct onder de producthero</p>
   <h1>Waarom kiezen voor de Encanta 400 Pro?</h1>
   <p>Een compacte, productspecifieke introductie vóór de uitleg over Oogvoororen en de prijscalculator.</p>
   <section className="cro-highlight-panel">
     <p className="eyebrow">Bernafon Encanta 400 Pro</p>
     <h2>Het verschil merkt u juist wanneer luisteren lastig wordt.</h2>
     <p className="cro-highlight-intro">De Encanta 400 Pro is het hoogste audiologische niveau binnen de Encanta-familie. Niet Bluetooth of oplaadbaarheid maken dit toestel bijzonder, maar de verfijning waarmee het spraak en omgevingsgeluid verwerkt.</p>
     <div className="cro-highlight-grid">{technologies.map((t,i)=><article key={t.name}><span className="cro-highlight-number">0{i+1} · {t.name}</span><h3>{t.benefit}</h3><p>{t.description}</p></article>)}</div>
     <div className="cro-highlight-review">
       <div>
         <p className="eyebrow">Klantervaringen met dit toestel</p>
         <h3>Hoe ervaren dragers de Encanta 400 Pro?</h3>
         <div className="cro-highlight-review-placeholder" aria-label="Voorbeeld van de plaatsing van een bestaande klantreview">
           <span aria-hidden="true">★★★★★</span>
           <blockquote>Hier verschijnt een bestaande productreview over bijvoorbeeld verstaan in gezelschap, geluidskwaliteit of luistercomfort.</blockquote>
           <p>Naam klant · geverifieerde productreview (placeholder)</p>
         </div>
       </div>
     </div>
     <p className="cro-highlight-bottom"><Link href="/experimenten/productinformatie">Bekijk de uitgebreide audiologische vergelijking ↓</Link></p>
   </section>
   <section className="section"><h2>Opbouw binnen de productpagina</h2><p>Dit blok introduceert de specifieke audiologische technologie. Verderop op dezelfde productpagina volgen de volledige vergelijking, bestaande reviews, technische gegevens en handleidingen. De reviewtekst hierboven is uitsluitend een UI-placeholder.</p></section>
 </main>;
}