export const technologyRoot = "/hoorapparaat-technologie";

export const specifications = [
  {id:"rumoeronderdrukking", title:"Rumoeronderdrukking", summary:"Beperkt afleidend achtergrondgeluid wanneer u een gesprek wilt volgen."},
] as const;

export const brands = {
  bernafon:"Bernafon",
  signia:"Signia",
} as const;

type Brand = keyof typeof brands;
type Specification = typeof specifications[number]["id"];
type Technology = {
  brand: Brand;
  id: string;
  name: string;
  summary: string;
  description: string;
  example: string;
  evidence: string;
  illustration?: string;
};

export const technologies = [
  {
    brand:"bernafon", id:"smart-noise-reduction", name:"Smart Noise Reduction",
    summary:"Past de demping aan het achtergrondgeluid aan terwijl u luistert.",
    description:"Bij de Encanta kan Bernafon storend geluid dempen terwijl de verwerking rekening houdt met spraak. Smart Directionality bepaalt uit welke richting geluid meer nadruk krijgt. Samen beïnvloeden die functies hoe duidelijk de stem van uw gesprekspartner boven het rumoer uitkomt.",
    example:"In een restaurant hoort u de stem tegenover u naast ventilatie en andere tafels. De toestellen kunnen het achtergrondgeluid minder nadruk geven.",
    evidence:"Bernafon Encanta miniRITE, technisch functieoverzicht.",
    illustration:"/experimenten/bernafon-smart-noise-reduction",
  },
  {
    brand:"bernafon", id:"ai-smart-noise-reduction", name:"AI Smart Noise Reduction",
    summary:"Gebruikt een getraind netwerk om storend achtergrondgeluid te herkennen.",
    description:"Bernafon beschrijft voor de Revita-familie een netwerk dat storend achtergrondgeluid identificeert. Een tweede netwerk, AI Smart Speech Finder, zoekt waar spraak vandaan komt. De productinformatie per technologieniveau gebruikt ook de naam Smart Noise Reduction. Vraag bij de keuze naar de uitvoering van het specifieke toestel.",
    example:"Tijdens een etentje wisselt het lawaai uit de keuken af met geroezemoes. De ruisverwerking houdt rekening met het storende geluid terwijl de spraakverwerking een spreker zoekt.",
    evidence:"Bernafon, professioneel overzicht van de Revita-familie.",
  },
  {
    brand:"signia", id:"dynamic-noise-control-ai", name:"Dynamic Noise Control AI",
    summary:"Past de rumoeronderdrukking aan het type en niveau van achtergrondgeluid aan.",
    description:"Signia verwerkt het type en de sterkte van achtergrondgeluid met een afzonderlijk AI-netwerk. Het netwerk werkt samen met de verwerking voor onder meer spraak en de luisteromgeving. Zo kan de demping veranderen wanneer het geroezemoes toe- of afneemt.",
    example:"U praat in een café en aan de tafel naast u begint een levendig gesprek. De demping kan meebewegen met het veranderende rumoer.",
    evidence:"Signia Pure C&G MaX, Feature overview en Signia White Paper over Multi-adaptive Xperience.",
    illustration:"/experimenten/signia-max-7/dynamic-noise-control-ai",
  },
] satisfies Technology[];

export type TechnologyId = typeof technologies[number]["id"];

export const specificationTechnologies: Record<Specification, TechnologyId[]> = {
  rumoeronderdrukking:["smart-noise-reduction","ai-smart-noise-reduction","dynamic-noise-control-ai"],
};

export const families = {
  encanta:{brand:"bernafon", name:"Encanta"},
  revita:{brand:"bernafon", name:"Revita"},
  max:{brand:"signia", name:"Pure Charge&Go MaX"},
} as const;

type Family = keyof typeof families;
const products = {
  "encanta-400-pro":{family:"encanta", name:"Encanta 400 Pro miniRITE", href:"/experimenten/complete-productpagina#specificaties"},
  "pure-max-7":{family:"max", name:"Pure Charge&Go MaX 7", href:"/experimenten/signia-max-7#specificaties"},
  "pure-max-5":{family:"max", name:"Pure Charge&Go MaX 5"},
  "pure-max-3":{family:"max", name:"Pure Charge&Go MaX 3"},
} satisfies Record<string,{family:Family; name:string; href?:string}>;

type ProductId = keyof typeof products;

// A family mention describes the platform. It never activates a specification for each product.
export const familyEvidence: Partial<Record<Family, TechnologyId[]>> = {
  revita:["ai-smart-noise-reduction"],
};

const productImplementations: Partial<Record<ProductId, Partial<Record<Specification, TechnologyId>>>> = {
  "encanta-400-pro":{rumoeronderdrukking:"smart-noise-reduction"},
  "pure-max-7":{rumoeronderdrukking:"dynamic-noise-control-ai"},
  "pure-max-5":{rumoeronderdrukking:"dynamic-noise-control-ai"},
  "pure-max-3":{rumoeronderdrukking:"dynamic-noise-control-ai"},
};

export function technologyHref(specification: Specification, technology: Technology) {
  return technologyRoot+"/"+specification+"/"+technology.brand+"/"+technology.id;
}

export function productTechnologyHref(product: ProductId, specification: Specification) {
  const technology=technologies.find(item=>item.id===productImplementations[product]?.[specification]);
  return technology ? technologyHref(specification,technology)+"?toestel="+product : undefined;
}

export function productReferences(specification: Specification, technology: TechnologyId) {
  return (Object.keys(products) as ProductId[]).filter(product=>productImplementations[product]?.[specification]===technology)
    .map(id=>({id,...(products[id] as {family:Family;name:string;href?:string})}));
}
