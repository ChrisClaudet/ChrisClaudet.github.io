//Rest params

function sum() {
    return arguments.reduce((total, el) => total + el)
}
//This function doesn't work because arguments is NOT an array - it's weird


//so instead we use ...param to save the arguments into a var
//e.g.

function sum(...nums){
    console.log(nums) //This will print e.g. [3,5,6] etc. (array!)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`Gold medal goes to: ${gold}`)
    console.log(`Silver medal goes to: ${silver}`)
    console.log(`And thanks to everyone else: ${everyoneElse}`)
}

raceResults('Tammy','Todd','Tina','Trevor','Travis')
//This prints out Tina, Trevor, Travis in everyoneElse