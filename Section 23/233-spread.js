//spread can expand things like arrays e.g.
// uses syntax ...

Math.max(1,2,3,5)
//returns 5

const nums = [1,2,3,4,56,7,78,8]

Math.max(...nums);
//returns 78 - we needed to expand because it didn't take an array, it takes separate arguments e.g. (1,2,3,4...) not [1,2,3,4...]

console.log(..."hello")
//will return 'h','e','l','l','o' or h e l l o 


//SPREAD WITH ARRAY LITERALS

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt'];

const allPets = [...cats]


///SPREAD WITH OBJECTS

cat = {family : 'feline', legs : 4}
dog = {family : 'canine', isFurry: true}
const catDog = {...cat, ...dog};

//you get catDog = {family: 'canine', legs: 4, isFurry: true}
//if there's a conflict then the last object in the list will overwrite