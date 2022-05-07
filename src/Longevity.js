import {HousesNum, PlanetsEnum, SignsEnum, Planets, Signs, singnNumToStr, PlanetEffect} from "./AstroCalc.js"

const planets = ["sun", "moon", "mars", "venus", "mercury", "jupiter", "saturn"];

function Anshayu(planetPos) {
    let ayu = {"name":"Pindayu", "sun": 24, "moon": 12, "mars": 12, "venus": 12, "mercury": 12, "jupiter": 12, "saturn": 12, };

    return ayu
}

function Pindayu(planetPos) {
    let ayu = {"name":"Anshayu", "sun": 19, "moon": 25, "mars": 15, "venus": 21, "mercury": 12, "jupiter": 15, "saturn": 20, };

    return ayu
}

function Naisargikayu(planetPos) {
    let ayu = {"name":"Naisargikayu", "sun": 20, "moon": 1, "mars": 2, "venus": 20, "mercury": 9, "jupiter": 18, "saturn": 50, };
    return ayu
}


function Mishryu(table) {
    let total = {"name": "Mishrayu", "sun": 0, "moon": 0, "mars": 0, "venus": 0, "mercury": 0, "jupiter": 0, "saturn": 0, };
    
    for (var i=0; i < table.length; i++) {
        let row = table[i];
        for (var planet in row) {
            if (planet == "name")
                continue;
            total[planet] = total[planet] + row[planet]
        }
    }
    for (var planet in total) {
        if (planet == "name")
            continue;
        total[planet] = total[planet] / 3.0;
    }

    return total;
}

function RowTotal(row) {
    let total = 0;
    for (var planet in row) {
        if (planet == "name")
            continue;
        total = total + row[planet];
    }
    return total;
}

function TableRow(sb, total) {
    let tableRow = `<tr><td>${sb["name"]}
                    ${planets.map(planet => `<td style="text-align: center">${sb[planet].toFixed(2)}</td>`).join("")}
                    <td style="text-align: center">${total.toFixed(2)}</td>
                    </tr>`;
    return tableRow;
}

const introLongevity = `<h2>Longevity<br/>(Under Construction)</h2>
               <p>
               As per Brihat Parasara, there are various ways of knowing longevity, which are difficult to know event for Gods.
               <br/>(1) Anshayu: In this method planets give years equal to the number of Navamasa sign.
               <br/>(2) Pindayu: Longevity on the basis of current position with respect to exaltion of planets. 
               <br/>(3) Naisargikayu: Based on the relative position of planets from the time of birth.
               </p>
               <h3>Longevity Estimates</h3>`;

const Header = `<tr>
                    <th>Strengths</th>
                    ${planets.map(planet => `<th style="text-align: center">${planet}</th>`).join("")}
                    <th style="text-align: center">Total</th>
                    </tr>`;

var renderLongevityDetail = function (planetPos) {
    let Ayu = {"name": "Ayu", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };

    let anshayu = Anshayu(planetPos);
    let rowAnshayu = TableRow(anshayu, RowTotal(anshayu));

    let pindayu = Pindayu(planetPos);
    let rowPindayu = TableRow(pindayu, RowTotal(pindayu));

    let naisargikayu = Naisargikayu(planetPos);
    let rowNaisargikayu = TableRow(naisargikayu, RowTotal(naisargikayu));

    let mishrayu = Mishryu([anshayu, pindayu, naisargikayu]);
    let rowMishrayu = TableRow(mishrayu,RowTotal(mishrayu));
    let rendered = `${introLongevity}
        <table style="width:100%; border:2px solid white">
        ${Header} 
        ${rowAnshayu} 
        ${rowPindayu}
        ${rowNaisargikayu} 
        ${rowMishrayu}
        </table>
        `;
    return (rendered);
}

//=================================================
export {
    renderLongevityDetail,
}

