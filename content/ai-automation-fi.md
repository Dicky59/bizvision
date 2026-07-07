# Tekoäly ja älykäs automaatio (FI)

> Agenttipohjaisia työnkulkuja ja automaatiota, käyttöönotettuna turvallisesti ja ilman hypeä.

<!-- PAGE NOTES for Claude Code
- Sama rakenne, komponentit ja design-tokenit kuin englanninkielisellä sivulla
  (ai-automation.md). Ei uusia komponentteja.
- Palette, tyyppografia ja signature-elementit: ks. CLAUDE.md §4.
- SIGNATURE: pienet mono-eyebrow-labelit ochre-värissä otsikoiden yläpuolella.
  Numeroidut merkit (01/02…) VAIN käyttöönottostrategia-osiossa.
- Kohderyhmä (suomalaiset pk-yritykset + julkishallinto) suhtautuu tekoälyhypeen
  varauksella. Sävy = maanläheinen, konkreettinen, turvallisuus edellä.
-->

---

## 1. Hero

<!-- LAYOUT: full-bleed --hero-bg (espresso). Paper-värinen teksti. -->
<!-- IMAGE: abstrakti agenttityönkulku-motiivi, ei robotteja. ~16:10. -->
<!-- EYEBROW (mono, ochre): "Tekoäly ja automaatio" -->

**Tekoälyjärjestelmiä ja agenttipohjaisia työnkulkuja, jotka vievät yrityksesi askeleen edelle.**

Käytännöllistä automaatiota upotettuna suoraan järjestelmiisi — suunniteltu tietoturva edellä, mitattuna todellisilla tuloksilla, ei hypellä.

`[ Keskustele tekoälyprojektista ]` `[ Katso käyttötapaukset ]`

<sub>Agenttipohjaiset työnkulut · EU-tietoinen käyttöönotto · Senioritason vetämä.</sub>

---

## 2. Mitä tekoälyagentit ovat?

<!-- LAYOUT: selittävä osio. Selkokielinen teksti vasemmalla, yksinkertainen agenttisilmukka-kaavio
     oikealla. Kaavio: Syöte → Päättely → Toiminta (työkalut/API:t) → Tarkistus → toisto. SVG/CSS, ochre paperilla. -->
<!-- EYEBROW (mono, ochre): "Käsite" -->

Tekoälyagentti on ohjelmisto, joka voi ottaa tavoitteen, pilkkoa sen vaiheisiin,
käyttää työkaluja ja rajapintoja toimiakseen sekä tarkistaa oman työnsä — sen sijaan että se odottaisi ihmisen hyväksyntää jokaisessa välivaiheessa.

Hyvin toteutettuna tämä tarkoittaa, että toistuvat, monivaiheiset tehtävät hoituvat luotettavasti taustalla. Huolimattomasti toteutettuna siitä tulee tietoturvariski. Ero syntyy puhtaasta arkkitehtuurista ja tarkkaan määritellyistä suojamekanismeista.

---

## 3. Missä tekoäly tuo liiketoiminta-arvoa

<!-- LAYOUT: ikoniruudukko (3-4 kohtaa) --paper-taustalla, EI kortti-bulletti-yhdistelmää.
     ikoni + otsikko + yksi rivi. -->
<!-- EYEBROW (mono, ochre): "Liiketoiminta-arvo" -->

**Poista toistuva työ** — automatisoi dokumenttien käsittely, manuaalinen tiedonsyöttö ja rutiiniraportointi.

**Vapauta asiantuntijoiden aikaa** — siirrä mekaaniset työvaiheet tekoälylle ja kohdista resurssit arvoa tuottavaan työhön.

**Parempi tiedon saatavuus** — hae ja tiivistä tietoa hajallaan olevista sisäisistä lähteistä.

**Päätöksenteon tuki** — nosta esiin olennainen ja löydä poikkeamat suurista datajoukoista reaaliaikaisesti.

---

## 4. Esimerkkejä käyttötapauksista

<!-- LAYOUT: vuorottelevat kuva-vasen / kuva-oikea -rivit (EI yllä oleva ikoniruudukko).
     2-3 konkreettista skenaariota. Jokainen: lyhyt otsikko + 2-riviä skenaario. -->
<!-- EYEBROW (mono, ochre): "Käytännössä" -->

**Asiakirjojen ja sopimusten automaattinen esikäsittely** — Agentti käy läpi saapuvat dokumentit, vertaa niitä historiadataan, poimii avaintiedot ja valmistelee luonnoksen asiantuntijan tarkistettavaksi.

**Älykäs sisäinen tietoassistentti** — Henkilöstö tai organisaation johto voi kysyä monimutkaisia kysymyksiä laajasta ohjeistus-, sopimus- tai hankintadatasta selkokielellä ilman manuaalista etsimistä.

**Tilausten ja tukipyyntöjen triagi** — Saapuva viestivirta luokitellaan automaattisesti, taustatiedot haetaan valmiiksi ydinjärjestelmästä ja asia reititetään oikealle asiantuntijalle sekunneissa.

---

## 5. Turvallinen tekoälyn käyttöönotto

<!-- LAYOUT: callout/feature-palkki, hienovarainen ochre-sävytetty paperitausta. Luottamusta rakentava.
     Anna näkyvää painoarvoa — tämä rauhoittaa julkishallinnon ostajia. -->
<!-- EYEBROW (mono, ochre): "Turvallisuus ja vaatimustenmukaisuus" -->

Tekoälyä EU:n ja julkishallinnon tiukkoihin vaatimuksiin rakennettuna:

- **GDPR-tietoinen** tietojenkäsittely, jossa noudatetaan tarkkoja suojaprotokollia.
- **Yksityiset AI-ratkaisut (Private AI)** – data isännöidään omassa pilvessä tai infrastruktuurissa, eikä se koskaan karkaa ulkopuolisille.
- **Ihminen silmukassa (Human-in-the-loop)** – kriittiset päätökset ja toiminnot vaativat aina asiantuntijan hyväksynnän.
- **Auditoitava ja läpinäkyvä toiminta** – jokainen agentin tekemä päätös ja työvaihe jättää selkeän lokijäljen.

---

## 6. Tekoälyn käyttöönottostrategia

<!-- LAYOUT: vaakasuora 4-vaiheinen stepper. Ansaitsee numeroidut merkit — 01/02/03/04 mono ochre.
     Sama tyyli kuin Digitaalisen kehityksen prosessi-osiossa. -->
<!-- EYEBROW (mono, ochre): "Näin työskentelemme" -->

1.  **Arviointi** — Etsitään organisaatiostasi suurin liiketoimintahyöty ja pienimmän riskin lähtökohta.
2.  **Pilotointi** — Rakennetaan nopeasti rajattu, mitattava kokeilu todellisella datalla.
3.  **Integrointi** — Liitetään testattu ratkaisu turvallisesti osaksi olemassa olevia ydinjärjestelmiäsi.
4.  **Laajennus** — Monistetaan toimivaksi osoitetut ratkaisut muihin työnkulkuihin arvon varmistamiseksi.

---

## 7. Loppu-CTA

<!-- LAYOUT: full-width-palkki --hero-bg (espresso), yksi ochre-nappi, keskitetty. -->
<!-- EYEBROW (mono, ochre): "Seuraava askel" -->

**Ota digitaalinen etumatka tekoälyn avulla.**

Etkö ole varma, mihin tekoäly tai automaatio sopisi parhaiten organisaatiossasi? Tunnistetaan yhdessä yksi käytännöllinen ja turvallinen käyttötapaus, josta on helppo aloittaa.

`[ Keskustele tekoälyprojektista ]`
