export type Diagram = "focus" | "turn" | "group" | "peak" | "detect" | "soften" | "notes" | "music" | "stream" | "ring" | "support" | "balance";
type Example = { title: string; text: string; diagram: Diagram };
type Feature = {
  name: string;
  intro: string;
  explanation: string;
  steps: [Example, Example, Example];
  scenes: [Example, Example, Example];
  levels: [string, string, string, string];
  note: string;
  faq: [string, string][];
  trial: string;
  related: [string, string][];
};

export const features: Record<string, Feature> = {
  "smart-sensor": {
    name: "Smart Sensor",
    intro: "Aan tafel wisselt het gesprek snel van de persoon tegenover u naar iemand naast u. Bernafon Smart Sensor gebruikt uw beweging om de hoorapparaten te helpen schakelen tussen één gesprekspartner en een breder groepsgesprek.",
    explanation: "Smart Sensor voegt informatie over hoofd- en lichaamsbeweging toe. Smart Directionality bepaalt hoe de microfoons geluid uit verschillende richtingen benadrukken. Smart Noise Reduction kan achtergrondgeluid dempen. Op de Encanta 300 en 400 kan bewegingsinformatie helpen om beide bij te stellen.",
    steps: [
      {title:"U luistert naar één spreker",text:"In rumoer kan een gerichte stand de stem vóór u meer nadruk geven.",diagram:"focus"},
      {title:"U draait naar een andere spreker",text:"De sensor registreert beweging van uw hoofd en lichaam. Die informatie kan meewegen bij de geluidsverwerking.",diagram:"turn"},
      {title:"Het gesprek wordt breder",text:"De toestellen kunnen de luisterrichting en rumoeronderdrukking aanpassen als u weer met meerdere mensen praat.",diagram:"group"},
    ],
    scenes: [
      {title:"Eén gesprek in een café",text:"U kijkt uw gesprekspartner aan terwijl om u heen andere gesprekken plaatsvinden. Een gerichtere instelling kan hier helpen.",diagram:"focus"},
      {title:"Een collega neemt het woord",text:"U draait naar de collega naast u. Uw beweging geeft extra informatie aan de toestellen wanneer de gesprekssituatie verandert.",diagram:"turn"},
      {title:"Een etentje met vrienden",text:"Verschillende mensen komen aan het woord. Een bredere luisterrichting kan helpen om opnieuw bij het groepsgesprek aan te sluiten.",diagram:"group"},
    ],
    levels:["Niet beschikbaar","Niet beschikbaar","Beschikbaar · beweging kan de automatische verwerking beïnvloeden","Beschikbaar · gecombineerd met de uitgebreidste richtingsinstellingen binnen de serie"],
    note:"De illustraties tonen mogelijke veranderingen in luisterrichting. Hoe het toestel reageert hangt af van uw instellingen en de geluiden om u heen.",
    faq:[
      ["Herkent de sensor wie ik wil verstaan?","De sensor levert informatie over beweging. De hoorapparaten gebruiken die samen met informatie uit het geluid. Wie u wilt verstaan, blijft afhankelijk van de situatie."],
      ["Is dit hetzelfde als een richtmicrofoon?","De richtmicrofoons bepalen welke richtingen meer nadruk krijgen. Smart Sensor levert bewegingsinformatie waarmee het toestel de richting en rumoeronderdrukking kan bijstellen."],
      ["Is Smart Sensor nuttig als ik vooral één-op-één praat?","Het verschil is vooral interessant bij wisselende sprekers. Als u meestal in rustige situaties één-op-één praat, bespreek dan met uw audioloog welke functies u daadwerkelijk gebruikt."],
    ],
    trial:"Vergelijk een gesprek met één persoon en een gesprek met twee of drie mensen. Let op hoeveel moeite het kost om van spreker te wisselen en hoeveel van de groep u kunt volgen.",
    related:[["Smart Directionality","/experimenten/bernafon-smart-directionality"],["Smart Noise Reduction","/experimenten/bernafon-smart-noise-reduction"]],
  },
  "transient-noise-reduction": {
    name: "Transient Noise Reduction",
    intro: "Een lepel valt op een bord of een deur slaat dicht. Met Transient Noise Reduction kan Bernafon Encanta zulke korte, plotse geluidspieken dempen.",
    explanation: "Transient Noise Reduction is bedoeld voor snelle geluidspieken. Een afzuigkap of aanhoudend geroezemoes vraagt om een andere aanpak. Daarvoor gebruikt Encanta onder meer Smart Noise Reduction.",
    steps:[
      {title:"Een geluid schiet plots omhoog",text:"Denk aan bestek dat hard tegen een bord tikt. In de illustratie is dat de smalle piek.",diagram:"peak"},
      {title:"Het toestel herkent de piek",text:"De geluidsverwerking reageert op de snelle stijging. De audioloog kan instellen hoeveel demping u prettig vindt.",diagram:"detect"},
      {title:"De piek krijgt minder nadruk",text:"De korte tik kan minder scherp of opdringerig klinken. Het geluid kan nog steeds hoorbaar zijn.",diagram:"soften"},
    ],
    scenes:[
      {title:"Bestek aan tafel",text:"Een tik van een lepel kan even boven het gesprek uitspringen. De functie kan die korte piek afzwakken.",diagram:"peak"},
      {title:"Een deur slaat dicht",text:"De plotselinge stijging is anders dan voortdurend geroezemoes. De verwerking kan voor die korte gebeurtenis reageren.",diagram:"detect"},
      {title:"Borden in de keuken",text:"Bij opeenvolgende korte tikken kan demping meer luistercomfort geven. Bespreek ook welke geluiden u duidelijk wilt blijven horen.",diagram:"soften"},
    ],
    levels:["Tot 15 dB · 2 instellingen","Tot 20 dB · 4 instellingen","Tot 25 dB · 5 instellingen","Tot 30 dB · 6 instellingen"],
    note:"Dit zijn de door Bernafon opgegeven maxima en aantallen instellingen. Het effect hangt af van de afstelling en het geluid. Voor echte lawaaibescherming blijft geschikte gehoorbescherming nodig.",
    faq:[
      ["Helpt dit ook tegen ventilatiegeluid?","Een voortdurend geluid vraagt om andere verwerking. Smart Noise Reduction is bedoeld voor achtergrondgeluid dat langer aanhoudt."],
      ["Worden alle plotse geluiden even sterk gedempt?","De audioloog kiest een instelling die past bij uw voorkeur. Test ook of zachte details en signalen in uw omgeving prettig hoorbaar blijven."],
      ["Kan ik instellen dat bestek minder scherp klinkt?","Bespreek het voorbeeld tijdens uw afspraak. De audioloog kan de demping bijstellen en samen met u beoordelen wat het verschil is."],
    ],
    trial:"Vertel welke korte geluiden u merkt, hoe hard ze aanvoelen en in welke omgeving dat gebeurt. Vergelijk samen met de audioloog de instellingen op luistercomfort en hoorbaarheid.",
    related:[["Smart Noise Reduction","/experimenten/bernafon-smart-noise-reduction"]],
  },
  "music-experience": {
    name: "Music Experience",
    intro: "Een stem volgen en van muziek genieten vragen om verschillende instellingen. Music Experience is Bernafons aparte luisterprogramma voor bijvoorbeeld live muziek, zelf een instrument spelen of muziek streamen.",
    explanation: "Een muziekstuk bevat tegelijk lage en hoge tonen, veel variatie in dynamiek en soms harde passages. Het muziekprogramma is afgesteld op die eigenschappen. Het resultaat hangt ook af van uw gehoor, de pasvorm en de gekozen instellingen.",
    steps:[
      {title:"Muziek bevat veel lagen",text:"Een baslijn, zang en percussie lopen door elkaar. De illustratie geeft die lagen elk een eigen spoor.",diagram:"notes"},
      {title:"U kiest het muziekprogramma",text:"Uw audioloog kan Music Experience toevoegen. U selecteert het wanneer u naar muziek luistert of zelf speelt.",diagram:"music"},
      {title:"U vergelijkt met uw eigen muziek",text:"Gebruik een bekend nummer en luister naar de balans, details en het verschil tussen zachte en harde passages.",diagram:"stream"},
    ],
    scenes:[
      {title:"Een akoestisch concert",text:"Let op hoe de instrumenten samen klinken en of luide passages prettig blijven.",diagram:"notes"},
      {title:"Zelf een instrument spelen",text:"Speel een fragment met zachte én krachtige passages. Geef door of uw instrument natuurlijk klinkt en welke tonen te scherp zijn.",diagram:"music"},
      {title:"Muziek streamen",text:"Speel een vertrouwd nummer via een compatibel apparaat. Vergelijk de klank met uw gewone instelling en kies bij een comfortabel volume.",diagram:"stream"},
    ],
    levels:["Music Experience beschikbaar","Music Experience beschikbaar","Music Experience beschikbaar","Music Experience beschikbaar · bredere toestelbandbreedte volgens Bernafon"],
    note:"Het programma is beschikbaar op alle vier Encanta miniRITE-niveaus. Direct streamen hangt ook af van uw telefoon of andere geluidsbron.",
    faq:[
      ["Moet ik het muziekprogramma zelf kiezen?","Als uw audioloog het heeft toegevoegd, kunt u het als luisterprogramma selecteren via de beschikbare bediening van uw toestel."],
      ["Kan ik het gebruiken voor live muziek én streaming?","Bernafon beschrijft beide toepassingen. De audioloog kan met u nagaan welke instellingen voor uw bron en luistervoorkeur passen."],
      ["Welk model is het beste als ik zelf muziek speel?","Test met uw eigen instrument of een vertrouwd fragment. Uw voorkeur en pasvorm tellen ook mee. De 400 heeft volgens het datablad een bredere bandbreedte dan de andere niveaus."],
    ],
    trial:"Neem een vertrouwd nummer mee. Vertel of u vooral live luistert, streamt of zelf muziek maakt. Vergelijk de klank bij gelijkblijvende bron en een aangenaam volume.",
    related:[["Smart Noise Reduction","/experimenten/bernafon-smart-noise-reduction"]],
  },
  "tinnitus-soundsupport": {
    name: "Tinnitus SoundSupport",
    intro: "Als u last hebt van oorsuizen, kan een zacht geluid op de achtergrond voor sommige mensen tijdelijke verlichting bieden. Tinnitus SoundSupport is een ingebouwd geluidsprogramma dat uw audioloog kan afstellen.",
    explanation: "Het hoorapparaat voegt een ingesteld geluid toe naast de geluiden om u heen. De audioloog beoordeelt of dit past bij uw tinnitusbegeleiding en spreekt met u af hoe u het programma gebruikt. Het doel is verlichting tijdens het gebruik.",
    steps:[
      {title:"U bespreekt wanneer u het oorsuizen merkt",text:"Bijvoorbeeld in een stille kamer of tijdens lezen. Uw audioloog bespreekt hoe u het ervaart en welke begeleiding past.",diagram:"ring"},
      {title:"De audioloog stelt een geluid in",text:"Samen kiest u een passend achtergrondgeluid. Uw audioloog stelt het niveau in en legt uit hoe en wanneer u het programma kunt gebruiken.",diagram:"support"},
      {title:"U beoordeelt wat het voor u doet",text:"Let op of het geluid prettig blijft en of het u helpt op de afgesproken momenten. Bespreek uw ervaring bij de opvolging.",diagram:"balance"},
    ],
    scenes:[
      {title:"Lezen in een stille kamer",text:"In stilte kan oorsuizen sterker opvallen. Een passend zacht geluid kan tijdens het lezen helpen om uw aandacht te verleggen.",diagram:"ring"},
      {title:"Het programma uitproberen",text:"De audioloog stelt het geluid en de gebruiksduur af. Geef aan of het geluid aangenaam blijft en of u uw omgeving nog goed kunt volgen.",diagram:"support"},
      {title:"Nabespreken met uw audioloog",text:"Vertel in welke situaties u verlichting merkte en wanneer het geluid u juist afleidde. Daarmee kan uw audioloog de begeleiding afstemmen.",diagram:"balance"},
    ],
    levels:["Beschikbaar na activering","Beschikbaar na activering","Beschikbaar na activering","Beschikbaar na activering"],
    note:"De functie is onderdeel van tinnitusbegeleiding en biedt mogelijk tijdelijke verlichting. Bespreek het geluid, het volume en de gebruiksduur met uw audioloog.",
    faq:[
      ["Geneest Tinnitus SoundSupport mijn oorsuizen?","Het programma is bedoeld voor tijdelijke verlichting. Hoeveel verlichting u merkt verschilt per persoon."],
      ["Staat SoundSupport standaard aan?","Uw audioloog moet het tijdens de aanpassing activeren en samen met u bepalen welk programma passend is."],
      ["Kan ik het geluid regelen met de Bernafon App?","Bij compatibele toestellen kunt u het geprogrammeerde tinnitusgeluid via de app bedienen. Uw audioloog legt uit welke bediening voor uw toestellen beschikbaar is."],
      ["Is dit hetzelfde als ruisonderdrukking?","SoundSupport voegt een gekozen geluid toe. Smart Noise Reduction kan juist achtergrondgeluid uit uw omgeving dempen."],
    ],
    trial:"Bespreek met uw audioloog op welke momenten u last hebt van oorsuizen en wat u wilt kunnen doen. Als SoundSupport geschikt is, kunt u het samen uitproberen.",
    related:[["Smart Noise Reduction","/experimenten/bernafon-smart-noise-reduction"]],
  },
};
