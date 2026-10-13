"use client";
import { useState } from "react";
import { euro, product } from "./data";
import { PriceCalculator } from "./price-calculator";
export function OriginalPrice() {
  const [open, setOpen] = useState(false);
  return (
    <div className="original-price">
      <p>
        Prijs <span aria-hidden="true"> | </span>
        <button
          className="text-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="original-calculation"
        >
          {open ? "Verberg de berekening" : "Toon de berekening"}
        </button>
      </p>
      <strong>{euro(product.price)}</strong>
      <p className="small">
        Eigen opleg: <b className="green">{euro(1785.41)}</b> na
        standaardtegemoetkoming voor een 65-plusser met één toestel.
      </p>
      {open && (
        <div id="original-calculation">
          <PriceCalculator compact />
        </div>
      )}
    </div>
  );
}
