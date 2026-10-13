import Link from "next/link";
export default function NotFound() {
  return (
    <main id="main-content" className="wide information">
      <h1>Deze pagina bestaat niet in de demo</h1>
      <Link className="button primary" href="/">
        Terug naar het CRO Lab
      </Link>
    </main>
  );
}
