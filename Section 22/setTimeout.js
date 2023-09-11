setTimeout(() => {
    console.log("Hello!")
}, 3000)

//this runs after 3 seconds - has to be a function inside for some reason not sure why

const id = setInterval(() => {
    console.log(Math.random())
}, 2000)

//Every 2 seconds prints random math number - repeats all the time lol
//setInterval has an ID to stop it saved in a var

clearInterval(id) //this would clear the repeat straight away, so run it later or in the console somehow