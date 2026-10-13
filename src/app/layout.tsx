import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Oogvoororen CRO Lab",
  description:
    "Testomgeving voor het nabouwen en optimaliseren van Oogvoororen.be.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="nl">
      <body>
        <a className="skip-link" href="#main-content">
          Ga naar de inhoud
        </a>
        {children}
      </body>
    </html>
  );
}
