import {HousesNum, PlanetsEnum, SignsEnum, Planets, Signs, singnNumToStr} from "./AstroCalc.js"

const dn2PlanetEffects = {
    "sun": {
        "cancer": "",
        "leo": "positively effects wealth"
    },
    "moon": {
        "cancer": "positively effects wealth",
        "leo": ""
    },
    "mercury": {
        "cancer": "",
        "leo": ""
    },
    "venus": {
        "cancer": "positively effects wealth",
        "leo": ""
    },
    "mars": {
        "cancer": "",
        "leo": "positively effects wealth"
    },
    "jupiter": {
        "cancer": "",
        "leo": "positively effects wealth"
    },
    "saturn": {
        "cancer": "positively effects wealth",
        "leo": ""
    },
    "rahu": {
        "cancer": "",
        "leo": "positively effects wealth"
    },
    "ketu": {
        "cancer": "",
        "leo": ""
    },
}
const dnChartAttrb = {
    "dn2": "<h2>Use of D2 Chart</h2><p>The analysis of D2 gives clarity to identify the planets in horoscope that support income generation, wealth and asset building. Presence of Sun, Mars, Jupiter and Rahu in Leo will help to attain wealth. Presence of Moon, Venus and Saturn in Cancer will bring auspicious results with respect to wealth</p>",
    
    "dn3": "<h2>Use of D3 Chart</h2><p>The analysis of D3 provides a deep insight in to bravery, courage, and siblings. They can also represent the hidden personalities, inner nature, and behavior of an individual</p>",

    "dn4":  "<h2>Use of D4 Chart</h2><p>This chart represents fortunes, fate, assets, shelter, inherited property, and place of living. The chart also shows the inheritance of assets, location and nature of house or residence, vehicle, and other material aspects of the possessions</p>",

    "dn7":  "<h2>Use of D7 Chart</h2><p>Sapthamsha is an expanded view of the 5th house in a Rashi Chart. From this chart we can get information about the native’s happiness from his children, grandchildren as also the disappointments faced from them.</p>",

    "dn9":  "<h2>Use of D9 Chart</h2><p>It is usually used during predictions about marriage of the native, spouse, married life etc but is also useful to know characteristics of the native and also his/her spouse in much detail.</p>",

    "dn10":  "<h2>Use of D10 Chart</h2><p>This chart indicates the career, power, position, name and fame, social status, and success. The D10 chart is an extension of the 10th house of the birth chart</p>",

    "dn12":  "<h2>Use of D12 Chart</h2><p>Dwadasamsa chart is a tool to understand the childhood and the parental influence on the native. Ancestral lineage and legacies, upbringing can be traced in this chart</p>",

    "dn16":  "<h2>Use of D16 Chart</h2><p>The Shodasamsa or sixteenth divisional chart is used to analyze a native’s material attachments, vehicle and conveyances. This chart also shows the emotional well-being of a native from the conveyances, vehicle and other moving objects in their life</p>",

    "dn20":  "<h2>Use of D20 Chart</h2><p>Vimsamsa chart or D20 chart is analysed for spiritual inclination, philosophical nature, devotion quotient of an individual. A native’s religious beliefs, the magnitude of faith, devotion and worship towards their Ishtadevata can be examined </p>",

    "dn24":  "<h2>Use of D24 Chart</h2><p>This chart is primarily used in understanding your intellectual capabilities, education line, scholarly tendencies. A native’s educational areas of interest, their subject choices, and the academic programs they might graduate can be predicted in this chart </p>",

    "dn27":  "<h2>Use of D24 Chart</h2><p>D27 chart represents the overall strength, stamina & weakness of a native. The general vitality of a person can be seen from this chart.</p>",

    "dn30":  "<h2>Use of D30 Chart</h2><p> D30 chart is used to identify misfortunes, health mishaps, and enemies of a native. The source of misfortune or miseries can be natural disaster,from profession,accidents,from children,family problems or property disputes,etc.The Trimshamsha is the indicator of these sources</p>",

    "dn40":  "<h2>Use of D40 Chart</h2><p>The D40 or khavedamsha chart suggest how much happiness we get from Professional activities. It gives insight in to career and karma areas</p>",

    "dn45":  "<h2>Use of D45 Chart</h2><p>Akshavedamsa or D45 chart is used to analyze the paternal legacy, conduct, and nature of a native. Both material and physical aspects of these karmic patterns in a native, inherited through the father and his ancestors, are available in the D45 chart</p>",

    "dn60":  "<h2>Use of D60 Chart</h2><p>Shastiamsa, or D60 Chart is used to study the accumulated Karma from past incarnations and the overall life of a native. D60 chart shows a very detailed picture of past life karma – Sanchita Karma. It can help us determine the time when karma comes into fruition. The Sashtiamsa chart can go deep into the very cause of a native’s re-birth reasons and lessons. </p>",
}

