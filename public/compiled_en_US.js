function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {const embeddedLinguisticResources = {"verbs":{},"words":{},"adjectives":{}};var pug_html = "", protect_stack = [], pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (House1, House10, House11, House12, House2, House3, House4, House5, House6, House7, House8, House9, Houses, JSON, Object, Planets, console, eachzHelper1, eachzHelper2, eachzHelper3, embeddedLinguisticResources, inputData, params, planet, planetsInHouseList, signsInHouseList, util) {
      /**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
//-------- allows core to communicate with the inner of the template mechanic already used by Pug (i.e. pug_html)
util.setSpy({
  getPugHtml: function () {
    return pug_html;
  },
  setPugHtml: function (new_pug_html) {
    pug_html = new_pug_html;
  },
  appendPugHtml: function (append) {
    pug_html = pug_html + append;
  },
});
util.setEmbeddedLinguisticResources(embeddedLinguisticResources);
/**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
//-------- using GenderNumberManager
function setRefGender(obj, gender) {
  util.genderNumberManager.setRefGender(obj, gender, null);
}
function getRefGender(obj) {
  return util.genderNumberManager.getRefGender(obj);
}
function setRefNumber(obj, number) {
  util.genderNumberManager.setRefNumber(obj, number);
}
function getRefNumber(obj) {
  return util.genderNumberManager.getRefNumber(obj);
}
function setRefGenderNumber(obj, gender, number) {
  util.genderNumberManager.setRefGenderNumber(obj, gender, number);
}
function getAnonymous(gender, number) {
  return util.genderNumberManager.getAnonymous(gender, number);
}
function getAnonMS() {
  return util.genderNumberManager.getAnonMS();
}
function getAnonMP() {
  return util.genderNumberManager.getAnonMP();
}
function getAnonFS() {
  return util.genderNumberManager.getAnonFS();
}
function getAnonFP() {
  return util.genderNumberManager.getAnonFP();
}
//-------- using RefsManager
function resetRep(obj) {
  util.refsManager.resetRep(obj);
}
function hasTriggeredRef(obj) {
  return util.refsManager.hasTriggeredRef(obj);
}
function setTriggeredRef(obj) {
  util.refsManager.setTriggeredRef(obj);
}
function dumpRefMap() {
  util.refsManager.dumpRefMap();
}
function getNextRep(obj, params) {
  return util.refsManager.getNextRep(obj, params);
}
//-------- using SaidManager
function dumpHasSaid() {
  util.saidManager.dumpHasSaid();
}
function getDumpHasSaid() {
  return util.saidManager.getDumpHasSaid();
}
function getHasSaidCopy() {
  return util.saidManager.getHasSaidCopy();
}
function recordSaid(key) {
  util.saidManager.recordSaid(key);
}
function deleteSaid(key) {
  util.saidManager.deleteSaid(key);
}
function hasSaid(key) {
  return util.saidManager.hasSaid(key);
}
function recordValue(key, value) {
  util.getSaidManager().recordValue(key, value);
}
function deleteValue(key) {
  util.getSaidManager().deleteValue(key);
}
function getValue(key) {
  return util.getSaidManager().getValue(key);
}
//-------- using helper
function hasFlag(params, flag) {
  return util.helper.hasFlag(params, flag);
}
function getFlagValue(params, flag) {
  return util.helper.getFlagValue(params, flag);
}
function protectString(string) {
  return util.helper.protectString(string);
}
function isSentenceStart() {
  return util.helper.isSentenceStart();
}
function getMorF(table, obj) {
  return util.helper.getMFN(table, obj);
}
function getMFN(table, obj) {
  return util.helper.getMFN(table, obj);
}
function getSorP(table, obj) {
  return util.helper.getSorP(table, obj);
}
//-------- using DictManager
function setWordData(word, wordData) {
  util.languageImpl.getDictManager().setWordData(word, wordData);
}
function setAdjData(word, wordData) {
  util.languageImpl.getDictManager().setAdjData(word, wordData);
}
/**
 * @license
 * Copyright 2021 Ludan Stoecklé
 * SPDX-License-Identifier: Apache-2.0
 */
function syn_fct(items) {
  return util.synManager.synFct(items);
}
function printObj(before, obj) {
  console.log(before + ' ' + JSON.stringify(obj).substring(0, 20));
}
function logParams(params) {
  console.log('params: ' + JSON.stringify(params));
}
function valueToSorP(val) {
  return util.languageImpl.isPlural(val) ? 'P' : 'S';
}
function debug(filename, line) {
  if (filename !== null) {
    pug_debug_filename = filename;
  }
  pug_debug_line = line;
  if (locals.renderDebug) {
    // locals is available
    let id = line;
    if (filename !== null) {
      id = filename.replace(/"/g, '') + ': ' + id;
    }
    pug_html = pug_html + `<span class="rosaenlg-debug" id="${id}"></span>`;
  }
}
pug_mixins["foreach"] = pug_interp = function(elts, mixinFct, asm, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.asmManager.foreach(elts, mixinFct, asm, params);
pug_html = pug_html + "¤¤¤";
};
var foreach=pug_mixins["foreach"];
pug_mixins["value"] = pug_interp = function(obj, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.valueManager.value(obj, params);
pug_html = pug_html + "¤¤¤";
};
var value=pug_mixins["value"];
pug_mixins["syn"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
var items = [];
for (pug_interp = 0; pug_interp < arguments.length; pug_interp++) {
  items.push(arguments[pug_interp]);
}
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.synManager.simpleSyn(items);
pug_html = pug_html + "¤¤¤";
};
var syn=pug_mixins["syn"];
pug_mixins["agreeAdj"] = pug_interp = function(adjective, subject, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.adjectiveManager.agreeAdj(adjective, subject, params);
pug_html = pug_html + "¤¤¤";
};
var agreeAdj=pug_mixins["agreeAdj"];
pug_mixins["recipientPossession"] = pug_interp = function(owned){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.possessiveManager.recipientPossession(owned);
pug_html = pug_html + "¤¤¤";
};
var recipientPossession=pug_mixins["recipientPossession"];
pug_mixins["thirdPossession"] = pug_interp = function(owner, owned, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.possessiveManager.thirdPossession(owner, owned, params);
pug_html = pug_html + "¤¤¤";
};
var thirdPossession=pug_mixins["thirdPossession"];
pug_mixins["dummy"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_mixins['dummy']();
};
var dummy=pug_mixins["dummy"];
pug_mixins["flushBuffer"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤";
};
var flushBuffer=pug_mixins["flushBuffer"];
pug_mixins["eatSpace"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤EATSPACE¤";
};
var eatSpace=pug_mixins["eatSpace"];
pug_mixins["uppercaseWords"] = pug_interp = function(str){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤" + (pug_escape(null == (pug_interp = util.helper.getUppercaseWords(str)) ? "" : pug_interp)) + "¤";
};
var uppercaseWords=pug_mixins["uppercaseWords"];
pug_mixins["toHtmlList"] = pug_interp = function(obj){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "\u003Cul\u003E";
// iterate obj
;(function(){
  var $$obj = obj;
  if ('number' == typeof $$obj.length) {
      for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
        var val = $$obj[index];
if (val!=null && typeof(val) == "object") {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index) ? "" : pug_interp)) + "¤" + "¤: ¤";
pug_mixins["toHtmlList"](val);
pug_html = pug_html + "¤¤\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index + ': ' + val) ? "" : pug_interp)) + "¤" + "\u003C\u002Fli\u003E";
}
      }
  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;
      var val = $$obj[index];
if (val!=null && typeof(val) == "object") {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index) ? "" : pug_interp)) + "¤" + "¤: ¤";
pug_mixins["toHtmlList"](val);
pug_html = pug_html + "¤¤\u003C\u002Fli\u003E";
}
else {
pug_html = pug_html + "\u003Cli\u003E" + "¤" + (pug_escape(null == (pug_interp = index + ': ' + val) ? "" : pug_interp)) + "¤" + "\u003C\u002Fli\u003E";
}
    }
  }
}).call(this);
pug_html = pug_html + "\u003C\u002Ful\u003E";
};
var toHtmlList=pug_mixins["toHtmlList"];
pug_mixins["verb"] = pug_interp = function(subject, verbInfo, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.sentenceManager.verb(subject, verbInfo, params);
pug_html = pug_html + "¤¤¤";
};
var verb=pug_mixins["verb"];
pug_mixins["subjectVerb"] = pug_interp = function(subject, verbInfo, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.sentenceManager.subjectVerb(subject, verbInfo, params);
pug_html = pug_html + "¤¤¤";
};
var subjectVerb=pug_mixins["subjectVerb"];
pug_mixins["subjectVerbAdj"] = pug_interp = function(subject, verbInfo, adjective, params){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤";
util.sentenceManager.subjectVerbAdj(subject, verbInfo, adjective, params);
pug_html = pug_html + "¤¤¤";
};
var subjectVerbAdj=pug_mixins["subjectVerbAdj"];
pug_mixins["verbPart"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤¤¤" + "¤" + (pug_escape(null == (pug_interp = util.verbsManager.popVerbPart()) ? "" : pug_interp)) + "¤" + "¤¤¤";
};
var verbPart=pug_mixins["verbPart"];
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
       name: "gemini",
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
       name: "sagittarius",
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
       name: "aquarius",
       planet: "saturn",
       element: "Air",
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
 var House1 = 
   [
       {
           name: "intellect level",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "health",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "appearance",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "beauty",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "character",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "purpose of life",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
       {
           name: "behvior",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                         
       {
           name: "physical comforts",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },        
   ]
 var House2 = 
   [
       {
           name: "wealth",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "family",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "domestic comforts",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "early education",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "inheritance",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "speech",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
       {
           name: "movable assets",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                         
            
   ]
 var House3 = 
   [
       {
           name: "younger brothers and sisters",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "communication",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "intelligence",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "finearts",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "short journeys",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
             
   ]
 var House4 = 
   [
       {
           name: "mother",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "emotions",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "education",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "home",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "property",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "surrounding in old age",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
       {
           name: "vehicles",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                         
              
   ]
 var House5 = 
   [
       {
           name: "children",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "lovers",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "recreation",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "devotion",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "speculation and gambling",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "accumulated karma",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
              
   ]
 var House6 = 
   [
       {
           name: "diseases",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "maternal uncle and aunt",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "litigation",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "servants",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "mental worries",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "foreigners",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
       {
           name: "small intestine",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                         
              
   ]
 var House7 = 
   [
       {
           name: "spouse",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "business partner",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "death",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "respect",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "passion",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
              
   ]
 var House8 = 
   [
       {
           name: "death and longevity",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "obstacles",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "suffering",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "attractiveness",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "inheritance",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "accidents",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
             
   ]
 var House9 = 
   [
       {
           name: "father",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "luck",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "higher learning",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "philosophy",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "guru",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "prosperity",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
       {
           name: "travel",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                         
       {
           name: "deeds of virtue",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },        
   ]
 var House10 = 
   [
       {
           name: "profession",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "status and fame",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "power",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "father",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "mother-in-law",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
              
   ]
 var House11 = 
   [
       {
           name: "friends",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "hopes",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "earnings",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "social activites",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "elder brothers and sisters",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
            
   ]
 var House12 = 
   [
       {
           name: "expenses",
           signEffect: {"aries": "high", "tarus": "very high"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       {
           name: "sleep",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
       },
       
       {
           name: "spirituality",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },         
       {
           name: "traveland pilgrimage",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "liberation",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },
       {
           name: "foreign residency",
           signEffect: {"aries": "strong", "tarus": "very strong"},
           planetEffect: {"sun": "fame", "moon": "peace", "mars": "leadership"},
           
       },                 
            
   ]

 var signsInHouseList = {
      "House1": {
           "aries": "Natives having Aries Ascendant or Mesha Lagna are strong and straightforward. heir actions are marked by a streak of spontaneity",

           "taurus": "People born in Taurus Ascendant or Vrishabha Lagna are known for their stability and cautiousness in life. Slow and steady wins the race is the motto of their life.",

           "gemini": "Life for Gemini native is a series of adventures and opportunities to learn. There is a strong but underlying curiosity in people of Gemini Ascendant",

           "cancer": "People born in Cancer Ascendant or Rising sign are some of the most gentle, compassionate, loving, caring, and nurturing people on earth.",

           "leo": "The tendency to seek attention is common with natives born in Leo Ascendant or Simha Lagna. A regal air and a radiant charisma are there in their personality that others find magnetic.",

           "virgo": "Natives with Virgo Ascendant sign or Rising sign tend to be a little serious and reserved, almost opposite to Leo. They do not prefer to speak their intentions or achievements aloud.",

           "libra": "They tend to be fair-minded, justice-loving, and peaceful individuals. Charming and friendly, they attract people so easily",

           "scorpio": "Scorpio Ascendant/ Rising Sign has a charismatic persona, you can feel their presence. There is an air of mystery about their personality and a sense of strength too.",

           "sagittarius": "Life is one long adventure for Sagittarius rising sign. It is about learning new things, having new experiences, and being optimistic",

           "capricorn": "Along with a serious nature, Capricorn rising are all about ambition, competency, hard work, and status. You are conscious of how you are perceived by others.",

           "aquarius": "Eccentric but so original, radical but oh so innovative, people born with Aquarius Ascendant or Kumbha Lagna are simply unique, and they would keep reminding you that, with their peculiar style sense, opinions and interests.",

           "pisces": "These are peace-loving souls who like to be surrounded by pleasantness. They are very cooperative, flexible, and open-minded. Their personality is changeable, and mood swings are common.",            
      },
      "House2": {
           "aries": "You follow your instincts to create something in the material world. You may aspire for quick gain, strongly pointed energy into matters of self-worth and the value of all things in life. ",
           
           "taurus": "You have the ability to recognize value of all things, relationships, other people, and experiences in life. You may face challenges learn about your own value through series of demeaning experiences",
           
           "gemini": "You will make money in quick, freelance activities. You can profit from writing, journalism, constant movement, oratory talents, or good trading skills.",
           
           "cancer": " You will have a chance to earn from a family business or a private company of your own. You are capable to work from home, or go with the flow and relies on destiny to bring your wealth",
           
           "leo": "You have ability to pose for money and this is often seen in models, actors, and people who have to be theatrical in order to get something for themselves. With a close correlation to your ego, the outcome of every situation links not only to self-worth, but also to self-respect",

           "virgo": "You are rational and capable to fix anything that comes your way. Money comes from hard work, dedication, and attention to detail.",
           
           "libra": " You will gain an individual a sense of self-worth through relationships. You may have lot of material blessings through partnerships or a spouse.",
           
           "scorpio": "You inherit finances left to by your ancestors. You may have to clear debts from ancestors",
           
           "sagittarius": " it is hard to hold on to money or stick to beaten trails to earn it. You may spend too much, as well as earn too much,",
           
           "capricorn": "You may have inability to feel responsible for your own wellbeing, have to be ready to take on all of the responsibility for your life and your financial or material belongings.",
           
           "aquarius": "You need to take great financial risks. You may face full of surprises in all financial matters",
           
           "pisces": "You may overestimate your abilities in certain fields, lost in your true mission and focus towards material goals.",            
      },
      "House3": {
           "aries": "You have fast mind and an aggressive approach to communication. This is someone energized and filled with active ideas, whose mind never stops working.",

           "taurus": "You have great talent to create, is easily incorporated into your daily routine, with ease in taking responsibility and handling dull details that would turn others away",

           "gemini": "You always have a smart approach, clarity in your choice of words, and the same clarity in your mind.",

           "cancer": "You need to build a strong personality and care for your individuality in order to release some pressure from your mind. The main challenge is in expressing your emotions in a practical and acceptable way, and tyou will often fight the battle of reason vs. emotion",

           "leo": "You can become the happiest of all individuals once you learn to accept and nurture your child within, clear on your own desires and goals in life, and aware of your responsibility.",

           "virgo": "You have to develop strong faith and always leave room for love, inspiration and creativity, without digging for rational explanations for every single thing throughout your lifetime",

           "libra": "You can become great thinker and orator, with the ability to touch others and raise their confidence, awareness and clarity. If you become too judgmental, it is usually time for you to make an inner change and build a more satisfying personal life",

           "scorpio": "You manage to recognize the good in all things, it will clear up the fog and help you discover incredible treasures within.",

           "sagittarius": "You are an optimis, blessed by a giving nature and a mind that is always ready to learn. You may get lost, talk excessively, while thinking and talking rather than actually acting in your own best interest.",

           "capricorn": "You cannot detach from your emotional core. Compassion followed by rest is the key to any challenge of this house. If you learn to not take life too seriously, you can be incredible in-depth, practical mentor and a real inspiration for everyone around you",

           "aquarius": "You have an incredible mind filled with brilliant ideas and a rich social life. With liberal expression and a mind turned to alternative ways of reasoning, you make be a innovator.",

           "pisces": "Purity within will allow purity of mind, resulting in purity of words and reasonable life choices. If you practice what you preach, you could discover that magic of life is there for the taking",            
      },       
      "House4": {
           "aries": "You have fiery emotional clarity, speed of decisions and the confidence brought from home and upbringing. Each imbalance here speaks of pain and hurt. You may have to develop emotional nature to the point of self-recognition, understanding, and enough compassion to reach the point of true satisfaction",

           "taurus": "You will have a natural position of care and physical devotion coming from parents. Eventhough it is atraditional or strict upbringing, it always provides with a certain sense of comfort and joy that creates a strong, fixed basis for a satisfying life",

           "gemini": "You may have to be aware of changes, and inconsistencies in emotional state. Since the sign of Gemini is the sign of communication, it carries a risk of a certain lack of compassion.",

           "cancer": "The most important thing a person has to find with this position is the love for oneself and the ability to be gentle, slow enough, and filled with compassion for their own needs. It speaks of closeness",

           "leo": "You may experience warmth, joy, laughter and openness, giving you the sense of personal bravery to engage in any emotional challenge with ease and clarity. You may face certain battle for personal satisfaction that is deeply rooted in relationship with a dominant parent",

           "virgo": "Your genes might give you incredible intellectual strength and strong mental powers that you will be able to use, throughout the life",

           "libra": "You carry a strong basis of your parents’ relationship in your deepest core. Because of your upbringing you will be able to make progress in various fields of life.",

           "scorpio": "You have the strongest ties to family that often aren’t healthy or emotionally supportive. You have to find a way to forgive, forget, and turn to the future instead of staying tied to the past, or to negative emotions that have to be let go. Instead of searching for true unconditional love you must find within in order to be truly happy. Once you find a constant reason to smile, you become the root of strongest emotional connections imaginable.",

           "sagittarius": "With the fourth house in Sagittarius, it is not exactly easy to feel at home, wherever you tries to settle. Your upbringing make it impossible to incorporate your beliefs into the country your were born in. Satisfaction is found through education and traveling.",

           "capricorn": " This is a position that gives you the ultimate faith in the Universe, and a strong connection to God. With a deeply seeded need to take responsibility, you often takes too much of it. Dissatisfaction and the strict regime at your primal home can give a strong foundation for the tenderness and love in the family you create,",

           "aquarius": "With the fourth house in Aquarius, you always seems to be in search for consistency.Your home life may not have been very stable when young, and you had to deal with family strife.  With emotional independence and clarity you will find happiness and satisfaction. You become more innovative, original, and open as you get older, and want an interesting life.",

           "pisces": "Your home and family life has a direct impact on you and how you feel about yourself. It is the image of a parent who wasn’t there while at the same time idealized, giving you a constant feeling of not-belonging, abandonment and distracting, changeable emotions. As you get older, you become more compassionate and imaginative.",            
      },       
      "House5": {
           "aries": "You find joy  in physical exercise and demanding activities, challenges and competitions.You always love to win and feels good as soon as find find the time to commit to an energizing activity. If you truly want to find happiness, you always have to search for it within, with no regard to the outer world and other people. ",

           "taurus": "You enjoy life the most when you’re financially secure and everything is stable. You love to express your artistic spirit through visual arts. You will shine in music, singing or any art.In your relationships with others, you’re altruistic and ready to give everything you have to your loved ones. ",

           "gemini": "You have a love for intellectual pursuits. You are at your best when your incredible mind is being put to work. Therefore, you love puzzles and playing different games that allow you to show your knowledge. You will be a good writer. Not wanting to be too deep about anything, you just happen to go through life without stressing too much.",

           "cancer": "You are ambitious, enthusiastic , flexible, sensitive and artistic.. Having a creative mind, you love to dream. You give  lot of importance to your family because people at home make you happy. You can transmit new feelings through your creations, including feelings of compassion.When it comes to creativity, you are more relying on your intuition, no matter what you may be talented in.  ",

           "leo": "You are Kind, protective and straightforward. You are very creative and express yourself very clearly. You are joyful, as well as confident regarding what you may be doing. you distinguish yourself because you can overcome any failure and deal with any challenge. You love to live their life very intensely and to master any craft. ",

           "virgo": "You are happy when dealing with details and getting things done the proper way, or when having to repair something.You are  analytical and takes care of every little detail, just to enjoy a good reputation. You’re creative and very good when it comes to organization. You are perfectionist and want to make sure everything has its place. You love to analyze and to pay attention to every little detail.",

           "libra": "You need to be with someone for you to come across your inner Self and to have all of your connections flourishing. You love teamwork more than anything else, you’re the best at collaborating and being part of projects that involve many people. You can be very creative, but you need to be told that you have talents if it is for you to start thinking about yourself as good for something.",

           "scorpio": "You cannot settle or be happy with little things in life. You love your ancestors, no matter if these have been appreciated by others or not. Your pleasure comes when you’re doing something recreational or when your emotions are being involved. You pay too much attention to your own emotions and ignore the ones of others. You can be famous athlete and big intellectual. When wanting to be with someone in a romantic way, natives born with Scorpio in 5th House are subtle and reserved.",

           "sagittarius": "You love to talk about philosophy, to travel and to get educated. Most of the time, acting like child and being enthusiastic, you can’t be held back when having a certain direction to follow in life. You’re passionate about gaining more knowledge and being wiser with every adventure you’re experiencing. You’re creative and artistic being with a bright mind and an admirable temperament. You want to study philosophy, religion. You would like to take many risks when it comes to romance, as well to be optimistic about it. You believe your creativity allow you to take advantage of different opportunities coming your way because you love to discover new things.",

           "capricorn": "You can’t stand being in a disorganized environment. You are very careful with what you’re doing, as well as hard worker. You have good managerial skills and can manipulate others to get things done the proper way. You will be successful in teaching profession.You can be truly satisfied when studying matters of spirituality, history, and archaeology,",

           "aquarius": " You will be very happy when functioning in groups, collaborating with others and socially interacting. You love art and contemporaneity. You are original, imaginative and wild, not caring too much about what other people think of you. You are innovative, good with communications and all the time wired to what’s going on in your surroundings. You can come up with the most incredible ideas and make a difference in the world, especially when expressing your personality.",

           "pisces": "You are versatile, straightforward and logical. You want to be creative and to leave your mark, no matter where you may be going because it’s easy for you to express themselves. You are very religious, you can feel the presence of the Divinity because this is giving you strength and is making your life easier.It’s hard for you to explain certain things about yourself because you’re usually getting lost in the details.",            
      },       
      "House6": {
           "aries": "You are kind, compassionate and generous. You can have successful careers in the military or be amazing athlete. You can do a lot during the day, even take care of every little small detail. You’re productive, possess a lot of power and have a lot of inventiveness when dealing with tasks that seem impossible for others. Because you’re more efficient as well, you have a stronger drive than many. When you work is being appreciated, you’re more inspired and encouraged to become successful.You are natural-born leader.",

           "taurus": "You are practical and hardworking and very organized.  peopleYou believe in the balance between work and personal life. Your health is always extraordinary, but you still can get sick if making excesses with food and not exercising enough. when working on something, you’re determined to complete it. However, you are a little bit sluggish when doing anything. You love beauty and art. ",

           "gemini": "You are very intelligent and have a technical mind, so the most challenging jobs can appeal to you. You’re as well friendly and know your way around people because you know how to talk and are very popular. You know how to multitask . You can be of great help when looking to share your knowledge and make the entire humankind cope better in life. You will shine as  analyst, engineer, banker, intellectual writer. It would be better for you to not have a routine because you can’t live a monotonous life where you aren’t able to think.Films and literary works can inspire you to do many great things in life. You’re practical and very realistic ",

           "cancer": "You are vivacious, resourceful and loving.You emotionally attach yourself to your work. You tend to be more worried about your profession than about your personal life. Your moods can greatly influence your days, not to mention you can become too emotional with your routines, just because you’re looking to have comfort by having a steady life. You can be a good doctor, nurse or dietitian.",

           "leo": "You are inventive, decisive and objective. Having high levels of energy,you can put up with any effort. You are more enthusiastic and energetic. This is why you find the most boring tasks to be fun.You are exuberant and happy just like children when you are at work. You need to have a job that’s stimulating your mind and giving you the satisfaction you accomplished something. More than this, you need to do something exciting for a living. You love positions of authority.",

           "virgo": "You are encouraging, active and clever. You are precise at your work, so the results of your efforts are usually of high quality. You are  practical and don’t pay too much attention to your personal life. You will shine  as healthcare worker. You are very careful with the way you are doing your job. You think the process of doing something is more important  than the results you are achieving.",

           "libra": "You are kind, confident and affable. You will work as beautician, artist, lawyer or judge.You can cope with what the collective is doing, so you are most of the time achieving success when supported by others. This is why you are the best at teamwork. You are most of the time in intellectual environment, so you can be friends with pretentious individuals.",

           "scorpio": "You are easy-going, reasonable and determined. You work hard  to make all of your dreams come true and become successful. You love putting your ideas into practice and starting new projects from zero. You will be a  banker, insurer or in forensics. When working, you are giving yourself completely, so you are flexible and very resourceful.Because you are analyzing every little detail with care, you will shine as a researcher.",

           "sagittarius": "You are meticulous, confident and liberal. You can be an amazing writer, travel agent or teacher.You think that when serving a person, you are helping everyone.You believe in the power of healing and always think positively.You ready to work for others without expecting anything in return because this way, you think the entire humanity is being helped.You love relaxation and to be surrounded by joy, so you are sharing your enthusiasm with just about anyone.",

           "capricorn": "You are so focused on your goals and concentrated, you are very likely to do the tasks you are supposed to very fast. When it comes to opportunities, you love to seize them, as this can make you express your ideas and life philosophies more practically. You can be too serious when it comes to your career.When working, you like to invest all of your efforts and to do the best job. When it comes to what you are doing at work, you are incredibly responsible, also focused on what you have to do and determined to succeed.You know how to organize and to work hard better than others",

           "aquarius": " You are clear-headed, tough and practical. You can be great scientist, technology innovator, and inventor. You are looking to contribute to mankind by uniqueness. You know everything about the dynamics of groups in a work environment, so you are the best when it comes to cooperating. You love being involved in humanitarian actions, being creative and coming up with all sorts of original ideas.",

           "pisces": "You are thrifty and charming. You  like  to help other people and can be very spiritual individual. You can be  great artist, either in the music or the visual fields. Your intuition is always helping you to function well as leaders.",            
      },       
      "House7": {
           "aries": " You can lead others to achieve their goals, in the most subtle ways. You are known to respect the law and to fulfill their commitments. Your main purpose in life is to never be weak.It’s in your nature to be fearless. As far as love is going, you like a person who’s always ready to stand by your side. You are a little bit inconsiderate and too focused to do only what you want when you want it.You are likely looking for a partner who is always active and ready to respond to what you are doing and to challenge and stimulate you because you have many interests and curiosities.  You may get married unexpectedly and at a very young age.",

           "taurus": "You don't like rushing and prefer to adopt an attitude that’s taking you to the finish line in a slow manner. You are gracious, curious and optimistic. Your dream is to be with someone who wants to stay by their side, no matter the times. You are looking for stability and devotion in a partner. Your money is usually spent on beautiful and qualitative things. ",

           "gemini": " You see communication as a key to any situation at hand and closeness is reached through conversations, people are met at social gatherings. You are bright, charming and vivacious. When interacting with others,you want to have a meaningful connection. You believe it’s important for people to use their mind, and this can be seen in your social life as well. You want to   have a partner with whom you can share all of your ideas.  You want a partner who can stimulate your mind. You are looking for a partner with whom you can discuss anything and exchange information.",

           "cancer": "You are very sensitive to everyone you care about.You are eloquent, opinionated and easy-going. you want to be with someone who has many emotions and who’s always there for you. More than this, you want your lover to be loyal and to have many feelings for you.You  are very attached to the person you are sharing your life with.If working in teams, you are reserved, careful, gentle and caring.You are strongly connected with your spouse, especially from an emotional point of view. You can create an ideal environment for the people you love the most",

           "leo": "You have leadership abilities that shine bright even in your relationships. When it comes to marriage, you are as organized and good at managing your time, just like you are in your profession.You don’t have a problem accepting yourself because you are simply okay with who you are. You are adventurous, persistent and curious. You want a strong partner who’s allowing you to be the star. You tend to go for a lover who like you for who you are both inside and outside. It’s very likely for you to be in control of your relationships because you are responsible. You are great intellectual who are looking to gain more knowledge in life. You have a powerful influence through your personality, so your connections with others are usually dominated by you.",

           "virgo": "You are  like an individual who can work towards success and are very practical when it comes to implementing any program. You are certain about what you have to do. When having to fulfill your obligations, you are scrupulous and believe others are too.You are warm, methodical and confident. You tend to think others are like you. You don’t have the necessary patience to understand others have their own emotions. You can be an  amazing teacher and mentor . You are attracted to practical individuals who are looking for perfection just as much as you do.  Most of the time you get together with hardworking and loyal individuals. You can charm anyone with your problem-solving abilities.",

           "libra": "You are flexible, confident and liberal. You are caring and possess a lot of affection, so others are immediately attracted to you. You are able to separate social life from the personal one without bringing any damage to the heart.You usually have strong relationships with the smarted and most beautiful people. Your marriage is usually based on intelligent conversations.You  have all the chances to become good leader.You have a natural ability to choose those who mirror your core personality.",

           "scorpio": "You are persuasive, ambitious and generous. You want to spend your time with influential and creative personalities, so you are choosing a partner who has a lot of power and an active life. You are fascinated by power and a good reputation. This is why you want to be with someone who’s energetic and has enough creativity to achieve anything he or she wants.",

           "sagittarius":" You are resourceful, disciplined and affable. You give a lot of attention to ethics, religion, and philosophy, especially when connecting with others. Good luck seems to follow you everywhere in your relationships, so you shouldn’t worry that much about what’s going to follow in your connections with others. You are attracted to people who are like you, no matter if it’s about romance or a simple friendship.Your development and the methods through which you are gaining knowledge are highly important. The more you are passionately sharing your knowledge, the more you are building healthy relationships that have the spark you need.",

           "capricorn": "You are cautious and restrained when it comes to relationships. You are determined, hopeful and thrifty. In intimacy, you are consistent and know what you want, so you may decide to be with someone who’s strengthening your spirituality and is helpful from a financial point of view, also who can help you climb the social ladder.You are driven to succeed, no matter if you have many ambitions or not.You are looking for a partner who can help you make your dreams come true. You love it when your other half is taking the initiative and when you are being encouraged to succeed yourself. You are striving to achieve success, a good social status and be well seen in the society, for your skills and achievements.You can get married later in life because you are looking for someone mature to be with you.",

           "aquarius": "You are truthful, methodical and inquisitive. You know how to trust and to have respect for your partner, not to mention you are more like very good friends than just lovers with your partners. You are looking to have a partner who’s involved in humanitarian actions or is affiliated with groups that are helping the less fortunate. You have a philosophical connection with life. You love being with wise people who have many ideas. When cooperating, you don’t focus on solving a certain problem, but more on how the plan for finding a solution has been developed.",

           "pisces": "You are dutiful, relaxed and loyal. You are often helped by your partners to explore new territories and to be more understanding or emotionally involved. Because you have a good soul and a rich imagination, it’s likely for you to be drawn by those who are the same. You are looking for a sensitive partner and have many strong feelings. Besides, you need someone to calm you down when you are too agitated.",            
      },       
      "House8": {
           "aries": "You are punctual, uncomplaining and thorough. You want to serve others, but you are only doing this to show others what you are doing and what you are involved in. You are most likely taking the lead when having to make financial decisions and to invest, to pay taxes and to inherit wealth.You will have many sudden changes in your life. You are aware of how strong you are, not to mention you can determine how difficult a situation is, meaning you can overcome any problem without creating more responsibilities for yourself. You can be impulsive when arguing or defending yourself.It’s in your nature to believe in openness. While skilled at giving advice, you don’t like it when others are telling you what to do because this makes you feel offended.",

           "taurus": "You are methodical, wise and compassionate. When working in groups, you are investing in many efforts. In case you adapted to the group of which you are a part of, you become more ready to defend the views of your community, steadily and vigorously. In searching for the absolute Truth, you like to study disciplines like astrology and religion. You have very high ideals and morals. You are  investing all of  efforts to respect the ethics of the team, so it’s difficult for you to find the balance between the needs of the many and what you want.",

           "gemini": "You are patient, respectful and insightful. You are curious about what’d beyond reality and interested in mysteries, you don’t mind discussing problems that are difficult to grasp. When having to deal with more extreme situations, you actually become more artistic and fun than usual, which can help you develop your mind even further. You are naturally curious about life’s mysteries. You like to gather as much information as possible about  and to make an analysis.It can be difficult to understand you  because you have a complicated mind and can’t reveal anything about yourself and the changes that are all the time happening in your thoughts.You can go through transitions without worrying too much because you are always sober and can solve any major problem.",

           "cancer": " You have inner need to accomplish something special in your life, so that you can be remembered for that even after you have passed away. You are perceptive, gritty and honourable. You are both optimistic and reserved at the same time. When having joint financial accounts with a person, you are  the one who is taking care of the money because you don’t want any crisis to appear.When it comes to discussions about  death, you are extremely sensitive because you want to be remembered as loving and caring people, your businesses to continue to grow and the ones you are leaving behind to have a comfortable life.",

           "leo": " Representing longevity and healthiness, You are energetic, assertive and courageous during most of your life. You are resolute, intuitive and industrious. As far as extreme challenges are going, you are very impressive when dealing with surprises coming from both those who surround you and even yourself.You have very high and clean standards, not to mention you are behaving most nobly. You have strong ethics and the desire to be submissive to the collective will. You will study sciences that are all about what’s beyond the material. It’s unlikely for you to be scared about death, but this doesn’t mean you are not serious to live your life in a disciplined manner. You just want to feel that you are living.",

           "virgo": "You are ambitious and nurturing. You are concerned with your health and worry about death, so you are all the time looking to keep in good health. You also avoid accidents and risky situations as much as possible. You must be clear when it comes to saying what you are expecting so that others don’t misunderstand you and know what services you can provide.You are always looking for the Absolute Truth and are curious about metaphysics or astrology. You are humble and can admit when you have been wrong.You can be amazing leader and manager,",

           "libra": "You ae intuitive, energetic and thrifty. When changes are taking place in your life, you are objective and flexible, as well as trying to adapt to what those around you are asking of you. You are diplomatic and know what’s best for both you and others. You can obtain the balance you need when supported by your partner, and you need all the time to be emotionally sustained. You are looking to become more powerful through your connections with others, so you have a very strategic mind. You don’t want others to manipulate or control you, so  you are always defending your emotions and do your best to not get hurt.",

           "scorpio": "You are resolute, open-minded and energetic.Feeling strong about religion and having a well-implemented philosophy based on what you experienced, you are becoming stronger when having to face some of your fears. You are always ready to make a lot of effort for your dreams to become a reality. You are aggressive and at the same time tactful. When working in teams, you gain the respect of others, especially when you are talking about ethics. Besides, you are truthful and not afraid to express what goes through your minds.",
           
           "sagittarius": "You are purposeful, efficient and rational. When important changes are taking place in your life, you  are enthusiastic and no scared of the new challenges, even if you are superficial when assessing and regretful afterward. You are especially interested in philosophy and religion, as well as death.  No matter what, you still believe there are good people in the world, meaning you bring a lot of good luck wherever you are going.The generosity and optimism of you with this aspect are bringing you everything you want in life. You have the determination to show others you are big intellectual and that no one can be smarter than you. You need to admit that you are often using your intelligence to protect your emotions. You play an important role when it comes to adapting what you know to what’s in trend and what is going on in your surroundings.",

           "capricorn": "You are honest, forgiving and active. You are very responsible when it comes to money because you hate being in debt and losing your finances. More than this, you are ethical about finances, so you don’t want to cheat or to commit fraud. You are usually authoritative when it comes to money and material resources you are sharing. You know how to save and to spend others’ material resources. This is why you are working as accountant or banker in big companies. Your main issue in life is making order between what you perceive as materialistic and your spirituality. When dealing with trouble, you are extremely courageous.",

           "aquarius": "You are very spiritual and you embrace spirituality with ease.You are approachable, supportive and affectionate. You  have an amazing view on life and want to discover all of its mysteries. Besides, you are  spiritual and independent with your ideas.Your head can be filled with ideas on how to help yourself make some more money with the help of technology. you love raising money for humanitarian causes and different orgaizations. ",

           "pisces": " You are aware of the fact that we only have one life to live for, so you don’t spend too much time thinking about it. You are focused, efficient and thrifty; You don’t care that much about joint finances. You can feel too guilty if you aren’t making personal sacrifices when sharing. This is why you tend to lose when inheriting wealth.When it comes to you interacting with society, you are very diverse in behavior.",            
      },       
      "House9": {
           "aries": "You are courageous, diligent and loyal. You are a true visionary, who is dramatically expressing your creativity. You enjoy exploring and don’t mind making interesting plans for yourself and others. More than this, you are optimistic and always feel like you can do anything in life.The actions that inspire you the most are the ones aligned with your thought philosophy and spiritual ways. You are sensitive to philosophical views but don’t like when others are trying to impose their opinions on you. You intensely believe in your future, no matter the circumstances you are in. You are  enthusiastic and always ready for action, as well inspiring for others. You don’t need to think of what’s worthy of your efforts or not because you can accomplish many things without analyzing things so much.",

           "taurus": "You are friendly, approachable and valiant. You love to travel and are strongly connected with mother nature. You can identify the direction you need to follow in life by taking your time. You need to insist to go at your own pace and to not allow others to impose their speed on you. You are surrounded by people with strong principles. Your creativity can help you become more knowledgeable and launch new ideas into the world.",

           "gemini": "You are logical and careful when choosing your path in life. Besides, you are pragmatic, no matter what’s happening to you. You are encouraging, spiritual and reliable. You love addressing philosophical subjects and talking about religion. This is why you are the best at discussing social subjects. Your main purpose is to gain more knowledge and to look smart because you are true intellectual with a powerful spirit and great ways of communicating. You like to study and to travel because this way, you can learn new things about other cultures. Besides, your mind needs to be constantly stimulated.",

           "cancer": "You are talkative, thrifty and pragmatic. You have strong emotions and are quite steady in your religious or philosophical views. You are rarely changing what you believe in because you have accumulated your knowledge through the years by interpreting and accepting new ideas.When it comes to family, you are completely dedicated and want a strong connection with your loved ones. You like traditions and appreciate every family value. Regardless of your education, you are always trying to teach your children what’s best.If disagreeing with someone, you can feel truly uncomfortable and experience many emotions, sometimes to the point of great suffering. You will be a good teacher.",

           "leo": "You are considerate, modest and talkative. You love traveling,  Not seeming to want any fame on the outside, your subconscious and philosophy are focused on having you become someone important. You are powerful inside and  very focused on the future.You love discussing everything about the personality of people, with both strangers and your best friends as well.You strongly believe in yourself and are confident in your forces. Having a love for learning and traveling, you are not the type to stay in only one place for too long. you are imaginative and artistic, also preoccupied with matters of the mind and interested in knowing the Absolute Truth. ",

           "virgo": "You are rational, focused and articulate. The philosophy of you is only about working hard. You rarely come up with abstract ideas. Your view of the world is always established through events that are taking place and facts. You are talented with literature, so you can be  writer. Nice with others, you are also empathetic and all the time ready to give a hand.",

           "libra": "You are diligent, flexible and confident.You like traveling for pleasure and to be accompanied by your loved ones. You simply love going to new places, but you need the assurance that you are going to meet nice people and that your surroundings are comfortable. You can be amazing professional in the fields of Law or counseling. You know how to be fair and what justice means, so you demand that everyone is treated equally. You simply love learning and know you should all the time be at your best. You have a good intuition. You like  someone who has an open mind and is intellectual as your partner. You study astrology and are curious about numerology.",

           "scorpio": "You are courageous, integer and balanced. You  are a true fighter for religion and philosophy, so you don’t hesitate to engage in debates on these themes. This is because you love to talk about justice and how others see the world, not to mention you are very curious about what’s happening around you. You  are intelligent, ready to stand on your own two feet, motivated to succeed and powerful. You can be a  doctor, lawyer or educator. You love to research and to discover the true essence of things.",

           "sagittarius": "You are logical, resourceful and independent. You can be pressured by society, as in your subconscious, you are trying to expand your horizons. Your favorite way to spend your free time is by traveling and doing research. You have an open mind and want to explore the most intellectual subjects. Being a natural teacher, you are  all the time looking for opportunities to shape mind and to share your knowledge. When going to new places, you are adapting to the new beliefs found there and feel empathetic for the people. When it comes to your writing skills, you are rather mechanical, so you can easily write scientific or engineering papers.",

           "capricorn": "You ae devoted, attentive and cheerful. When having to help someone, you don’t hesitate to do it without expecting anything in return because you are truly charitable person. You will always strive to be reliable, to persevere and to have a purpose in life. More than this, you  can overcome any difficulty in life. You are conservative and prefer to respect rules. You are  good organizer and you  can be the perfect leader .It is important for you to have an open mind and to study more than one discipline, especially those that are connected because knowledge can make you feel more secure and you want security in your life more than anything else.",

           "aquarius": "You are very inquisitive about new cultures, You are open to other people’s points of view. You like to hear new ideas and to be intellectually challenged because this is making you think even more progressively. You can learn a lot by studying symbols and decoding, so you are  good as astrologer, mathematician or programmer. You want to believe in God, but your scientific mind can sometimes be in the way of this. You are intelligent, friendly, innovative and imaginative. You can work as travel guide or writer. You are great philosopher and love to discuss religion, but your views are not the most orthodox ones. For this reason, you can have the most progressive thoughts and can rebel against the strict religious leaders.",

           "pisces": " You are independent. You can study anything you want, from philosophy to mining. The most important thing for you is to keep your eyes open and to follow your passion. Only this way, you can leave your mark into the world and become someone. Giving a lot of importance to your beliefs, you don’t hesitate to use them in your everyday life. Because you are soft and caring, you can be amazing teacher and very good as healer.",            
      },       
      "House10": {
           "aries": "You are confident, orderly and vivacious. You are ambitious, energetic and a little bit aggressive. In your life, you may have to go through many difficult periods, yet you are not complaining or even saying that you are being treated unfairly. When it comes to you being employee, you are nice and easy to deal with. You have a lot of self-esteem and can become even more ambitious when someone is criticizing you at work. You may want to be reserved when it comes to other aspects of life, but when it comes to careers, you are not afraid of anything. You can be successful in commerce, advertising or the work with the public. You possess a lot of energy and can follow any of your dreams. You can have a lot of success as commercial agent, advertiser, and public worker. But for these things to happen, you need to have a balanced life and to pay attention to yourself.",

           "taurus": "You are optimistic, versatile and confident. You are more inclined to become artist because you like painting or making music. Because you want your image to be as glorious to others as you are seeing it, you want to keep a high standard of life. What you want the most is to be different from the crowd and to lead. You respect yourself too much, not allowing others to behave any other way. Regardless of your other placements, possess a lot of energy and want to follow any path in life, so your goals can be many. Paying a lot of importance to tradition, you are always ready to put in practice what your parents have taught you.",

           "gemini": "You are patient, responsible and wise. When it comes to work, you are very good at transmitting your ideas and talking about what you are thinking of. More than this, you  have a lot of energy and could be great at two or three professions. It can be said you like a lot to communicate and to be listened to. You can adjust to any situation or person. You can be happy in any environment, not to mention how curious and able to learn you can be. Your mind is an endless source of solutions to problems, even if you sometimes forget about what truly matters. You are easily getting bored, so you need to be active at your job, as well as to have your mind and hands put to work.People love listening to you, so you can become great politician or mentor.",

           "cancer": "You are straightforward, articulate and adventurous. You aim to build a family like the one in which you grew or like you image you idealized when growing up.When it comes to your professional life, this is connected with your feelings, so it’s not unusual for you to have a home-based business or to just stay at home and take care of children. When it comes to your relationships at work, you like developing them and interacting with the large public. This is all because you are able to sense what others need and wish for. you can be good teacher and can show others, especially the young ones, how to manage in life. You give a lot of importance to tradition and your parents may want you to achieve too much in life, which can have you doing the exact opposite and not aiming for a stable career.",

           "leo": "You are logical, wise and inventive. You have a tremendous ambition when it comes to your career. You are amazing leader who can dominate in a professional setting because you have a big ego and are interested in building up a good reputation for yourself at work. Any position of authority seems to make you want more because you always want to be in charge. More than this, you don’t like working under other people, you would like to have own business.No matter what you are doing, you try to show your domineering position and to prove you are strong, also the one meant to rule. When it comes to the way you are expressing yourself, this is done only through your leadership skills. It’s good you can appreciate the value in others because this makes you a good ruler, but you need to all the time be praised and appreciated. You stand out from the crowd through your presence. You could be a great politician, not to mention you can make all of your dreams come true.",

           "virgo": "You are affectionate and punctual. You  enjoy helping others. When it comes to your career, you want something stable, it’s not unlikely for you to collaborate with big corporations or to be members of the government.You can follow your dreams and at the same time to focus on routine. You are analyzing when it comes to understanding the world and yourself, You can have a successful career as scientist or writer. You can also decide to become teacher or researcher. You are very organized and can’t live in chaos because this would make you unhappy. No one more balanced than you , when it comes to work.",

           "libra": "You are tolerant, reserved and steadfast. You may choose a profession in which you need to collaborate with others frequently. Your professional success is usually balanced because you are diplomatically addressing any issue. You are diplomatic, tactful and loyal. You are meant to succeed, no matter what you are doing for a living. You can  become politician, marriage counselor. Some other careers in which you could be successful are design, law, politics and public service. You can inspire others to be in trend and to remain honest. More than this, you feel comfortable when helping others succeed. You need a partner to help you climb the social ladder.",

           "scorpio": " You are clear-headed, confident and meticulous. You are very determined to succeed in your career. You are  motivated to keep going, no matter what’s going on in the professional field for you. You seem to have enough confidence in the world surrounding you, not to mention how committed you are to win at everything. you could be successful as scientist, psycho-analyst and alternative healer.  As soon as you have decided to follow a certain direction, you can do almost anything to stay on the same path. When it comes to what you need to do, you must keep your individuality and become neutral. However, you can develop an obsession with your professional life and dedicate your entire time to achieving something in your careers. You always have  own opinions and can lead others with a strong hand. It would be a good idea for you to choose a career in the medical field or to work with the public. ",

           "sagittarius": "You are friendly, witty and charming. You are rather philosophical about your career. You are not measuring your success by how much power you have, but by considering how satisfied you are with your job. You can work without becoming easily tired, meaning it’s a piece of cake for you to climb the social ladder. You are likely choosing a job that involves traveling. When facing a problem at work, you prefer to see it as a challenge. you believe in progress and think it’s essential for life, which is supposed to be simple.  You are passionate about learning new things and discovering the Absolute Truth, these things greatly influencing your professional life and social status in good or bad ways. You want a job in which you can be independent and travel, as well be intellectually challenged. You like helping others and don’t mind working hard. You are very good at writing, especially on the subject of philosophy. You can be great a scientist and a writer.",

           "capricorn": "You are gregarious, frank and captivating. You are ambitious and have a clear mind. You have a better grasp over reality and what this brings, not to mention it makes you see what is wrong and what is right, especially when you are being responsible. You are very careful as far as your career is going. More than this, you are  dutiful and committed to obtaining recognition from others. You want to be powerful and to have a good social position more than you want money. You are very ambitious. When it comes to your career and what you want to achieve from a professional point of view, you are powerfully influenced by your desire to become someone in life.  you can decide to be business owner, politician or nurses for the elder.",
           
           "aquarius": "You are encouraging, resourceful and logical. You are original and adopt the most innovative ideas when it comes to your career. Besides, you want to be free and to make changes in your place of work. You love working in teams and sharing your good ideas. It can be said you are very good in professions that require you to interact with the public. When it comes to your goals, you are known to work hard to achieve them. At work or in public, people know you as original and innovative, as you are very individualistic and focused on building a good career for yourself. You can be programmer, scientist, humanitarian worker or inventor. You can do something unusual, like researching what hasn’t been studied before. ",

           "pisces": "You may go through very difficult times when trying to choose a profession and to settle with it because you have many ideas and are always wondering what to go with. You are committed to your ideals, so you can make many changes in your professional life. Romantic and almost all the time dreaming, you know how to use different methods to advance in your career, but you are not at all practical. You may have difficulties deciding on a career and the path you want to follow in life. You can be a spiritual guru, astrologer, and artist. You can be amazing writer or musician. If you are a female you don’t mind staying at home with the children because this doesn’t bore you and you may decide to open a home-based business.",            
      },       
      "House11": {
           "aries": "You are loving, tolerant and straightforward. You are all the time looking to meet new people. You are  enthusiastic and inquisitive, you can attract many people. However, when it comes to friendship, you are impulsive and can get together with different people if feeling bored. In groups, you are the one taking the lead and establishing new connections. You are open and able to get along incredibly with anyone, not to mention you can convince many people to help you. You are all the time looking to make new friends, so everyone sees you as sociable, even if you are forgetful when it comes to your closest connections. For this reason, you are always hurrying to change the company and aren’t late to spend your time with the new groups. You are easily making friends, but not for the long term. ",

           "taurus": " You are disciplined, sociable and sincere. You are usually focused on obtaining financial gains from your social relationships. When it comes to the way you are collaborating with others, you are always calm but determined to succeed. Your friends and colleagues usually want to be in your life, even if you are rarely agreeing with others or may not have any purpose in a team. You are famous for the way you are saving, for your composure and the way you are approaching business. It would be a good idea to ask you for financial advice. You can be very attracted to what’s in trend. For this reason, you may use things and buy different items when your loved ones are telling you to. You like to check people thoroughly before making friends with them. you want to have valuable opinions in your group of friends, as well as influence.",
           
           "gemini": "You are pioneering, amicable and captivating. You are only making friends with inventive and smart individuals because you need new ideas to become more powerful. You are advocating variety and are intellectually stimulated by your friends. It’s easy for you to form connections because your personality is helping you win, not to mention you possess a special magnetism.The inspiration for you come from the ideas of your loved ones.As far as your communication is going, this is also influenced by your group of friends and on subjects about what humanity needs. You are easily making friends and want to be part of many adventures. You can find many subjects of discussion when meeting with others. You are rarely staying with one group because you are provocative and looking to have debates. You are methodical in your way of thinking, values, and beliefs, even if vain. You need to show others how big intellectual you are because this can attract you many friends. Almost all the time, you are too enthusiastic when participating in group events. You can become very successful when interacting with the public, but also in your career or personal life.",

           "cancer": "You are insightful, exuberant and clever. You can’t easily make friends because you are reserved, but you are most of the time holding on tightly to the ones you already have. Your intuition is strong, not to mention you trust many of your loved ones. More than this, you are strongly attached from an emotional point of view, also to the groups you are a part of. You always look to obtain emotional nourishment from your closed ones, as well as help and protection. Your intuition is strong, so you can solve many life issues. You love being like family with friends. For your friends, you are very valuable.",

           "leo": "You are punctual, spontaneous and intelligent. Because you are open and always happy, you are also the life of every party and the best negotiator. Many are coming to you to have their issues solved, not to mention you are funny and always looking for honesty. You are making your dreams come true with the help of your friends. You love being leader and to shine in groups, so you have many acquaintances and a few devoted friends. Your dream is to shine in public and to be praised. You are full of yourself, also always ready to make others happy.When bad things are happening, you prefer to not be the ones to blame. Your friendship is valuable because you are optimistic and fun.You can recognize your abilities with the help of others, but you can sometimes be too controlling.",

           "virgo": "You are resourceful, courageous and creative. You love to exert yourself for your loved ones and those in need. You usually make many friends at work and make use of your colleagues’ ideas or talents. When not motivated enough, you are looking at your friends and people in your circle of friends to become more determined and to make your plans more successful. More than this, you want to give a hand to others to feel better and to have an appropriate social life.When someone dear to you is in trouble, you immediately look to give a hand and to solve any issue. You have many friends and can easily collaborate with all of your associates, meaning you are the best friend someone could have.When it comes to interaction, you don’t want to be in large groups because you prefer spending your time with a few friends you have known for years. you simply love animals and devoting your time to social and humanitarian activities. Your personality is one of a great leader.",

           "libra": " You are charming, versatile and warm. You simply love your friends and want to spend as much time in their company as possible. You are often getting to achieve your objectives by collaborating with beautiful, smart, elegant and creative people who have managed to build a good life for themselves.What you want the most is for your loved ones to be independent and to have good tastes. You can easily stay connected with your friends and colleagues for a lifetime. You like to be friends for the long-term before establishing a romantic connection because you want a friend as your partner. Your relationships are harmonious, so you can solve any conflict and obtain many benefits afterward, not only for yourself but for others as well. When in groups, you usually have an authority position and can work with others to have your interests satisfied.",

           "scorpio": "You are charming, reserved and clear-headed. You want to be alone with your thoughts most of the time.You have a deep emotional perception. You don’t like to deal with imperfection and are very corrective. For you friendships  are for life and deep, difficult to achieve and very fulfilling. you want to collaborate with others because this way, you can be deep and true. Your friendships are intense. You could talk about  emotions and reveal your secrets to your best friends.You don’t like intolerant people and being criticized. You are sensitive from an emotional point of view.",

           "sagittarius": "You are optimistic, practical and inventive. You want to be around positive and respectable individuals who can inspire you to achieve great things. For this reason, you have many friends and are members of big groups that can help you develop from a personal point of view. You are loved by others and good leaders, not to mention you have the talent of making strangers feeling like your best friends. More than this, you are relaxing and authoritative. This is why you have no problem making your dreams come true, even if you sometimes can’t decide what you should do first to start working on your plans. You are optimistic and confident in what’s going to happen. This is why you are so good at starting new businesses and highly ambitious.Good luck will follow you everywhere. It is  easy for you to make friends for the long-term.",

           "capricorn": "You are prudent, versatile and friendly. You  pay a lot of attention to what friends you are  making because you have a suspicious mind and don’t want to reveal yourself that much. You are practical. When collaborating with others, you are more productive and ready to give your best. You are great leader because you are focused on your objectives and accomplishing them. However, you can ask too much of your colleagues and associates because you are looking too much to attain the Absolute. Everything you are doing with others is usually helping you improve your professional life and gaining more authority, so it’s not unusual for you to be involved in humanitarian actions and to be part of different charitable organizations. You are most of the time great mentor for the young, also very capable to obtain the most interesting results in your professional life.",

           "aquarius": "You are meticulous, loyal and energetic. You have many friends from various circles of life. The ones you like the most are fierce and motivated to succeed, as well as fascinated by the way you are motivated and by your ideals. You also have a group of free-spirited friends. You are  innovative and true revolutionarian  when it comes to having new ideas, meaning you can become famous computer scientist. For this reason, you could have a great career as artist and revolutionize industries, building up a good reputation for yourself. For you, there’s nothing more important than having good friends and innovating in the world so that it becomes a better place.As far as your connections with others are going, you are interested in what’s new and out of the ordinary. You can make logical decisions and be productive when working hard to make your dreams come true.",

           "pisces": "You are pioneering, subtle and vivacious. You are compassionate and always giving with your loved ones.You are extremely devoted to everyone you love, like the only partner or a soulmate can be. When friends with someone, you give yourself completely, regardless of what you need to sacrifice. Your inner strength is love and your relationships. These are the things that simply get you out of the most difficult situations. You can combine wisdom with emotions in the most balanced manner. Not too intimate, you prefer to keep people at a distance. What you need to do the most is letting yourself sink in your connections with others, as well as not fear you are going to get betrayed at some point. When your friends are at sea or somewhere in a different land, you can still share your emotions.",            
      },       
      "House12": {
           "aries": "You are impulsive and stubborn, which can cause you many problems, together with your boldness and your rapid decision-making. You can be a perfect leader. More than this, you have a lot of energy and can assert in any situation because you believe a lot in yourself. If surrounded by others, you can change your behavior, and your inner strength is being envied by everyone. You have a very active subconscious.  Because you want to succeed no matter what, you can compete in the strangest situations. Your actions are of compassion, not to mention you have an increased sensitivity to Nature. Intuitive and always energetic, you are all the time paying attention and your actions are of reflection when it comes to interacting with the people around you.You need to be careful when choosing your career because stress can influence you in the worst way. You can encounter problems when trying to set your boundaries.As more time is passing, you can learn what it’s like to follow your passion and to have your rights instilled through fighting. During these moments, you may express yourself too loudly.",

           "taurus": " You are decisive, creative and determined. You seem to have less stability. You can be influenced by what happened in your past, not to mention it’s difficult for you to accept change. More than this, you are unconsciously insisting to have things done your way and to obtain the possessions you want in life. You are not at all selfish and very sensitive to the pain of others. You may want to receive everything you need when you need it, which can make you less consistent. Spirituality can bring you all the harmony you need inside.  You are worried and anxious when it comes to money and what turns life is going to take. You need to have as many possessions as possible because only this way, you can feel secure and sure of yourself.For these reasons, you may work very hard to make your loved ones feel secure and have everything you need. When it comes to your generosity, you want to give away almost everything you have.",

           "gemini": "You are wise, organized and attentive. You can’t use your energy efficiently when working in teams and express yourself best when on your own. You are struggling to rarely show what you are feeling. You are keeping secrets and hide everything about what you are thinking into your soul, which can be very advantageous for you.Certain events in your life can open some extrasensory talents of yours. In such situations, you should make an effort to develop these talents of yours because it can be beneficial for you. You are very intuitive. When acquiring new information, you can use the subconscious mind and make new insights appear. You are thinking is greatly influenced by what you see as important when it comes to the survival of your surroundings.This is why you should study psychology or choose it as a career.",

           "cancer": "You are playful, friendly and dependable. You are  never affected when others are criticizing you, but your moods and emotions can bring certain vulnerabilities when it comes to your behavior. You are attached to your family. Your life purpose is to have a home, a place where you can be alone and communicate with those you love the most. You are less selfish when you are offering help without expecting anything in return. Your purpose is to be more emotionally aware and intelligent so that you can care for others unconditionally and react accordingly. You can have healthy relationships with your loved ones and heal yourself on the inside, in a profound manner. You can be too sensitive from an emotional point of view, also able to feel other people’s feelings. You are rarely talking about your emotions.",

           "leo": "You are strong, compassionate and decisive. You  are incredibly strong but not showing it until challenged. The profoundness of your power is unconscious. When it comes to your weaknesses, you are too proud and egotistical. However, you have a sensitive soul and are empathetic, not to mention you are capable of gaining the attention of others and as well make others shine.It can be said you are more comfortable when not in the spotlight. You ae very strong on the inside. When it comes to family matters, you are the ones to take care of any important problem, but you are hiding this positive trait as well. Usually lonely, this is a positive trait of yours because you can come up with the most inventive ideas. You can be devoted to what you love doing the most and invent new concepts for anything you are accustomed with.",

           "virgo": "You are hard-working, attentive and principled. You can focus on every little detail and the things others are not paying attention to. When working to make your dreams come true, you can be very disciplined and develop the most ingenious plans. You can judge others too much, not to mention you can think for too long before speaking. You tend to give up on yourself to make others feel great.As far as spirituality goes, you can be tireless and look to improve your consciousness. For this reason, you can express yourself through art and strive to achieve perfection. You can be the inventor and the solver of the most complex matters, those that seem unsolvable for others. You are doing these things after analyzing every little detail of a matter, which can have you advancing at work or making more money.",

           "libra": "You are friendly, trustworthy and reliable.  You give a lot of importance to marriage and personal relationships. You are very careful when forming relationships. You are very  sensitive person. Therefore you need partners who can awaken you from a spiritual and emotional point of view. You want to be alone and to care for yourself because you hate depending on others. When it comes to your partnerships and your career, you are somewhere in the middle. You have your life improved when acting all alone because then, you can come up with new philosophical ideas that can make important changes. However, you need to be less fascinated with the material side of life and to wish more to serve humanity. Only in this situation, you can become as prosperous as possible.",

           "scorpio": " You are emotional, challenging and ambitious. You are very resourceful, but not all the time showing it. You can see value where others can’t. You can simply explode in strange ways and be involved in the weirdest situations or conversations. You may think it’s challenging to be so in tune with everybody because it can be difficult for you to discriminate what emotions are yours and which are of others. Your most amazing gift is being able to identify the strengths and weaknesses of others, which can have you excelling no matter what you may be doing, as well as understanding different characters or tastes. You are lonely, even when interacting with others from an emotional point of view. Because you don’t know too much about feelings, you can end up being the victims of your mind. You should make efforts and work with your personality when addressing the problems in your life, as this will help you gain more inner strength and uncompromisingly assess things.",

           "sagittarius": "You ae compassionate, attentive and tolerant. You are curious about what other people are believing in and how they are leading their lives. When with your loved ones, you are amusing, kind and fun. You can be so hardworking and focused sometimes that many can perceive you as grumpy. You subconsciously believe in karma and are even driven by it. You love to work hard because you know only this can bring you success. You are passionate about teaching from experience and are committed to serving others. You can sacrifice yourself to give others a hand, even if you are regretting it afterward. You seem to possess many skills and can grasp the most profound matters because your intuition is strong. The Divinity is always helping you deal with your problems. This can be noticed when you are taking action and don’t depend on anyone. Positive all the time, you only believe in good results.",

           "capricorn": "You are visionary and  optimistic. You are conservative and dependable. While your unconscious fears can sometimes limit you, you possess inner discipline and love working from the shadows.In your subconscious, you can feel all the time-limited and overwhelmed by responsibilities. However, when all alone or not in the center of attention, you are more focused on everyday life. You can possess a strong intuition that’s helping you develop psychic abilities when it comes to both personal and professional ambitions. Your skills are most likely secret and helping you achieve great things in life. You can be disciplined and aware of the positivity in your life. What’s being the most appreciated about you is the fact that you can keep any secret and can successfully do your job without being all the time praised.",

           "aquarius": "You are wise, balanced and responsible. You are sensitive as far as your awareness of how groups work is going, as well as the gathered energies of collectives. You are very interested in your subconscious, as well in the origins of life. You can appear as dreamers to others, but you are very scientific. You love serving others and can feel disappointed when not allowed to do so. You can notice your tendency to escape society’s rules because you want to express yourself uniquely and originally. You are not interested in making judgments when it comes to implementing new ideas and bringing about progress. You love expressing your eccentricities only to your closest friends, by using as few words as possible. You are  always experiencing anxiety, without having an explanation for it because it’s being hidden in your subconscious. your personality is making you refuse any imposed limits, not to mention you are always looking for freedom and to be in the middle of things.",

           "pisces": "you are decisive, gentle and attentive. You are spiritually wise, but not very keen on showing it. More than this, you are empathetic and can sometimes feel very alone. You are very developed from an intellectual point of view and possess a strong intuition, meaning you can predict what can happen. Your main negative trait is not about your character, but more about how difficult it is for you to be alone. You can be so unselfish, to the point of sacrificing yourself. You are all the time giving because you care for others and can even heal with your compassion.More than this, you can understand a lot because you know many human stereotypes.  You can become successful as musicians or painters as well. Therefore, when choosing your profession, you should think more about being creative rather than other things.",            
                       
      },              
 }
 
 var planetsInHouseList = {
       "House1": {
           "sun": "Because of the presence of Sun in your 1st house, you will have a strong personality. The image that you present to others will tally with your inner image and you make good impression on others. Your presence will be felt when you are in a group. Although you  project a strong image, you are self-conscious coupled with a bit of ego. You do not like to taking orders from others. You will feel at your best when you make a mark on the world. The best working placement for you will be a government authoritative position or as a political leader. Sun in 1st house also signifies progress and good fortune. You will be studious, intelligent, may not speak a lot, and may settle or travel abroad", 

           "moon":"You have moon in the 1st house. The Moon represents the emotional response to surroundings, emotional connectivity. Your may appear emotional and impatient. Your first reaction is emotional. You will have a beautiful and youthful appearance and personality, and will have a jolly and happy nature. You need emotional stimulation, movement, and freedom to express yourself in order to feel happy and fulfilled. Your moods are very changeable, and this can be quite obvious to others. Because of your emotional sensitivity, you might often take things too personally, and react too quickly. Developing an awareness that others emotions are just as important, even if they are not as overt and immediate as yours, will be important. You have a soft exterior and tend to relate very personally and sympathetically to other people. However, you sometimes let your emotions overpower your reasoning and logic, and consequently, you are sometimes biased in your opinions. You are impressionable and rather gentle, or at least that is the way you appear. Your feelings are on the surface and you can not hide your emotions.",
           
           "mercury":"Due to the presence of Mercury in the first house you are extremely intelligent. Your are attractive and enlightened like pure gold. You aspire to learn everything possible in every field. You may be restless, adaptable, changeable, easily distracted. You enjoy talking amd often monopolize the conversation or fail to listen. You have a mischievous manner. Lively and interesting, you quickly adapt to new situations. You will be clever, delicate, charitable, and soft-spoken. You will continuously progress in life. You will be happy with your spouse, pleasure-loving, and endowed with all comforts. You may have to be catious about useless spending",
           
           "venus":"Due to the presence of Venus in the first house you are cheerful, self-conscious. You need constant assurance. You are a likable, magnetic, attractive, and charming person. You are easy to befriend, diplomatic, and warm in self-expression. You tend to attract others to you quite readily, and rarely come on too strong or aggressively. The need to be liked by others, and/or to keep the peace, might lead to feelings of resentment or general unrest. You might find it difficult to make solid decisions. Your personal sense of style and manner are things that others find fascinating, and you generally pay great attention to how these things benefit you in life. You are physically attractive and will maintain this quality well into your later years. You have a deep appreciation for art and enjoy surrounding yourself with beautiful objects." ,
           
           "mars": "Due to presence of Mars in the first house, you will be energetic and enthusiastic from childhood. Mars in the first house of your chart is a commanding position. Your reactions to new situations are immediate and pressing. You are an active, energetic, dynamic, enterprising, and possibly even forceful or aggressive person at times . You often begin new endeavors with enthusiasm. You might be rash and overly assertive. People are often impressed with your energy and stamina! You need to be involved, take the lead, and act independently. You do not enjoy following others or playing waiting games.You are usually direct and straightforward. It is also possible that you will be extremely proud and short-tempered.",
           
           "jupiter":"Jupiter in the first house signifies education, you will be highly inclined towards educating yourself. You present a jovial, kind, altruistic manner to the world around you, generally beginning any new undertaking with optimism and faith. Your belief in the power of positive thinking takes you places. Generally speaking, you are a very principled person with strong morals. You respect elders, teachers and everyone around you, and you harbour good and friendly relationships with everyone.  You will be enlightened, frank, egoistic, humble, modest, cultured, grateful, and liberal-hearted. You will be liberal, independent, truthful, reasonable, religious, and respected. You will establish your excellence among people through your talents",
           
           "saturn": "Saturn in the first house makes you strive for discipline, and no matter what the circumstances are, you adhere to the protocols. You might have a stern exterior. You more aware than others of right or wrong in a societal way. Responsibility will be a major concern in your actions. Demands from people around you will dominate your consciousness. You will probably find it extraordinarily difficult to place yourself ahead of others. Yoy prefer a partner who is far more mature and  want communicate with someone who has the mentality of discipline. An understanding spouse or partner will go a long way towards making life pleasant. You will be philosophical, hardworking, enterprising, friendly, financially organised, capable, truthful, clean-hearted, faithful, thoughtful, and will have a determined personality",
       },
       "House2": {
           "sun": "Sun in the second house represents pride and ego-driven nature in you because of your family history, family lineage and family wealth. You take pride in what you own, and you have a strong drive for security. You will have authoritative, cultured and elegant speech as the second house is representative of vocal cords, and it will help him attract people to listen to him and follow him. YYou hate to let others down once you have made a promise. Avoid over-identifying with what you have. Concentrate on proving your worth through your strong value system and your incredible ability to stick with things and with people. You can be a leader or person in authority using your qualities of speech and dominance. You take pride in the  foundations that you build. You will be respectful to your father and the values he instils in you. You may tend to focus on showing off",

           "moon": "Moon in the second house causes fluctuations or sudden ups and downs in your wealth, emotions. When it comes to money, you can be generous and frivolous in your spending habits one day, and frugal the next. You will be emotionally connected with his family. You will bring out your creative side in art, music or writings, and you will express the family happenings or relationships through his creativity. Vanity can be an issue. You are often looking for admiration, and you can be quite dependent on others for positive feedback until you learn to develop your own feelings of self-worth. You are soft-spoken, good-looking, pleasure-loving, tolerant, peace-loving, and fortunate. You may have a large family, happy children, and many friends",

           "mercury": "You have a very practical mind and intelligence. You may love accumulating wealth. You may be very patriotic about your country, its lineage, its history. You are very communicative in art of public speaking, singing or debating.  You do not like to be put on the spot or pushed into talking or coming to a conclusion. You need to work at your own pace. You can be quite one-track minded at times, not very happy with multi-tasking, and often quite fixed in your opinions. Sensual stimuli is more relevant to you than abstract concepts. You may not a believer of religion, god,still, you perpetuate logic behind every existing thing and study it thoroughly until you are satisfied",

           "venus": "Due to presence of Venus in the house, you may be good singer and speaker, and speak pleasantly and elegantly. Tangible expressions of love and affection are important to you. Your tastes are usually simply extravagant, well-defined, strong. You are attracted to items of quality. You may use generosity for your own benefit in other words. You will be scholarly and respected by friends. You will be polite, good-looking, sympathetic, and benevolent. You may participate in various games for enjoyment. You will have a big family and will be happy and will support many people. family-oriented and love your family and friends wholeheartedly",

           "mars": "Because of Mars in the Second House you will be dynamic and have influential speech. You could be an influencing public speaker or politician. You are likely to be a hard worker. You appreciate the process and  focus on the method. You love to produce things of practical value. You are ambitious but you might be impatient or impulsive when it comes to spending. You can be quite possessive, both of material things and of people. You like a physical challenge, and your physical abilities and energy make up a strong part of your sense of self-worth. Working independently is most appealing to you. You value things most when you have achieved something on your own.",

           "jupiter": "The Jupiter in the second hous makes you very business-minded person, you may either take on a family business or opens your own business, which may be similar to that of family. Others might think you are lucky with money, gifts, or personal possessions. In fact, you are extremely resourceful. A strong self-image or feelings of self-worth contribute to success.  You will have pleasant speech, a very dignified ability to speak. You will always try to teaching something to others or mentoring and providing wisdom to them. You are a good reader, teacher, public speaker, writer, curious about every existing thing in the universe",

           "saturn": "Due to presence of Saturn in the second house, you will be soft-spoken and judicious. You will travel far and wide with his family and acquire all comforts and the best things in life. You might be cautious in the way you invest your finances. You may invest your money in the development of a big and cautious business ventures, and this helps to multiply your wealth. You might be unduly pessimistic about your own ability to get possessions. You will get your work done easily by talking sweetly. You will spend money for people and keep them under control. You may brought up in a family that is conservative and is very disciplined",
       },
       "House3": {
           "sun": "The presence of Sun in the third house makes you extremely courageous and is overpowered by the courage. You need activity and a change of scenery often, or you feel restless. You take pride in your mental agility and your friendships. You are able to adapt quite easily to whatever environment you are in. There is a strong need to communicate your knowledge to others and to learn.  You have good hold on communication skills, and you are confident about it, which leads to be a dynamic speaker. Your curiosity is endless.",
           "moon": "You are very responsive, communicative, and curious. You can have a talent for imitating others and/or for picking up languages. You might either intellectualize your emotions rather than truly feel them and deal with them, or you communicate with excessive emotion. Some of you may do both at different times, and as you mature and develop, you learn to find a balance. Your opinions and ideas change often, and you might find that sometimes you adopt others points of view and express their ideas as if they were your own. This is not necessarily because you are a copy-cat, but because you sometimes fail to own your own thoughts, and you are so very sensitive to others opinions. You might be quite nervous and restless, requiring frequent changes of scenery, even if the movement or travel takes place locally.",
           "mercury": "This is an especially curious and inquisitive position for Mercury. You are generally very interested in reading, teaching, speaking, exchanging ideas, keeping current with the daily news, and perhaps gossiping. Your interests are many and varied, sometimes to the point that you barely skim the surface of any one topic. You are also very easily distracted and your attention span can be quite short. Quick to learn, you are swift to share what you know with others. You can be very talkative when you have the chance. You are a list maker, and you are likely quite involved in/with your community. Some of you can be quite nervous or fidgety.",
           "venus": "You are verbally expressive, diplomatic, and aim to be tactful. You easily win others over with your words, whether it is because of a likable facility with language, a beautiful voice, or a diplomatic use of words. You readily give out compliments. Some of you might use flattery to your own benefit at the risk of being ingenuine. You are generally a very good mediator, aiming to settle arguments quickly and restoring at least temporary peace. You have a mischievous side, however, and your desire to be tactful and polite with others does not always succeed. Some of you might engage in a lot of mind games, and others might eventually find out that you do not always mean what you say or say what you mean! You value mental stimulation and frequent changes of scenery in your love relationships.",
           "mars": "You speak your mind quite readily, sometimes shooting from the hip when it comes to expressing your ideas and opinions. You tend to know a lot about a variety of subjects, and like to share that knowledge with others (sometimes too forcefully!). When communicating, you are generally very direct and clear. You can easily get worked up about what others might think are trivial matters. You love a good debate. Whether you know it or not, or no matter your intentions, you can be provocative in your communication style. You are likely gifted with manual dexterity, although you might easily become impatient with tasks. At your best, you are enthusiastic, animated, and lively in the way you express yourself, and this can inspire others. You will fervently defend your opinions and beliefs, as well as your family and childhood. ",
           "jupiter": "You are forward looking a real planner. You are endlessly curious and enjoy making happy connections with others. Sharing ideas with others is important to you, you take great pleasure in doing so. You are able to see the big picture and thus often are turned to for advice. With your sincere interest in others, you easily put people at ease in social situations.",
           "saturn": "The core meaning of the third house lies in the unconscious operating of the mind in familiar surroundings. The third house indicates the natural way you act and communicate with people. People might include your siblings while growing up, co-workers, neighbors, the grocery store clerk, and so on. You can review the way your mind works in these circumstances. In that sense, it is not unconscious. The comedy serial, Seinfeld, explored the quirkiness in individual actions and communication in familiar surroundings — the little things that people do and say unconsciously that make them what they are! Yes, the serial about nothing was funny. Saturn in the third house may make you feel ill at ease while you go about day-to-day life. You may come across as cold and reserved. You may be a man or woman of few words. This can turn some people off. You can use this to your advantage by listening to people. That way you do not have to do too much talking, yet people will love you for listening!",
       },
       "House4": {
           "sun": "Sun in the fourth house will make your life infuenced by your mother. You spend much of your time into your personal and private life, your home, and your family. Sun in the fourth house signifies the absence of your fathers influence and energy on you. Privacy is important to you. You are naturally protective of your family, including your heritage, and of your personal life. You face struggle and hardships in your career till mid 30's, and with your self-efforts, you will achieve success. Avoid being defensive as you work to build a secure foundation for yourself and the people you love.",
           "moon": "You long for a sense of true belonging, but you may be quite restless in your search. You might change residence frequently, or simply feel the need to make many changes in your home. Moving frequently may be a healthy thing if it keeps you emotionally stimulated, but if you find that you do so on whims and later regret the changes, you might want to treat it as a symptom of emotional unrest as a sign that you are in a constant search for the perfect mood and setting, when in fact a feeling of belonging should be worked on from the inside out, not the outside in! Some of you might remain rather immature on an emotional level, never wanting to truly grow up and take care of yourself. Attachments to your past, traditions, and family are strong.",
           "mercury": "You are an extremely imaginative person who dreams up all sorts of unusual ideas and plans. Your thinking is quite subjective, and in some cases narrow or biased. Some of you might enjoy working at home or keeping a lively, intellectual atmosphere in your home. You tend to retain a lot of information, and are usually quite interested in history, psychology, or politics. You are not quick to embrace a new idea or plan, and can be quite traditional in your thinking.",
           "venus": "You seek balance, beauty, harmony, and peace in your home and domestic life. You might be especially attracted to luxury or quality/comfort items in the home, and you likely have an eye for interior decorating. There is a loving, personal touch to the way you decorate your home. Your love is decidedly sentimental, and you show your affection through nurturing and displays of sympathy. You do not give your heart out easily, but when you do, you do it with great emotion. It is very easy for you to become attached to a partner, and possibly smothering or overly dependent if you are not careful. Your parents marriage affects your own partnering skills and style more than most. A parent may be especially charming, beautiful, or otherwise Venusian. On the negative side, this parent may have been especially indulgent or overprotective with you.",
           "mars": "You are fiercely protective of your close friends and family. Anger may be deeply felt and possibly deeply buried, and it can be very hard for others to uncover your true motives. You might be passive-aggressive in your approach, which could lead to resentments if you are not careful or confident enough to take a more direct approach to getting what you want. Family dynamics are lively and often intense. Regarding family members, you may frequently have arguments with them, about them, or on their behalf! You are likely to possess much energy for domestic projects or activities. Your actions are often governed by your instincts, and you do not appreciate being manipulated or forced into doing something that does not come from your gut. You might attempt to rule the roost on the home front, or you often take on a leadership role at home and with family.",
           "jupiter": "Your strong instincts tend to guide you, particularly on a professional level. You readily make warm connections with others, particularly valuing your family and close loved ones. Old age is expected to be pleasant and rewarding. Strong morals were reinforced in your childhood. You dream of, and will usually attain, a large or spacious home. You likely feel that happiness is home.",
           "saturn": "The fourth house indicates the way you relate to your family, both as a child and adult. It indicates your attitude to giving and receiving mothering or nurturing. Saturn in the fourth house can limit the nurturing that you yourself are capable of. Your style of nurturing may come across as slightly cold and impersonal. You might remember your childhood as one that lacked warmth and affection. Saturns influence adds a sense of responsibility to fourth house functions. One might feel the need to nurture more than most, perhaps to overcompensate for their own feelings of being neglected. The truth is mothering and nurturing can be fun! Saturn might take away that element of fun and make it a chore. Do not let that happen to you. Recognize your style and make up your mind to enjoy yourself! In a broader sense, the fourth house extends to the community, home town, and country. With Saturn influences, you will choose to be quietly patriotic and loyal.",
       },
       "House5": {
           "sun": "Sun in the fifth house magnifies everything in your life. You want to be noticed for your unique and special qualities and your creativity. Sun in the fifth house make you bold and confident in your abilities. You are happiest when you are expressing yourself in a special way and attention comes your way as a result. Because of Sun in the fifth house you will be interested in politics, art, creativity and culture, and you are expressive of the love he possesses for these activities and aspects. You have a flair for drama and/or sports. You are proud of your fun-loving attitude towards life. Your happy disposition is enough to get noticed, but do find creative ways to express yourself, as this is the path to true happiness for you.",
           "moon": "You love to share emotional experiences with loved ones and have a flair for the dramatic. Love affairs are magnetic and intense, and you do not take them lightly by any means, although you may go through much change with regard to your romances. You are attached to children, whether they are your own or not. Your creative hobbies are subject to relatively frequent changes, and you have innate artistic talent. You have a vivid imagination and are given to daydreaming often. There is a sense that you are always in touch, or trying to get in touch, with your inner child. If the Moon is challenged, you may have problems with impulsive shopping or gambling, or with frequent love affairs that never fully satisfy you. In any of these cases, you are more attached to the game than the player, and this is something to work on if you are looking to find true fulfillment. You might take risks just for the fun of it, but in the process, you are being irresponsible to others and to yourself. You are emotionally expressive and often dramatize your feelings, acting them out or blowing them out of proportion. You can not hide your instinctive emotional reactions to people or situations, and you do not make any pretenses about your personal sympathies or antipathies. You have a childlike openness and playfulness which is very appealing to others, but which sometimes gets you into trouble, as you take risks on impulse or whim.",
           "mercury": "You tend to use your voice, whether written or spoken, as a means of creative self-expression. You can be witty and humorous, an engaging communicator, and a fun friend. Playing games is appealing, especially ones that employ your intellect. You love tricks, jokes, plays on words, and mimicry. It is possible you are skilled at impersonations. Some of you could be clever at lying. You can have a tendency to promise more than you can deliver, or overstate your case. In some way, you are very entertaining with the spoken and/or written word. Communication and intellectual rapport are most attractive to you with romance. In some cases, this can indicate more than one lover at once. Curiosity can be a strong motivator for making social and romantic contact. You might also take much pride in your childrens intellectual abilities and talents. You would make a good teacher, as you are very curious about how people learn and can come up with many ideas that allow you to teach others creatively.",
           "venus": "Interest in romantic connections may have started young. Playful, sensual, and amorous, you are in love with love! You thrive on romantic attention, and it is easy and natural for you to always have a crush or romantic interest. There is a romantic, playful side to you that is unmistakable. It keeps you young at heart! You are sensuous and enjoy indulging in the pleasurable senses to the fullest possible extent. You enjoy surrounding yourself with beautiful art and music, and these may play a role in your ideal date scenario. There is a touch of the dramatic in you when it comes to love and sex. You are generally quite loyal to your partner, and you are both charming and easily charmed. It is also easy to turn your head. You are a warm, fun and playful date.",
           "mars": "You have a strong love of pleasure, and you tend to directly and perhaps impulsively pursue romance. Many of you are sports lovers, and anything with an element of risk appeals to you or entertains you. You put a lot of energy into the pursuit of entertainment, satisfaction, games, and pleasure. Possibly a very active hobbyist, you want a passion project that excites you. You tend to be very playful and demonstrative, and you could really enjoy putting on a show. In truth, you can be very competitive. Your children, and especially a first child, may be especially active and boisterous.",
           "jupiter": "You are generous, playful, and warm, particularly with children and in your romantic life. Prosperous areas for you tend to be creative ones, entertainment, children, and recreation. You are talented at teaching, showing patience and love for the learning process and those learning.",
           "saturn": "The fifth house is the house of play and self-expression. Saturns influences in this house compare in importance to those in the first house. The fifth house is all about spontaneity. Saturn seriously impedes spontaneity. You might be recognized as the party pooper or a bad date. Don not let that happen to you! Individuals with Saturn in the fifth house might find it difficult to play or do fun things. Saturnine guilt and responsibility might make you search for a good reason to have fun. All work and no play might stress you out to the point of neurosis. Recognize that you do not always need a cause to relax and enjoy life. Better still use this influence to your advantage. Get into an activity like raising money for a charity. That way you have a cause and the fund-raising events can be turned into fun occasions. While dating, allow your date lead you a little. If your date happens to have a fifth house Saturn then you have nothing to worry about. The two of you may hit it off discussing the ramifications of the ozone layer depletion on your first date. If your date does not have Saturn in the fifth then he or she might have other ideas about ways to have a good time!",
       },
       "House6": {
           "sun": "Sun in the sixth house makes you surrounded by competitive people in your work environment or everyday life. The work that you do, and the services that you offer, are very important to your sense of identity. Sun in the sixth house will show its positive effects with growing time, after the age of 35. Focus on finding a suitable and rewarding avenue for expressing this part of you, being extra careful to choose an occupation in which you can express yourself. You are sensitive to criticism about the work you do, and you work best when you can create your own schedule. Positive feedback for the services you render is important to you, but be careful not to over-identify with the appreciation you receive from others, as your work and your health suffer when you feel under-appreciated. Motivation to do a good job should come from within.",
           "moon": "You have an emotional need to be useful, to work productively, to be organized and on top of things, and to lead a healthy life. If these matters are chaotic in your life, it is a symptom of emotional unrest. You need a lot of variety on the job to be stimulated and engaged in order to feel happy. Some of you might seem to change jobs often, forever in search of the perfect fit job. Acceptance that any job requires some level of routine is hard for you. You are very sensitive, and especially aware of minor health annoyances or body aches and pains. Some of you have hypochondriac symptoms. Some attempt to get out of things they do not want to do by emphasizing health problems or even exaggerate illnesses in order to gain sympathy. At your best, however, you are a person who always helps out and shows your affection for others in practical ways in order to help them solve problems and improve their lives. You have a sympathetic nature and instinctively reach out to people in need of help. You also have a deeply ingrained tendency to want to improve or fix other peoples lives, which can be annoying to the person who has no desire to be changed or helped in this way. For you, affection and caring must be expressed in tangible acts or service of some kind.",
           "mercury": "You are a person who thinks of all the details that others often forget. Your mind is almost always turned on which can make you a little nervous. You are excellent at sorting things out, organizing, and making lists and associations. With your attention to the details and the mechanics, however, you might miss the bigger point! You are exceptionally helpful and others can count on you for making arrangements, researching, and offering advice. You truly love to feel useful. It is possible you have some traits of a hypochondriac, as you notice all of the little aches and pains that others might overlook. Nervous tension could be at the root of many of your health complaints. You might frequently have to deal with duplicitous co-workers. Many of you are good at crafts, mechanics, or anything that requires good manual dexterity.",
           "venus": "Your expressions of love and affection are practical and helpful. Being of service to a partner is especially important to you. In fact, you might go to great lengths to be available at all costs to a loved one. While you may not be flowery or showy when it comes to expressing love, you show your love by your availability, rendering services, doing practical things for a loved one, and other thoughtful little things. Many of you are talented at design work, as you appreciate and pay much attention to all of the little parts that make up a whole, with the goal of finding order and harmony in these systems. If you are not careful, you might pass up on true love opportunities in favor of relationships that serve a practical purpose in your life, or out of fear that you might not find better. Selling yourself short may be something that keeps you from going after what and who you want.",
           "mars": "You tend to work hard, sometimes to the point of exhaustion! You put a lot of energy into your work, and would do best working for yourself or for someone else but independently, as you can quickly become impatient if other members of a team are not working as fast as you. You are also easily upset with procrastination. You can be very skilled at organizing and re-organizing, sorting, classifying, and analyzing. You put a lot of energy into any job you do, and you can easily become riled up or defensive if someone criticizes or intrudes upon the work that you do. ",
           "jupiter": "You have high standards in your business dealings with others, believing that one should always treat others with respect and faith. This may mean missing out on business opportunities in the short term, but others tend to build faith in your honest approach in the long run. You may help those less fortunate than you. Attraction to rich foods may be a problem in your life. You generally take great pleasure in the work you do and in being useful to others.",
           "saturn": "Saturn is most comfortable in the sixth house. This house rules your attitude to work, service, and your body. The sixth house is the house of self-denial in the sense that you put off pleasing yourself. It symbolizes activities that you pursue not to please yourself, as in the fifth house, but for another purpose. Working to make a living is a good example. This activity doesn&lsquo;t necessarily please you but you do it anyways from a sense of responsibility. In that sense the sixth house is Saturnine. When Saturn happens to be in the sixth house of your natal chart you may very well be a workaholic. You may forget that you are working only to make a living. You may fall into the trap of living to work! Avoid doing this. In any case, you will have a strong sense of responsibility in your attitude to work and you will take service to others rather seriously. You may be overly concerned about what you feed yourself and spend time worrying about the food habits of your loved ones. All the sixth house functions are over-emphasized — a double whammy!",
       },
       "House7": {
           "sun": "You take pride in your ability to negotiate and to establish harmony in your relationships. It is important for you to have a partner, as you feel incomplete without one. You are motivated to become well-liked, and you are especially sensitive to rejection.",
           "moon": "You are drawn to partnerships and prefer to have a companion for emotional support. You are not a person who would happily take in a movie by yourself, or dine alone, for example. A partner awakens feelings in you that you may never know you had, and you seem to need a partner to learn about your own needs and feelings. You seek emotional fulfillment through relationships, but you may have many relationships one after another, each time believing that this is the one. Taking time between relationships is something that is hard for you to do, but quite necessary, as you tend to jump into relationships out of fear of being alone. You are very adaptable to others needs, and usually quite likeable as a result. Be careful that you do not become overly dependent on a partner, or assume that a partner is going to treat you the same way as you do them. You depend a great deal upon other people for emotional support and you have a large family of friends that care about you and treat you as kin. The women in your life are particularly important to you, and your relationship with them powerfully influences your sense of security and happiness. You may be overly dependent and unsure of yourself without a close partner",
           "mercury": "You have a great love of debate, if only to get closer to your own thoughts and opinions. Bouncing ideas off others helps you to make a decision, although coming to definite conclusions can be painfully difficult for you. You see the other side of the coin, but you might often play devils advocate. Communication with a partner is craved, and you also love an audience for your own thoughts and opinions, but preferably a one-person audience, as you come alive verbally when it is one-on-one. You can be quite skilled at keeping a partnership animated and alive with interesting tidbits, new ideas, and stimulating conversation. It is easy for you to become bored in partnership if the lines of communication go down, even temporarily. You might attract partners who are not especially sincere or downright duplicitous. In order to put an end to this pattern, you might try to avoid scheming and overanalyzing in your relationships. You might also love to talk about and analyze relationships and marriage. You get off on new perspectives that partners or good friends give you.",
           "venus": "You live for relationships. It is hard for you to think about being alone. Harmony is most important to you, so it is unlikely you will attempt to dominate a lover. You are a peacemaker, sometimes going to great lengths to achieve a balanced, harmonious relationship. Be careful not to bend over backwards just to keep the peace, you may be taken advantage of. Your marriage partner may be especially attractive, charming, or well off. You are extremely attractive, agreeable, and charming, drawing others to you magnetically. You need an unusual amount of contact and exchange with a partner, and might find that you feel completely lost without one. Some of you might quickly enter into partnerships, perhaps too quickly and neither equipped nor prepared for the responsibilities that a long-term relationship demands. In some cases, there can be a shallow or materialistic interest in partners. Your hips and lower back may be special erogenous zones for you, or they may be especially attractive body parts.",
           "mars": "With Mars in the seventh house of your natal chart, you need a partner who challenges you, and your close personal relationships can be especially passionate, active, or physical. You may be drawn to people who are more assertive or aggressive than you. Alternatively, you find/discover your own assertiveness through a special someone. There can be a marked impulsive tendency in your one-to-one relationships. Certainly, you need your connections to maintain a high level of passion and energy. You can be particularly good at mediating, counseling, troubleshooting, debate, politics, or working with the law.",
           "jupiter": "Cultivating close, rewarding partnerships is important to you. You are talented at negotiations, believing strongly in fair play, and you are excellent at mediating conflicts. Legal matters may be fortunate for you. You value people and relationships, and might succeed best in partnership. Relating as equals is important to you. You might naturally use charm and grace to reach your goals.",
           "saturn": "Saturn is most comfortable in the sixth house. This house rules your attitude to work, service, and your body. The sixth house is the house of self-denial in the sense that you put off pleasing yourself. It symbolizes activities that you pursue not to please yourself, as in the fifth house, but for another purpose. Working to make a living is a good example. This activity doe snot necessarily please you but you do it anyways from a sense of responsibility. In that sense the sixth house is Saturnine",
       },
       "House8": {
           "sun": "You have a great urge to go farther or deeper into life every step of the way. You want to experience more, and your desires are both powerful and intense. It is hard for you to find satisfaction in common experiences, and you have magnetic power if you choose to use it wisely. You are fascinated with what lies under the surface, and at some point in your life, self-improvement is a big interest. You are attracted to unexplored or taboo areas of life, and you avoid all things superficial.",
           "moon": "While you have a strong need for emotional security, you are also a person who is drawn to pushing your own limits, and many lifestyle changes can be the result of this need to challenge, or reinvent, yourself emotionally. You are always fascinated with how people work, taboos, secrets, and all that is forbidden or hidden. Sexual unrest, or an apparent need to constantly change sexual partners or to challenge yourself sexually, may be a symptom of emotional insecurity. Connecting with another person intimately is an emotional need, but your changeable emotions might often get in the way of your goal. Jealousy and possessiveness might also be qualities you struggle with. At your best, however, you are a person who is intimate, deep, and intensely loyal to a partner.",
           "mercury": "You are especially curious about what motivates people, as well as all that is mysterious, taboo, secret, and psychological. You are excellent at analyzing people and getting at their motivations, as well as developing strategies. You may have a good mind for finances, medicine, and other subjects that require research and investigation. With your strong persuasive powers (which should be used carefully), you speak with authority and others listen. You tend to feel that everything we do and experience has a purpose. You have a great, investigative, and penetrating mind and you are excellent at developing strategies, as well as communicating them with others.",
           "venus": "Intensity is what you seek in your love relationships, so that casual encounters are not necessarily your game. You are easily bored with mechanical interactions between partners, and might prefer drama in your relationships to anything mundane or superficial. However, you also fear being vulnerable in love, and, in youth, you may control your emotions in love. Fears of being betrayed may be at the heart of your somewhat jealous and possessive nature in love. When you give yourself over to love, you love wholeheartedly and expect all-consuming, total devotion and attention in return. You find passion a healing force in your life. Your charm runs deep just below the surface. You are attracted to all that is taboo, hidden, forbidden, and find beauty in the broken, disenchanted, obsessed, and passionate. In some cases, people with this position might make a business out of love, romance, and eroticism. There is an intensity about you that others pick up readily. Either they run or they are completely intrigued!",
           "mars": "With Mars in the eighth house, shades of the sign Scorpio can be found in your desire nature. You may not experience true passion until later in life, but when you do, it is magical and infectious. You have some fears of betrayal and loss that compromise your trust from time to time. You can be extremely hard-working on projects that interest you, and you make a fabulous researcher, investigator, or psychologist. Passion projects are vital they can get you out of bed in the morning! Your intuition is powerful, although it can take some time, experience, and psychological work to overcome a vague sense/feeling of guilt, fear, or doom. Your survival instinct is powerful. There is a tendency to bury things or to keep many of your troubles to yourself. Learning to express your anger more directly can improve your health and well-being.",
           "jupiter": "You are talented at strategy, research, and investigation. Getting to the root of any problem is important to you as you instinctively feel that this is where the answer lies. Similarly, you take great pleasure in unraveling mysteries and solving complex problems. You are naturally giving to a partner, both emotionally and materially. Taboos do not easily shock you.",
           "saturn": "Traditionally, the eighth house was recognized as the house of death. Saturn in the eighth in a natal chart would mean a horrible death. Modern day astrologers have moved away from that line of thinking. Today we think of the eighth house as a house of resurrections. The eighth house symbolizes transformations through growth and change. As an individual, you might need to re-invent yourself from time to time. The eighth house is opposite the second house, which symbolizes your attitude to possessions. In that sense the eighth house stands for your attitude to giving up relics of the past, so you can grow and change. Saturn in the eighth house can be a powerful influence. This influence will make you simply resist transformations, change, and growth. You will find it very difficult to accept changes in your life. Any change will be stressful for you, bringing in anxiety and worry. Be aware of this influence. Understand that change is something that you do not react to well. Prepare for change. Take time to chart out a course or action plan whenever change is imminent. Read a book on managing change in your life or at work. Change, if managed well, can make your life richer and better.",
       },
       "House9": {
           "sun": "You have a deep need to understand the world around you. You have high ideals and you have your eye on what is on the horizon. You are looking ahead, and at times can seem quite restless. You are proud of your knowledge and your morals. Be sure to avoid self-righteousness in your enthusiasm to share your knowledge. When used correctly, you are a tolerant, adventurous, and curious person, and you want to see the best in people and in life.",
           "moon": "This is a position that can indicate a deep longing for stimulation above and beyond the everyday, mundane routine. You are a philosophical sort, interested and curious about the world, other people, and perhaps different cultures. You can be extremely restless and discontented if you do not have a definite goal in mind. You might find yourself longing to be somewhere else when you are unhappy, imagining that if you were to move or travel, you would be much happier. However, this attitude can only keep you from enjoying and improving upon the situation you are now in, only serving to make you feel more unhappy in the present and with your current circumstances. Trying to avoid the attitude that the grass is greener on the other side will be important, while attending to your needs to get away from time to time will help scratch the seemingly incurable itch for something more. You may have done extensive traveling in your early years, or in some way had a background which enables you to understand and identify with many different types of people or cultures. You have a craving for things which are far away and foreign or for things you have never experienced before. You want to completely immerse yourself in the feelings and tastes of a new place, rather than simply have facts or an intellectual appreciation. Emotionally, too, you are restless and something of a wanderer.",
           "mercury": "You are eternally curious and hunger for knowledge. You enjoy studying and learning, and do it not because you have to, but because you want to. Exchanging ideas and personal philosophies with others is gratifying. You can be especially buoyant, enthusiastic, and even inspiring in your communications. While you may not pay enough attention to details, you are skilled at finding a quick solution to problems. You readily see the bigger picture and enjoy sharing your opinions and ideas. You get off on how information affects peoples lives, and you take great pleasure in learning that something you have shared or taught has inspired others to take action, experience something new, or make changes in their lives. Some of you might be too quick to offer advice, however, that might be lacking in thoroughness and practicality, or that you yourself do not follow. You may be especially interested in learning about different cultures and lands.",
           "venus": "You are attracted to, or you tend to attract, people of different cultural backgrounds. A sense of adventure is appealing to you. You are not especially clingy, and you expect a certain amount of freedom in a partnership. You want to feel like you are growing as an individual, and you wwill not be happy in a relationship that is restrictive or confining. In fact, you have a great love for the feeling of freedom or limitlessness. Your hips and thighs may be especially attractive! You appreciate a lover who is enthusiastic and not afraid to have a good time (with you!). You aspire to high ideals in love, but some of you might pursue sensations in love rather than true or deep feelings and attachment. Beware of a tendency for dissatisfaction with what you have, as the tendency to think that the grass is greener elsewhere can keep you from enjoying or developing what you have.",
           "mars": "You enjoy a healthy sense of adventure and adore a rousing debate or the challenge of learning new things with your Mars in the ninth house. This position has a Sagittarian flavor. Watch for a tendency to become angry or hurt if others disagree with you, as it can be all too easy to take differences of opinion very personally. As well, in your enthusiasm to uncover truths, you may be a little too pushy. You are sexually playful and energetic, and you may approach sex as a sport at times. Honest and sometimes downright blunt, others find your sense of humor and direct approach attractive. Your hearty laugh is appealing, and your zest for life is unmistakable. You can be mentally restless, and at times, physically too, as you seek new horizons to explore and experience.",
           "jupiter": "You are always hungry for knowledge and wisdom. With your naturally philosophical nature, you enjoy sharing your opinions and knowledge with others. You can be a natural teacher, and you love the learning process. Freedom of movement and expression are crucial to you. You can easily be inspirational, and find success in travel, education, teaching, sports, publishing, and foreign cultures.",
           "saturn": "The ninth house signifies ideas, philosophies, and rationalizations of the conscious mind. It opposes the third house which governs the unconscious mind. The ninth house, therefore, governs the functioning of the higher mind — those thought processes that define us as humans. Mind expansion is a basic ninth house function. The ninth house signifies an individual&lsquo;s personal philosophy of life, perception of the reality of life, and reaction to new ideas. Saturn in the ninth house indicates a practically minded individual. You are unlikely to take to flights of fantasy or fancy ideas. You might even be closed to new ideas. Your thinking might be overly closed and conservative. Don&lsquo;t close your mind! Be aware that while practicality is a great quality, the world needs people to come up with new ideas in order to move forward or even keep going. Don&lsquo;t dismiss ideas too quickly and don&lsquo;t be threatened by them. Instead, adopt a constructive attitude. Tell yourself and others that you can be practical in your thinking. And, that is an asset. At the same time, encourage people around you to think and act out their ideas and philosophies. You can be close-minded and mean, or the sane anchor of practicality for the creativity around you. The choice is yours!",
       },
       "House10": {
           "sun": "The urge to work toward a goal, for success and accomplishment, and/or for power is part of your makeup. You are uncomfortable in any position in which you must take orders from someone else. Recognize your ambitions and your need for authority without going overboard. Seek out a career that allows you to manage, rather than be managed, if possible. It is crucial that you accept the part of you that is ambitious, but take pains not to over-identify with an image that is not really you!",
           "moon": "This position of the Moon indicates an emotional need for recognition, popularity, acknowledgement, and achievement. You can be quite charismatic. You are at your emotional best when you lead a structured and responsible life, but it can take time to get there. You may change your goals and ambitions, and/or your profession frequently in an attempt to find the perfect fit. You may worry about living up to your image, or the expectations of your family. Decisions may be too emotionally biased, or you might act on emotional whims far too often. Learning to set your own heartfelt goals is the challenge here, as it is unlikely you will find true happiness if you follow or adopt the expectations of others, which you are especially sensitive to. You work well with the public and have an instinct for what the public wants and will respond to. Having a nest is not especially important to you, and you may invest more of your emotional energy into your career or public life than in your private life. Providing for and caring for others in a professional capacity is very likely.",
           "mercury": "You are good with language, and you generally use this talent in your profession. With your authoritative air, or you are talented at communicating and negotiating with those in authority. You might have more than one job going at once much of the time, you could change your career directions frequently, or you could be attracted to jobs that keep you on the move. You require frequent changes of setting or activities to remain stimulated and challenged. You are skilled at bringing fresh energy to your conversations or to your job, perhaps because you need the stimulation.",
           "venus": "Others tend to respect you for your charming manner, and you have many admirers, although some of these are admirers from afar, as there is an aura about you that is charming yet strangely (and intriguingly) distant. You have a great need to be recognized or admired for your charm, beauty, or loving manner, but should be careful not to become too wrapped up in what others think of you, as you might come across as phony or superficial. Some people with this position are married to their work or to their image. You are good at making contacts and organizing social events.",
           "mars": "An urge to organize and to be practical can amount to a minor obsession with this position! Your career motivation is constant and relentless, and people in your life need to respect your independent drive and focus. You are task-oriented, and you are at your best and most effective when you are in control of your time. In your relationships, you may often take the lead when it comes to organizing activities. With Mars in the tenth house, you can be quite driven, goal-oriented, and competitive. You thrive in careers in which you can pioneer, take the lead, or enjoy a certain amount of freedom or independence. You are a self-starter! You also need to be active and dominant in your field or profession. More interested in pursuing your goals than gaining others approval, you can certainly create some waves in your life from time to time.",
           "jupiter": "You readily take charge and use a winning, kindly approach while doing so. Others might see you as lucky when it comes to your career and business opportunities. It is natural for you to excel, and if others help you along the way, it is probably because of your winning attitude. In truth, you are ethical, mature, and resourceful. You value achievement and manifestation, as well as those who take responsibility for their lives. Position or status can be quite important to you.",
           "saturn": "While the sixth house rules work, the tenth house rules the work that you identify with. In the context of home and family, the tenth house signifies your attitude while playing the fathering role. Saturn in the tenth house makes you take your fathering responsibilities seriously. You will be concerned with the development and growth of your child in real world terms. At work, you may have the desire to lead or guide co-workers. In any case, you will take your career or chosen profession more seriously than most. Both at work and home, your teaching or leadership style will be based on practical aspects of life. You are acutely aware (more so than most) of your place and role in society. You may feel like you are under a magnifying glass, so to speak, when it comes to the path you choose to take in your career or in the roles you take on. Defensiveness and self-consciousness about your importance in the material world can result. A rather conservative approach to life is often adopted, which may or may not conflict with your more personal aspirations. You will shoulder immense responsibilities with ease. This might not always work for you. Take care not to take on too much at a time. If you feel overloaded with responsibilities,  delegate some!",
       },
       "House11": {
           "sun": "You are a humanitarian who aims to treat everyone as equals. You seek to be unique and original, and you do your best to avoid bias and prejudice. Social status is less important to you than belonging to a group of diverse personalities. Your identity, in fact, is somehow linked to a larger unit than yourself. You have high hopes and goals and tend to look at life in terms of opportunities. You will be  successful in any work you may take up. You will be talented yourself and appreciates the talents in others. you have firm and trustworthy friends.You have magnetic appeal, as people sense your broad tolerance and openness. Treating everyone as an equal will bring you many friends and appreciation from others.You’re very flexible and are looking for variety everywhere you’re going. You think a lot about the future and work hard to make your dreams come true.The friendships you establish are crucial to your development. If you identify too much with your friendships and your friendliness, you may become too impersonal and alienate those who would like to get close to you.",

           "moon": "Moon in 11th house is  good placement for the moon to be in as it gives a lot of gains in terms of property and assets.This position of the Moon indicates an emotional need for recognition, popularity, acknowledgement, and achievement. You can be quite charismatic.You will be thoughtful, intelligent, knowledgeable, soft-spoken, and will work faultlessly. You are at your emotional best when you lead a structured and responsible life, but it can take time to get there. You may change your goals and ambitions, and/or your profession frequently in an attempt to find the perfect fit. You work well with the public and have an instinct for what the public wants and will respond to.Your dreams and goals are big, because you have high hopes for your future. You are generous and kind, but very changeable when it comes to your objectives and moods. You may make new friends very often, because the Moon brings more and more people in yout life. Your old acquaintances will disappear from your life according to how the Moon changes its cycles, but no matter what, you will always be enthusiastic when dealing with new friends, forgetting about what happened with others.",

           "mercury": "You are endlessly curious about people, group interactions, community affairs, trends, and teams. You are attracted to people who bring new ideas into your experience, and who have something novel to contribute on an intellectual level. You are very forward-looking and fair-minded. Fair play, impartiality, and unselfishness are important ideals for you. There can be many changes or fluctuations in your personal wishes, dreams, plans, and ideals. You might attract friends who come and go, or who are dishonest or duplicitous.",
           "venus": "The friendship level of your relationship needs to be genuine in order for you to sustain romantic interest. You tend to focus on a person&lsquo;s unique qualities — those traits that make him or her stand out — as the most attractive. Your relationships must possess some kind of unconventional element in order to keep your interest levels high. Calves and ankles are either erogenous zones for you, or parts of your body that are particularly attractive! You may meet lovers through group activities. Although you value friendships and group affiliations highly, you might jump into friendships without considering the responsibilities they might entail.",
           "mars": "With Mars in the 11th house of your natal chart, you like to organize events and activities, and sometimes take the lead a little too often! However, for the most part, you&lsquo;re an engaging, helpful friend who is ready to jump in and take action when need be, and this is a wonderful, rare quality. Your mind needs to be engaged in order for you to be at your most passionate, and for this reason, you can seem a little detached or impersonal in close personal relationships. You&lsquo;re not afraid to be different or to march to the beat of a different drummer. It is likely that you enjoy working towards an important cause, and you can be quite a crusader! You may be attracted to intense, passionate, or energetic people, and your friendships can be quite colorful and possibly strife-ridden at times.",
           "jupiter": "Your social life means a lot to you, and you take great pleasure in connecting with your friends as well as involvement in teams and groups or with your community. Friends tend to benefit you, they can be influential or otherwise very helpful. You are altruistic by nature, and you especially value people and personal freedom. You are very open to new methods and progress, and you display great tolerance and humanitarianism.",
           "saturn": "One-to-one relationships are a seventh house function. The eleventh house is best understood as one that governs an individual&lsquo;s one-to-many relationships. This implies your relationship with friends, extended family, and the organization you work for, and so on. Saturn in the eleventh house, therefore, works much in the same way as in the seventh (read Saturn in the seventh), except that the nature of the relationships are different. You may find socializing tiresome and prefer to stay alone. Many people with this position feel some disdain for the superficial workings of casual friendships and of the group — that is, they feel uncomfortable and self-conscious about going through the motions, doing and saying the right things, and so forth. At the root of this perception, there may be a fear of failure in a group setting. It may be easier to fall back on, and take too much pride in, your uniqueness as an individual rather than submit to the idea that you belong and identify with a group. It can be a fear of being ordinary or just part of the crowd that prevents you from loosening up in social situations. The fact that you take friendships more seriously than most can give you a heavy sense of responsibility and reluctance to form ties as if you somehow sense that forming them will burden or obligate you too much. Staying alone might seem to be a better use of your time. Watch out for this. A deep-seated feeling of loneliness and separateness may be the result. Take time to personalize your social interactions. Since you find group activity uncomfortable, develop a few good friends to hang out with. You have a greater capacity than most to be a loyal and long-standing friend! Beyond friendships and groups, the eleventh house is associated with our long-term goals, hopes, and dreams. Saturn here can make you just as reluctant to commit to any one life path, and to articulate or define your innermost wishes, as you are to attach yourself to a group identity. It is as if doing so would be too binding and revealing. When you learn to identify and overcome your fear of failure, you will discover that this fear has been the only thing holding you back from defining and working towards your dreams.",
       },
       "House12": {
           "sun": "You are an intuitive, perfectionistic and affectionate person. You have a tendency to be introspective and need some space and seclusion in order to pull up your strength. You may avoid the spotlight, and if you do find yourself in a public role, you tend to hide your true self behind that role! Because your will is directed inwards, you need to find a path for yourself that allows you to get away from it all at least some of the time. Honor your need to be alone with yourself, but avoid over-identifying with your inner world to the point that you truly feel alone in a crowd. you can be a  imaginative and creative writer or screenwriter. No matter what the problem is, you will take the issue light and sleep soundly. The more you’re of help to others, the happier and fulfilled you get to feel.",

           "moon": "This position of the Moon indicates an emotional need for a feeling of belonging with, and support from, friends and associations with groups. You look to acquaintances for support, and offer the same in return. You are a person who is filled with many dreams, wishes, and hopes for your future, and most of these are altruistic and good-hearted desires.You are more empathetic and able to pick up others’ feelings, giving them a special intuition that many don’t have. You may be a royal ascetic, a scholar, and maybe knowledgeable.You will be interested in speculation and risky ventures. However, you might change your aspirations frequently, with your changing moods, and have a hard time settling on goals to work towards as a result. You get a lot of emotional fulfillment through your involvement in groups, clubs, organizations, community activities, or a network of close friends who support and care for you. ",

           "mercury": "You are intelligent, thoughtful, prudent, and religious.You are not very quick to speak or communicate, especially in childhood, as you need to develop trust in your own abilities to express yourself. You know how to listen and keep secrets, so you are one of the most reliable individual in this regard. Making matters too complex comes from overanalyzing motives or hunches, and then have problems acting on your intuition as a result. You are very attracted to symbols, sentiment, imagery, and paradoxes. Preferring not to focus only on facts, you learn best when ideas are presented visually, emotionally, or imaginatively. Learning to communicate clearly is a challenge for you, but one that might put an end to feelings of guilt, of being misunderstood, and to attracting unpleasant situations or duplicitous people into your experience.",

           "venus": "You are big on romance and you tend to live and breathe your partner once you are hooked. You could be profound writer, painter or spectator. You may have a problem setting up some boundaries between your needs and your partner’s, so it’s easy for you to get hurt in love.Caring a lot about the humanity, you think Divinity is in each and every person. Partners who mistake your compassion for weakness can take advantage of you.  You value a certain amount of self-sacrifice and a giving attitude in a partner, as you embody these traits. You can be quite mysterious to others, even if you do not mean to be, because your romantic needs are kept hidden. ",

           "mars": " You can be a researcher or field scientist working alone. You will be blessed with imaginative and vivid creative ideas which can make you a famous and creative writer.With Mars in the twelfth house of the natal chart, you can struggle with asserting yourself in direct, natural ways in your youth, but with time and experience (and perhaps some hard work), you are likely to learn to work with this energy rather than allow it to work against you.  You are extraordinarily resourceful, and you can handle many things on your own or in uniquely creative ways. When working all alone, you can make your almost impossible dreams come true. Watch for a tendency to feel defeated before you have given something a real shot.  Positively you can be very unselfish, working more on behalf of others than for yourself. There is a touch of the incurable romantic in your nature.",

           "jupiter": "This position of Jupiter by house is often considered the guardian angel position — something seems to save you just in the nick of time, probably due to your inborn faith in the universe. You will be a profound astrologer, meditator and yoga teacher, healer. You  will focus on spirituality which will be your source of wealth and assets, and you will guide others on the path of spiritual beliefs. You are relaxed, confident and hard-working. Solitude, working alone, and meditation can bring you great pleasure and a sense of rejuvenation. You are merciful and generous, often anonymously.You will love to travel, engage in scientific pursuit, buy expensive things and even become great editor. Being free and letting go of the past should be your main focus. see the good in any situation ",

           "saturn": "Each planet in the twelfth house represents energies that an individual may be denying even exists. Saturn in this house could mean an early life setback which prompts you to push the realities of life into the unconscious.You are disciplined and sensitive. You don’t want to feel in any way weak or to seem like you are depending on people. You have strong emotions. You may have a great talent for the arts.You will probably become very famous if you’ll learn something having to do with the arts from an early age. While self-control seems to be the most attractive route for you, you might find that letting others inside you, even in little ways, will help you overcome many of the vague feelings of guilt, self-doubt, and anxiety that prevent you from enjoying life in a free and natural manner. Learning to embrace your sorrow, free from guilt, is the first step towards true self-acceptance. ",
       },

 }
 
 var Houses = [
    { name: "House1", attribs: House1},
    { name: "House2", attribs: House2},
    { name: "House3", attribs: House3},
    { name: "House4", attribs: House4},
    { name: "House5", attribs: House5},
    { name: "House6", attribs: House6},
    { name: "House7", attribs: House7},
    { name: "House8", attribs: House8},
    { name: "House9", attribs: House9},
    { name: "House10", attribs: House10},
    { name: "House11", attribs: House11},
    { name: "House12", attribs: House12},
 ]
 
let InputData_Default = { 
      houseNum: 0, 
      signNum: 10, 
      planetsPos: { "sun": 0, "moon": 0, "mars": 2, "venus": 3, "mercury": 3, "jupiter":7, "saturn": 1, "rahu": 11, "ketu": 5}
    };

if (!inputData) {
  inputData = InputData_Default;
}
let houseNum = inputData.houseNum;
let signNum = inputData.signNum;
let planetsPos = inputData.planetsPos;
let House = Houses[houseNum]
let Sign = Signs[signNum]
let rulingPlanet=Sign.planet
let trait;
let planetsInHouse = planetsInHouseList[House.name];
let signInHouse = signsInHouseList[House.name];
pug_mixins["signEffect"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + ("¤This ¤" + "¤" + (pug_escape(null == (pug_interp = trait.signEffect[rulingPlanet]) ? "" : pug_interp)) + "¤" + "¤ value is due to ruling planet of your house ¤" + "¤" + (pug_escape(null == (pug_interp = rulingPlanet) ? "" : pug_interp)) + "¤");
};
var signEffect=pug_mixins["signEffect"];
pug_mixins["planetEffect"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + "¤\u003Cp\u003E ¤" + "¤" + (pug_escape(null == (pug_interp = planet.name) ? "" : pug_interp)) + "¤" + "¤ is in the house. ¤" + "¤" + (pug_escape(null == (pug_interp = planet.name) ? "" : pug_interp)) + "¤" + "¤ has attributes of status as ¤" + "¤" + (pug_escape(null == (pug_interp = planet.status) ? "" : pug_interp)) + "¤" + "¤, gender as ¤" + "¤" + (pug_escape(null == (pug_interp = planet.gender) ? "" : pug_interp)) + "¤" + "¤, ¤¤\n¤¤element as ¤" + "¤" + (pug_escape(null == (pug_interp = planet.element) ? "" : pug_interp)) + "¤" + "¤, temperament as ¤" + "¤" + (pug_escape(null == (pug_interp = planet.temperament) ? "" : pug_interp)) + "¤" + "¤ nature as ¤" + "¤" + (pug_escape(null == (pug_interp = planet.nature) ? "" : pug_interp)) + "¤" + "¤ governs ¤" + "¤" + (pug_escape(null == (pug_interp = planet.governance) ? "" : pug_interp)) + "¤" + "¤ \u003C\u002Fp\u003E ¤";
};
var planetEffect=pug_mixins["planetEffect"];
pug_html = pug_html + "\u003Ch1\u003E" + "¤" + (pug_escape(null == (pug_interp = House.name) ? "" : pug_interp)) + "¤" + "\u003C\u002Fh1\u003E\u003Cp\u003E¤ ¤";
pug_mixins['eachzHelper1'] = pug_interp = function(traitLT) {
trait = traitLT
{
pug_html = pug_html + "¤ ¤" + "¤" + (pug_escape(null == (pug_interp = trait.name) ? "" : pug_interp)) + "¤" + "¤ ,¤";
}
};
var eachzHelper1=pug_mixins["eachzHelper1"];
util.asmManager.foreach(House.attribs, eachzHelper1, { separator: '.', last_separator: '.', begin_with_general: 'This house influences your', end:'.' });
pug_html = pug_html + "¤\u003Cp\u003E The attributes of a house are influenced by the planets positioned in the house as well as the ruling planet of the zodiac sign contained in the house. The influence will be the combined effect of planets in the house and may cancel or reinforce each other.   ¤\u003C\u002Fp\u003E\u003Cp\u003E";
if ((signInHouse && signInHouse[Sign.name])) {
pug_html = pug_html + "¤\u003Ch2\u003E Effect of sign ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.name) ? "" : pug_interp)) + "¤" + "¤ in the house\u003C\u002Fh2\u003E¤¤\n¤¤\u003Cp\u003E¤¤\n¤¤Ruling planet of the sign ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.name) ? "" : pug_interp)) + "¤" + "¤ will effect the arttributes of this house.¤¤\n¤" + "¤" + (pug_escape(null == (pug_interp = signInHouse[Sign.name]) ? "" : pug_interp)) + "¤" + "¤\n¤¤\u003C\u002Fp\u003E¤";
}
pug_html = pug_html + "\u003C\u002Fp\u003E\u003Cp\u003E¤\u003Ch2\u003E Effect of planets in the house\u003C\u002Fh2\u003E¤";
pug_mixins['eachzHelper2'] = pug_interp = function(planet) {
if ((planetsPos[planet.name] == signNum && planetsInHouse[planet.name])) {
pug_html = pug_html + "¤\u003Cp\u003E \u003Cb\u003E¤" + "¤" + (pug_escape(null == (pug_interp = planet.name) ? "" : pug_interp)) + "¤" + "¤ in the house:\u003C\u002Fb\u003E¤¤\n¤" + "¤" + (pug_escape(null == (pug_interp = planetsInHouse[planet.name]) ? "" : pug_interp)) + "¤" + "¤\u003C\u002Fp\u003E¤";
}
};
var eachzHelper2=pug_mixins["eachzHelper2"];
util.asmManager.foreach(Planets, eachzHelper2, { separator: '', last_separator: '.', begin_with_general: '', end:'.' });
pug_html = pug_html + "\u003C\u002Fp\u003E\u003Cp\u003E¤\u003Cb\u003E General attributes of zodiac sign and planets In this house:\u003C\u002Fb\u003E The attributes of the planets and zodiac sign of the house are helpful if you want to interpret the chart on your own.  ¤¤\n¤¤\u003Cp\u003E¤¤\n¤¤The sign contained in the house is ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.name) ? "" : pug_interp)) + "¤" + "¤. ¤¤\n¤¤Ruling planet of ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.name) ? "" : pug_interp)) + "¤" + "¤ is ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.planet) ? "" : pug_interp)) + "¤" + "¤. It is a  ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.nature) ? "" : pug_interp)) + "¤" + "¤ sign with element as ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.element) ? "" : pug_interp)) + "¤" + "¤.¤¤\n¤¤Gender is  ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.gender) ? "" : pug_interp)) + "¤" + "¤, rises on ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.gender) ? "" : pug_interp)) + "¤" + "¤, fertility is ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.fertility) ? "" : pug_interp)) + "¤" + "¤ and represents the body part ¤" + "¤" + (pug_escape(null == (pug_interp = Sign.bodyPart) ? "" : pug_interp)) + "¤" + "¤\n¤¤\u003C\u002Fp\u003E ¤";
pug_mixins['eachzHelper3'] = pug_interp = function(planetLT) {
if ((planetsPos[planetLT.name] == signNum)) {
planet = planetLT
{
pug_html = pug_html + "¤¤";
pug_mixins["planetEffect"]();
pug_html = pug_html + "¤¤";
}
}
};
var eachzHelper3=pug_mixins["eachzHelper3"];
util.asmManager.foreach(Planets, eachzHelper3, { separator: '', last_separator: '.', begin_with_general: '', end:'.' });
pug_html = pug_html + "\u003C\u002Fp\u003E";
    }.call(this, "House1" in locals_for_with ?
        locals_for_with.House1 :
        typeof House1 !== 'undefined' ? House1 : undefined, "House10" in locals_for_with ?
        locals_for_with.House10 :
        typeof House10 !== 'undefined' ? House10 : undefined, "House11" in locals_for_with ?
        locals_for_with.House11 :
        typeof House11 !== 'undefined' ? House11 : undefined, "House12" in locals_for_with ?
        locals_for_with.House12 :
        typeof House12 !== 'undefined' ? House12 : undefined, "House2" in locals_for_with ?
        locals_for_with.House2 :
        typeof House2 !== 'undefined' ? House2 : undefined, "House3" in locals_for_with ?
        locals_for_with.House3 :
        typeof House3 !== 'undefined' ? House3 : undefined, "House4" in locals_for_with ?
        locals_for_with.House4 :
        typeof House4 !== 'undefined' ? House4 : undefined, "House5" in locals_for_with ?
        locals_for_with.House5 :
        typeof House5 !== 'undefined' ? House5 : undefined, "House6" in locals_for_with ?
        locals_for_with.House6 :
        typeof House6 !== 'undefined' ? House6 : undefined, "House7" in locals_for_with ?
        locals_for_with.House7 :
        typeof House7 !== 'undefined' ? House7 : undefined, "House8" in locals_for_with ?
        locals_for_with.House8 :
        typeof House8 !== 'undefined' ? House8 : undefined, "House9" in locals_for_with ?
        locals_for_with.House9 :
        typeof House9 !== 'undefined' ? House9 : undefined, "Houses" in locals_for_with ?
        locals_for_with.Houses :
        typeof Houses !== 'undefined' ? Houses : undefined, "JSON" in locals_for_with ?
        locals_for_with.JSON :
        typeof JSON !== 'undefined' ? JSON : undefined, "Object" in locals_for_with ?
        locals_for_with.Object :
        typeof Object !== 'undefined' ? Object : undefined, "Planets" in locals_for_with ?
        locals_for_with.Planets :
        typeof Planets !== 'undefined' ? Planets : undefined, "console" in locals_for_with ?
        locals_for_with.console :
        typeof console !== 'undefined' ? console : undefined, "eachzHelper1" in locals_for_with ?
        locals_for_with.eachzHelper1 :
        typeof eachzHelper1 !== 'undefined' ? eachzHelper1 : undefined, "eachzHelper2" in locals_for_with ?
        locals_for_with.eachzHelper2 :
        typeof eachzHelper2 !== 'undefined' ? eachzHelper2 : undefined, "eachzHelper3" in locals_for_with ?
        locals_for_with.eachzHelper3 :
        typeof eachzHelper3 !== 'undefined' ? eachzHelper3 : undefined, "embeddedLinguisticResources" in locals_for_with ?
        locals_for_with.embeddedLinguisticResources :
        typeof embeddedLinguisticResources !== 'undefined' ? embeddedLinguisticResources : undefined, "inputData" in locals_for_with ?
        locals_for_with.inputData :
        typeof inputData !== 'undefined' ? inputData : undefined, "params" in locals_for_with ?
        locals_for_with.params :
        typeof params !== 'undefined' ? params : undefined, "planet" in locals_for_with ?
        locals_for_with.planet :
        typeof planet !== 'undefined' ? planet : undefined, "planetsInHouseList" in locals_for_with ?
        locals_for_with.planetsInHouseList :
        typeof planetsInHouseList !== 'undefined' ? planetsInHouseList : undefined, "signsInHouseList" in locals_for_with ?
        locals_for_with.signsInHouseList :
        typeof signsInHouseList !== 'undefined' ? signsInHouseList : undefined, "util" in locals_for_with ?
        locals_for_with.util :
        typeof util !== 'undefined' ? util : undefined));
    ;;return locals.util.getFiltered();}