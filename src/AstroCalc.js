const ATTRIB_DEF=6;

export const HousesNum = {
    "house1": 0, "house2": 1, "house3": 2, "house4": 3, "house5": 4, "house6": 5,
    "house7": 6, "house8": 7, "house9": 8, "house10": 9, "house11": 10, "house12": 11,
  }
  
  export const PlanetsEnum = {
    "asc":0, "sun": 1, "moon": 2, "mercury": 3, "venus": 4, "mars": 5, "jupiter": 6, "saturn": 7, "rahu": 8, "ketu": 9,
  }

  export const SignsEnum = {
    "aries": 0, "taurus": 1, "gemini": 2, "cancer": 3, "leo": 4, "virgo": 5, "libra": 6, 
    "scorpio": 7, "capricorn": 8, "sagittarius": 9, "aquarius": 10, "pisces": 11
  }

  var Planets = [
    {
        name: "sun",
        governance: "soul",
        status: "royal",
        gender: "male",
        element: "fire",
        temperament: "calm",
        nature: "malefic",
    },
    {
        name: "moon",
        governance: "mind",
        status: "royal",
        gender: "female",
        element: "water",
        temperament: "calm",
        nature: "benefic or malefic",
    },
    {
        name: "mars",
        governance: "mind",
        status: "chief",
        gender: "male",
        element: "fire",
        temperament: "inert",
        nature: "malefic",
    },
    {
        name: "venus",
        governance: "semen",
        status: "minister",
        gender: "female",
        element: "water",
        temperament: "dynamic",
        nature: "benefic",
    },
    {
        name: "mercury",
        governance: "speach",
        status: "prince",
        gender: "neuter",
        element: "earth",
        temperament: "dynamic",
    },
    {
        name: "jupiter",
        governance: "knowledge",
        status: "minister",
        gender: "male",
        element: "space",
        temperament: "calm",
        nature: "benefic",
    },
    {
        name: "saturn",
        governance: "grief",
        status: "army",
        gender: "neuter",
        element: "air",
        temperament: "inert",
        nature: "malefic",
    },
    {
        name: "rahu",
        governance: "fire",
        status: "army",
        element: "",
        temperament: "",
        nature: "malefic",
    },
    {
        name: "ketu",
        governance: "water",
        status: "army",
        element: "air",
        temperament: "",
        nature: "malefic",
    },
 ]
 
  const Signs = [
     {
        name: "aries",
        planet: "mars",
        element: "Fire",
        nature: "Movable",
        gender: "Male",
        varna: "Kshatriya",
        ascension: "Short",
        rises: "Hind",
        direction: "Northern",
        type: "Quadruped",
        fertility: "Barren",
        bodyPart: "Head",
    },
    {
        name: "taurus",
        planet: "venus",
        element: "Earth",
        nature: "Fixed",
        gender: "Female",
        varna: "Vaishya",
        ascension: "Short",
        rises: "Hind",
        direction: "Northern",
        type: "Quadruped",
        fertility: "Fruiteful",
        bodyPart: "Face & Throat",
    },
    {
        name: "gemeni",
        planet: "mercury",
        element: "Air",
        nature: "Dual",
        gender: "Male",
        varna: "Shudra",
        ascension: "Short",
        rises: "Head and Hind",
        direction: "Northern",
        type: "Human",
        fertility: "Barren",
        bodyPart: "Shoulders & Chest",
    },
    {
        name: "cancer",
        planet: "moon",
        element: "Water",
        nature: "Movable",
        gender: "Feale",
        varna: "Brahmin",
        ascension: "Long",
        rises: "Head",
        direction: "Northern",
        type: "Reptile",
        fertility: "Fruiteful",
        bodyPart: "Heart",
    },
    {
        name: "leo",
        planet: "sun",
        element: "Fire",
        nature: "Fixed",
        gender: "Male",
        varna: "Kshatriya",
        ascension: "Long",
        rises: "Head",
        direction: "Northern",
        type: "Quadruped",
        fertility: "Barren",
        bodyPart: "Stomach & Upper Abdomen",
    },
    {
        name: "virgo",
        planet: "mercury",
        element: "Earth",
        nature: "Dual",
        gender: "Female",
        varna: "Vaishya",
        ascension: "Long",
        rises: "Head",
        direction: "Northern",
        type: "Human",
        fertility: "Barren",
        bodyPart: "Waist & Intestines",
    },
    {
        name: "libra",
        planet: "Venus",
        element: "Air",
        nature: "Movable",
        gender: "Male",
        varna: "Shudra",
        ascension: "Long",
        rises: "Head",
        direction: "Southern",
        type: "Human",
        fertility: "Moderate",
        bodyPart: "Below Navel",
    },
    {
        name: "scorpio",
        planet: "mars",
        element: "Water",
        nature: "Fixed",
        gender: "Female",
        varna: "Brahmin",
        ascension: "Long",
        rises: "Head",
        direction: "Southern",
        type: "Reptile",
        fertility: "Fruiteful",
        bodyPart: "Genitalia",
    },
    {
        name: "sagittarious",
        planet: "jupiter",
        element: "Fire",
        nature: "Dual",
        gender: "Male",
        varna: "Kshatria",
        ascension: "Long",
        rises: "Hind",
        direction: "Southern",
        type: "Half Human & Half Quadruped",
        fertility: "Fruiteful",
        bodyPart: "Thighs",
    },
    {
        name: "capricorn",
        planet: "saturn",
        element: "Earth",
        nature: "Movable",
        gender: "Female",
        varna: "Vaishya",
        ascension: "Short",
        rises: "Hind",
        direction: "Southern",
        type: "Quadruped",
        fertility: "Moderate",
        bodyPart: "Knees",
    },
    {
        name: "auarious",
        planet: "saturn",
        element: "Ait",
        nature: "Fixed",
        gender: "Male",
        varna: "Shudra",
        ascension: "Short",
        rises: "Hind",
        direction: "Southern",
        type: "Human",
        fertility: "Moderate",
        bodyPart: "Ankles",
    },
    {
        name: "pisces",
        planet: "jupiter",
        element: "Water",
        nature: "Dual",
        gender: "Male",
        varna: "Brahmin",
        ascension: "Short",
        rises: "Head and Hind",
        direction: "Southern",
        type: "Reptile",
        fertility: "Fruiteful",
        bodyPart: "Feet",
    },
  ]


  // exalt positions are indicated using sign enumeration
  export const PlanetEffect = [
    { name:"sun",     exalt: 0, deepExalt: 10,  trikonSign: 3, trikonStart: 1, trikonEnd: 10},
    { name:"moon",    exalt: 1, deepExalt: 3,   trikonSign: 1, trikonStart: 4, trikonEnd: 20},
    { name:"mercury", exalt: 5, deepExalt: 15,  trikonSign: 5, trikonStart: 16,trikonEnd: 20}, 
    { name:"venus",   exalt: 11,deepExalt: 3,   trikonSign: 6, trikonStart: 4, trikonEnd: 20}, 
    { name:"mars",    exalt: 8, deepExalt: 28,  trikonSign: 0, trikonStart: 0, trikonEnd: 12}, 
    { name:"jupiter", exalt: 3, deepExalt: 5,   trikonSign: 7, trikonStart: 0, trikonEnd: 10}, 
    { name:"saturn",  exalt: 6, deepExalt: 3,   trikonSign: 10,trikonStart: 4, trikonEnd: 20}, 
    { name:"rahu",    exalt: 1, deepExalt: 3,   trikonSign: 1, trikonStart: 4, trikonEnd: 20}, 
    { name:"ketu",    exalt: 7, deepExalt: 3,   trikonSign: 7, trikonStart: 4, trikonEnd: 20}, 
  ];

