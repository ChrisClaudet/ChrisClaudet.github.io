//METHODS
//classlist
//getAttribute()
//setAttribute()
//appendChild()
//append()
//prepend()
//removeChild()
//createElement

//PROPERTIES
//innerText
//textContent
//innerHTML
//value
//parentElement
//children
//nextSibling
//previousSibling
//style

//DOM manipulation
const h1 = document.querySelector('h1');
console.dir(h1) //this will show all properties in the first h1 object

document.querySelector('p').innerText = 'lololol' //this will select the inner text of the first <p> and change it to lololol
//Difference between textContent and innerText - textContent will show EVERYTHING

const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.innerText = 'I AM A LINK';
} //now every link will have a link within a link

//innerHTML allows you to manipulate the html, not just the text

document.querySelector('p').innerHTML = '<i>AYO</i>'; //it will set italics accordingly
document.querySelector('p').innerHTML += '<sup>AYO</sup>'; //it will add on to the content with superscript

document.querySelector('#banner')
    //Gets this: <img id="banner" src="https://img.src.com">
document.querySelector('#banner').id //"banner"

const firstLink = document.querySelector('a')

firstLink.href //"file:https://google.com" this grabs from Javascript
firstLink.title //"Google"
firstLink.getAttribute('href') //"https://google.com" this is slightly different - this grabs straight from HTML