function dn2Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2>";
    try {
        for (const planet in PlanetsEnum) {
            let signNum = planetsPos[planet];
            let sign = singnNumToStr(signNum);
            if (planet in dn2PlanetEffects && sign in dn2PlanetEffects[planet]) {
                let res = dn2PlanetEffects[planet][sign];
                if (res != "") {
                    analysis = analysis + `<p>The presence of ${planet} in ${sign} ${res}</p>`;
                }
            }
        }
    } finally {
        return analysis;
    }
}
//=====================================================
function dn3Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn4Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}
//=====================================================
function dn7Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn9Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn10Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn12Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn16Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn20Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn24Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn27Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn30Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn40Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn45Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================
function dn60Analysis(planetsPos) {
    let analysis = "<h2>Analysis of the Chart</h2><p>Coming Soon...</p>";

    return analysis;
}

//=====================================================


const dnChartRef = {
    "dn2": "<h2>Construction of D2 Chart</h2><p>This chart uses Leo and Cancer only. The first half of an old sign is the Hora ruled by the Sun while the second half is the Hora of the Moon. The reverse is true in the case of an even sign. Half of Rasi is called Hora. These are totally 24 counted from Aries and repeat twice (at the rate of 12) in the whole of the zodiac.  this analysis gives us clarity to identify the planets in horoscope that support income generation, wealth and asset building. Odd signs are Aries, Gemini, Leo, Libra, Sagittarius and Aquarius. Rest of the 6 signs are even ones. In even signs, the order of hora rulership is reversed i.e. first half is Moon's area and second half is Sun's area.</p>",

    "dn3": "<h2>Construction of D3 Dreskana Chart</h2>One third of a Rasi is called Dreshkana. These are totally 36, counted from Aries, repeating thrice at the rate of 12 per round. The 1st, 5th and the 9th Rāśis from a Rāśi are its three Dreshkanas and are, respectively, lorded by Narada, Agasthya and Durvash. A few of the characteristics of D3 are valour, strength, courage, communication, immediate younger sibling, unfolding of Karma or fruits of your action(karma), short travels, native’s thought process, upper arms, ears and throat.D3 can also signify the natives skill set.",

    "dn4": "<h2>Construction of D4 Chaturthamsa Chart</h2><p>The lords of the 4 angles from a sign are the rulers of respective Chaturthamsa of a Rasi commencing from  from Aries. Each Chathurthamsa the deities tespectively are Sanaka, Sananda, Kumara and Sanatana</p>",

    "dn7": "<h2>Construction of D7 Sapthamsa Chart</h2><p>The Sapthamamsa (one seventh of a sign) commences from the same sign in the case of an odd sign. It is from 7th sign onwards when even sign is considered. . The names of the seven divisions are Kshaara, Ksheera, Dadhi, Ghritha, Ikshu Rasa. Madhya and Sudha Jala. These designations are reversed for an even sign. </p>",

    "dn9": "<h2>Construction of D9 Navamsa Chart</h2><p>: The Navamsa calculation are for a movable sign from there itself, for a fixed sign from the 9th thereof and for dual sign from the 5th thereof. They go by designations Deva (divine), Manushya (human) and Rakshasa in a succcssive and repetitive order for a movable sign (Manushya, Rakshasa and Deva are the order for a fixed sign while Rakshsasa, Manushya and Deva are for a dual sign's order.)</p>",

    "dn10": "<h2>Construction of D10  Dasamamsa Chart</h2><p>Starting from the same sign for an odd sign and from the 9th with reference to an eve sign, the 10 Dasamsas each of 3 degrees are reckoned. These are presided over.by the ten rulers of the cardinal directons viz. Indra, agni, yama, Rakshasa, Varuna, Vayu, Kubera, Isana, Brahma and Anantha in case of an odd sign. It is in the reverse order that these presiding deities are reckoned when an even sign is given</p>",

    "dn12": "<h2>Construction of D12 Dvadasamsa Chart</h2><p>The reckoning of the Dvadasamsa (one twelth of a sign ) comnences from the same sign. In each sign the presidcntship rcpeats tbriie in thc order of Ganesa, Aswini Kumara, yama and Sarpa for the 12 Dvadasamsas</p>",
    
    "dn16": "<h2>Construction of D16 Shodasamsa Chart</h2><p>Starting from Aries for a movable sign, from Leo for a fixcd sign and from Sagittarius for a dual (1/16th part of a sign). l6 Shodasamsas are regularly distributed</p>",
    
    "dn20": "<h2>Construction of D20 Vimsamsa Chart</h2><p>From Aries for a movable sign, from Sagittarius for a fixed sign and from Leo for a common sign - this is how the calculations of Vimsamsa ( 1/20th of a sign or 1 deg 30 arc-min each) are to commence. The presiding deities of the 20 Vimsamsas in an odd sign are respectivety are: Kaali, Gauri, Jaya, Lakshmi, Vijaya, Vimata, Sati, Tara, JvalaMukhi, Sveta, Lalita, Bagala-mukhi, pratyangira, Sachi, Raudri, Bhavani, Varada, Jaya, Tripura and Sumukhi. In an even sign these 20 deities reipeciively are : Daya, Megha, Chinnasi, Pisachini, Dhoomavathi, Matangi, Bala, B-hadra, Aruna, Anala, Pingala, Chuchchuka, Ghora, Vaarahi, Vaishnavi, Sita. B huvanesvari, Bhairavi, Mangala and Aparajita.</p>",
    
    "dn24": "<h2>Construction of D24 Chaturvimsa Chart</h2><p>The Siddhamsa (1/24th part of a sign of 1 degree 15 arc-min' each) distribution commences from Leo and Cancer respectively for.an odd sign and an even sign. In the case ofan odd sign the ruling deities repeat twice in the order of Skanda, Parsudhara, Anala, Viswakarma, Bhaga, Mitra, Maya, Antaka, Vrisha-dhwaja, Govinda, Madana and Bhima. Reverse these from Bhishma (to Skanda) twice to know the deities for rhe Siddhamsa in an even aign</p>",
    
    "dn27": "<h2>Construction of D27 Saptavimsa Chart</h2><p>The Bhamsa lords are respectively the presiding deities of the 27 Nakshatras as under. Dastra (Aswini Kumara), yama, Agni, Brahma, Chandra, Isa, Aditi, Jrva, Ahi, Pitara, Bhaga, Aryama, Surya, Tvashta, Marut, Sakragni, Mitra, Vasava, Rakshasa, Varuna, Visvadeva, Govinda, Vasu, Varuna, Ajapa, Ahirbudhanya and Pusha. These are for an odd sign. Count these deities in a reverse order for an even sign. </p>",
    
    "dn30": "<h2>Construction of D30 Trimsamsa Chart</h2><p>The Trimsamsa lords for an odd sign are.Mars, Saturn, Jupiter, Mercury and Venus. Each of them in order rules 5,5,8,7 and 5 degrees, The deities ruling over the Trimsamsas are respectively, Agni, Vayu, Indra, Kubera, and Varuna. In the case of an even sign, the quantum of Trimsamsa, planetary lordship and deitids get reversed</p>",
    
    "dn40": "<h2>Construction of D40 Chatvarimsamsa Chart</h2><p>For odd signs count from Aries and for an even sign from Libra in (each of 45' of arc). Vishnu, Chandra, Marichi, Tvashta, Dhata, Siva, Ravi, Yama, Yaksha, Gandharva, Kala and Varuna repeat successively as presiding deities in the same order for all sings</p>",
    
    "dn45": "<h2>Construction of D45 Akshavedamsa Chart</h2><p>Each Akshavedamsa is of 40' arc as a sign is divided into 45 equal'part. Aries is the starting point for all movable signs, Leo for all fixed signs and Sagittarius for all dual signs. In movable signs, Brahma, Siva and Vishnu;in immovable sings Siva, Vishnu and Brahma and in common sings Vishnu, Brahma and Siva repeat 15 times the president- ship over these Akshavedams</p>",

    "dn60": "<h2>Construction of D60 Shashtiamsa Chart</h2><p>Shashtiamsa is 1/60th part a of sign or half-a-degree each). The lord of that sign is the planet ruling the said Shashtiamsa. In odd signs, the names of Shashtiamsas are : 1. Ghora, 2. Rakshasa, 3. Deva, 4. Kubera, 5. Yaksha, 6. Kinnara, 7. Bhrashta, 8. Kulaghna, 9. Garala, 10. Vahni, 11. Maya, 12. Purishaka, 13. Apampathi, 14. Marutwan, 15. Kala, 16. Sarpa, 17. Amrita 18. Indu, I9. Mridu, 20. Kornala, 21. Heramba,22.Brahma, 23. Vishnu, 24. Mahes-wara, 25. Deva, 26. Ardrc, 27. Kalinasa, 28. Kshiteesa, 29. Kamalakara, 30. Gulika, 31. Mrithyu, 32. Kaala, 33. Davagni, 34. Ghora, 35. Yama, 36 Kantaka, 37. Sudha, 38. Amrita, 39. Poornachandra, 40. Vishadagdha, 41, Kulanasa, 42. Vamsakshaya, 43. Utpata, 44. Kaala, 45. Saumya, 46. Komala, 47. Seetala, 48. Karala Damshtra 49. Chandra-mukhi, 50. Praveena, 51. Kalapavaka, 52. Dandayudha, 53. Nirmala, 54. Saumya,55. Kroora, 56. Atiseetala, 057. Amrita, 58. Payodhi, 59. Bhramana, 60. Chandrarekha (Indurekha). The reverse is the order for even signs in somuch as these names are concerned. Planets in benefic Shashtiamsas results while the opposite is true in case of planets in malefic Shashtiamsa.</p>",
}

