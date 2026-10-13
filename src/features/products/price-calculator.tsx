"use client";
import { useState } from "react";
import { euro, product } from "./data";
export type Age = "child" | "adult" | "senior";
// RIZIV 01-01-2026, standard reimbursement, contracted provider, no preferential scheme.
export const rates: Record<Age, readonly [number, number]> = {
  child: [1451.56, 2875.21],
  adult: [884.59, 1751.01],
  senior: [859.59, 1701.46],
};
export function PriceCalculator({ compact = false }: { compact?: boolean }) {
  const [count, setCount] = useState(1);
  const [age, setAge] = useState<Age>("senior");
  const [coverage, setCoverage] = useState("unknown");
  const total = product.price * count;
  const compensation =
    coverage === "standard"
      ? rates[age][count - 1]
      : coverage === "own"
        ? 0
        : null;
  return (
    <div className={`calculator ${compact ? "compact" : ""}`}>
      <div className="calculator-inputs">
        <label>
          Leeftijd
          <select value={age} onChange={(e) => setAge(e.target.value as Age)}>
            <option value="child">0 t/m 17 jaar</option>
            <option value="adult">18 t/m 64 jaar</option>
            <option value="senior">65 jaar en ouder</option>
          </select>
        </label>
        <fieldset>
          <legend>Aantal hoorapparaten</legend>
          <div className="segmented">
            {[1, 2].map((n) => (
              <button
                type="button"
                key={n}
                aria-pressed={count === n}
                onClick={() => setCount(n)}
              >
                {n === 1 ? "Eén toestel" : "Twee toestellen"}
              </button>
            ))}
          </div>
        </fieldset>
        <label>
          Tegemoetkoming
          <select
            value={coverage}
            onChange={(e) => setCoverage(e.target.value)}
          >
            <option value="unknown">Mijn recht is nog niet bevestigd</option>
            <option value="standard">Indicatie: standaardtegemoetkoming</option>
            <option value="own">Volledig voor eigen rekening</option>
          </select>
        </label>
      </div>
      <div className="calculation-result" aria-live="polite">
        <dl>
          <div>
            <dt>Totale toestelprijs</dt>
            <dd>{euro(total)}</dd>
          </div>
          <div>
            <dt>Indicatieve tegemoetkoming</dt>
            <dd>
              {compensation === null ? "Nog te bepalen" : euro(compensation)}
            </dd>
          </div>
          <div className="result-total">
            <dt>
              {compensation === null
                ? "Eigen opleg"
                : "Indicatieve eigen opleg"}
            </dt>
            <dd>
              {compensation === null
                ? "Nog te bepalen"
                : euro(total - compensation)}
            </dd>
          </div>
        </dl>
        <p>
          Inclusief standaardlader, vijf jaar service en garantie volgens de
          voorwaarden.
        </p>
      </div>
      <p className="small">
        Dit is een indicatie op basis van de RIZIV-tarieven vanaf 1 januari 2026
        voor een geconventioneerde audicien, zonder voorkeurregeling.
        Voorschrift, goedkeuring, gehoorverlies en hernieuwingstermijn bepalen
        uw recht. Extra voordelen van uw mutualiteit zijn niet meegerekend. Bij
        een verhoogde tegemoetkoming of bijzondere situatie: laat uw bedrag
        persoonlijk controleren.
      </p>
      <a className="text-link" href="/informatie#mutualiteit">
        Bekijk de voorwaarden en bron
      </a>
    </div>
  );
}
