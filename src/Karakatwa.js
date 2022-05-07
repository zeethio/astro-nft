import {HousesNum, PlanetsEnum, SignsEnum, Planets, Signs, singnNumToStr, PlanetEffect, angleToSignOffset, angleToSign} from "./AstroCalc.js"


const karakas = ["Atma", "Amatya", "Bhratri", "Matri", "Pitri", "Putra", "Jathi"];

function CalcKarakatwas(planetPos) {

    let karaktwas = {"Atma": "", "Amatya": "", "Bhratri": "", "Matri": "", "Pitri": "", "Putra": "", "Jathi": ""};
    let signs = {"sun": "", "moon": "", "mars": "", "venus": "", "mercury": "", "jupiter": "", "saturn": "", };
    let offsets = {"sun": 30, "moon": 30, "mars": 30, "venus": 30, "mercury": 30, "jupiter": 30, "saturn": 30, };
    for( var planet in planetPos) {
        if (planet in offsets) {
            offsets[planet] = angleToSignOffset(planetPos[planet]);
            let sign = angleToSign(planetPos[planet]);
            signs[planet] = singnNumToStr(sign);
        }
    }
    var tuples = [];
    for (var key in offsets) tuples.push([key, offsets[key]]);

    tuples.sort(function(a, b) {
        a = a[1];
        b = b[1];
    
        return a < b ? 1 : (a > b ? -1 : 0);
    }); 
    for (var i=0; i < tuples.length; i++) {
        var planet = tuples[i][0];
        var offset = tuples[i][1];
        karaktwas[karakas[i]] = planet;
    } 
    return [karaktwas, offsets, signs];
}

const Header = `<tr>
                    <th>Karaka</th>
                    ${karakas.map(karaka => `<th style="text-align: center">${karaka}</th>`).join("")}
                </tr>`;

function RowKarakatwa(kw) {
    let tableRow = `<tr><td>Karakatwa</td>
                    ${karakas.map (karaka => `<td style="text-align: center">${kw[karaka]}</td>`).join("")}
                    </tr>`;
    return tableRow;
}

function RowAngle(kw, offsets, signs) {
    let tableRow = `<tr><td>Angle</td>
                    ${karakas.map (karaka => `<td style="text-align: center">${signs[kw[karaka]]} ${offsets[kw[karaka]].toFixed(2)} </td>`).join("")}
                    </tr>`;
    return tableRow;
}

const introKarakawas = `<h2>Karakatwas<br/>(Under Construction)</h2>
               <p>
               Planetary influence varies depending on it's angle of travel in the sign.
               </p>
               <h3>Karakatwa Table</h3>`;

var renderKarakatwaDetail = function (planetPos) {
    let [karaktwas, offsets, signs] = CalcKarakatwas(planetPos);

    let rendered = `${introKarakawas}
        <table style="width:100%; border:2px solid white">
        ${Header} 
        ${RowKarakatwa(karaktwas)} 
        ${RowAngle(karaktwas, offsets, signs)}
        </table>
        `;
    return (rendered);
}

//=================================================
export {
    renderKarakatwaDetail,
}