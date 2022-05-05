import {HousesNum, PlanetsEnum, SignsEnum, Planets, Signs, singnNumToStr, PlanetEffect} from "./AstroCalc.js"

// Chapter 29. Evaluation of Strengths
function SthanaBala(planetPos) {
    let bala = {"name":"Postional", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function DigBala(planetPos) {
    let bala = {"name":"Directional", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function KalaBala(planetPos) {
    let bala = {"name":"Temporal", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function Cheshta(planetPos) {
    let bala = {"name":"Motional", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function Naisargika(planetPos) {
    let bala = {"name":"Natual","sun": 1.000, "moon": 0.857, "mars": 0.286, "venus": 0.714, "mercury": 0.429, "jupiter": 0.571, "saturn": 0.143, };
    return bala
}

function DrikBala(planetPos) {
    let bala = {"name":"Aspectual", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function TableRow(sb) {
    let tableRow = `<tr><td>${sb["name"]}
                    <td style="text-align: center">${sb["sun"]}</td>
                    <td style="text-align: center">${sb["moon"]}</td>
                    <td style="text-align: center">${sb["mars"]}</td>
                    <td style="text-align: center">${sb["venus"]}</td>
                    <td style="text-align: center">${sb["mercury"]}</td>
                    <td style="text-align: center">${sb["jupiter"]}</td>
                    <td style="text-align: center">${sb["saturn"]}</td></tr>`;
    return tableRow;
}

function SumTable(name, table) {
    let total = {"name": name, "sun": 0, "moon": 0, "mars": 0, "venus": 0, "mercury": 0, "jupiter": 0, "saturn": 0, };
    
    for (var i=0; i < table.length; i++) {
        let row = table[i];
        for (var planet in row) {
            if (planet == "name")
                continue;
            total[planet] = total[planet] + row[planet]
        }
    }
    return total;
}

const introShadbala = `<h2>Strengths of Planets</h2>
               <p>
               Aspects (of planets) and strengths are to be known in deciding the effect.
               Planet's strength consists of six component strengths. These are (1) Positional strength (Sthana Bala), 
               (2) Directional strength (Dig Bala), (3) Temporal Strength (Kala Bala), (4) Motional Strength (Cheshta Bala),
               (5) Natural Strength (Naisargika Bala), Aspectual Strength (Drik Bala).
               </p>
               <p>
               Poisitional strength (Stana Bala) comprises of (a) Exaltation strength (Uchcha Bala), (b) Seven fold classification signs (Sapthavarga Bala),
               (c) D9 Chart placement strength odd/even sign (Yugma Yugma Bala), (d) Strength due to placement in angle, succedent or cadent(Kendradi Bala),
               (e) Strength due to placement in First, Second or Third part of sign(Drekkana Bala)
               </p>
               <h3>Planetary Strengths</h3>`;

const BalaHeader = `<tr>
                    <th>Strengths</th>
                    <th style="text-align: center">Sun</th>
                    <th style="text-align: center">Moon</th>
                    <th style="text-align: center">Mars</th>
                    <th style="text-align: center">Venus</th>
                    <th style="text-align: center">Mercury</th>
                    <th style="text-align: center">Jupiter</th>
                    <th style="text-align: center">Saturn</th></tr>`;

var renderShadbalaDetail = function (planetPos) {
    let shadBala = {"name": "ShadBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };

    let [sthanaBalaTotal, sthanaBalaTable] = SthanaBalaTable(planetPos);
    let [kalaBalaTotal, kalaBalaTable] = KalaBalaTable(planetPos);

    let Total = SumTable("Total", [sthanaBalaTotal, DigBala(planetPos), kalaBalaTotal, Cheshta(planetPos), Naisargika(planetPos), DrikBala(planetPos)]);
    let rowTotal = TableRow(Total);

    let rowSthanaBala = TableRow(sthanaBalaTotal);
    let rowDigBala = TableRow(DigBala(planetPos));
    let rowKalaBala = TableRow(kalaBalaTotal);
    let rowCheshtaBala = TableRow(Cheshta(planetPos));
    let rowNaisagikaBala = TableRow(Naisargika(planetPos));
    let rowDrikBala = TableRow(DrikBala(planetPos));



    let rendered = `${introShadbala}
                    <table style="width:100%; border:2px solid white">
                    ${BalaHeader} 
                    ${rowSthanaBala} 
                    ${rowDigBala}
                    ${rowKalaBala} 
                    ${rowCheshtaBala} 
                    ${rowNaisagikaBala} 
                    ${rowDrikBala} 
                    ${rowTotal}
                    </table>
                    ${sthanaBalaTable}
                    ${kalaBalaTable}
                    `;
    return (rendered);
}

//=================================================
// Components of SthanaBala
function UchaBala(planetPos) {
    let bala = {"name":"Uchha", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function SapthavargajaBala(planetPos) {
    let bala = {"name":"SapthaVargaja", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function YugmayugmaBhamsaBala(planetPos) {
    let bala = {"name":"YugmaYugma", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function KendradiBala(planetPos) {
    let bala = {"name":"Kendradi", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function DrekkanaBala(planetPos) {
    let bala = {"name":"Drekkana", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function SthanaBalaTable(planetPos) {
    const intro = "<p>Stahana Bala Components Table</p>";

    let total = SumTable("Total", [UchaBala(planetPos), SapthavargajaBala(planetPos), YugmayugmaBhamsaBala(planetPos), KendradiBala(planetPos), DrekkanaBala(planetPos)]);
    let rowTotal = TableRow(total);

    let rendered = `${intro}
                    <table style="width:100%; border:2px solid white">
                    ${BalaHeader} 
                    ${TableRow(UchaBala(planetPos))} 
                    ${TableRow(SapthavargajaBala(planetPos))}
                    ${TableRow(YugmayugmaBhamsaBala(planetPos))} 
                    ${TableRow(KendradiBala(planetPos))} 
                    ${TableRow(DrekkanaBala(planetPos))} 
                    ${rowTotal}
                    </table>`;
    total["name"] = "SthanaBala"                    
    return [total, rendered];
}
//=================================================
// Components of Kalabala
function NatonnataBala(planetPos) {
    let bala = {"name":"NatonnataBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function PrakashaBala(planetPos) {
    let bala = {"name":"PrakashaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function TribhagaBala(planetPos) {
    let bala = {"name":"TribhagaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}
//-----------------
// Varsha, Masa, Dina and Hora
function VarshaBala(planetPos) {
    let bala = {"name":"VarshaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function MasaBala(planetPos) {
    let bala = {"name":"Temporal", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function DinaBala(planetPos) {
    let bala = {"name":"Temporal", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function HoraBala(planetPos) {
    let bala = {"name":"Temporal", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function VarshaMasaDinaBala(planetPos) {
    let bala = {"name":"VarshaMasaDinaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}
//-----------------------
function AyanaBala(planetPos) {
    let bala = {"name":"AyanaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function YudhaBala(planetPos) {
    let bala = {"name":"YudhaBala", "sun": 1, "moon": 1, "mars": 1, "venus": 1, "mercury": 1, "jupiter": 1, "saturn": 1, };
    return bala
}

function KalaBalaTable(planetPos) {
    const intro = "<p>Kala Bala Components Table</p>";

    let total = SumTable("Total", [NatonnataBala(planetPos), PrakashaBala(planetPos), TribhagaBala(planetPos), VarshaMasaDinaBala(planetPos), AyanaBala(planetPos), YudhaBala(planetPos)]);
    let rowTotal = TableRow(total);

    let rendered = `${intro}
                    <table style="width:100%; border:2px solid white">
                    ${BalaHeader} 
                    ${TableRow(NatonnataBala(planetPos))} 
                    ${TableRow(PrakashaBala(planetPos))}
                    ${TableRow(TribhagaBala(planetPos))} 
                    ${TableRow(VarshaMasaDinaBala(planetPos))} 
                    ${TableRow(AyanaBala(planetPos))} 
                    ${TableRow(YudhaBala(planetPos))} 
                    ${rowTotal} 
                    </table>`;

    total["name"] = "KalaBala"                       
    return [total, rendered];
}
//=================================================
export {
    renderShadbalaDetail,
}