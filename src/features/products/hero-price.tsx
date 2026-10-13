"use client";
import { euro } from "./data";
import { usePrice } from "./price-model";
import { PriceInputs } from "./price-calculator";
export function HeroPrice() {
  const { age, count, coverage, total, net } = usePrice();
  const ageText =
    age === "senior"
      ? "65 jaar en ouder"
      : age === "adult"
        ? "18 t/m 64 jaar"
        : "jonger dan 18 jaar";
  return (
    <div className="hero-price-block">
      <p className="gross-price">
        Toestelprijs{count === 2 ? " voor twee toestellen" : ""}:{" "}
        <strong>{euro(total)}</strong>
      </p>
      <p className="net-price-label">
        {coverage === "own" ? "Voor eigen rekening" : "Indicatieve eigen opleg"}
      </p>
      <p className="net-price" aria-live="polite">
        {net === null ? "Nog te bepalen" : euro(net)}
      </p>
      <p className="price-assumption">
        {coverage === "standard"
          ? `Na standaardtegemoetkoming · ${ageText} · ${count === 1 ? "één toestel" : "twee toestellen"}. Uw recht wordt persoonlijk bevestigd.`
          : coverage === "own"
            ? "Zonder tegemoetkoming, inclusief btw."
            : "Uw audicien bekijkt samen met u welke tegemoetkoming geldt."}
      </p>
      <details className="hero-price-settings">
        <summary>Pas uw situatie aan</summary>
        <PriceInputs />
        <p className="small">
          Bedragen inclusief btw en standaardlader.{" "}
          <a href="/informatie#mutualiteit">Voorwaarden tegemoetkoming</a>.
        </p>
      </details>
    </div>
  );
}
