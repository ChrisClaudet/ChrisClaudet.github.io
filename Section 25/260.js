const button = document.querySelector('button');
button.addEventListener('click', function(){
    document.body.style.backgroundColor = 'olive';
})

//This would make the colour of the background olive when you click the first button sleected

//Random colour generator:
rgb(200,123,34)


const button = document.querySelector('button');
button.addEventListener('click', function(){

    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    document.body.style.backgroundColor = 'rgb(${r}, ${g} , ${b})';
})