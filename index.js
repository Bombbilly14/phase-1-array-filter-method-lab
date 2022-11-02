// Code your solution here
function findMatching (drivers, searchName) {
    
    return drivers.filter(driver =>driver.toUpperCase() === searchName.toUpperCase())
    // return drivers.filter(function(driver) {
       // return driver.toUpperCase() === searchName.toUpperCas
   // })
}
function fuzzyMatch(drivers, searchChars) {
    
    const charLength= searchChars.length
    return drivers.filter(driver => driver.slice(0, charLength) === searchChars)
    // "Bobby" === "Sa" 
    // "Bobby".slice(0,2) => "Bo" === "Sa"

}

function matchName(drivers, hometown){

    for (const user of drivers) {
        if (user.name.hometown() === hometown) {
            return user
        }
    }

}
