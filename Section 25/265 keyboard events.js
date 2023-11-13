document.querySelector('button').addEventListener('click',function(evt){
    console.log(evt);
})

// in html: 
// <input type = "text">

//Select it in JS

const input3 = document.querySelector('input');
input.addEventListener('keydown', function (){
    console.log('KEYDOWN');
})

//event fires when you press a key down


//keyup is when a key is pressed but on the way back up it fires



//Making a game? Lets use the arrow keys!
//e stands for event! Name it anything
window.addEventListener('keydown', function(e) {
    switch (e.code) {
        case 'ArrowUp':
            console.log("UP!");
            break;
        case 'ArrowDown':
            console.log("DOWN!");
            break;
        case 'ArrowRight':
            console.log("RIGHT!");
            break;
        case 'ArrowLeft':
            console.log("LEFT!");
            break;
        default:
            console.log('Ignored');
    }
})


//266 FORM EVENTS and PreventDefault
//Responding to user inputs

//What happens when we submit a form?
// <form action = "/shelter" id = "shelterForm"></form> -> when this form is submitted, the request is sent to this URL

const form1 = document.querySelector("#shelterForm");

form.addEventListener("submit", function (e){
    
    console.log("SUBMITTED!");

}) //This fires but default thing still happens

const form2 = document.querySelector("#shelterForm");
form.addEventListener("submit", function (e){
    
    e.preventDefault(); 
    //not specific to form, but 90% of time is on form
    
    console.log("Submitted the form");
}) //This fires and now doesn't do default thing



// <h2>Available Cats</h2>
//<ul id="cats"></ul> 
//<input type = "text" id ="catName">
//we're gonna append different cats to that list when we submit

const input1 = document.querySelector("#catName");
input.value //how we get what's written in the input




const form = document.querySelector("#shelterForm");
const input = document.querySelector("#catName");
const ul = document.querySelector("#cats")


form.addEventListener("submit", function (e){
    
    e.preventDefault(); 
    
    const catName = input.value;
    const newLi = document.createElement("li");
    newLi.innerText = catName;

    ul.append(newLi) //now we just have to add it to the ul parent element which we've named ul above
})



//Coding exercise:
// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form5 = document.querySelector('form5');
const ul5 = document.querySelector("#list");

form5.addEventListener("submit", function (e){
    e.preventDefaul5t();
    
    const product = (form5.elements.product.value);
    const quantity = (form5.elements.qty.value);
    
    const newLi = document.createElement("li");
    newLi.innerText = product;
    newLi.innerText += ' ' +quantity;
    ul5.appendChild(newLi);
    form5.reset();
})

//The HTML:
/* <head>
    <title>Grocery List</title>
    <!--LEAVE THESE LINES ALONE, PLEASE! THEY MAKE THE LIVE PREVIEW WORK!-->
    <script src="node_modules/babel-polyfill/dist/polyfill.js" type="text/javascript"> </script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

</head>

<body>
    <h1>Grocery List</h1>
    <form action="/nowhere">
        <label for="product">Enter A Product</label>
        <input type="text" id="product" name="product">
        <label for="qty">Enter A Quantity</label>
        <input type="number" id="qty" name="qty">
        <button>Submit</button>
    </form>

    <ul id="list"></ul>
</body>

</html> */