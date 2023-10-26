//finds first h1 element:
document.querySelector('h1');

//finds first element with ID of red
document.querySelector('#red');

//finds first element with class of big
document.querySelector('.big');

//query selector just gives us our first match by default


//LOGIC
document.querySelector('img:nth-of-type(2)')
//this selects the second image in the page

document.querySelector('a[title="Java"]')
const checkbox = document.querySelector('input[type="checkbox"]')
//this selects anchor tag with title attribute of "Java"


//QUETYSELECTORALL
document.querySelectorAll('p')
//returns a collection of matching elements <p> tag

document.querySelectorAll('p a')
//returns a collection of matching elements <a> tags within <p> tags



//Let's say you wanted to print out all anchor tag sources:

for(let link of links){
    console.log(link.href)
}
//Prints out every anchor tag source