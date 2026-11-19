import type { Metadata } from "next";
import { GuideChapter, type GuideChapterContent } from "../guide-chapter";
import { guidePhotos } from "../visual";

export const metadata: Metadata = {
  title: "Onderhoud, service en nazorg | Oogvoororen Koopgids",
  description: "Lees wat u zelf kunt doen, hoe bijstellen werkt en waarvoor u bij Oogvoororen terechtkunt na aankoop.",
};

const chapter: GuideChapterContent = {
  number: 5,
  title: "Onderhoud, service en nazorg",
  intro: "Uw hoortoestellen gaan met u mee van ontbijt tot het laatste gesprek van de dag. Met een eenvoudige routine houdt u ze goed bruikbaar. Als het geluid, de pasvorm of uw gehoor verandert, kunt u bij Oogvoororen terecht.",
  image: guidePhotos.followup,
  sections: [
    {
      id: "dagelijks-onderhoud",
      title: "Wat kunt u thuis doen?",
      paragraphs: [
        "Maak de buitenkant schoon met een zacht, droog doekje en laad de toestellen op of vervang de batterijen wanneer dat nodig is. Volg voor schoonmaken en drogen de uitleg die u bij uw eigen model kreeg.",
        "Bij sommige modellen kunt u zelf het oorsmeerfilter of dopje vervangen. Laat de audicien het voordoen en probeer het één keer tijdens uw afspraak. Dan weet u welke onderdelen bij uw toestel passen en kunt u ze bij Oogvoororen bijbestellen.",
      ],
    },
    {
      id: "minder-geluid",
      title: "Wat als een toestel ineens zachter klinkt?",
      paragraphs: ["Controleer eerst de eenvoudige dingen. Is het toestel opgeladen of is de batterij nog goed? Ziet u vuil bij het dopje of filter? Gebruik de onderhoudsstappen die uw audicien voor uw model heeft voorgedaan. Blijft het geluid anders of werkt het toestel nog steeds niet goed, neem dan contact op met Oogvoororen."],
    },
    {
      id: "bijstellen",
      title: "Bijstellen thuis, op locatie of online",
      paragraphs: [
        "Een nieuw kantoor, een andere bril of een verandering in uw gehoor kan aanleiding zijn om opnieuw naar de instellingen of pasvorm te kijken. Geef aan in welke situatie u iets mist. Uw audicien kan dan gericht nagaan wat er aangepast moet worden.",
        "Sommige toestellen ondersteunen online bijstellen. Dan kan de audicien instellingen op afstand wijzigen via de bijbehorende app. Bij een probleem met de pasvorm, een mogelijk defect of een nieuwe meting spreken we samen af waar u het beste geholpen bent.",
      ],
    },
    {
      id: "service-en-garantie",
      title: "Vijf jaar service en garantie",
      paragraphs: [
        "Bij aankoop bij Oogvoororen zijn vijf jaar service en garantie inbegrepen. Voor bijstellingen van uw hoortoestellen kunt u binnen de serviceperiode bij ons terecht. Meld een mogelijk defect bij ons, dan bekijken we wat er aan de hand is en welke oplossing onder uw garantie valt.",
        "Filters, dopjes en batterijen zijn onderhoudsartikelen die u zo nodig kunt bijbestellen. Bij schade of verlies helpen we u uitzoeken welke mogelijkheden er zijn en welke afspraken voor uw situatie gelden.",
      ],
    },
    {
      id: "klaar-voor-uw-afspraak",
      title: "Klaar voor uw eerste afspraak?",
      paragraphs: ["Bedenk welk gesprek u als eerste weer makkelijker wilt volgen. Dat is een goed vertrekpunt voor de intake. Bij Oogvoororen kunt u met die vraag terecht voor een vrijblijvende hoortest en persoonlijk advies, thuis of in een hoorcentrum."],
    },
  ],
  faq: [
    ["Kan ik zelf een filter of dopje wisselen?", "Dat kan bij veel modellen. Vraag uw audicien om het voor te doen en gebruik het onderdeel dat past bij uw toestel."],
    ["Zijn bijstellingen inbegrepen?", "Ja, u kunt voor bijstellingen bij ons terecht binnen de vijf jaar inbegrepen service. We bespreken samen hoe en waar de bijstelling het beste kan plaatsvinden."],
    ["Heb ik altijd een app nodig voor nazorg?", "Een app kan nodig zijn voor een online bijstelling. U kunt ook met ons afspreken voor hulp op locatie of aan huis."],
  ],
  previous: { href: "/hoortoestellen/keuzehulp/proefperiode-hoortoestellen", label: "Vorig hoofdstuk", title: "Uitproberen en wennen" },
  next: { href: "/experimenten/afspraak", label: "Uw volgende stap", title: "Maak vrijblijvend een afspraak", primary: true },
};

export default function Page() {
  return <GuideChapter chapter={chapter} />;
}
