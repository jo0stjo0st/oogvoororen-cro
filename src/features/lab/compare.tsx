"use client";
import { useState } from "react";
import Link from "next/link";
import { variants, type Variant } from "@/features/products/data";
export function Compare() {
  const [left, setLeft] = useState<Variant>("variant-a");
  const [right, setRight] = useState<Variant>("variant-b");
  const [mode, setMode] = useState("desktop");
  return (
    <>
      <div className="compare-controls">
        <fieldset>
          <legend>Weergave</legend>
          <div className="segmented">
            <button
              aria-pressed={mode === "desktop"}
              onClick={() => setMode("desktop")}
            >
              Desktop · 1280 px
            </button>
            <button
              aria-pressed={mode === "mobile"}
              onClick={() => setMode("mobile")}
            >
              Mobiel · 390 px
            </button>
          </div>
        </fieldset>
        <p className="small">
          Elke pagina heeft een eigen scrollgebied. Desktop wordt verkleind om
          naast elkaar te passen; mobiel wordt op werkelijke breedte getoond.
        </p>
      </div>
      <div className={`compare-panes ${mode}`}>
        {[
          { side: "left", value: left, set: setLeft },
          { side: "right", value: right, set: setRight },
        ].map((p) => (
          <section className="compare-pane" key={p.side}>
            <div className="pane-toolbar">
              <label htmlFor={p.side}>
                {p.side === "left" ? "Links" : "Rechts"}
                <select
                  id={p.side}
                  value={p.value}
                  onChange={(e) => p.set(e.target.value as Variant)}
                >
                  {variants.map((v) => (
                    <option key={v.id} value={v.id}>
                      {v.id === "original"
                        ? "Original"
                        : v.id === "variant-a"
                          ? "Variant A: Evolution"
                          : "Variant B: Conversion First"}
                    </option>
                  ))}
                </select>
              </label>
              <Link href={`/${p.value}`} target="_blank">
                Open apart ↗
              </Link>
            </div>
            <div className="frame-viewport">
              <iframe
                src={`/${p.value}`}
                title={`${p.side}: ${p.value} ${mode}`}
                className="preview-frame"
              />
            </div>
          </section>
        ))}
      </div>
      <section className="section">
        <h2>De ontwerpkeuzes naast elkaar</h2>
        <div
          className="table-scroll"
          tabIndex={0}
          role="region"
          aria-label="Ontwerpkeuzes"
        >
          <table>
            <thead>
              <tr>
                <th>Keuze</th>
                <th>Original</th>
                <th>Variant A</th>
                <th>Variant B</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>Doel</th>
                <td>Referentie huidige site</td>
                <td>Rust en herkenning</td>
                <td>Drempel naar proberen verlagen</td>
              </tr>
              <tr>
                <th>Hoofdknop</th>
                <td>Afspraak + offerte</td>
                <td>Maak een vrijblijvende afspraak</td>
                <td>Probeer dit hoorapparaat vrijblijvend</td>
              </tr>
              <tr>
                <th>Service</th>
                <td>Uitklapbare regels</td>
                <td>Drie zichtbare voordelen</td>
                <td>Drie voordelen + begeleidingsectie</td>
              </tr>
              <tr>
                <th>Prijs</th>
                <td>Huidige voorbeeldopleg</td>
                <td>Eigen opleg prominent, toestelprijs ernaast</td>
                <td>
                  Eigen opleg prominent, instellingen uitgeklapt op verzoek
                </td>
              </tr>
              <tr>
                <th>Typografie</th>
                <td>Bronbenadering, 16 px</td>
                <td>18 px, ruimere afstanden</td>
                <td>18 px, kortere teksten</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p>
          Een rustigere pagina kan helpen, maar conversiewinst moet in de
          praktijk gemeten worden met gekwalificeerde afspraken en verkopen.
        </p>
      </section>
    </>
  );
}
