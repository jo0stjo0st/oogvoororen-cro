# Overdracht hoorapparaattechnologie (BE)

De proef omvat het overzicht, rumoeronderdrukking en drie gedocumenteerde merkuitvoeringen. Nieuwe generieke specificaties krijgen pas een publieke link zodra de uitleg beschikbaar is.

## Routes

- `/hoorapparaat-technologie`
- `/hoorapparaat-technologie/{specificatie}`
- `/hoorapparaat-technologie/{specificatie}/{merk}/{techniek}`

De URL bevat geen serie, model of technologieniveau. Een optionele parameter `?toestel={product-slug}` bewaart de herkomst van een klik. De pagina toont de teruglink alleen als het toestel via de gekozen specificatie aan die techniek gekoppeld is. De canonieke URL bevat de parameter niet.

## Datamodel voor productie

| Tabel | Sleutels en velden |
| --- | --- |
| `specification` | `id`, unieke `slug`, lokale naam, korte en uitgebreide uitleg |
| `brand` | `id`, unieke `slug`, naam |
| `product_family` | `id`, `brand_id`, naam |
| `product` | `id`, `family_id`, bestaande product-ID of slug, technologieniveau |
| `technology` | `id`, `brand_id`, `slug`, naam, uitleg, bron; uniek op merk en slug |
| `specification_technology` | `specification_id`, `technology_id`; koppelt generieke functies en technieken |
| `product_specification_technology` | `product_id`, `specification_id`, `technology_id`, bron en status; verwijst naar een geldige specificatie-techniekcombinatie |
| `family_technology_evidence` | `family_id`, `technology_id`, bron; alleen bewijs op familieniveau |

Gebruik waar mogelijk de bestaande catalogus-ID’s. Houd generieke waardes zoals Basis, Geavanceerd en Ultiem in de bestaande productspecificaties. De technologiekoppeling bepaalt de verdiepingslink en staat los van die waardes. Bij meerdere technieken voor eenzelfde productspecificatie kan een expliciete hoofdrelatie de link uit de tabel bepalen.

Een productopvolger erft geen techniek automatisch. Hergebruik dezelfde techniek-ID bij bevestigd hergebruik en maak een nieuwe record voor een daadwerkelijk andere uitvoering. Een familiebeschrijving mag geen toestelrelaties aanmaken. Controleer productniveau, bron en merk bij invoer. Als een toestel geen bevestigde relatie heeft, link dan naar de generieke uitleg of toon de bestaande specificatiewaarde zonder link.

## Proefimplementatie

De gegevens staan in `src/features/products/hearing-technology.ts`. Encanta 400 Pro en MaX 7 tonen een link op de generieke naam Rumoeronderdrukking. Dynamic Noise Control AI is ook expliciet gekoppeld aan MaX 5 en 3. AI Smart Noise Reduction is voor Revita alleen op familieniveau vastgelegd omdat de gebruikte bron de technieknaam niet eenduidig per toestel uitsplitst. De interactieve uitleg staat op de canonieke techniekpagina. De oude Bernafon- en Signia-experimentroutes verwijzen permanent door naar die pagina met het passende toestel in het kruimelpad.
