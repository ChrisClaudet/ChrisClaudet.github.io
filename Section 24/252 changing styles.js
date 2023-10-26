h1.style.color = 'green';
h1.style.fontSize = '3em';
// adds styles in line - not ideal, very specific and overwrite everything


const allLinks = document.querySelectorAll('a');
// allLinks is all Links in document
for(let link of allLinks){
    link.style.color = "blue";
}

window.getComputedStyle(h1)
// This gets you all of the styles in h1

// Exercise

const container = document.querySelector('#container')

container.style.textAlign = "center"

const treeImage = document.querySelector('img')

treeImage.style.width = "150px"
treeImage.style.borderRadius = "50%"

// Exercise

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const letterArray = document.querySelectorAll("span");

// Iterate through each span and assign a color
letterArray.forEach((span, index) => {
  span.style.color = colors[index % colors.length];
});