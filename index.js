// Code your solution here


function findMatching(dArray, string) {
    const result = dArray.filter(driver => driver.toUpperCase() === string.toUpperCase());
    return result;
}

function fuzzyMatch(dArray, str) { 
    const res = dArray.filter(function (driver) {

        if (driver.slice(0,str.length) === str) {
            return true;
        }
        return false;
    });
    return res;
}

function matchName(dArray, str) {

    const res = dArray.filter(function (driver) {

        if (driver.name === str) {
            return true;
        }
        return false;
    });
    return res;
}


