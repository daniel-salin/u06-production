<h1>u06-recipe-app-frontend - Daniel Salin</h1>

Live version available at: <a href="http://recipe-app.danielsalin.chas.academy">http://recipe-app.danielsalin.chas.academy</a>
Temporary production-build up at: <a href="https://daniel-salin.github.io/u06-production/recipe">Github Pages</a>

Git Remote for Project: https://github.com/chas-academy/06-recipe-app-frontend-daniel-salin.git
Git Remote for Build Test via Pages: https://github.com/chas-academy/u06-production/

<h2>For build purposes<h2>
Base-href currently set to u06-production for testing. This is NOT the where the final page will be deployed.
Make sure to check remote before pushing.

<ul>
    <li>ng build --prod --base-href "https://daniel-salin.github.io/u06-production/"</li>
    <li>ngh --dir dist/recipe-app</li>
</ul>


# Uppgiften

I denna uppgift ska du bygga en rudimentär applikation med ramverket Angular (version 7). Denna applikation ska fungera som en samling för recept som hämtas från ett externt API. För denna uppgift är det *endast* frontend och ingen backend som ska implementeras.

För inspiration se:

- [https://www.ica.se/recept/](https://www.ica.se/recept/)
- [https://www.yummly.com/](https://www.yummly.com/)

# Inlämning

Uppgiften ska lämnas in via [classroom.github.com](http://classroom.github.com) i rätt projekt, länk till detta projekt kommer annonseras av läraren i samband med projektets början. 

Uppgiften skall också produktionssättas på binero via din studentdomän på **recipe-app**.**förnamn.efternamn.chas.academy**. Lägg till länken i din README i samband med inlämning för att underlätta vid rättning.

## Vänligen notera

Observera att du ***inte*** bedöms på estetik eller design. Lägg därför minimalt med tid på detta för att hinna klart i tid. Du bedöms endast på koden och implementation av denna.

## Mål

Som användare ska man:

- [ ]  Kunna skrolla genom över förslag på recept
- [ ]  Kunna filtrera förslagen av recept på måltidstyp och allergener
    - [ ]  Förrätt, huvudrätt eller dessert
    - [ ]  Allergener och dietval (t.ex. gluten, nötter, vegetarian osv.)
- [ ]  Kunna klicka på ett recept för att se dess information (egen route)
- [ ]  Kunna spara receptet i en lista (redigera/ta bort från lista)

## Krav

- [ ]  Front-end måste implementeras i ramverket Angular (version 7)
- [ ]  Det är tillåtet och uppmuntras att använda ett befintligt CSS ramverk, förslagsvis Bootstrap
- [ ]  Nyttja ett externt API för att hämta recept-information vilken visas i applikationen, förslagsvis:
    - [ ]  [https://developer.yummly.com/](https://developer.yummly.com/)
- [ ]  Måste gå att använda på en mobil enhet, det vill säga målen ovan måste gå att göra även på en mobil enhet

## Övriga krav

- [ ]  Layout/disposition skapad i **Bootstrap eller valfritt CSS ramverk**
- [ ]  Mobilanpassad layout (responsive!)

## Extra utmaning

Om du har gott om tid och vill påvisa djupare förståelse och kompetens inom Angular kan du även bygga till några eller alla av följande funktioner:

- Användaren kan få recept från flera olika källor (API:er)
- Användaren kan skapa egna recept
    - Lägga till ingredienser från API
    - Lägga till tillagningsinstruktioner

# Betygsättning

## Förkunskaper från tidigare kurser

---

Följande relaterade förkunskaper har de studerande från tidigare kurser

- Utveckla med JavaScript
- HTML & CSS (responsivt, SASS/LESS, webbstandarder)

## Betygsnivåer

---

Icke godkänt, Godkänt och Väl godkänt

## Principer för betygssättning

---

**För att få betyget godkänt krävs att**

Den studerande kan tillämpa och utveckla enklare lösningar med Angular med gott handlag.

**För att få betyget väl godkänt krävs att**

Utöver kriterierna för att erhålla betyget godkänd ska den studerande med mycket gott handlag, utan ytterligare instruktioner från utbildare, kunna vidareutveckla sin lösning på uppgiften och täcka upp en eller flera av de olika extra utmaningskraven

## Förtydligande av betygskriterierna

---

Betygsnivåern för samtliga mål är på G-nivå *med gott handlag* och på VG-nivå *med mycket gott handlag*. Detta innbär att lösningar/implementationer som är byggda på ett bra sätt utan större fel eller brister och att du som studerande förstår det du byggt är på en G-nivå och för en VG-nivå krävs att lösningen är i stort sätt felfri, byggd på ett bra sätt och att du som studerande förstår för och nackdelar med hur du implementerat teknikerna.

För att få betyg G på kursen ska famtliga betygskriterier för G-nivå vara uppfyllda. För betyg VG ska samtliga kriterier för VG-nivå vara uppfyllda.