// https://sites.google.com/site/horasashtra/planet-characters-and-description

const MALEFICS = ["sun", "saturn", "mars", "rahu", "ketu"];

const BENEFICS = ["venus", "jupiter"];

const mixed_benefics = ["moon", "mercury"];

// moon is benefic
function isMoonBenefic() {
  // waxing | withMercury
  return false;
}

// moon is benefic
function isMercuryBenefic() {
  // withBenefic
  return false;
}

const exaltation = {
  "sun": "aries", "moon": "taurus", "mercury": "virgo", "venus": "pisces", "mars": "capricorn", "jupiter": "cancer", "saturn": "libra", "rahu": "taurus", "ketu": "scorpio",
}

const debiation = {
  "sun": "libra", "moon": "scorpio", "mercury": "pisces", "venus": "pisces", "mars": "cancer", "jupiter": "aries", "saturn": "aquarius", "rahu": "taurus", "ketu": "scorpio",
}

// if Lagna Lord is in a Movable Rāśi and be aspected by a benefic Planet. One will be endowed with royal marks (of fortune),
// if Mercury, Jupiter, or Venus be in Lagna along with the Moon, or be in angle from Lagna.
// If Mercury, Jupiter, or Venus be in 4th, 7th, or 10th from Lagna, or be in the company of Moon in Lagna, the native will enjoy royal fortunes.


