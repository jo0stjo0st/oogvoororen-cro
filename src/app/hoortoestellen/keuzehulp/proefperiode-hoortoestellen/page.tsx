import type { Metadata } from "next";
import { GuideChapter, type GuideChapterContent } from "../guide-chapter";
import { guidePhotos } from "../visual";

export const metadata: Metadata = {
  title: "Hoortoestellen uitproberen en wennen | Oogvoororen Koopgids",
  description: "Lees hoe u uw eerste hoortoestellen vrijblijvend uitprobeert, went aan geluid en uw ervaringen gebruikt bij een vervolgafspraak.",
};

const chapter: GuideChapterContent = {
  number: 4,
  title: "Uw hoortoestellen uitproberen en eraan wennen",
  intro: "De eerste echte test is vaak gewoon thuis. U zet koffie, iemand praat vanuit de keuken en ineens valt het tikken van de klok op. Tijdens de vrijblijvende proefperiode merkt u welke geluiden nieuw voor u zijn en waar de toestellen u helpen.",
  image: guidePhotos.trial,
  sections: [
    {
      id: "eerste-afstelling",
      title: "De eerste afstelling",
      paragraphs: [
        "De audicien stelt de toestellen in op basis van uw gehoor en kijkt of ze prettig zitten. U oefent met indoen en uitnemen, opladen of batterijen vervangen. Als u een app wilt gebruiken, kunt u bespreken hoe u die koppelt en wat u er zelf mee kunt aanpassen.",
        "Spreek af welke situaties u gaat uitproberen en hoe u contact opneemt als iets onprettig klinkt of zit. Zo weet u met welke ervaring u naar de vervolgafspraak toewerkt.",
      ],
    },
    {
      id: "wennen",
      title: "Geef uzelf tijd om aan het geluid te wennen",
      paragraphs: [
        "Uw eigen stem, voetstappen en geritsel kunnen in het begin meer opvallen. Draag de toestellen volgens de afspraken met uw audicien en begin in situaties waarin u rustig kunt luisteren. Bouw daarna op naar momenten met meer stemmen en omgevingsgeluid.",
        "Zit een toestel pijnlijk, valt het uit of klinkt geluid telkens onaangenaam hard? Neem dan contact op met uw audicien. Die kan nagaan of er iets aan de pasvorm of instelling moet veranderen.",
      ],
    },
    {
      id: "uitproberen",
      title: "Probeer opnieuw wat u eerder lastig vond",
      paragraphs: ["Kies twee of drie situaties die tijdens het adviesgesprek aan bod kwamen. Beschrijf bij elke situatie wat u makkelijker kon volgen en wat lastig bleef."],
      points: [
        "Aan tafel. Kunt u iemand volgen terwijl er ook een ander gesprek loopt?",
        "Op het werk. Verstaat u ook de collega aan de andere kant van de tafel?",
        "Thuis. Hoe gaat praten met uw partner als de televisie aanstaat?",
      ],
    },
    {
      id: "vervolgafspraak",
      title: "Van ervaring naar bijstelling en beslissing",
      paragraphs: [
        "Vertel wat er gebeurde en wanneer. ‘Aan tafel klonk bestek erg scherp, terwijl stemmen duidelijker waren’ geeft de audicien meer om mee te werken dan ‘het stond te hard’. Samen bespreekt u of een aanpassing of een ander toestel zinvol is.",
        "Bij Oogvoororen kunt u vrijblijvend uitproberen. Aan het einde van de afgesproken proefperiode bespreekt u of het toestel doet wat u nodig hebt en beslist u of u het wilt aanschaffen.",
      ],
    },
  ],
  faq: [
    ["Hoe lang moet ik wennen?", "Dat verschilt per persoon en per situatie. Spreek met uw audicien af hoe u het dragen opbouwt en wanneer u samen evalueert."],
    ["Moet ik wachten op mijn controle als iets vervelend klinkt?", "Neem gerust eerder contact op. Leg uit welk geluid of welke situatie lastig is en geef het aan als het toestel irriteert of pijn doet."],
    ["Wat als ik tijdens de proef een ander toestel wil proberen?", "Bespreek wat u mist in uw huidige proef. De audicien kijkt met u of bijstellen of wisselen u verder helpt."],
  ],
  previous: { href: "/hoortoestellen/keuzehulp/hoortoestel-kiezen", label: "Vorig hoofdstuk", title: "Hoortoestellen kiezen" },
  next: { href: "/hoortoestellen/keuzehulp/onderhoud-en-nazorg", label: "Volgend hoofdstuk", title: "Onderhoud, service en nazorg" },
};

export default function Page() {
  return <GuideChapter chapter={chapter} />;
}
