
const TestDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

export const HousesIntro = "<h1>What is Birth Chart ?</h1><p>The birth chart is a snapshot of the sky at your moment of birth." +
                    "The birth chart is divided into 12 equal sections, which comprise the Houses. Houses are not the same as the zodiac wheel" +
                    "The Houses in an astrology chart represent different facets of your life</p>"

const House1Detail = "<h1>House1</h1>"+ TestDetail;
const House2Detail = "<h1>House2</h1>"+ TestDetail;
const House3Detail = "<h1>House3</h1>" + TestDetail;
const House4Detail = "<h1>House4</h1>" + TestDetail;

const House5Detail = "<h1>House5></h1>" + TestDetail;
const House6Detail = "<h1>House6</h1>" + TestDetail;
const House7Detail = "<h1>House7</h1>" + TestDetail;
const House8Detail = "<h1>House8</h1>" + TestDetail;
const House9Detail = "<h1>House9</h1>" + TestDetail;
const House10Detail = "<h1>House10</h1>" + TestDetail;
const House11Detail = "<h1>House11</h1>" +  TestDetail;
const House12Detail = "<h1>House12</h1>" +  TestDetail;

const HouseDtails = {
    "house1": House1Detail,
    "house2": House2Detail,
    "house3": House3Detail,
    "house4": House4Detail,
    "house5": House5Detail,
    "house6": House6Detail,
    "house7": House7Detail,
    "house8": House8Detail,
    "house9": House9Detail,
    "house10": House10Detail,
    "house11": House11Detail,
    "house12": House12Detail,

};

export var getHouseDetails = function (className) {
    return (HouseDtails[className])
}