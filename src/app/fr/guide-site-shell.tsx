"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const guide = "/fr/guide-auditif";
const phone = { href: "tel:+31854863743", label: "+31 85 486 37 43" };

const navigation = [
  ["Guide auditif", guide],
  ["Bilan auditif", `${guide}/bilan-et-conseil`],
  ["Appareils auditifs", `${guide}/choisir-ses-appareils`],
  ["Remboursements", "/fr/remboursements"],
];

export function FrenchGuideHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="cro-site-header">
      <div className="cro-site-top">
        <div className="wide">
          <span>Conseils auditifs personnalisés aux Pays-Bas</span>
          <div className="cro-site-top-actions">
            <a href={phone.href}>{phone.label}</a>
            <Link className="cro-site-top-cta" href="/fr/rendez-vous">Prendre rendez-vous</Link>
          </div>
        </div>
      </div>
      <div className="cro-site-brand">
        <div className="wide cro-site-brand-inner">
          <Link href={guide} aria-label="Oogvoororen · Guide auditif">
            <Image src="/assets/logo-white.svg" alt="Oogvoororen" width={210} height={49} />
          </Link>
          <button
            type="button"
            className="cro-site-menu-button"
            aria-expanded={menuOpen}
            aria-controls="guide-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Fermer" : "Menu"} <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
          </button>
          <nav id="guide-navigation" className={menuOpen ? "cro-site-nav open" : "cro-site-nav"} aria-label="Navigation principale">
            {navigation.map(([label, href]) => (
              <Link href={href} key={href} onClick={() => setMenuOpen(false)}>{label}</Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export function FrenchGuideFooter() {
  return (
    <footer className="cro-site-footer">
      <div className="wide">
        <div className="cro-site-footer-grid">
          <div>
            <Link href={guide} aria-label="Oogvoororen · Guide auditif">
              <Image src="/assets/logo.svg" alt="Oogvoororen" width={205} height={48} />
            </Link>
            <p>Des conseils auditifs personnalisés, à domicile ou en centre auditif aux Pays-Bas.</p>
          </div>
          <div>
            <h3>Vos premiers appareils auditifs</h3>
            <Link href={guide}>Guide des premiers appareils auditifs</Link>
            <Link href={`${guide}/choisir-un-audiologue#lieu`}>À domicile ou en centre auditif</Link>
            <Link href={`${guide}/essai-et-adaptation`}>Essai et adaptation</Link>
            <Link href={`${guide}/entretien-et-suivi`}>Entretien et suivi</Link>
          </div>
          <div>
            <h3>Nous contacter</h3>
            <Link href="/fr/rendez-vous">Prendre rendez-vous</Link>
            <a href={phone.href}>{phone.label}</a>
            <Link href="/fr/remboursements">Remboursement des appareils auditifs</Link>
          </div>
        </div>
        <div className="cro-site-footer-bottom">
          <span>© Oogvoororen</span>
          <span>Version de démonstration</span>
          <Link href="/hoortoestellen/keuzehulp" lang="nl">Nederlands</Link>
        </div>
      </div>
    </footer>
  );
}
