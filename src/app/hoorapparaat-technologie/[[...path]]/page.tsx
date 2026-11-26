import type {Metadata} from "next";
import Link from "next/link";
import {notFound} from "next/navigation";
import {ProductSiteHeader,ProductSiteFooter} from "@/components/product-site-shell";
import {brands,families,familyEvidence,productReferences,specifications,specificationTechnologies,technologies,technologyHref,technologyRoot} from "@/features/products/hearing-technology";
import styles from "../../experimenten/bernafon-smart-directionality/page.module.css";

type Props={params:Promise<{path?:string[]}>;searchParams:Promise<{toestel?:string|string[]}>};

function resolve(path:string[]){
  const [specId,brand,id]=path;
  const spec=specifications.find(item=>item.id===specId);
  if(path.length>0 && !spec) notFound();
  const entries=spec ? technologies.filter(item=>specificationTechnologies[spec.id].includes(item.id)) : [];
  const technology=entries.find(item=>item.brand===brand && item.id===id);
  if(path.length!==0 && path.length!==1 && (path.length!==3 || !technology)) notFound();
  return {spec,entries,technology};
}

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {path=[]}=await params;
  const {spec,technology}=resolve(path);
  return {
    title:(technology ? brands[technology.brand]+" "+technology.name : spec?.title ?? "Technologie in hoorapparaten")+" | Oogvoororen",
    description:technology?.summary ?? spec?.summary ?? "Ontdek wat functies van hoorapparaten doen en hoe verschillende merken ze uitvoeren.",
    alternates:{canonical:technologyRoot+(path.length?"/"+path.join("/"):"")},
  };
}

export default async function TechnologyPage({params,searchParams}:Props){
  const {path=[]}=await params;
  const {toestel}=await searchParams;
  const {spec,entries,technology}=resolve(path);
  const usedBy=spec && technology ? productReferences(spec.id,technology.id) : [];
  const source=usedBy.find(item=>item.id===toestel && item.href);
  const title=technology?.name ?? spec?.title ?? "Technologie in hoorapparaten";

  return <><ProductSiteHeader hideBreadcrumb/><main id="main-content" className="wide cro-complete-page">
    <nav className="cro-complete-back" aria-label="Broodkruimel">
      {source?.href && <><Link href={source.href}>← {source.name}</Link>{" · "}</>}
      {spec ? <Link href={technologyRoot}>Hoorapparaattechnologie</Link> : <span aria-current="page">Hoorapparaattechnologie</span>}
      {spec && <>{" / "}{technology ? <Link href={technologyRoot+"/"+spec.id}>{spec.title}</Link> : <span aria-current="page">{spec.title}</span>}</>}
      {technology && <span aria-current="page">{" / "}{brands[technology.brand]} · {technology.name}</span>}
    </nav>
    <section className="cro-complete-section">
      <p className="eyebrow">{technology ? brands[technology.brand]+" · "+spec?.title : "Uitleg van Oogvoororen"}</p>
      <h1>{title}</h1>
      <p className="cro-complete-lead">{technology?.summary ?? spec?.summary ?? "Lees wat de specificaties van hoorapparaten betekenen. Merken kunnen dezelfde functie op verschillende manieren uitvoeren. Ook binnen één merk kan de uitvoering verschillen per toestel en generatie."}</p>
      {source?.href && <p><Link className="cro-complete-textlink" href={source.href}>Terug naar de specificaties van {source.name} →</Link></p>}
    </section>
    {!spec && <section className="cro-complete-section"><h2>Functies van hoorapparaten</h2><div className="cro-complete-cards">
      {specifications.map(item=><article key={item.id}><h3><Link className="underline" href={technologyRoot+"/"+item.id}>{item.title}</Link></h3><p>{item.summary}</p></article>)}
    </div></section>}
    {spec && !technology && <>
      <section className="cro-complete-section"><h2>Wat doet rumoeronderdrukking?</h2>
        <p>In een brasserie hoort u niet alleen uw gesprekspartner, maar ook andere tafels, muziek en ventilatie. Rumoeronderdrukking kan een deel van die achtergrond minder nadrukkelijk maken. Hoeveel u merkt hangt af van uw gehoor, de afstelling en de geluiden rondom u.</p>
        <p>Richtmicrofoons kunnen tegelijk meer nadruk geven aan geluid uit een bepaalde richting. Voor plotselinge tikken, zoals bestek op een bord, gebruiken hoorapparaten vaak een aparte functie.</p>
      </section>
      <section className="cro-complete-section"><h2>Zo voeren merken deze functie uit</h2>
        <p>Een merk kan meerdere technieken gebruiken voor dezelfde functie. Ook kan een merk één techniek in meerdere toestellen toepassen.</p>
        {Object.entries(brands).map(([brand,name])=>{
          const options=entries.filter(item=>item.brand===brand);
          return options.length>0 && <div key={brand} className="mt-6">
            <h3>{name}</h3>
            <ul className="grid gap-3">{options.map(item=><li key={item.id}>
              <Link className="cro-complete-textlink" href={technologyHref(spec.id,item)}>{item.name} →</Link>
              <p>{item.summary}</p>
            </li>)}</ul>
          </div>;
        })}
      </section>
    </>}
    {spec && technology && <>
      <section className="cro-complete-section"><h2>Hoe werkt het?</h2><p>{technology.description}</p><div className={styles.note}><strong>Een voorbeeld</strong><p>{technology.example}</p></div>
        {technology.illustration && <p className="mt-5"><Link className="cro-complete-textlink" href={technology.illustration}>Bekijk de interactieve uitleg →</Link></p>}
      </section>
      <section className="cro-complete-section"><h2>Welke hoorapparaten gebruiken deze techniek?</h2>
        {usedBy.length>0 && <ul className="grid gap-2">{usedBy.map(item=><li key={item.id}>{item.href ? <Link className="underline" href={item.href}>{item.name}</Link> : item.name}</li>)}</ul>}
        {Object.entries(familyEvidence).filter(([,ids])=>ids.includes(technology.id)).map(([id])=><p key={id}>Bernafon vermeldt deze techniek voor de <strong>{families[id as keyof typeof families].name}-familie</strong>.</p>)}
        <p className="cro-complete-small">Bron: {technology.evidence}</p>
        <Link className="cro-complete-textlink" href={technologyRoot+"/"+spec.id}>Vergelijk de technieken voor {spec.title.toLowerCase()} →</Link>
      </section>
    </>}
    <section className="cro-complete-section" id="afspraak"><h2>Bespreek wat u in rumoer wilt kunnen verstaan</h2><p>Uw audioloog helpt u hoorapparaten kiezen en de verschillen zelf ervaren tijdens een vrijblijvende proef.</p><Link className="cro-complete-cta" href="/experimenten/afspraak">Maak een afspraak voor hooradvies →</Link></section>
  </main><ProductSiteFooter/></>;
}
