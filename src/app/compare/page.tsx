import { LabBar } from "@/components/lab-bar";
import { Compare } from "@/features/lab/compare";
export default function Page() {
  return (
    <>
      <LabBar />
      <main id="main-content" className="compare-main">
        <div className="wide">
          <p className="eyebrow">Beoordeel het verschil</p>
          <h1>Vergelijk de productpagina’s</h1>
          <p>
            Original is de referentie. A en B testen verschillende manieren om
            duidelijkheid en vertrouwen te geven.
          </p>
        </div>
        <Compare />
      </main>
    </>
  );
}
