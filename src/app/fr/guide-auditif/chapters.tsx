import type { GuideChapterContent } from "@/app/hoortoestellen/keuzehulp/guide-chapter";
import { Audiogram } from "@/app/hoortoestellen/keuzehulp/hoortest-en-intake/audiogram";
import { DeviceStyles } from "@/app/hoortoestellen/keuzehulp/device-styles";
import { guidePhotos } from "@/app/hoortoestellen/keuzehulp/visual";

export const guidePath = "/fr/guide-auditif";

type FrenchChapter = Omit<GuideChapterContent, "number" | "previous" | "next"> & {
  slug: string;
  summary: string;
};

export const chapters: FrenchChapter[] = [
  {
    slug: "choisir-un-audiologue",
    title: "Comment choisir votre audiologue ?",
    summary: "Comparez le choix des marques, les rendez-vous à domicile ou en centre, le suivi et les services compris dans le prix.",
    intro: "Votre audiologue vous accompagne du premier bilan aux réglages après l’achat. Voici les questions à poser pour savoir à quoi vous attendre chez Oogvoororen.",
    image: guidePhotos.consult,
    sections: [
      { id: "choix", title: "Quelles marques et quels modèles pouvez-vous essayer ?", paragraphs: [
        "Chez Oogvoororen, votre audiologue vous aide à choisir parmi les grandes marques. Expliquez dans quelles situations vous souhaitez mieux entendre. L’audiologue vous présente les appareils adaptés et vous explique les différences de son, de confort et de manipulation.",
        "Vous avez un budget précis ou souhaitez connaître les modèles qui peuvent être remboursés ? Parlez-en dès le premier entretien. Demandez ce qu’offre le modèle adapté le plus abordable et ce qu’un appareil plus cher pourrait vous apporter au quotidien.",
      ] },
      { id: "lieu", title: "À domicile ou en centre auditif ?", paragraphs: [
        "Un rendez-vous à domicile vous évite le déplacement et permet à un proche d’assister facilement à l’entretien. Vous pouvez aussi montrer à l’audiologue ce que vous trouvez difficile, par exemple suivre une conversation si la télévision est allumée.",
        "Si vos journées de travail sont chargées, demandez s’il est possible d’alterner entre un rendez-vous à domicile et une visite au bureau. Le domicile peut aussi être plus pratique si vous vous déplacez difficilement ou devez organiser votre transport.",
        "Un centre auditif peut être pratique s’il se trouve sur votre trajet ou à proximité. Renseignez-vous sur son accessibilité et les rendez-vous de suivi. Pour certains appareils, des ajustements sont également possibles à distance.",
      ] },
      { id: "entretien", title: "Quel entretien souhaitez-vous faire vous-même ?", paragraphs: [
        "Vous pouvez généralement nettoyer l’extérieur de l’appareil et le recharger ou remplacer la pile. Selon le modèle, vous pouvez aussi changer le filtre pare-cérumen ou le dôme. Demandez à votre audiologue de vous montrer comment faire, puis essayez pendant le rendez-vous.",
        "Si vous voyez mal les petites pièces ou manquez de force dans les doigts, cherchez un appareil facile à manipuler. L’audiologue vous indique quels filtres et dômes conviennent et où les commander.",
      ] },
      { id: "suivi", title: "Comment évaluer l’accompagnement ?", paragraphs: [
        "Partez d’une situation concrète, par exemple un dîner où vous n’avez pas suivi la conversation de l’autre côté de la table. Vous pourrez y prêter attention pendant l’essai, puis expliquer ce qui s’est amélioré au rendez-vous suivant.",
        "Demandez comment se passent les rendez-vous de suivi, qui pourra vous recevoir et dans quels délais. Si certains sons vous paraissent trop aigus ou si l’appareil vous gêne, vous saurez à qui vous adresser.",
      ] },
      { id: "prix", title: "Qu’est-ce qui est compris dans le prix ?", paragraphs: [
        "Vérifiez si le prix est indiqué pour un ou deux appareils et demandez quels réglages, contrôles et accessoires sont inclus. Faites préciser les conditions de garantie et le coût éventuel des pièces d’entretien. Chez Oogvoororen, le prix est le même à domicile et en centre auditif, sans frais de déplacement à domicile.",
      ] },
      { id: "questions-a-poser", title: "Cinq questions pour votre premier entretien", points: [
        "Quels appareils puis-je essayer dans mon budget ?",
        "Puis-je prendre rendez-vous près de chez moi ou à domicile ?",
        "Que m’apporterait un modèle plus cher dans les situations qui me posent problème ?",
        "Quels réglages et contrôles sont compris ?",
        "Comment puis-je obtenir de l’aide si l’appareil me gêne ?",
      ] },
    ],
    faq: [
      ["Le bilan et les réglages peuvent-ils avoir lieu chez moi ?", "Oogvoororen propose à domicile des bilans, des conseils et des réglages. Nous convenons avec vous du lieu adapté à votre rendez-vous."],
      ["À qui m’adresser si mon appareil a besoin d’un réglage ?", "Contactez votre audiologue. Nous voyons ensemble si un rendez-vous à domicile, en centre ou à distance est adapté."],
      ["Tous les réglages peuvent-ils se faire en ligne ?", "Cela dépend de l’appareil et du problème. Un ajustement de l’embout, une panne ou une nouvelle mesure peut nécessiter une visite."],
      ["L’entretien est-il toujours compris ?", "Demandez quels contrôles et services sont inclus et quel est le coût des consommables, comme les filtres et les dômes."],
    ],
  },
  {
    slug: "bilan-et-conseil",
    title: "Du premier échange au bilan auditif et aux conseils",
    summary: "Voyez comment se déroulent l’entretien téléphonique, les tests auditifs et le conseil personnalisé.",
    intro: "Vous entendez quelqu’un parler, mais à une table animée vous manquez une partie de la conversation. Chez Oogvoororen, nous parlons de ces situations, mesurons votre audition et vous expliquons les suites possibles.",
    image: guidePhotos.test,
    sections: [
      { id: "premier-echange", title: "Le premier échange téléphonique", paragraphs: [
        "Après votre demande, nous vous appelons pour comprendre ce que vous remarquez, les situations dans lesquelles vous avez du mal à suivre et les bilans que vous avez éventuellement déjà passés. Dites-nous ce que vous aimeriez comprendre ou améliorer.",
        "Nous convenons ensuite d’un rendez-vous à domicile ou en centre auditif. Ce premier échange aide l’audiologue à poser les bonnes questions pendant la consultation.",
      ] },
      { id: "situations", title: "Qu’aimeriez-vous mieux comprendre ?", paragraphs: [
        "Décrivez une situation précise. Lors d’une réunion, où étiez-vous assis ? Qui aviez-vous du mal à comprendre ? D’autres personnes parlaient-elles en même temps ?",
        "Un objectif comme « comprendre mon petit-fils assis près de moi quand la télévision est allumée » vous donne un repère concret si vous essayez des appareils.",
      ] },
      { id: "test-tonal", title: "Le test des sons et l’audiogramme tonal", paragraphs: [
        "Vous signalez chaque fois que vous entendez un son. L’audiologue mesure, pour chaque oreille, le niveau le plus faible auquel vous entendez différentes fréquences. Les résultats figurent sur un audiogramme tonal.",
      ], illustration: <Audiogram kind="tone" locale="fr" /> },
      { id: "test-vocal", title: "Le test des mots et l’audiogramme vocal", paragraphs: [
        "Vous répétez des mots présentés à différents niveaux sonores. L’audiologue mesure combien vous en comprenez. L’audiogramme vocal montre comment ce résultat évolue lorsque les mots sont présentés plus fort.",
      ], illustration: <Audiogram kind="speech" locale="fr" /> },
      { id: "conseils", title: "Des résultats aux conseils personnalisés", paragraphs: [
        "L’audiologue relie vos résultats à ce que vous vivez au quotidien. Si des appareils peuvent vous aider, vous discutez des modèles adaptés à votre audition, à vos préférences et à votre budget, ainsi que de ce que vous pouvez attendre dans un restaurant animé.",
        "Si vous souhaitez essayer des appareils, convenez de deux ou trois situations à tester. Lors du suivi, vous pourrez expliquer ce qui vous a aidé et ce qui reste difficile.",
      ] },
      { id: "preparation", title: "Comment préparer votre rendez-vous", points: [
        "Notez deux situations dans lesquelles vous aimeriez mieux comprendre ce qui se dit.",
        "Apportez les résultats d’un bilan précédent si vous en avez.",
        "Notez vos questions sur le confort, la manipulation, le prix ou l’essai.",
        "Si vous le souhaitez, invitez une personne qui connaît bien votre situation.",
      ] },
    ],
    faq: [
      ["Passe-t-on déjà un test pendant l’appel ?", "L’appel sert à discuter de ce que vous remarquez et de ce que vous voulez améliorer. L’audiologue mesure votre audition lors du rendez-vous."],
      ["Le bilan peut-il avoir lieu chez moi ?", "Oui. Chez Oogvoororen, vous pouvez indiquer votre préférence pour un rendez-vous à domicile ou en centre auditif."],
      ["Puis-je venir accompagné ?", "Oui. Un proche peut apporter ses propres observations et écouter les explications avec vous."],
      ["Dois-je choisir un appareil dès le premier rendez-vous ?", "Le rendez-vous est sans engagement. Vous pouvez prendre le temps de réfléchir avant de décider si vous souhaitez essayer des appareils."],
    ],
  },
  {
    slug: "choisir-ses-appareils",
    title: "Quels appareils auditifs vous conviennent ?",
    summary: "Comparez le confort, le son, les fonctions et les prix, puis choisissez ce qui mérite d’être essayé.",
    intro: "Vous souhaitez mieux comprendre votre partenaire ou suivre les échanges en réunion ? Votre audiologue s’appuie sur votre bilan et votre quotidien pour choisir avec vous les appareils à essayer.",
    image: guidePhotos.device,
    sections: [
      { id: "confort", title: "Quelle forme vous convient ?", illustration: <DeviceStyles locale="fr" />, paragraphs: [
        "Votre audiogramme indique l’importance de votre perte auditive à chaque fréquence. L’audiologue s’en sert pour déterminer la puissance nécessaire et les formes qui peuvent fournir l’amplification dont vous avez besoin. La forme et la taille de votre conduit auditif jouent aussi un rôle.",
        "Si plusieurs formes vous conviennent, vous pouvez choisir selon leur confort, leur discrétion et leur facilité de manipulation. Essayez-les, si possible, avec vos lunettes.",
        "Si vous portez des lunettes, gardez-les pendant l’essayage. Entraînez-vous à mettre, retirer et recharger l’appareil pour voir si ces gestes vous conviennent.",
      ] },
      { id: "fonctions", title: "Quelles fonctions vous seront utiles ?", image: guidePhotos.trial, paragraphs: [
        "Dans un groupe, un appareil peut mettre davantage en avant la voix qui vient de la direction de votre interlocuteur. Autour d’une table ronde, vous souhaitez peut-être pouvoir suivre plusieurs personnes. Décrivez vos situations difficiles pour savoir quelle technologie peut vous aider.",
        "Si vous téléphonez souvent, vérifiez si les appels peuvent être transmis à vos appareils et si votre téléphone est compatible. Pour un modèle rechargeable, pensez aussi aux déplacements et aux week-ends.",
      ] },
      { id: "son", title: "Comment comparer les marques et le son ?", image: guidePhotos.consult, paragraphs: [
        "Oogvoororen propose notamment Oticon, Phonak, Signia et Widex. Les appareils peuvent restituer différemment les voix et les bruits ambiants. Le réglage et la façon dont l’appareil se place dans l’oreille influencent aussi le résultat.",
        "Chez Oogvoororen, nous évaluons votre préférence sonore avec Sound Preference. Vous comparez des extraits de la vie quotidienne traités de différentes manières. Une version peut vous sembler plus douce, une autre rendre les voix plus nettes. Votre préférence aide l’audiologue à choisir avec vous un appareil à essayer.",
        "Dites ce que vous remarquez. Votre voix résonne-t-elle ? Le bruit des couverts est-il trop aigu ? Comprenez-vous mieux votre partenaire ? Ces observations aident à décider s’il faut ajuster les réglages ou essayer un autre modèle.",
      ] },
      { id: "prix", title: "Quel prix et que peut apporter un modèle plus cher ?", paragraphs: [
        "Chez Oogvoororen, un appareil éligible au remboursement coûte en moyenne 625 € avant remboursement. À titre indicatif, notre gamme hors remboursement comprend des exemples allant d’environ 1 500 € à plus de 3 000 € par appareil. Votre prix dépend du modèle et du nombre d’appareils.",
        "Une technologie plus avancée peut être utile si vous fréquentez souvent des lieux bruyants ou changez régulièrement d’environnement sonore. Demandez quelle différence attendre, puis vérifiez-la en essayant les appareils dans une situation qui compte pour vous.",
        "Demandez le montant total, les services inclus et le prix des accessoires éventuels, avec le remboursement applicable à votre situation.",
        "Vous faites souvent du sport ou travaillez en plein air ? La transpiration, la pluie et la poussière entrent aussi en ligne de compte. Parmi les appareils adaptés à votre audition, nous recherchons l’indice de protection IP le plus élevé qui convient à votre usage, par exemple IP68. Nous vérifions aussi les consignes du fabricant pour le port et l’entretien.",
        "Vous préférez un appareil discret ? Nous regardons quelles teintes se fondent avec vos cheveux ou votre peau. La couleur de l’année peut aussi convenir, si le fabricant en propose une et qu’elle vous plaît. Si vous aimez les couleurs qui se remarquent, le rose vif est aussi une option selon le modèle.",
      ], note: {
        title: "Oogvoororen a des accords avec tous les assureurs maladie néerlandais",
        text: "Si vous êtes adulte et remplissez les conditions de l’assurance de base néerlandaise, celle-ci rembourse généralement 75 % du tarif convenu. Votre participation légale est de 25 %. Une franchise annuelle restante peut également s’appliquer.",
        link: { href: "/fr/remboursements", label: "Tout savoir sur le remboursement des appareils auditifs" },
      } },
    ],
    faq: [
      ["Dois-je choisir une marque avant le rendez-vous ?", "Partez de votre bilan, de votre quotidien et de votre budget. Votre audiologue vous aide à comparer les options adaptées."],
      ["Ai-je besoin d’un ou de deux appareils ?", "L’audiologue en discute avec vous en tenant compte de l’audition de chaque oreille et des situations que vous souhaitez améliorer."],
      ["Puis-je essayer un modèle plus abordable ?", "Parlez de votre budget. L’audiologue vous indique les options adaptées et vous aide à vérifier si elles répondent à vos besoins."],
    ],
  },
  {
    slug: "essai-et-adaptation",
    title: "Essayer vos appareils et vous habituer aux sons",
    summary: "Essayez vos appareils dans les situations qui comptent pour vous et faites le point avec votre audiologue.",
    intro: "Le premier vrai essai se passe souvent chez vous. Vous préparez un café, quelqu’un parle dans la cuisine et vous remarquez le tic-tac de l’horloge. La période d’essai vous permet de découvrir ce qui change au quotidien.",
    image: guidePhotos.trial,
    sections: [
      { id: "premier-reglage", title: "Le premier réglage", paragraphs: [
        "L’audiologue règle les appareils en fonction de votre audition et vérifie qu’ils sont bien placés. Vous apprenez à les mettre, les retirer et les recharger ou à remplacer les piles. Si vous souhaitez utiliser une application, demandez comment la configurer.",
        "Convenez des situations à tester et de la marche à suivre si le son ou le port de l’appareil vous gêne.",
      ] },
      { id: "adaptation", title: "Prenez le temps de vous habituer", paragraphs: [
        "Votre propre voix, vos pas et les froissements peuvent se faire davantage remarquer au début. Suivez les recommandations de votre audiologue. Commencez dans des contextes calmes, puis essayez avec davantage de voix et de bruits environnants.",
        "Si un appareil vous fait mal, tombe ou vous donne régulièrement des sons désagréablement forts, contactez votre audiologue. Il pourra examiner l’ajustement ou les réglages.",
      ] },
      { id: "situations", title: "Reprenez les situations qui vous posaient problème", paragraphs: ["Choisissez deux ou trois situations abordées pendant l’entretien. Notez ce que vous avez mieux suivi et ce qui reste difficile."], points: [
        "À table. Pouvez-vous suivre une personne quand une autre conversation se déroule près de vous ?",
        "Au travail. Comprenez-vous le collègue assis à l’autre bout de la table ?",
        "À la maison. Comment se passe une conversation lorsque la télévision est allumée ?",
      ] },
      { id: "bilan-essai", title: "Faire le point avant de décider", paragraphs: [
        "Décrivez ce qui s’est passé. Dire que les couverts paraissaient très aigus alors que les voix étaient plus claires aide votre audiologue à trouver un réglage adapté. Vous pouvez aussi discuter de l’essai d’un autre modèle.",
        "L’essai chez Oogvoororen est sans engagement. À la fin de la période convenue, vous faites le point avec votre audiologue et décidez si vous souhaitez acheter les appareils.",
      ] },
    ],
    faq: [
      ["Combien de temps faut-il pour s’habituer ?", "Cela dépend de la personne et de la situation. Voyez avec votre audiologue comment augmenter progressivement le temps de port et quand faire le point."],
      ["Faut-il attendre le contrôle si le son me gêne ?", "Vous pouvez nous contacter plus tôt. Précisez les sons concernés et dites-nous si l’appareil vous irrite ou vous fait mal."],
      ["Puis-je essayer un autre modèle ?", "Expliquez ce qui vous manque pendant l’essai. Votre audiologue verra avec vous si un réglage ou un autre appareil vous aiderait."],
    ],
  },
  {
    slug: "entretien-et-suivi",
    title: "Entretien, service et suivi",
    summary: "Découvrez ce que vous pouvez faire chez vous, comment obtenir un réglage et ce que couvrent le service et la garantie.",
    intro: "Vos appareils vous accompagnent du petit-déjeuner à la dernière conversation de la journée. Quelques gestes simples aident à les garder en bon état. Oogvoororen vous accompagne si le son, le confort ou votre audition change.",
    image: guidePhotos.followup,
    sections: [
      { id: "entretien", title: "Que pouvez-vous faire chez vous ?", paragraphs: [
        "Nettoyez l’extérieur avec un chiffon doux et sec. Rechargez les appareils ou changez les piles selon les besoins. Pour le nettoyage et le séchage, suivez les consignes données pour votre modèle.",
        "Sur certains modèles, vous pouvez changer vous-même le filtre pare-cérumen ou le dôme. Demandez à l’audiologue de vous montrer le geste. Vous saurez quelles pièces commander chez Oogvoororen.",
      ] },
      { id: "son-plus-faible", title: "Que faire si un appareil devient moins fort ?", paragraphs: [
        "Vérifiez la charge ou la pile, puis regardez si le dôme ou le filtre est encrassé. Suivez les gestes d’entretien montrés par votre audiologue. Si le problème persiste, contactez Oogvoororen.",
      ] },
      { id: "reglages", title: "Des réglages à domicile, en centre ou à distance", paragraphs: [
        "Un nouveau bureau, d’autres lunettes ou une évolution de votre audition peuvent appeler un nouveau réglage ou un ajustement de la forme. Précisez dans quelle situation vous rencontrez une difficulté.",
        "Avec certains appareils, votre audiologue peut modifier les réglages à distance via l’application compatible. En cas de gêne physique, de panne possible ou de nouvelle mesure à effectuer, nous convenons du lieu le plus adapté.",
      ] },
      { id: "garantie", title: "Cinq ans de service et de garantie", paragraphs: [
        "L’achat chez Oogvoororen comprend cinq ans de service et de garantie. Vous pouvez nous contacter pour les réglages inclus. Si vous signalez un défaut, nous examinons l’appareil et vérifions ce que couvre sa garantie.",
        "Vous pouvez commander les consommables, comme les filtres, les dômes et les piles, selon vos besoins. En cas de dommage ou de perte, nous examinons avec vous les possibilités applicables à votre situation.",
      ] },
      { id: "premier-rendez-vous", title: "Prêt pour votre premier rendez-vous ?", paragraphs: [
        "Pensez à une conversation que vous aimeriez mieux suivre. C’est un bon point de départ pour votre premier échange. Chez Oogvoororen, vous pouvez prendre rendez-vous pour un bilan et des conseils sans engagement, à domicile ou en centre auditif.",
      ] },
    ],
    faq: [
      ["Puis-je changer moi-même un filtre ou un dôme ?", "Oui, sur de nombreux modèles. Demandez à votre audiologue de vous montrer comment faire et utilisez les pièces adaptées."],
      ["Les réglages sont-ils compris ?", "Oui. Pendant les cinq ans de service inclus, vous pouvez nous contacter pour un réglage. Nous déterminons avec vous où et comment le réaliser."],
      ["Me faut-il une application pour le suivi ?", "Une application peut être nécessaire pour les réglages à distance. Vous pouvez aussi convenir d’un rendez-vous à domicile ou en centre."],
    ],
  },
];
