const singles = [1,2,3,4,5,6,7];

//map returns an array except each thing is edited with a function e.g.

const doubles = singles.map(function (num){
    return num * 2;
})

// that will make an array from singles so that doubles = [2,4,6,8...]


//Exercise 
// DO NOT ALTER THE FOLLOWING CODE:
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'}, {first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'}, {first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'}, {first: 'Severus', last: 'Snape'}];

// Write your code here
// Make a var called firstNames and it will be an array of only the first names of the fullNames array
//e.g.,
//console.log(firstNames); // ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

const firstNames = fullNames.map( function (fullName){
    return fullName.first;
})