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
  slug: "bernafon-encanta-400-pro-minirite-oplaadbaar",
  name: "Bernafon Encanta 400 Pro miniRITE - Oplaadbaar",
  price: 2395,
  image: "https://cdn.oogvoororen.nl/cerZWoltyKDZlBKDjneOb3FWMNbKqvUw8c26MdXs.png",
  source:
    "https://oogvoororen.be/hoorapparaat/bernafon-encanta-400-pro-minirite-oplaadbaar",
  verifiedAt: "13 oktober 2026",
  originalDescription:
    "De Bernafon Encanta 400 Pro is het premium model van de Encanta-familie. Het toestel richt zich op een hoge geluidskwaliteit en spraakverstaanbaarheid in uitdagende situaties.",
  description:
    "Het premium oplaadbare toestel uit de Encanta-serie, met aandacht voor spraak en muziek.",
  specs: [
    ["Batterij", "Oplaadbare lithium-ion accu"],
    ["Batterijduur", "24 uur volgens de productpagina"],
    ["Kanalen / banden", "24 / 24"],
    ["Luisterprogramma’s", "4"],
    ["Frequentiebereik", "10 kHz"],
    ["Bluetooth", "Geschikt voor compatibele Android- en Apple-toestellen"],
    ["Releasejaar", "2024"],
    ["Online aanpasbaar", "Raadpleeg audicien"],
    ["CROS-ondersteuning", "Raadpleeg audicien"],
    ["Muziekprogramma", "Ja"],
    ["Technologie", "Smart Sensor"],
  ],
  comparisons: [
    { name: "Encanta 400 Pro miniRITE", price: 2395, channels: 24 },
    { name: "Encanta 300 Engage miniRITE", price: 2195, channels: 20 },
    { name: "Encanta 200 Go miniRITE", price: 1695, channels: 18 },
    { name: "Encanta 100 Connect miniRITE", price: 1495, channels: 14 },
  ],
  accessories: [
    { name: "TV-A Adapter", price: 132, note: "Voor televisie-audio op compatibele toestellen." },
    { name: "SoundClip-A", price: 120, note: "Accessoire voor communicatie en telefonie." },
    { name: "RC-A Remote Control", price: 97.5, note: "Afstandsbediening." },
    { name: "Desk Charger", price: 225, note: "Standaardlader inbegrepen bij het toestel." },
    { name: "Charger Plus miniRITE", price: 285, note: "Alternatieve oplader." },
    { name: "Easy LE Adapter", price: 119.95, note: "Adapter voor compatibele apparaten." },
  
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
