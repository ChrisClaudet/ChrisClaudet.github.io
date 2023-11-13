//H1 and an Input

const input = document.querySelector('input');

input.addEventListener('change', function(e){
    console.log("AHAH");
})

//change input only fires when you click away from the input
//When you leave the input and it's different

//If you want it to be checking all the time if it changes

input.addEventListener('input', function(e){
    console.log('INPUT EVENT!!');
})

//Now it fires every time you type something and value changes

//Another example

input.addEventListener('input', function(e){
    console.log('INPUT EVENT!!');
    h1.innerText = input.value;
})
//Now the h1 will live update when you change things




// EXERCISE


const input2 = document.querySelector('input2');
const h1 = document.querySelector('h1');

input2.addEventListener('input2', function(e){
    if(input2.value.trim() === '') {
        h1.innerText = "Enter Your Username"}
    else {
        h1.innerText = "Welcome, " + input2.value;
    }
});

//Input replaces h1 and then resets it back to what it was



 button.addEventListener('click', function(e) {
    container.style.backgroundColor = makeRandColor();
    e.stopPropogation(); //This prevents the other things from firing if its clicked, its like "STOP HERE"
 })
container.addEventListener('click',function (e) {
    container.classList.toggle('hide');
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r},${g},${b})`
}

//EVENT DELEGATION
const tweetsContainer = document.querySelector('div');

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldName = document.createElement('b');
    boldName.append(username);
    newTweet.append(`- ${tweet}`);
    tweetsContainer.append(newTweet);
}

tweetsContainer.addEventListener('click',function (e){
    console.log(e) //prints the mouse event object - you can tell how to distinguish -> find TARGET
    e.target.remove();
})

//BUT if there's other things let's say a <p>, that means that could also be removed - how could it only be <li> to remove? Below is how:

tweetsContainer.addEventListener('click',function (e){
    
    e.target.nodeName === 'LI' && e.target.remove(); 
    //This is an IF statement - if true, then anything after && is removed
})


