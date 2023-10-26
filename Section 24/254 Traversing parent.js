document.querySelector('p') // This would get you a JS OBJECT
document.querySelector('p').innerHTML += '<sup>AYO</sup>'; //it will add on to the content with superscript

//PROPERTIES & METHODS for javascript objects

const jsObject = document.querySelector('h2'); //OBJECT

// METHODS
jsObject.classList
jsObject.getAttribute()
jsObject.setAttribute()
jsObject.appendChild()
jsObject.append()
jsObject.prepend()
jsObject.removeChild()
jsObject.remove()
jsObject.createElement

// PROPERTIES

jsObject.innerText
jsObject.textContent
jsObject.innerHTML
jsObject.value
jsObject.parentElement //returns the parent of the object (e.g. if you had a button and wanted click to affect parent)
jsObject.children //gives an array of children of a parent - if you want to iterate over it or something
jsObject.nextSibling
jsObject.previousSibling
jsObject.style


const squareImg = document.querySelector('.square'); //the class of the img is 'square'

squareImg.parentElement //you just get <body>
squareImg.children //you get an empty list: HTMLCollection []

squareImg.nextSibling //give you the corresponding node, here the DOM node
squareImg.nextElementSibling //gives you the next image, ignores weird text nodes of white space in JS objects 