
const TestDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const House1Detail = "House1:"+ TestDetail;
const House2Detail = "House2:"+ TestDetail;
const House3Detail = "House3:" + TestDetail;
const House4Detail = "House4:" + TestDetail;

const House5Detail = "<p>House5></p>" + TestDetail;
const House6Detail = "House6:" + TestDetail;
const House7Detail = "House7:" + TestDetail;
const House8Detail = "House8:" + TestDetail;
const House9Detail = "House9:" + TestDetail;
const House10Detail = "House10:" + TestDetail;
const House11Detail = "House11:" +  TestDetail;
const House12Detail = "House12:" +  TestDetail;

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