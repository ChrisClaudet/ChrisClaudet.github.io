//If you want to select an html element by id

const banner = document.getElementById('banner');

console.dir(banner) //This will show that this is an object

//This selects the DOM object, not the html

const toc = document.getElementById('toc');

//getElementsByTagName

const allImages = document.getElementsByTagName('img');
//This will return an array of the objects (images) with tag img

for (let img of allImages){
    console.log(img.src)
}
//Each object has an src parameter - we're just printing it here
//It could be 'p' or 'a' or 'div' tags

//It's an HTMLCollection

//getElementsByClassName

document.getElementsByClassName('square')
//this will collect the elements with class 'square'

const squareImages = document.getElementsByClassName('square');

for(let img of squareImages){
    img.src = "https://www.google.com"
}

