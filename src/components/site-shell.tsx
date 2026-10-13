"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { appointmentUrl, type Variant } from "@/features/products/data";
export function Header({ variant }: { variant: Variant }) {
  const [open, setOpen] = useState(false);
  return (
    <header
      className={`site-header ${variant === "original" ? "original-header" : ""}`}
    >
      {variant === "original" && (
        <div className="topbar wide">
          <a href="#reviews">
            <span className="stars">★★★★★</span> 9.4
          </a>
          <Link href="/informatie#mutualiteit">Mutualiteiten</Link>
          <Link href="/informatie">Over ons</Link>
          <span className="spacer" />
          <a href="tel:+3214480179">014 48 01 79</a>
          <Link href={appointmentUrl(variant)} className="top-cta">
            Afspraak maken
          </Link>
        </div>
      )}
      <div className="brand-nav">
        <div className="wide nav-inner">
          <Link href="/" aria-label="Oogvoororen CRO Lab">
            <Image
              src={
                variant === "original"
                  ? "/assets/logo-white.svg"
                  : "/assets/logo.svg"
              }
              width={226}
              height={52}
              alt="Oogvoororen.be"
              priority
            />
          </Link>
          <button
            className="menu-button"
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? "Sluiten" : "Menu"}
          </button>
          <nav
            id="main-nav"
            className={open ? "site-nav open" : "site-nav"}
            aria-label="Hoofdnavigatie"
          >
            <Link href="/original">Hoorapparaten</Link>
            <Link href="/informatie#aan-huis">Audicien aan huis</Link>
            <Link href="/informatie#hoorcentra">Hoorcentra</Link>
            {variant === "original" && (
              <>
                <Link href="/original#accessoires">Webshop</Link>
                <Link href="/original#apps">Instructies</Link>
              </>
            )}
            <a href="tel:+3214480179">
              {variant === "original" ? "Contact" : "014 48 01 79"}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="wide">
        <div className="footer-grid">
          <div>
            <Image
              src="/assets/logo.svg"
              alt="Oogvoororen.be"
              width={226}
              height={52}
            />
            <p>Een ander geluid.</p>
            <p>Persoonlijke hoorzorg in Vlaanderen.</p>
          </div>
          <div>
            <h3>Persoonlijke begeleiding</h3>
            <Link href="/informatie#aan-huis">Audicien aan huis</Link>
            <Link href="/informatie#hoorcentra">Onze hoorcentra</Link>
            <Link href="/informatie#garantie">Garantie en service</Link>
          </div>
          <div>
            <h3>Heeft u een vraag?</h3>
            <a href="tel:+3214480179">014 48 01 79</a>
            <Link href="/informatie#mutualiteit">
              Tegemoetkoming mutualiteit
            </Link>
            <Link href="/informatie#privacy">Privacy in deze demo</Link>
          </div>
        </div>
        <p className="footer-note">
          Interne testomgeving · prijzen inclusief btw · geen verkoop of echte
          afspraakaanvragen.
        </p>
      </div>
    </footer>
  );
}
