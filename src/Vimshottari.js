import {Stars, StarAngle} from "./AstroCalc.js"

const dasas = ["ketu", "venus", "sun", "moon", "mars", "rahu", "jupiter", "saturn", "mercury"];
const periods = {"ketu": 7, "venus": 20, "sun": 6, "moon": 10, "mars": 7, "rahu" : 18, "jupiter": 16, "saturn": 19, "mercury": 17};

const lunarYear = 360; // Diurnal days

function calcJD(dt) {
    let ye = dt.getFullYear();
    let mo = dt.getMonth() + 1; 
    let da = dt.getDay();
    let ho = dt.getHours();
    let mi = dt.getMinutes();

	var y0 = (mo > 2) ? ye : (ye -  1);
	var m0 = (mo > 2) ? mo : (mo + 12);
	var JD = Math.floor(365.25 * y0) + Math.floor(y0 / 400) - Math.floor(y0 / 100);
	JD	+= Math.floor(30.59 * (m0 - 2)) + da;
	JD	+= ((ho - 9) * 60.0 + mi) / 1440.0 + 1721088.5;

	return JD;
}

function isDateInInterval(checkDate, startdate, endDate) { 
	let jdCheck = calcJD(checkDate);
	let jdStart = calcJD(startdate);
	let jdEnd = calcJD(endDate);
    let result = jdCheck >= jdStart && jdCheck < jdEnd ? true : false;
	return result;
}

const introVimshottari = `<h2>Vimshottari Dasa<br/>(Under Construction)</h2>
               <p>
               Vimshottari Dasa is prominent among various types of Dasa systems. Vimshottari Dasa has a full cycle of 120 years
               divided in to 9 parts and allocated to planet, where each part is called MahaDasa of the planet. Each MahaDasa is divided
               in to  9 Anthardasas. Anthardasa is further divided in to 9 Prathyanthardasa.
               </p>
               <p>
               Find your current Dasa, Antardasa and Pratyantardasa below.
               </p>
               `;

const Header = `<tr>
               <th>Dasa</th>
               ${dasas.map(dasa => `<th style="text-align: center">${dasa}</th>`).join("")}
               <th style="text-align: center">Total</th>
               </tr>`;

function TableHeader(name, dasaDate, dasaDateLast) {
    let tableRow = `<tr><td>${name}
                ${Object.keys(dasaDate).map(dasa => `<td style="text-align: center">${dasa}</td>`).join("")}
                ${dasaDateLast !== undefined ? Object.keys(dasaDateLast).map(dasa => `<td style="text-align: center">${dasa}</td>`).join(""): ""}
                </tr>`;
    return tableRow;
}
                           
function TableRow(name, dasaDate, dasaDateLast, hiliteDasa) {
    let style = "\"text-align: center\"";
    let hlStyle = "\"text-align: center; background: blue\"";
    let tableRow = `<tr><td>${name}
                    ${Object.keys(dasaDate).map(dasa => `<td style=${dasa==hiliteDasa ? hlStyle: style}>${dasaDate[dasa].toDateString()}</td>`).join("")}
                    ${dasaDateLast !== null ? Object.keys(dasaDateLast).map(dasa => `<td style="text-align: center">${dasaDateLast[dasa].toDateString()}</td>`).join(""):""}
                    </tr>`;
    return tableRow;
}

function addDays(date, days) {
    var result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}

