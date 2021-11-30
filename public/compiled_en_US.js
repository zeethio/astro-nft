function pug_escape(e){var a=""+e,t=pug_match_html.exec(a);if(!t)return e;var r,c,n,s="";for(r=t.index,c=0;r<a.length;r++){switch(a.charCodeAt(r)){case 34:n="&quot;";break;case 38:n="&amp;";break;case 60:n="&lt;";break;case 62:n="&gt;";break;default:continue}c!==r&&(s+=a.substring(c,r)),c=r+1,s+=n}return c!==r?s+a.substring(c,r):s}
var pug_match_html=/["&<>]/;function template(locals) {const embeddedLinguisticResources = {"verbs":{},"words":{},"adjectives":{}};var pug_html = "", protect_stack = [], pug_mixins = {}, pug_interp;;
    var locals_for_with = (locals || {});
    
    (function (House1, House10, House11, House12, House2, House3, House4, House5, House6, House7, House8, House9, Houses, JSON, Object, Planets, console, eachzHelper2, eachzHelper3, embeddedLinguisticResources, inputData, params, util) {
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

 var House3 = 
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

 var House4 = 
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

 var House5 = 
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

 var House6 = 
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

 var House7 = 
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

 var House8 = 
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

 var House9 = 
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

 var House10 = 
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

 var House11 = 
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

 var House12 = 
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
      signNum: 1, 
      planetsPos: { "sun": 1, "moon": 1, "mars": 2, "venus": 3, "mercury": 3, "jupiter":7, "saturn": 6, "rahu": 11, "ketu": 5}
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
pug_mixins["signEffect"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_html = pug_html + ("¤This ¤" + "¤" + (pug_escape(null == (pug_interp = trait.signEffect[rulingPlanet]) ? "" : pug_interp)) + "¤" + "¤ value is due to ruling planet of your house ¤" + "¤" + (pug_escape(null == (pug_interp = rulingPlanet) ? "" : pug_interp)) + "¤");
};
var signEffect=pug_mixins["signEffect"];
pug_mixins["planetEffect"] = pug_interp = function(){
var block = (this && this.block), attributes = (this && this.attributes) || {};
function addToParams(_toAdd) { return Object.assign({}, params, _toAdd); }
pug_mixins['eachzHelper1'] = pug_interp = function(Planet) {
if ((trait.planetEffect[Planet.name] && planetsPos[Planet.name] == signNum)) {
pug_html = pug_html + ("¤The positioning of the  ¤" + "¤" + (pug_escape(null == (pug_interp = Planet.name) ? "" : pug_interp)) + "¤" + "¤ gives ¤" + "¤" + (pug_escape(null == (pug_interp = trait.planetEffect[Planet.name]) ? "" : pug_interp)) + "¤");
}
};
var eachzHelper1=pug_mixins["eachzHelper1"];
util.asmManager.foreach(Planets, eachzHelper1, { separator: '.', last_separator: '.', begin_with_general: '', end:'.' });
};
var planetEffect=pug_mixins["planetEffect"];
pug_html = pug_html + "\u003Ch1\u003E" + "¤" + (pug_escape(null == (pug_interp = House.name) ? "" : pug_interp)) + "¤" + "\u003C\u002Fh1\u003E\u003Cp\u003E¤ ¤";
pug_mixins['eachzHelper2'] = pug_interp = function(traitLT) {
trait = traitLT
{
pug_html = pug_html + "¤ ¤" + "¤" + (pug_escape(null == (pug_interp = trait.name) ? "" : pug_interp)) + "¤" + "¤ ,¤";
}
};
var eachzHelper2=pug_mixins["eachzHelper2"];
util.asmManager.foreach(House.attribs, eachzHelper2, { separator: '.', last_separator: '.', begin_with_general: 'This house influnces ', end:'.' });
pug_html = pug_html + "\u003C\u002Fp\u003E\u003Cp\u003E";
pug_mixins['eachzHelper3'] = pug_interp = function(traitLT) {
trait = traitLT
{
pug_html = pug_html + "¤You ¤";
pug_mixins["syn"]("have", "are blessed with" );
pug_html = pug_html + "¤ ¤";
pug_mixins["syn"]('good', 'high', 'excellent');
pug_html = pug_html + "¤ ¤" + "¤" + (pug_escape(null == (pug_interp = trait.name) ? "" : pug_interp)) + "¤" + "¤ .  ¤";
pug_mixins["signEffect"]();
pug_html = pug_html + "¤ . ¤";
pug_mixins["planetEffect"]();
pug_html = pug_html + "¤¤";
}
};
var eachzHelper3=pug_mixins["eachzHelper3"];
util.asmManager.foreach(House.attribs, eachzHelper3, { separator: '.', last_separator: '.', begin_with_general: '', end:'.' });
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
        typeof console !== 'undefined' ? console : undefined, "eachzHelper2" in locals_for_with ?
        locals_for_with.eachzHelper2 :
        typeof eachzHelper2 !== 'undefined' ? eachzHelper2 : undefined, "eachzHelper3" in locals_for_with ?
        locals_for_with.eachzHelper3 :
        typeof eachzHelper3 !== 'undefined' ? eachzHelper3 : undefined, "embeddedLinguisticResources" in locals_for_with ?
        locals_for_with.embeddedLinguisticResources :
        typeof embeddedLinguisticResources !== 'undefined' ? embeddedLinguisticResources : undefined, "inputData" in locals_for_with ?
        locals_for_with.inputData :
        typeof inputData !== 'undefined' ? inputData : undefined, "params" in locals_for_with ?
        locals_for_with.params :
        typeof params !== 'undefined' ? params : undefined, "util" in locals_for_with ?
        locals_for_with.util :
        typeof util !== 'undefined' ? util : undefined));
    ;;return locals.util.getFiltered();}