import Link from "next/link";
import Image from "next/image";
import { LabBar } from "@/components/lab-bar";
import { variants, product, euro } from "@/features/products/data";
export default function HomePage() {
  return (
    <>
      <LabBar />
      <main id="main-content" className="wide lab-home">
        <Image
          src="/assets/logo.svg"
          width={226}
          height={52}
          alt="Oogvoororen.be"
          priority
        />
        <div className="lab-intro">
          <p className="eyebrow">Een betere afspraak begint hier</p>
          <h1>Oogvoororen CRO Lab</h1>
          <p>
            De huidige productpagina en twee rustige alternatieven. Vergelijk
            wat een bezoeker ziet, begrijpt en nodig heeft om een afspraak aan
            te vragen.
          </p>
        </div>
        <div className="lab-cards">
          {variants.map((v, i) => (
            <article className="lab-card" key={v.id}>
              <div className={`card-preview preview-${v.id}`}>
                <span>
                  {i === 0 ? "Referentie" : `Variant ${i === 1 ? "A" : "B"}`}
                </span>
                <Image
                  src={product.image}
                  width={240}
                  height={240}
                  alt="Phonak Audéo Infinio Ultra I90"
                />
                <div>
                  <strong>Phonak Infinio Ultra I90</strong>
                  <p>{euro(product.price)}</p>
                </div>
              </div>
              <div className="card-content">
                <p className="eyebrow">
                  {i === 0
                    ? "Huidige presentatie"
                    : i === 1
                      ? "Vertrouwd en overzichtelijk"
                      : "Van twijfel naar uitproberen"}
                </p>
                <h2>{v.name}</h2>
                <p>{v.description}</p>
                <Link className="button primary" href={`/${v.id}`}>
                  Bekijk{" "}
                  {i === 0 ? "de referentie" : `variant ${i === 1 ? "A" : "B"}`}{" "}
                  →
                </Link>
              </div>
            </article>
          ))}
        </div>
        <div className="lab-next">
          <div>
            <h2>Zelf naast elkaar beoordelen</h2>
            <p>
              Bekijk de versies op desktop of in een mobiele weergave van 390
              pixels.
            </p>
          </div>
          <Link className="button secondary" href="/compare">
            Open de vergelijking →
          </Link>
        </div>
        <section className="section">
          <h2>Wat testen we?</h2>
          <p>
            Een duidelijkere prijs, grotere tekst, zichtbare begeleiding en een
            kortere afspraakflow. Dit zijn CRO-hypothesen, geen bewezen
            conversiewinst.
          </p>
          <p>
            De primaire uitkomst is een gekwalificeerde afspraak. Klikken en
            formulierstarts zijn ondersteunende signalen; kwaliteit en
            uiteindelijke verkopen horen bij een latere praktijktest.
          </p>
          <Link href="/informatie" className="text-link">
            Bronnen, voorwaarden en beperkingen
          </Link>
        </section>
      </main>
    </>
  );
}
