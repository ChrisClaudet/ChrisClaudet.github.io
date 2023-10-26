// raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png
const container = document.querySelector('#container');
const baseURL = 'raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i=1; i <= 151; i++){
    const pokemon = document.createElement('div'); //create a div for each pokemon with label
    const newImg = document.createElement('img'); //creates an img element (sprite)
    const label = document.createElement('span'); //create a new span to hold text
    newImg.src = `${baseURL}${i}.png`; //src attribute is now the pokemon
    label.innerText = `#${i}` //label number
    
    pokemon.appendChild('newImg');
    pokemon.appendChild('label');
    container.appendChild('pokemon');

}

//you might need to do div{ display: inline-block; text-align: center } to make the CSS not take up the whole line per div
//then label should be below image - img{ display: block }