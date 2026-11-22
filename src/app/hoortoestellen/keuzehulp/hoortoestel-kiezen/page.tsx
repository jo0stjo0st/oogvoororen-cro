import type { Metadata } from "next";
import { GuideChapter, type GuideChapterContent } from "../guide-chapter";
import { DeviceStyles } from "@/app/hoortoestellen/keuzehulp/device-styles";
import { guidePhotos } from "../visual";

export const metadata: Metadata = {
  title: "Uw eerste hoortoestellen kiezen | Oogvoororen Koopgids",
  description: "Vergelijk draagvormen, klank, functies en prijzen en ontdek welk verschil u thuis en op uw werk kunt merken.",
};

const chapter: GuideChapterContent = {
  number: 3,
  title: "Welke hoortoestellen passen bij u?",
  intro: "Wilt u vooral uw partner beter verstaan of juist meerdere mensen kunnen volgen in een overleg? Met uw hoortest en die dagelijkse situaties kiest u samen met de audicien welke toestellen u gaat uitproberen.",
  image: guidePhotos.device,
  sections: [
    {
      id: "pasvorm",
      title: "Welke draagvorm zit prettig?",
      illustration: <DeviceStyles />,
      paragraphs: [
        "Uw audiogram laat zien hoeveel gehoorverlies u bij verschillende toonhoogtes hebt. De audicien bepaalt daarmee hoeveel versterking u nodig hebt en welke draagvormen die kunnen leveren. Ook de vorm en de grootte van uw gehoorgang spelen mee.",
        "Zijn meerdere draagvormen geschikt voor uw gehoor en uw oren? Dan kunt u kiezen op basis van wat prettig zit, hoe zichtbaar het toestel is en hoe makkelijk u het zelf kunt indoen en bedienen.",
        "Draagt u een bril? Zet die dan op tijdens het passen. Probeer ook zelf het toestel in en uit te doen en in de lader te zetten. Zo merkt u snel of het bij uw dagelijkse routine past.",
        "Sport u vaak of werkt u veel buiten? Dan houden we rekening met zweet, regen en stof. Binnen de modellen die bij uw gehoor passen, zoeken we naar de hoogste IP-bescherming die past bij uw gebruik, bijvoorbeeld IP68. We kijken ook naar de instructies van de fabrikant voor het dragen en onderhouden.",
        "Wilt u een discrete kleur? Dan kijken we vaak naar een tint die aansluit bij uw haar- of huidskleur. Ook de kleur van het jaar kan passen, als de fabrikant die aanbiedt en u die mooi vindt. Mag uw toestel juist opvallen? Dan kan knalroze ook, afhankelijk van het model.",
      ],
    },
    {
      id: "functies",
      title: "Welke functies gebruikt u echt?",
      image: guidePhotos.trial,
      paragraphs: [
        "In gezelschap kan een toestel helpen door geluid uit de richting van uw gesprekspartner meer nadruk te geven. Aan een ronde tafel wilt u misschien juist meerdere stemmen rondom u kunnen volgen. Vertel de audicien hoe uw lastigste gesprekken verlopen en vraag welke instelling of techniek daarvoor bedoeld is.",
        "Belt u veel, bespreek dan of gesprekken rechtstreeks naar het toestel kunnen en of dat met uw telefoon werkt. Kiest u voor oplaadbaar, kijk dan hoe het opladen past bij uw werkdag, reizen of een weekend weg.",
      ],
    },
    {
      id: "klank",
      title: "Hoe vergelijkt u merken en klank?",
      image: "/images/audicien-aan-huis/advies-aan-huis.webp",
      paragraphs: [
        "Bij Oogvoororen kunt u kiezen uit bekende A-merken zoals Oticon, Phonak, Signia en Widex. Toestellen kunnen stemmen en omgevingsgeluid verschillend laten klinken. Ook de afstelling en de manier waarop het toestel in uw oor zit beïnvloeden wat u hoort.",
        "Bij Oogvoororen testen we uw klankvoorkeur met Sound Preference. U luistert naar voorbeelden uit alledaagse situaties en vergelijkt hoe die klinken met verschillende manieren van geluidsverwerking. Misschien klinkt de ene versie voor u rustiger of zijn stemmen in de andere versie duidelijker. Uw voorkeur helpt de audicien om samen met u te kiezen welk toestel u gaat uitproberen.",
        "Vertel concreet wat u opvalt. Klinkt uw eigen stem hol? Zijn bestek en servies erg scherp? Verstaat u uw partner beter? Met die observaties kan de audicien bepalen wat bijstelling vraagt en wanneer het zinvol is een ander model te proberen.",
      ],
    },
    {
      id: "prijs",
      title: "Wat kost een hoortoestel en wat kan een duurder model opleveren?",
      paragraphs: [
        "Hoortoestellen die in aanmerking komen voor vergoeding kosten bij Oogvoororen gemiddeld € 625 per toestel vóór vergoeding. Voor particuliere hoortoestellen vindt u in ons assortiment voorbeelden van ongeveer € 1.500 tot ruim € 3.000 per toestel. Uw prijs hangt af van het model en of u één of twee toestellen kiest.",
        "Een hoger technologieniveau kan vooral iets toevoegen als u vaak in wisselende of drukke luistersituaties bent. Denk aan een toestel dat uitgebreider omgaat met stemmen en achtergrondgeluid. Vraag welk verschil de audicien voor ú verwacht en probeer het in een situatie die voor u telt.",
        "Laat het bedrag voor uw complete keuze op een rij zetten, met eventuele vergoeding, lader of accessoires en de inbegrepen service. Zo weet u wat u zelf betaalt.",
      ],
      note: {
        title: "Oogvoororen heeft afspraken met alle zorgverzekeraars",
        link: { href: "/vergoedingen", label: "Alles over vergoedingen voor hoortoestellen" },
        text: "Komt u als volwassene in aanmerking voor vergoeding uit de basisverzekering? Dan vergoedt uw zorgverzekeraar doorgaans 75% van het afgesproken tarief en betaalt u zelf 25% wettelijke eigen bijdrage. Openstaand eigen risico kan daarnaast nog van toepassing zijn. Tijdens het adviesgesprek rekenen we uit wat dit voor uw keuze betekent.",
      },
    },
  ],
  faq: [
    ["Moet ik al weten welk merk ik wil?", "U kunt beginnen met uw hoortest, uw wensen en uw budget. De audicien helpt u de mogelijkheden binnen die combinatie te kiezen."],
    ["Heb ik één of twee hoortoestellen nodig?", "Dat bespreekt u met de audicien. Die kijkt naar het gehoor van beide oren, wat u in uw dagelijks leven wilt verbeteren en wat tijdens het passen haalbaar is."],
    ["Kan ik een voordeliger model uitproberen?", "Bespreek uw budget tijdens het adviesgesprek. De audicien kan aangeven welke passende opties er zijn en hoe u beoordeelt of ze genoeg helpen."],
  ],
  previous: { href: "/hoortoestellen/keuzehulp/hoortest-en-intake", label: "Vorig hoofdstuk", title: "Uw intake, hoortest en adviesgesprek" },
  next: { href: "/hoortoestellen/keuzehulp/proefperiode-hoortoestellen", label: "Volgend hoofdstuk", title: "Uitproberen en wennen" },
};

export default function Page() {
  return <GuideChapter chapter={chapter} />;
}
