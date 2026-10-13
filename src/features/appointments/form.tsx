"use client";
import { useState, useRef, type FormEvent } from "react";
import Link from "next/link";
import { product, type Variant } from "@/features/products/data";
export function AppointmentForm({
  interest,
  variant,
  kind,
}: {
  interest: string;
  variant: Variant;
  kind: string;
}) {
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");
  const phone = useRef<HTMLInputElement>(null);
  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const normalized = phone.current?.value.replace(/[\s()./-]/g, "") || "";
    if (!/^(?:0|\+32|0032)[1-9]\d{7,8}$/.test(normalized)) {
      setError(
        "Vul een geldig Belgisch nummer in, bijvoorbeeld 0470 12 34 56 of +32 470 12 34 56.",
      );
      phone.current?.focus();
      return;
    }
    e.currentTarget.reset();
    setError("");
    setDone(true);
  }
  const productLabel = interest === product.slug ? product.name : interest;
  if (done)
    return (
      <section className="form-success" role="status" tabIndex={-1}>
        <p className="eyebrow">Demo afgerond</p>
        <h2>Uw testaanvraag is afgerond</h2>
        <p>
          Er is geen echte afspraak gemaakt. Uw gegevens zijn niet verzonden of
          opgeslagen. In de echte flow zou een audicien contact opnemen om uw
          wensen te bespreken.
        </p>
        <Link className="button primary" href={`/${variant}`}>
          Terug naar de productpagina
        </Link>
        <button className="text-button" onClick={() => setDone(false)}>
          Nog een keer testen
        </button>
      </section>
    );
  return (
    <form onSubmit={submit} className="appointment-form">
      <p className="form-interest">
        <strong>Uw interesse</strong>
        <br />
        {productLabel}
        {kind === "offerte" ? " · offerte" : ""}
      </p>
      <p>Gebruik fictieve gegevens. Dit formulier maakt geen echte afspraak.</p>
      <label htmlFor="name">
        Naam
        <input
          id="name"
          name="name"
          required
          minLength={2}
          autoComplete="off"
          placeholder="Uw naam"
        />
      </label>
      <label htmlFor="phone">
        Belgisch telefoonnummer
        <input
          id="phone"
          ref={phone}
          name="phone"
          type="tel"
          required
          autoComplete="off"
          aria-describedby={error ? "phone-help phone-error" : "phone-help"}
          aria-invalid={!!error}
          placeholder="Bijvoorbeeld 0470 12 34 56"
        />
      </label>
      <p id="phone-help" className="small">
        Een Belgisch vast of mobiel nummer, met 0 of +32.
      </p>
      {error && (
        <p id="phone-error" role="alert" className="form-error">
          {error}
        </p>
      )}
      <label htmlFor="postcode">
        Postcode
        <input
          id="postcode"
          name="postcode"
          required
          inputMode="numeric"
          pattern="[1-9][0-9]{3}"
          maxLength={4}
          title="Een Belgische postcode van vier cijfers"
          placeholder="Bijvoorbeeld 2222"
          autoComplete="off"
        />
      </label>
      <fieldset>
        <legend>Waar heeft u het liefst een afspraak?</legend>
        <div className="radio-options">
          <label>
            <input type="radio" name="location" value="home" required /> Bij mij
            thuis
          </label>
          <label>
            <input type="radio" name="location" value="centre" /> In een
            hoorcentrum
          </label>
          <label>
            <input type="radio" name="location" value="advice" /> Graag eerst
            advies
          </label>
        </div>
      </fieldset>
      <p className="small">
        De eerste afstelling tijdens een proefperiode gebeurt altijd in een
        hoorcentrum. Uw voorkeur bespreken we tijdens het adviesgesprek.
      </p>
      <label htmlFor="email">
        E-mailadres <span className="small">(optioneel)</span>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          placeholder="naam@voorbeeld.be"
        />
      </label>
      <p className="small">
        Privacy: gegevens blijven alleen in dit formulier tot u het afrondt of
        de pagina verlaat. Geen opslag, verzending of CRM-koppeling.{" "}
        <Link href="/informatie#privacy">Meer informatie</Link>.
      </p>
      <button className="button primary" type="submit">
        Rond de demoaanvraag af →
      </button>
    </form>
  );
}
