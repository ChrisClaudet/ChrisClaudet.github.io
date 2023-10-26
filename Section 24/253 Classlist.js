h2.classList.add('purple')
//adds the class of purple to the h2, basically pushes onto an array of classes

h2.classList.remove("border");


h2.classList.contains("purple");
//true/false


h2.classList.toggle("purple");
//adds a toggle or removes it (Very useful!)


//Exercise - gets all the <li> with class highlight and toggles them off
const liArray = document.querySelectorAll("li");

liArray.forEach((li, index)=>{
    li.classList.toggle("highlight")
})