function CalculateDasa(startDate, star, offset, currentDate) {
    let dasaStart={};
    let dasaEnd={};
    let dasaStartRem={};
    let dasaEndRem={};
    let currentDasa = null;

    let startDasa = dasas[star % 9]; //"jupiter"; // TODO from nk
    let startIndex = dasas.indexOf(startDasa);
    let offsetRatio = offset / StarAngle; //TODO From nkOffset
    var i;

    let dasa=startDasa;
    let totalDays = 0;
    
    dasaStart[dasa] = addDays(startDate, 0);
    totalDays =  periods[dasa] * (1.0-offsetRatio) * lunarYear;
    dasaEnd[dasa] = addDays(startDate, totalDays)
    currentDasa = isDateInInterval(currentDate, dasaStart[dasa], dasaEnd[dasa]) ? dasa : currentDasa;

    for (i=startIndex + 1; i <  dasas.length; i++) {
        dasa=dasas[i];
        dasaStart[dasa] = addDays(startDate, totalDays);
        totalDays = totalDays + periods[dasa] * lunarYear;
        dasaEnd[dasa] = addDays(startDate, totalDays);
        currentDasa = isDateInInterval(currentDate, dasaStart[dasa], dasaEnd[dasa]) ? dasa : currentDasa;
    }

    for (i=0; i < startIndex; i++) {
        dasa=dasas[i];
        dasaStart[dasa] = addDays(startDate, totalDays);
        totalDays = totalDays + periods[dasa] * lunarYear;
        dasaEnd[dasa] = addDays(startDate, totalDays)
        currentDasa = isDateInInterval(currentDate, dasaStart[dasa], dasaEnd[dasa]) ? dasa : currentDasa;
     }

    // Remaing part of Start Dasa
    if(offsetRatio > 0.0) {
        dasa=startDasa;
        dasaStartRem[dasa] = addDays(startDate, totalDays);
        totalDays = totalDays + periods[dasa] * offsetRatio * lunarYear;
        dasaEndRem[dasa] = addDays(startDate, totalDays)
        currentDasa = isDateInInterval(currentDate, dasaStartRem[dasa], dasaEndRem[dasa]) ? dasa : currentDasa;
    }
    return [startDasa, dasaStart, dasaStartRem, dasaEnd, dasaEndRem, currentDasa];
}

function AntarDasaPeriod(antardasa, dasa){
    return Math.floor(periods[antardasa] * periods[dasa]  * lunarYear / 120.0);
} ;

function PrathyaantarDasaPeriod(prathyantar, antardasa, dasa){
    return Math.floor(periods[prathyantar] * periods[antardasa] * periods[dasa]  * lunarYear / (120.0 * 120));
} ;


function CalculateAntarDasa(startDate, mahaDasa, offset, currentDate) {
    let dasaStart={};
    let dasaEnd={};

    let currentDasa = null;
    let startDasa = mahaDasa; //"jupiter"; // TODO from nk
    let startIndex = dasas.indexOf(mahaDasa);
    let offsetRatio = offset / StarAngle; //TODO From nkOffset
    let elapsedDays =  periods[mahaDasa] * offsetRatio * lunarYear;

    var i;

    let anatrdasa = mahaDasa;
    let antarStartDate = addDays(startDate, -elapsedDays);
    dasaStart[anatrdasa] = addDays(antarStartDate, 0);
    let antarCumDays =   AntarDasaPeriod(anatrdasa, mahaDasa); //antarDays * periods[dasa] / 120.0;
    dasaEnd[anatrdasa] = addDays(antarStartDate, antarCumDays)
    currentDasa = isDateInInterval(currentDate, dasaStart[anatrdasa], dasaEnd[anatrdasa]) ? anatrdasa : currentDasa;

    for (i=startIndex + 1; i <  dasas.length; i++) {
        anatrdasa=dasas[i];
        dasaStart[anatrdasa] = addDays(antarStartDate, antarCumDays);
        antarCumDays +=  AntarDasaPeriod(anatrdasa, mahaDasa);
        dasaEnd[anatrdasa] = addDays(antarStartDate, antarCumDays);
        currentDasa = isDateInInterval(currentDate, dasaStart[anatrdasa], dasaEnd[anatrdasa]) ? anatrdasa : currentDasa;
    }

    for (i=0; i < startIndex; i++) {
        anatrdasa=dasas[i];
        dasaStart[anatrdasa] = addDays(antarStartDate, antarCumDays);
        antarCumDays += AntarDasaPeriod(anatrdasa, mahaDasa);;
        dasaEnd[anatrdasa] = addDays(antarStartDate, antarCumDays)
        currentDasa = isDateInInterval(currentDate, dasaStart[anatrdasa], dasaEnd[anatrdasa]) ? anatrdasa : currentDasa;
     }

    return [dasaStart, dasaEnd, currentDasa];
}

