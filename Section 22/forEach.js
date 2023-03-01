const numbers = [1,2,3,4,5,6,7];

numbers.forEach( function (i){
    console.log(i);
})

//This prints 1 /n 1 /n 1 /n 1
// this is the same as:

for (let el of numbers){
    console.log(el);
}

//Here's another example where it's an array of objects

const movies = [
    {
        title : "Aliens",
        score : 99
    },
    {
        title : "Titanic",
        score : 80
    },
    {
        title : "Avatar",
        score : 88
    }
]

movies.forEach(function (movie){
    console.log(`${movie.title} - ${movie.score}/100`);
})

//This would print them like Aliens - 99/100 /n Titanic - 80/100