// Bodily Beauty. A benefic in Lagna will give a pleasing appearance, while a malefic will make one bereft of good appearance. Felicity of the body will be enjoyed, if Lagna is aspected by, or conjunct with a benefic.

export default class Aspect {

  constructor(planet1, planet2) {
  this.planet1 = planet1;
  this.planet2 = planet2;
  }
}

  export const ASPECTS = {
    'conjunction': {
      level: 'major',
      angle: 0,
      defaultOrb: 8
    },
    'opposition': {
      level: 'major',
      angle: 180,
      defaultOrb: 8
    },
    'trine': {
      level: 'major',
      angle: 120,
      defaultOrb: 8
    },
    'square': {
      level: 'major',
      angle: 90,
      defaultOrb: 7
    },
    'sextile': {
      level: 'major',
      angle: 60,
      defaultOrb: 6
    },
  }
  
  export const getModuloDifference = (point1, point2) => {  
    const high = Math.max(point1, point2);
    const low = Math.min(point1, point2);
  
    return Math.min(high - low, 360 + low - high);
  };

  export const calculateOrb = (aspectAngle, maxOrb, point1, point2) => {
    const difference = getModuloDifference(point1, point2)
    const orb = Math.abs(difference - aspectAngle)
    return parseFloat(orb.toFixed(4))
  }
  
  export const modulo = (number, mod) =>
  (number % mod + mod) % mod;

  export const isDegreeWithinCircleArc = (arcLow, arcHigh, degree, edges = '[)') => {
    // Calculates if a point ("degree") is within an arc between "arcLow" and "arcHigh" within a circle.
    // With parameters for low/high inclusive or exclusive.
    // [] = low/high inclusive
    // () = low/high exclusive
    const operators = {
      '[': (a, b) => a >= b,
      '(': (a, b) => a > b,
      ']': (a, b) => a <= b,
      ')': (a, b) => a < b,
    };
    const lowComparison = operators[edges.split('')[0]];
    const highComparison = operators[edges.split('')[1]];
  
    if (arcLow > arcHigh) {
      arcHigh += 360;
  
      if (degree < arcLow) {
        degree += 360;
      }
    }
  
    return lowComparison(degree, arcLow) && highComparison(degree, arcHigh);
  };
    
  export const isAspect = (point1, point2, angle, orb) => {
    const computed = modulo(point2 - point1, 360);
  
    const low = modulo(angle - orb, 360);
    const high = modulo(angle + orb, 360);
  
    return isDegreeWithinCircleArc(low, high, computed, "[]");
  };

  export const findAllAspectingPlanets = (point, planetData) => {  
    const planets = [];
  
    for (var key in ASPECTS) {
      var aspectObject = ASPECTS[key];
      for (var j=0; j < planetData.length; j++) {
          let position = planetData[point];
          let planetPos = planetData[j];
          const maxOrb = aspectObject.defaultOrb;
          if(position === planetPos) continue;
          let orb, aspect;
          if ( isAspect( position, planetPos, aspectObject.angle, maxOrb )) {
            orb = calculateOrb(aspectObject.angle, maxOrb, position, planetPos)
            planets.push(j);

          } else if (isAspect(position, planetPos, aspectObject.angle, maxOrb)) {
            orb = calculateOrb(aspectObject.angle, maxOrb, position, planetPos)
            planets.push(j);
          }

        }
    }
    return  planets;
  }

  export const findAspectingPlanets = (planet, aspectType, planetData) => {  
    const apsectingPlanets = [];
  
      var aspectObject = ASPECTS[aspectType];

      for (var j=1; j < planetData.length; j++) {
          if (planet === j) continue;
          let planet1Pos = planetData[planet];

          let planet2Pos = planetData[j];
          const maxOrb = aspectObject.defaultOrb;

          let orb, aspect;
          if ( isAspect( planet1Pos, planet2Pos, aspectObject.angle, maxOrb )) {
            orb = calculateOrb(aspectObject.angle, maxOrb, planet1Pos, planet2Pos)
            aspect = new Aspect(planet1Pos, planet2Pos);
            apsectingPlanets.push(j);
          } else if (isAspect(planet1Pos, planet2Pos, aspectObject.angle, maxOrb)) {
            orb = calculateOrb(aspectObject.angle, maxOrb, planet1Pos, planet2Pos)

            aspect = new Aspect(planet, j);
            apsectingPlanets.push(j);
          }

        }
    return  apsectingPlanets;
  }

  function findPlanetsInHouse(house, planetsPos) {
    let planets =[];
    for (var key in planetsPos) {
      if(planetsPos[key] == house){
        planets.push(PlanetsEnum[key]);
      }
    }
    return planets;
  }

  function anyBenefic(planets) {
    for (var planet in planets) {
      if (PlanetsEnum[planet] in BENEFICS) {
        return true;
      }
    }
    return false;
  }  
  
  function anyMalefic(planets) {
    for (var planet in planets) {
      if (PlanetsEnum[planet] in MALEFICS) {
        return true;
      }
    }
    return false;
  }  

  const planetStrength = function (planetData, sideralOffset) {
    // each planet
    // isExalted
    // isInTrikon,
    // IsDeepExalt
    // isInHouse
  }
  // Planet Characters and Description

  // Aspects, based on Rāśis

  const getHouseRulerDet = function(houseNum, planetsPos) {
  
    var signNum = planetsPos["asc"] + houseNum;
    var sign = Signs[signNum];
    var ruler = sign.planet;
    var rulerCrntSign = planetsPos[ruler];
    var rulerCrntHouse = (rulerCrntSign - signNum + 12) % 12;
    return [signNum, sign, ruler, rulerCrntSign, rulerCrntHouse]
  }
  
  const house1Data = {
    caption: "House-1",
    attrib1: "Appearance",
    attrib2: "Intellect",
    attrib3: "Bodily_comforts",
    attrib4: "Health",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,
    value3: ATTRIB_DEF,
    value4: ATTRIB_DEF,

    className: "house1",
};

