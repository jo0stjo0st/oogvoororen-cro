"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { appointmentUrl, type Variant } from "./data";
export function StickyCTA({ variant }: { variant: Variant }) {
  const [visible, setVisible] = useState(true);
  useEffect(() => {
    const target = document.querySelector("#hero-appointment .button");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0.5 },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`mobile-appointment ${visible ? "" : "is-hidden"}`}>
      <Link className="button primary" href={appointmentUrl(variant)}>
        {variant === "variant-b"
          ? "Vrijblijvend uitproberen"
          : "Vrijblijvende afspraak"}{" "}
        <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
