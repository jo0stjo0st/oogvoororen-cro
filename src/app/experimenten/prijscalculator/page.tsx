"use client";
import { useState } from "react";
import Link from "next/link";
import { product, euro, appointmentUrl } from "@/features/products/data";
import { calculatePrice, type Age } from "@/features/products/pricing";

export default function CalculatorChapter() {
  const [age, setAge] = useState<Age>("senior");
  const [count, setCount] = useState(1);
  const [eligible, setEligible] = useState(true);
  const result = calculatePrice(age, count, eligible ? "standard" : "own");
  return <main className="wide cro-simple-calculator-page">
    <p><Link href="/">Terug naar de CRO-werkplaats</Link></p>
    <p className="eyebrow">Hoofdstuk 5 · concept</p>
    <h1>Wat kost dit hoorapparaat voor mij?</h1>
    <p>Een eenvoudige calculator die aansluit op het prijsvlak in het productblok. Geen aanvraagformulier, geen verkoopproces.</p>
    <section className="cro-simple-calculator">
      <div className="cro-calc-head">
        <p className="eyebrow">Bereken uw indicatieve prijs</p>
        <h2>Wat betaalt u zelf?</h2>
        <p>Beantwoord drie korte vragen. U ziet direct een prijsindicatie voor de Bernafon Encanta 400 Pro.</p>
      </div>
      <div className="cro-calc-layout">
        <div className="cro-calc-controls">
          <fieldset><legend>1. Wat is uw leeftijd?</legend><div className="cro-calc-choices">
            {[{value:"senior",label:"65 jaar of ouder"},{value:"adult",label:"18 tot 64 jaar"},{value:"child",label:"Jonger dan 18 jaar"}].map(item=><button key={item.value} type="button" aria-pressed={age===item.value} onClick={()=>setAge(item.value as Age)}>{item.label}</button>)}
          </div></fieldset>
          <fieldset><legend>2. Hoeveel hoorapparaten?</legend><div className="cro-calc-choices">
            {[1,2].map(n=><button key={n} type="button" aria-pressed={count===n} onClick={()=>setCount(n)}>{n===1?"Eén hoorapparaat":"Twee hoorapparaten"}</button>)}
          </div></fieldset>
          <fieldset><legend>3. Verwacht u een tegemoetkoming van uw mutualiteit?</legend><div className="cro-calc-choices">
            <button type="button" aria-pressed={eligible} onClick={()=>setEligible(true)}>Ja, toon een indicatie</button>
            <button type="button" aria-pressed={!eligible} onClick={()=>setEligible(false)}>Nee, volledig zelf betalen</button>
          </div></fieldset>
        </div>
        <div className="cro-calc-result" aria-live="polite">
          <p className="eyebrow">Uw prijsindicatie</p>
          <div className="cro-calc-line"><span>Prijs {count===1?"hoorapparaat":"hoorapparaten"}</span><strong>{euro(result.total)}</strong></div>
          <div className="cro-calc-line"><span>Indicatieve tegemoetkoming</span><strong>- {euro(result.compensation??0)}</strong></div>
          <div className="cro-calc-total"><span>Indicatieve eigen opleg</span><strong>{euro(result.net??result.total)}</strong></div>
          <p className="cro-calc-caveat">Dit is geen definitieve prijs. De audicien controleert tijdens het adviestraject uw persoonlijke situatie en eventuele tegemoetkoming.</p>
          <Link className="button cro-calc-cta" href={appointmentUrl("original")}>Maak een afspraak voor persoonlijk hooradvies</Link>
          <p className="cro-calc-undercta">U hoeft nu nog geen toestel te kiezen.</p>
        </div>
      </div>
      <details className="cro-calc-details"><summary>Hoe berekenen we de tegemoetkoming?</summary>
        <p>We gebruiken de indicatieve RIZIV-standaardtarieven van 2026, zonder verhoogde tegemoetkoming. De werkelijke vergoeding hangt onder andere af van voorschrift, gehoorverlies, goedkeuring en hernieuwingstermijn. Bij bijzondere situaties kunnen andere bedragen gelden. Extra voordelen van mutualiteiten zijn niet inbegrepen.</p>
      </details>
    </section>
    <section className="section"><h2>Ontwerpkeuze</h2><p>Drie eenvoudige keuzes links en direct een duidelijk bedrag rechts. De berekening werkt zonder gegevens achter te laten. De afspraak is bedoeld voor hooradvies, niet als losse hoortest. De calculator is een concept; de actuele tarieven en aanspraakvoorwaarden moeten voor publicatie worden gecontroleerd.</p></section>
  </main>;
}
