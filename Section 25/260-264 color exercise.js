const button = document.querySelector('button');
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
})

//This would make the colour of the background olive when you click the first button sleected

//Random colour generator:
rgb(200,123,34)


const button = document.querySelector('button');
const h1 = document.querySelector('h1');


button.addEventListener('click', function(){
    
    newColor = randomColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const randomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const newColor = 'rgb(${r}, ${g} , ${b})';
    
    return newColor
}

//keyword THIS

const buttons = document.querySelectorAll('button');
const h1s = document.querySelectorAll('h1');

for(let button of buttons) {
    button.addEventListener('click', colorize)
}
for(let h1 of h1s) {
    h1.addEventListener('click', colorize)
}

function colorize() {
    this.style.backgroundColor = randomColor();
    this.style.color = randomColor();
} //It means that this function can be used across both, since This calls the subject of the event click