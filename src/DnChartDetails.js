const dnChartRef = {
    "dn2": "<h1>D2 Hora Chart</h1> This chart uses Leo and Cancer only. The first half of an old sign is the Hora ruled by the Sun while the second half is the Hora of the Moon. The reverse is true in the case of an even sign. Half of Rasi is called Hora. These are totally 24 counted from Aries and repeat twice (at the rate of 12) in the whole of the zodiac.  this analysis gives us clarity to identify the planets in horoscope that support income generation, wealth and asset building. Odd signs are Aries, Gemini, Leo, Libra, Sagittarius and Aquarius. Rest of the 6 signs are even ones. In even signs, the order of hora rulership is reversed i.e. first half is Moon's area and second half is Sun's area.",

    "dn3": "<h1>D3 Dreskana Chart</h1>One third of a Rasi is called Dreshkana. These are totally 36, counted from Aries, repeating thrice at the rate of 12 per round. The 1st, 5th and the 9th Rāśis from a Rāśi are its three Dreshkanas and are, respectively, lorded by Narada, Agasthya and Durvash. A few of the characteristics of D3 are valour, strength, courage, communication, immediate younger sibling, unfolding of Karma or fruits of your action(karma), short travels, native’s thought process, upper arms, ears and throat.D3 can also signify the natives skill set.",

    "dn4": "<h1>D4 Chaturthamsa Chart</h1> This represents fortunes, fate, assets, shelter, inherited property, and place of living",

    "dn7": "<h1>D7 Sapthamsa Chart</h1>",

    "dn9": "<h1>D9 Navamsa Chart</h1>",

    "dn10": "<h1>D10  Dasamamsa Chart</h1>",

    "dn12": "<h1>D12 Dvadasamsa Chart</h1>",
    
    "dn16": "<h1>D16 Shodasamsa Chart</h1>",
    
    "dn20": "<h1>D20 Vimsamsa Chart</h1>",
    
    "dn24": "<h1>D24 Chaturvimsa Chart</h1>",
    
    "dn27": "<h1>D27 Saptavimsa Chart</h1>",
    
    "dn30": "<h1>D30 Trimsamsa Chart</h1>",
    
    "dn40": "<h1>D40 Chatvarimsamsa Chart</h1>",
    
    "dn45": "<h1>D9 Akshavedamsa Chart</h1>",

    "dn60": "<h1>D60 Shashtimamsa Chart</h1>",
}

var renderDnChartDetail = function (inputData, dn) {
    let rendered = "TODO";
    switch(dn) {
        case 2:
            rendered = dnChartRef["dn2"];
            break;
        case 3:
            rendered = dnChartRef["dn3"];
            break;            
        case 4:
            rendered = dnChartRef["dn4"];
            break;            
        case 7:
            rendered = dnChartRef["dn7"];
            break;
        case 9:
            rendered = dnChartRef["dn9"];
            break;            
        case 10:
            rendered = dnChartRef["dn10"];
            break;            
        case 12:
            rendered = dnChartRef["dn12"];
            break;
        case 16:
            rendered = dnChartRef["dn16"];
            break;            
        case 20:
            rendered = dnChartRef["dn20"];
            break;            
        case 24:
            rendered = dnChartRef["dn24"];
            break;            
        case 27:
            rendered = dnChartRef["dn27"];
            break;
        case 30:
            rendered = dnChartRef["dn30"];
            break;            
        case 40:
            rendered = dnChartRef["dn40"];
            break;            
        case 45:
            rendered = dnChartRef["dn45"];
        break;            
        case 60:
            rendered = dnChartRef["dn60"];
            break;            
    }
    return rendered;
}

export {
    renderDnChartDetail,
}