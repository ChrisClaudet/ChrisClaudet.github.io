//RESPONDING TO USER INPUTS AND ACTIONS

btn.onclick = function () {
    console.log("You clicked me!")
    console.log("I hope it worked")
}

function scream () {
    console.log ("AAAH")
    console.log ("STOP TOUCHING ME")
} //Creates function

btn.onmouseenter = scream; //When mouse enters the body of the button, executes scream

document.querySelector('h1').onclick = function() {
    alert('you clicked the h1!');
}