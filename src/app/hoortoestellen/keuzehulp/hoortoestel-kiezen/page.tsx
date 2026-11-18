import type { Metadata } from "next";
import { GuideChapter, type GuideChapterContent } from "../guide-chapter";
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
      paragraphs: [
        "Bij veel toestellen zit een klein deel achter uw oor. Een dun draadje kan naar een luidspreker in het oor lopen. Er zijn ook toestellen die helemaal in het oor zitten. Welke draagvorm past, hangt af van uw gehoor, de vorm van uw oor en wat u zelf makkelijk kunt indoen en bedienen.",
        "Draagt u een bril? Zet die dan op tijdens het passen. Probeer ook zelf het toestel in en uit te doen en in de lader te zetten. Zo merkt u snel of het bij uw dagelijkse routine past.",
      ],
    },
    {
      id: "functies",
      title: "Welke functies gebruikt u echt?",
      paragraphs: [
        "In gezelschap kan een toestel helpen door geluid uit de richting van uw gesprekspartner meer nadruk te geven. Aan een ronde tafel wilt u misschien juist meerdere stemmen rondom u kunnen volgen. Vertel de audicien hoe uw lastigste gesprekken verlopen en vraag welke instelling of techniek daarvoor bedoeld is.",
        "Belt u veel, bespreek dan of gesprekken rechtstreeks naar het toestel kunnen en of dat met uw telefoon werkt. Kiest u voor oplaadbaar, kijk dan hoe het opladen past bij uw werkdag, reizen of een weekend weg.",
      ],
    },
    {
      id: "klank",
      title: "Hoe vergelijkt u merken en klank?",
      paragraphs: [
        "Bij Oogvoororen kunt u kiezen uit bekende A-merken zoals Oticon, Phonak, Signia en Widex. Toestellen kunnen stemmen en omgevingsgeluid verschillend laten klinken. Ook de afstelling en de manier waarop het toestel in uw oor zit beïnvloeden wat u hoort.",
        "Vertel concreet wat u opvalt. Klinkt uw eigen stem hol? Zijn bestek en servies erg scherp? Verstaat u uw partner beter? Met die observaties kan de audicien bepalen wat bijstelling vraagt en wanneer het zinvol is een ander model te proberen.",
      ],
    },
    {
      id: "prijs",
      title: "Wat kost een hoortoestel en wat kan een duurder model opleveren?",
      paragraphs: [
        "De bedragen lopen uiteen. Ter oriëntatie staan er bij Oogvoororen modellen vanaf ongeveer € 130 per toestel na vergoeding en particuliere voorbeelden van ongeveer € 1.500 tot ruim € 3.000 per toestel. Dit zijn voorbeelden uit het assortiment. Uw bedrag hangt af van het model, uw eventuele vergoeding en of u één of twee toestellen kiest.",
        "Een hoger technologieniveau kan vooral iets toevoegen als u vaak in wisselende of drukke luistersituaties bent. Denk aan een toestel dat uitgebreider omgaat met stemmen en achtergrondgeluid. Vraag welk verschil de audicien voor ú verwacht en probeer het in een situatie die voor u telt.",
        "Laat het bedrag voor uw complete keuze op een rij zetten, met eventuele vergoeding, lader of accessoires en de inbegrepen service. Zo weet u wat u zelf betaalt.",
      ],
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
