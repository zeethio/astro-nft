import {ascAngleToSign} from "./HouseUtil.js";

const TestDetail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


const House1Detail = "<h1>House1</h1>"+ TestDetail;

const House1 = 
    [
        {
            trait: "Self-Confidence",
            signEffect: [{"Aries": "high"}, {"Tarus": "very high"}],
            planetEffect: [{"house10": ""}],
        }, 
        //{"SelfEsteem", "Appearance", "Health", "Character", "Purpose of Life", "Behavior", "Birth", "imbs","Head"
    ]

export var getHouse1Detail = function (planetData) {
    try {
        var ascAngle = planetData[13];
        if(ascAngle) {
            return ascAngleToSign(ascAngle);
        }   else {
            return (House1Detail);
        }
    } catch {
        return (House1Detail)
    }
}