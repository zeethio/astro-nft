export const HousesNum = {
    "house1": 0, "house2": 1, "house3": 2, "house4": 3, "house5": 4, "house6": 5,
    "house7": 6, "house8": 7, "house9": 8, "house10": 9, "house11": 10, "house12": 11,
  }
  
  export const PlanetsEnum = {
    "asc":0, "sun": 1, "moon": 2, "mercury": 3, "venus": 4, "mars": 5, "jupiter": 6, "saturn": 7, "rahu": 8, "ketu": 9,
  }

  function angleToSign(angle) {
    var signNum = Math.floor(((angle + 360)%360)/30);
    return (signNum + 12) % 12;
  }


  export function getPlanetPos(planetData, sideralOffset) {
    var planetsPos = {}
    if(planetData.length >= 9) {
        for (var planet in  PlanetsEnum) {
            // Correct angle. ASC is moved negative 90deg w.r.t tropical aries reference
            var angle = planetData[PlanetsEnum[planet]] - sideralOffset;
            planetsPos[planet] = angleToSign(angle );
        }
    }
    return planetsPos;
  }

  export function getCloseConjuctions(planetData, sideralOffset) {
    let proximity = 3;
    let groups = [];
    if(planetData.length > 1) {
        for (var j=0; j < planetData.length; j++) {
            let group=[]
            for (var i=j; i < planetData.length; i++) {
                if(Math.abs(planetData[j] - planetData[i]) < proximity){
                    group.push(i);
                }
            }
            groups.push(group);
        }
    }
    console.log(JSON.stringify(groups));
    return groups;
  }