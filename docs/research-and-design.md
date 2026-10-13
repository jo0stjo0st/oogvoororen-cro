# Oogvoororen CRO Lab: bronnen en ontwerpkeuzes

Gecontroleerd: 13 oktober 2026. Alleen `jo0stjo0st/oogvoororen-cro` wordt gewijzigd.

## Inspectie

De Belgische productpagina, homepage, Phonak-categorie, I70-productpagina, audicien-aan-huis-pagina, hoorcentra, garantiepagina en mutualiteitenpagina zijn in de browser bekeken. De afspraakinteractie is op de productpagina geprobeerd; de knop opende in deze browsersessie geen zichtbaar formulier. Het formulier op de aan-huis-pagina is wel bekeken: voornaam, achternaam, e-mail, postcode, uitgebreide landkeuze voor telefoon en bericht.

Bronnen:

- https://oogvoororen.be/hoorapparaat/phonak-audeo-infinio-i90-oplaadbaar
- https://oogvoororen.be/
- https://oogvoororen.be/hoorapparaten/phonak
- https://oogvoororen.be/hoorapparaat/phonak-audeo-infinio-i70-oplaadbaar
- https://oogvoororen.be/audicien-aan-huis
- https://oogvoororen.be/onze-hoorcentra
- https://oogvoororen.be/garantie-reparaties
- https://oogvoororen.be/mutualiteiten
- https://www.riziv.fgov.be/SiteCollectionDocuments/tarief_audiciens_20260101.pdf
- https://www.riziv.fgov.be/nl/thema-s/verzorging-kosten-en-terugbetaling/wat-het-ziekenfonds-terugbetaalt/medische-hulpmiddelen-medisch-materiaal/niet-implanteerbare-medische-hulpmiddelen/hoortoestellen

## Visuele referentie

Open Sans, body 16 px, H1 30 px, witte achtergrond, groen #00AD81, donkere koppen #1E2022, grijze tekst #606F80. De hoofdcontainer is circa 1120 px breed. De bron heeft een bovenbalk met reviews/contact, groene navigatie, breadcrumb, circa 55/40 productgrid met een tussenruimte van 5%, grote productfoto links en productinformatie rechts. De afspraakknop is oranje #F9AC3C; de offerteknop heeft een groene rand. Onder de hero staan ankerlinks, omschrijving en plus/minpunten, reviews, modelvergelijkingen, apps, accessoires, onderhoud, downloads en garantie. De footer bevat service, contact, locaties en nieuwsbriefformulier.

Original benadert die indeling en volgorde. Mega-menu's, iconen, alle technische vergelijkingsrijen, nieuwsbrief en productiepop-ups zijn vereenvoudigd. Geen trackingcode of live formulieren overgenomen.

De bron heeft één productfoto in de hoofdgalerij. De demo voegt geen fictieve tweede foto toe; vergroten/verkleinen werkt. Meerdere kleuren zijn op de bron beschikbaar, maar kleurafhankelijke assets zijn niet betrouwbaar vastgesteld. Alleen Graphite Gray wordt getoond.

## Geverifieerde commerciële informatie

- De bronpagina heet inmiddels Phonak Audéo Infinio **Ultra** I90 - Oplaadbaar.
- € 2.645 inclusief btw per toestel; standaardlader inbegrepen.
- Standaard eigen opleg op de bron voor een 65-plusser / één toestel: € 1.785,41.
- Eerste afstelling tijdens een proefperiode altijd in een hoorcentrum. Dit staat expliciet op de Belgische aan-huis-pagina.
- Vrijblijvende proefperiode bevestigd; 60 dagen op de Belgische site niet bevestigd. Geen vaste termijn geclaimd.
- Vijf jaar service en garantie vermeld op de productpagina. Algemene garantiepagina: normaal gebruik; accugarantie twee tot vijf jaar volgens fabrikant; normale capaciteitsafname niet gedekt.
- 'Gratis audicien aan huis' als onvoorwaardelijke aparte dienst niet bevestigd. Daarom alleen 'audicien aan huis in Vlaanderen'.
- De bron toont bovenaan één review (9,0) maar in de reviewsectie twee ervaringen (8,8). De demo toont de twee echte ervaringen met land, datum en herkomst; geen selectieve verzonnen rating.

## Prijsberekening

Standaard RIZIV-vergoeding vanaf 1 januari 2026, geconventioneerde audicien, zonder voorkeurregeling:

| Leeftijd | Eén toestel | Twee toestellen |
| -------- | ----------: | --------------: |
| 0–17     |  € 1.451,56 |      € 2.875,21 |
| 18–64    |    € 884,59 |      € 1.751,01 |
| 65+      |    € 859,59 |      € 1.701,46 |

Twee toestellen gebruikt het stereotarief, **niet** twee keer het monotarief. Geen verhoogde tegemoetkoming, extra mutualiteitsvoordelen of bijzondere forfaits meegerekend. Recht moet persoonlijk vastgesteld worden. Default: onbekend recht, dus geen vergoeding of eigen opleg ingevuld. Original behoudt het duidelijk afgebakende 65+/mono-voorbeeld.

## Varianten

| Keuze            | Original           | Evolution                       | Conversion First                      |
| ---------------- | ------------------ | ------------------------------- | ------------------------------------- |
| Hero             | Bronbenadering     | Rustige twee kolommen           | Kortere hero en propositie            |
| CTA              | Afspraak + offerte | Maak een vrijblijvende afspraak | Probeer dit hoorapparaat vrijblijvend |
| Service          | Uitklapbaar        | Drie zichtbare voordelen        | Drie voordelen + echte fotografie     |
| Typografie       | 16 px              | 18 px                           | 18 px                                 |
| Detailinformatie | Bronvolgorde       | Calculator en stappen eerst     | Service, calculator en stappen eerst  |

Beide varianten: mobiel productnaam → foto → prijs → tegemoetkoming → voordelen → afspraakknop → telefoon. Geen derde productkolom.

## Hypothesen en meetplan

A. Rust en grotere tekst verhogen het begrip en de afspraakconversie.
B. Zichtbare begeleiding, proefperiode en service verhogen vertrouwen.
C. Een probeer-CTA verlaagt de drempel.
D. Transparante kosten verminderen onzekerheid.
E. Een kort formulier kan uitval verminderen.

Dit zijn hypothesen. Deze demo bevat geen verkeersverdeling of analytics en kan geen conversiewinst aantonen. Een latere gecontroleerde proef moet naast klikken en formulierstarts ook leadkwalificatie, echte afspraken, no-show, proefstarts en verkopen volgen. Gebruik geen persoonsgegevens in analytics-events.

## Veiligheid en beperkingen

Geen database, productie-API, echte aanvraag, betaling of formulieropslag. Geen analytics-pixels of cookie-banner nodig voor toegevoegde trackers. Noindex/nofollow plus robots-disallow. Dit is geen toegangscontrole. Vercel Deployment Protection is niet gewijzigd; de beschikbare GitHub-connector kan die accountinstelling niet beheren.

Een desktopbron-screenshot is vastgelegd. De browser biedt geen viewport-resize API; een echte mobiele bron-screenshot is nog niet vastgelegd. De demo kan op 390 px breedte in het vergelijkingsscherm beoordeeld worden. Die weergave is geen fysieke telefoontest.
