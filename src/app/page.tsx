import Link from "next/link";
import {LabBar} from "@/components/lab-bar";

const pages=[
 {group:"Algemene pagina’s",items:[
  {name:"Nieuwe homepage",url:"/experimenten/nieuwe-homepage",status:"In ontwikkeling"},
  {name:"Afspraak maken (Nederland)",url:"/experimenten/afspraak",status:"Nieuw ontwerp · ter beoordeling"},
  {name:"Hoorapparaten: keuzeportaal",url:"/experimenten/hoorapparaten-overzicht",status:"In ontwikkeling"},
  {name:"Signia: merkoverzicht",url:"/experimenten/signia-overzicht",status:"In ontwikkeling"}]},
 {group:"Dienstverlening",items:[
  {name:"Audicien aan huis (NL)",url:"/experimenten/audicien-aan-huis",status:"Voorlopig goedgekeurd"},
  {name:"Audiologue à domicile (FR)",url:"/experimenten/audicien-aan-huis-fr",status:"Vertaling ter controle"}]},
 {group:"Locatiepagina’s",items:[
  {name:"Hoorcentrum Antwerpen-Berchem (NL)",url:"/experimenten/hoorcentrum-berchem",status:"Voorlopig goedgekeurd"},
  {name:"Centre auditif Anvers-Berchem (FR)",url:"/experimenten/hoorcentrum-berchem-fr",status:"Vertaling ter controle"}]},
 {group:"Productpagina’s",items:[
  {name:"Complete productpagina (NL)",url:"/experimenten/complete-productpagina",status:"In ontwikkeling"},
  {name:"Productpagina (FR)",url:"/experimenten/page-produit-fr",status:"In ontwikkeling"}]}
];
export default function HomePage(){return <><LabBar/><main id="main-content" className="wide lab-home cro-lab-dashboard"><aside className="cro-lab-sidebar"><div className="cro-lab-sidebar-heading"><strong>Pagina-overzicht</strong><small>Alle pagina’s op één plek</small></div>{pages.map(section=><div className="cro-lab-navgroup" key={section.group}><h2>{section.group}</h2>{section.items.map(item=><Link href={item.url} key={item.url}><span>{item.name}</span><small>{item.status}</small></Link>)}</div>)}</aside><div className="cro-lab-main"><div className="lab-intro"><p className="eyebrow">Oogvoororen · CRO-werkplaats</p><h1>Pagina-overzicht Oogvoororen</h1><p>Bekijk en verfijn de volledige pagina’s. De Nederlandstalige pagina’s voor Berchem en audicien aan huis zijn voorlopig goedgekeurd; de Franse versies staan klaar om na te kijken.</p></div>{pages.map(section=><section className="section" key={section.group}><h2>{section.group}</h2><div className="cro-experiment-list">{section.items.map(item=><article className="cro-experiment" key={item.url}><div><h3>{item.name}</h3><p>{item.status}</p></div><Link className="cro-experiment-status" href={item.url}>Bekijk pagina →</Link></article>)}</div></section>)}</div></main></>}