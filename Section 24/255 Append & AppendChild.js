const newImg = document.createElement('img');
//makes you an empty image

newImg.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD" //Adds a src to the image
newImg.classList.add('square') //adds a class with CSS that makes the image smaller and square

document.body.appendChild(newImg) //appends this as the last element of the body (bottom of the page)

//Add an h3
const newH3 = document.createElement('h3')
newH3.innerText = 'I am new!'
document.body.appendChild(newH3)





//Adjacent sibling - insert an H2 between two elements

const newB = document.createElement('b')
newB.append('Hi') //Instead of using innertext, this is another option
// now newB -> <b>Hi</b>

p.prepend(newB) //appends to the <p> object before the element





//element.insertAdjacentElement(position, element)
//position can be 
//'beforebegin' before the element, `afterbegin`inside the start of element `beforeend` inside the end of element or `afterend` after the element

const newH2 = document.createElement('h2')
//creates a new h2

newH2.append("Why hello there");
const h1 = document.querySelector('h1');

h1.insertAdjacentElement(afterend, newH2); //This will put "why hello there" after the h1



//Exercise: Create 100 buttons inside a div with id #container and add some inner text

// WRITE YOUR CODE IN HERE:

const container = document.querySelector('#container');

for (let i = 0; i < 100; i++){
    const newButton = document.createElement('button')
    newButton.innerText = "Hello";
    container.appendChild(newButton)
}



firstLi = document.querySelector('li');
ul = document.querySelector('ul');
ul.removeChild(firstLi); //This removes the child element Li within the ul

const img = document.querySelector('img');
img.remove(); // This would just remove the img
