"use client";
import { useEffect, useId, useRef, useState } from "react";
import { branches } from "./branches";
export function LocationHint() {
  const [id, setId] = useState("");
  const [source, setSource] = useState("unknown");
  const [open, setOpen] = useState(false);
  const manual = useRef(false);
  const inputId = useId();
  useEffect(() => {
    const controller = new AbortController();
    const chosen = new URLSearchParams(window.location.search).get("vestiging");
    const query = chosen
      ? `?${new URLSearchParams({ vestiging: chosen })}`
      : "";
    fetch(`/api/vestiging${query}`, {
      signal: controller.signal,
      cache: "no-store",
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data && !manual.current && branches.some((b) => b.id === data.id)) {
          setId(data.id);
          setSource(data.source);
        }
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);
  const branch = branches.find((b) => b.id === id);
  return (
    <div className="location-hint">
      <span>
        {branch ? (
          <>
            Bij u thuis, in <strong>{branch.city}</strong> of een van onze{" "}
            {branches.length - 1} andere vestigingen.
          </>
        ) : (
          <>
            Bij u thuis of in een van onze{" "}
            <strong>{branches.length} vestigingen</strong>.
          </>
        )}
      </span>
      <button
        type="button"
        className="location-change"
        aria-expanded={open}
        aria-controls={inputId + "-panel"}
        onClick={() => setOpen(!open)}
      >
        {open ? "Sluiten" : branch ? "Andere vestiging" : "Kies uw vestiging"}
      </button>
      {open && (
        <div id={inputId + "-panel"} className="location-options">
          <label htmlFor={inputId}>
            Uw vestiging
            <select
              id={inputId}
              value={id}
              onChange={(e) => {
                manual.current = true;
                setId(e.target.value);
                setSource("selected");
              }}
            >
              <option value="">Alle vestigingen</option>
              {branches.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.city}
                </option>
              ))}
            </select>
          </label>
          {branch && (
            <p className="small">
              {branch.address} · {branch.postcode} {branch.city}
            </p>
          )}
          {source === "geoip" && (
            <p className="small">
              Suggestie op basis van uw globale IP-locatie. Kies gerust een
              andere vestiging.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
