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

## Validatie eerste versie

- Production build en lint succesvol; TypeScript tijdens de build gecontroleerd.
- Vercel publiceerde commit `1a31c6a` succesvol; alle hoofdroutes geladen in de live browser.
- Calculator: 65+ en twee toestellen geeft totaal € 5.290, vergoeding € 1.701,46 en opleg € 3.588,54. 18–64/twee geeft € 1.751,01 en € 3.538,99. Onbekend recht toont geen bedrag.
- Productinteresse en variant worden vanuit de CTA meegenomen naar het formulier.
- Ongeldig Belgisch nummer geeft een zichtbare fout; geldig fictief nummer rondt de demo af met expliciete melding dat geen echte aanvraag is verzonden.
- Mobiele iframeweergaven: geen horizontale documentoverflow; menu getest. Geen fysieke telefoontest of volledige WCAG-audit uitgevoerd.
- De console bevatte browserextensie-meldingen; er zijn geen applicatiefouten waargenomen.
- Laatste verfijningen: compactere mobiele Lab-navigatie, focus op demobevestiging en grotere referentiefoto.

## Herziening: rust, eigen opleg en lokale dekking

De feedback van 13 oktober is doorgevoerd in A en B: op desktop een gelijkwaardig 50/50 productblok, zonder vlakken rond de foto. Mobiel productnaam, foto, prijs, drie korte argumenten en een afspraakknop. De vaste mobiele afspraakknop verdwijnt wanneer de afspraakknop in de hero zichtbaar is. Extra productinformatie is lager beschikbaar in uitklapbare secties. Reviews en technische voordelen staan niet in de hero.

De standaardvoorbeeldberekening is 65+, één toestel, standaardtegemoetkoming. De eigen opleg wordt prominent weergegeven; de volle prijs blijft zichtbaar. Leeftijd, aantal en vergoeding zijn aanpasbaar zonder de pagina te verlaten. De grote opleg en calculator delen één toestand. Onbekend recht toont nog steeds geen verzonnen bedrag.

De 17 Belgische vestigingsadressen en exacte coördinaten zijn gecontroleerd via de JSON-LD van hun eigen bronpagina’s. `/api/vestiging` gebruikt de Vercel-headers voor land, latitude en longitude, uitsluitend voor bezoekers in België. De dichtstbijzijnde vestiging wordt geselecteerd op hemelsbrede afstand. De tekst is een suggestie, geen claim over rijtijd. Er worden geen gebruikerscoördinaten teruggestuurd, opgeslagen of naar een externe GeoIP-dienst gestuurd; de response is `private, no-store`. Geen browserlocatietoestemming nodig. Onbekende locatie of een ander land toont alle 17 vestigingen. Een handmatige keuze heeft voorrang.

Het voorbeeld `?vestiging=antwerpen` selecteert Antwerpen (Berchem) om het lokale ontwerp te beoordelen, zonder een bezoekerslocatie te simuleren.

Bron voor de Vercel-headers: https://vercel.com/docs/headers/request-headers

Validatie herziening: alle zes leeftijd/aantal-combinaties, onbekend recht en eigen rekening getest. Alle 17 vestigingen ingelezen uit de bron; nabijheid voor Antwerpen en Gent gecontroleerd. De locatie-API is getest met onbekend land, ontbrekende gegevens, ongeldige coördinaten, een geldige Belgische locatie en handmatige/ongeldige keuzes. Responses zijn nooit publiek gecachet. In de live browser geeft 18–64/twee toestellen zowel bovenaan als in de calculator € 3.538,99 opleg. De keuze Gent vervangt de Antwerpse suggestie. Production build en lint geslaagd.

Laatste mobiele controle: de eigen opleg past volledig boven de vaste afspraakknop in de 390px-testweergave. De vaste knop verdwijnt wanneer de gewone afspraakknop zichtbaar wordt. Beide varianten hebben geen horizontale overflow in deze weergave. Screenshots: `calm-desktop-20261013-v2.jpg` en `calm-mobile-20261013-v2.jpg`.