//https://sites.google.com/site/horasashtra/effects-of-houses
// Ch. 12. Effects of 1st House

const getHouse1Data = function(planetsPos) {
  // Start with average values (for a range 1..10) for each attribute.
  var value1 = 5;
  var value2 = 5;
  var value3 = 5;
  var value4 = 5;

  const [signNum, sign, ruler, rulerCrntSign, rulerCrntHouse] = getHouseRulerDet(0, planetsPos)
  /*
  var hosueSignNum = planetsPos["asc"];
  var sign = Signs[hosueSignNum];
  var rulingPlanet = sign.planet;
  var rulingPlanetSignPos = planetsPos[rulingPlanet];
  var rulingPlanetHousePos = (rulingPlanetSignPos - hosueSignNum + 12) % 12; 
  */
  
  //  1-2. Physical comforts. Should Lagna Lord be conjunct with a malefic, or be in 8th, 6th, or 12th, physical felicity will diminish.
/*
  let conjuctPlanets = findAspectingPlanets(PlanetsEnum[rulingPlanet], "conjunction", planetData);
  value3 += ( rulingPlanetHousePos in [7, 5, 11] || anyMalefic(conjuctPlanets)) ? -1: 0;
*/
  // 1-2. ... With a benefic in an angle, or trine all diseases will disappear. 
  
/*
  let trinePlanets = findAspectingPlanets(PlanetsEnum[rulingPlanet], "trine", planetData);
  let anglePlanets = findAspectingPlanets(PlanetsEnum[rulingPlanet], "square", planetData);
  value3 +=  anyBenefic([...trinePlanets, ...anglePlanets])? 1: 0;
*/
  // 3. There will not be bodily health, if Lagna, or Moon be aspected by, or conjunct with a malefic, being devoid of a benefics Aspect.
  //let lagnaAspects = findAllAspectingPlanets(PlanetsEnum["asc"], "square", planetData);

  //4. Bodily Beauty. A benefic in Lagna will give a pleasing appearance, while a malefic will make one bereft of good appearance.
  let planetsInHouse = findPlanetsInHouse(planetsPos);
  value1 += anyBenefic(planetsInHouse)? 3: 0;
  value1 += anyMalefic(planetsInHouse)? -3: 0;

  //5-7. Other Benefits. If Lagna Lord, Mercury, Jupiter, or Venus be in an angle, or in a trine, the native will be long lived, wealthy, intelligent and liked by the king. 
  /*
  let lagnaTrinePlanets = findAspectingPlanets(PlanetsEnum["asc"], "trine", planetData);
  let lagnaAnglePlanets = findAspectingPlanets(PlanetsEnum["asc"], "square", planetData);
  value2 +=  anyBenefic([...lagnaTrinePlanets, ...lagnaAnglePlanets, ...trinePlanets, ...anglePlanets])? 2: 0;
  */
  value2 +=  (BENEFICS.includes(ruler) && [4, 8].includes(rulerCrntHouse)) ? 3 : 0;

  //console.log(`conjuctPlanets ${conjuctPlanets}`)
  //console.log(`trinePlanets ${trinePlanets}`)
  //console.log(`anglePlanets ${anglePlanets}`)
  //console.log(`lagnaTrinePlanets ${lagnaTrinePlanets}`)
  //console.log(`lagnaAnglePlanets ${lagnaAnglePlanets}`)

  house1Data["value1"] = value1;
  house1Data["value2"] = value2;
  house1Data["value3"] = value3;
  house1Data["value4"] = value4;
  return house1Data;
}