function CalculatePrathyantardasa(startDate, antarDasa, mahaDasa, offset, currentDate) {
    let dasaStart={};
    let dasaEnd={};

    let currentDasa = null;
    let startIndex = dasas.indexOf(antarDasa);
    let offsetRatio = offset / StarAngle; //TODO From nkOffset
    let elapsedDays =  periods[antarDasa] * offsetRatio * lunarYear;

 

    let prathyantarStartDate = addDays(startDate, -elapsedDays);
    let antarCumDays = 0;
    function calcPrathyantara(prathyantar) {
        dasaStart[prathyantar] = addDays(prathyantarStartDate, antarCumDays);
        antarCumDays +=   PrathyaantarDasaPeriod(prathyantar, antarDasa, mahaDasa);
        dasaEnd[prathyantar] = addDays(prathyantarStartDate, antarCumDays)
        currentDasa = isDateInInterval(currentDate, dasaStart[prathyantar], dasaEnd[prathyantar]) ? prathyantar : currentDasa;
    }
    calcPrathyantara(antarDasa);
    var i;
    for (i=startIndex + 1; i <  dasas.length; i++) {
        calcPrathyantara(dasas[i]);
    }

    for (i=0; i < startIndex; i++) {
        calcPrathyantara(dasas[i]);
     }

    return [dasaStart, dasaEnd, currentDasa];
}

function AntardasaTable(startDate, mahaDasa, offset) {
    let [dasaStart, dasaEnd, currentDasa] = CalculateAntarDasa(startDate, mahaDasa, offset, new Date())
    let rendered = 
        `<p>Antar Dasas of ${mahaDasa}</p>
        <table style="width:100%; border:2px solid white">
        ${TableHeader("AntarDasa", dasaStart)}
        ${TableRow("Start", dasaStart, null, currentDasa)}
        ${TableRow("End", dasaEnd, null, currentDasa)}    
        </table>
        `;
    return rendered;
}

function PranthyardasaTable(startDate, antarDasa, mahaDasa, offset) {
    let [dasaStart, dasaEnd, currentDasa] = CalculatePrathyantardasa(startDate, antarDasa, mahaDasa, offset, new Date())
    let rendered = 
        `<p>Prathyantar Dasas of ${mahaDasa}-${antarDasa}</p>
        <table style="width:100%; border:2px solid white">
        ${TableHeader("Prathyantara", dasaStart)}
        ${TableRow("Start", dasaStart, null, currentDasa)}
        ${TableRow("End", dasaEnd, null, currentDasa)}    
        </table>
        `;
    return rendered;
}

function AllPranthyardasaTables(startDate,  mahaDasa, offset) {
    let [dasaStart, dasaEnd, currentDasa] = CalculateAntarDasa(startDate, mahaDasa, offset, new Date())
    let rendered = `
        ${Object.keys(dasaStart).map(antardasa => `${PranthyardasaTable(dasaStart[antardasa], antardasa, mahaDasa, 0)}`).join("")}
    `;
    return rendered;
}

var vimshottariDetail = function (birthDate, star, offset) {
    let [startDasa, dasaStart, dasaStartRem, dasaEnd, dasaEndRem, currentDasa] = CalculateDasa(birthDate, star, offset, new Date());
    
    let rendered = `${introVimshottari}
        Star: ${Stars[star]} Offset: ${Math.floor(offset)} degrees, ${((offset - Math.floor(offset)) * 60).toFixed(2)} minutes  
        <h3>Maha Dasas</h3>
        <p>Current Maha Dasa: ${currentDasa}</p>
        <table style="width:100%; border:2px solid white">
        ${TableHeader("Dasa", dasaStart, dasaStartRem)}
        ${TableRow("Start", dasaStart, dasaStartRem, currentDasa)}
        ${TableRow("End", dasaEnd, dasaEndRem, currentDasa)}    
        </table>
        ${Object.keys(dasaStart).map(dasa => `${AntardasaTable(dasaStart[dasa], dasa, startDasa == dasa ? offset : 0)}`).join("")}
        ${Object.keys(dasaStart).map(dasa => `${AllPranthyardasaTables(dasaStart[dasa],  dasa, startDasa == dasa ? offset : 0)}`).join("")}        
        `;

    return rendered;
}

//=================================================
export {
    vimshottariDetail,
}