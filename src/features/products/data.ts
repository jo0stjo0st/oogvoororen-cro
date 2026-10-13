export type Variant = "original" | "variant-a" | "variant-b";
export const variants: {
  id: Variant;
  name: string;
  description: string;
  hypothesis: string;
}[] = [
  {
    id: "original",
    name: "Original",
    description: "Referentie van de huidige productpagina.",
    hypothesis: "Visuele referentie; geen optimalisatie.",
  },
  {
    id: "variant-a",
    name: "Evolution",
    description:
      "Vertrouwd Oogvoororen, met meer rust en een duidelijke afspraakknop.",
    hypothesis: "Grotere tekst en zichtbare service nemen twijfels weg.",
  },
  {
    id: "variant-b",
    name: "Conversion First",
    description: "Eerst de prijs, begeleiding en vrijblijvend uitproberen.",
    hypothesis:
      "Een concrete probeer-CTA verlaagt de drempel naar een afspraak.",
  },
];
export const product = {
  slug: "phonak-audeo-infinio-i90-oplaadbaar",
  name: "Phonak Audéo Infinio Ultra I90 - Oplaadbaar",
  price: 2645,
  image: "/assets/phonak-i90.webp",
  source:
    "https://oogvoororen.be/hoorapparaat/phonak-audeo-infinio-i90-oplaadbaar",
  verifiedAt: "13 oktober 2026",
  originalDescription:
    "De Phonak Audéo Infinio Ultra R is een oplaadbaar hoortoestel dat gebruik maakt van Phonak's geavanceerde ERA-chip en AutoSense 7.0. Deze chip zorgt voor een superieure geluidsverwerking met een uitstekende geluidskwaliteit.",
  description:
    "Een oplaadbaar hoorapparaat dat zich automatisch aanpast aan uw luistersituatie. Met persoonlijk advies en een afstelling die bij uw gehoor past.",
  specs: [
    ["Batterij", "Oplaadbare lithium-ion accu"],
    ["Batterijduur", "Tot 31 uur volgens de productpagina"],
    ["Kanalen / banden", "20 / 20"],
    ["Luisterprogramma’s", "4"],
    ["Hoogte", "29 mm"],
    ["Bluetooth", "Geschikt voor Android en Apple"],
    ["Ringleiding", "Nee"],
    ["Online aanpasbaar", "Ja"],
    ["CROS-ondersteuning", "Ja"],
    ["Tap Control", "Ja"],
    ["Besturingssysteem", "AutoSense 7.0 / ERA-chip"],
  ],
  comparisons: [
    { name: "Infinio Ultra I90", price: 2645, channels: 20 },
    { name: "Infinio Ultra I70", price: 2395, channels: 20 },
    { name: "Infinio Ultra I50", price: 2145, channels: 16 },
    { name: "Infinio Ultra I30", price: 1895, channels: 12 },
  ],
  accessories: [
    {
      name: "TV Connector 2.0",
      price: 194.5,
      note: "Geluid van uw televisie naar uw hoorapparaten.",
    },
    {
      name: "PartnerMic",
      price: 445,
      note: "Een externe microfoon voor uw gesprekspartner.",
    },
    {
      name: "RemoteControl",
      price: 134.95,
      note: "Een losse afstandsbediening.",
    },
    {
      name: "Charger RIC Infinio",
      price: 195,
      note: "De standaardlader is inbegrepen bij dit toestel.",
    },
    {
      name: "ChargerGo RIC Infinio",
      price: 335,
      note: "Optionele oplader voor onderweg.",
    },
  ],
};
export const euro = (n: number) =>
  new Intl.NumberFormat("nl-BE", { style: "currency", currency: "EUR" }).format(
    n,
  );
export function appointmentUrl(
  variant: Variant,
  interest = product.slug,
  kind = "afspraak",
) {
  return `/afspraak?${new URLSearchParams({ variant, product: interest, type: kind }).toString()}`;
}