const house2Data = {
    caption: "House-2",
    attrib2: "Inheritance",
    attrib1: "Speech",

    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,
 

    className: "house2",
};

const getHouse2Data = function(planetsPos, planetData, sideralOffset) {
  // Start with average values (for a range 1..10) for each attribute.
  var value1 = 5;
  var value2 = 5;
  var value3 = 5;
  var value4 = 5;
  
  //const [hosueSignNum, sign, ruler, rulingPlanetSignPos, rulingPlanetHousePos] = getHouseRulerDet(1, planetsPos)
 

}

const house3Data = {
  caption: "House-3",
  attrib1: "Journeys",
  attrib2: "Skills",
  value1: ATTRIB_DEF,
  value2: ATTRIB_DEF,

    className: "house3",
};

const house4Data = {
    caption: "House-4",
    attrib1: "Education",
    attrib2: "Home",

    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house4",
};

const house5Data = {
    caption: "House-5",
    attrib2: "Children",
    attrib1: "Recreation",

    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house5",
};

const house6Data = {
    caption: "House-6",
    attrib1: "Enemies",
    attrib2: "Diseases",

    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house6",
};

const house7Data = {
    caption: "House-7",
    attrib1: "Longevity",
    attrib2: "Passion",
    className: "house7",

    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


};

const house8Data = {
    caption: "House-8",
    attrib2: "Inheritance",
    attrib1: "Suffering",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house8",
};

const house9Data = {
    caption: "House-9",
    attrib1: "Career",
    attrib2: "Prosperity",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house9",
};

const house10Data = {
    caption: "House-10",
    attrib1: "Fame",
    attrib2: "Power",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house10",
};

const house11Data = {
    caption: "House-11",
    attrib2: "Friends",
    attrib1: "Earnings",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,


    className: "house11",
};

const house12Data = {
    caption: "House-12",
    attrib2: "Expenses",
    attrib1: "Pleasures",
    value1: ATTRIB_DEF,
    value2: ATTRIB_DEF,

    className: "house12",
};

const housesData = [
    house1Data,
    house2Data,
    house3Data,
    house4Data,
    house5Data,
    house6Data,
    house7Data,
    house8Data,
    house9Data,
    house10Data,
    house11Data,
    house12Data,
];

export function getHouseData(planetData, sideralOffset) {
  try {
    let planetsPos = getPlanetPos(planetData, sideralOffset);
    housesData[0] = getHouse1Data(planetsPos, planetData, sideralOffset);
  } catch {
    console.log("Error getting house data. returning default data");
  }
  return housesData;
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