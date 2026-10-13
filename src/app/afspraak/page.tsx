import { LabBar } from "@/components/lab-bar";
import { Header, Footer } from "@/components/site-shell";
import { AppointmentForm } from "@/features/appointments/form";
import { product, type Variant } from "@/features/products/data";
export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const params = await searchParams;
  const variant: Variant =
    params.variant === "original" || params.variant === "variant-b"
      ? params.variant
      : "variant-a";
  const interest =
    typeof params.product === "string"
      ? params.product.slice(0, 180)
      : product.slug;
  return (
    <>
      <LabBar active={variant} />
      <Header variant={variant} />
      <main id="main-content" className="wide appointment-layout">
        <div>
          <p className="eyebrow">Persoonlijk advies</p>
          <h1>Een vrijblijvende afspraak</h1>
          <p>
            Een goed gesprek over uw gehoor, uw dagelijks leven en wat u nodig
            heeft.
          </p>
          <h2>Wat gebeurt er daarna?</h2>
          <ol className="plain-list">
            <li>Een audicien bespreekt uw wensen telefonisch.</li>
            <li>U kiest samen een geschikte afspraaklocatie.</li>
            <li>Na een hoortest bekijkt u welke hooroplossing bij u past.</li>
          </ol>
          <p className="demo-notice">
            Dit is een demo. Er volgt geen telefoontje en er wordt geen afspraak
            gemaakt.
          </p>
        </div>
        <AppointmentForm
          interest={interest}
          variant={variant}
          kind={typeof params.type === "string" ? params.type : "afspraak"}
        />
      </main>
      <Footer />
    </>
  );
}
