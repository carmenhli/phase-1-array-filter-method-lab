// Code your solution here

// find matching
function findMatching(drivers,name){
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

//fuzzy match
function fuzzyMatch(drivers,letters){
    return drivers.filter(driver => driver.toLowerCase().startsWith(letters.toLowerCase()));
}

//match name
function matchName(drivers,name){
    return drivers.filter(driver => driver.name.toLowerCase() === name.toLowerCase());
}