var renderDnChartDetail = function (inputData, dn) {
    let rendered = "TODO";
    switch(dn) {
        case 2:
            rendered = "<h1>D2 Chart<h1/>" + dnChartAttrb["dn2"] + dn2Analysis(inputData) + dnChartRef["dn2"];
            break;
        case 3:
            rendered = "<h1>D3 Chart<h1/>" + dnChartAttrb["dn3"] + dn3Analysis(inputData) + dnChartRef["dn3"];
            break;            
        case 4:
            rendered = "<h1>D4 Chart<h1/>" + dnChartAttrb["dn4"] + dn4Analysis(inputData) + dnChartRef["dn4"];
            break;            
        case 7:
            rendered = "<h1>D7 Chart<h1/>" + dnChartAttrb["dn7"] + dn7Analysis(inputData) + dnChartRef["dn7"];
            break;
        case 9:
            rendered = "<h1>D9 Chart<h1/>" + dnChartAttrb["dn9"] + dn9Analysis(inputData) + dnChartRef["dn9"];
            break;            
        case 10:
            rendered = "<h1>D10 Chart<h1/>" + dnChartAttrb["dn10"] + dn10Analysis(inputData) + dnChartRef["dn10"];
            break;            
        case 12:
            rendered = "<h1>D12 Chart<h1/>" + dnChartAttrb["dn12"] + dn12Analysis(inputData) + dnChartRef["dn12"];
            break;
        case 16:
            rendered = "<h1>D16 Chart<h1/>" + dnChartAttrb["dn16"] + dn16Analysis(inputData) + dnChartRef["dn16"];
            break;            
        case 20:
            rendered = "<h1>D20 Chart<h1/>" + dnChartAttrb["dn20"] + dn20Analysis(inputData) + dnChartRef["dn20"];
            break;            
        case 24:
            rendered = "<h1>D24 Chart<h1/>" + dnChartAttrb["dn24"] + dn24Analysis(inputData) + dnChartRef["dn24"];
            break;            
        case 27:
            rendered = "<h1>D27 Chart<h1/>" + dnChartAttrb["dn27"] + dn27Analysis(inputData) + dnChartRef["dn27"];
            break;
        case 30:
            rendered = "<h1>D30 Chart<h1/>" + dnChartAttrb["dn30"] + dn30Analysis(inputData) + dnChartRef["dn30"];
            break;            
        case 40:
            rendered = "<h1>40 Chart<h1/>" + dnChartAttrb["dn40"] + dn40Analysis(inputData) + dnChartRef["dn40"];
            break;            
        case 45:
            rendered = "<h1>D45 Chart<h1/>" + dnChartAttrb["dn45"] + dn45Analysis(inputData) + dnChartRef["dn45"];
        break;            
        case 60:
            rendered = "<h1>D60 Chart<h1/>" + dnChartAttrb["dn60"] + dn60Analysis(inputData) + dnChartRef["dn60"];
            break;            
    }
    return rendered;
}

export {
    renderDnChartDetail,
}