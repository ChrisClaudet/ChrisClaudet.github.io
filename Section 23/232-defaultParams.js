function rollDie (numSides){
    return Math.floor(Math.random() * numSides) + 1;
}

// it returns NaN if there isn't any value put into numSides

function rollDie (numSides = 6){
    return Math.floor(Math.random() * numSides) + 1;
}
//add an = 6 so if you pass in nothing in rollDie it defaults to 6

//always have the default params last in the passing brackets otherwise you might get the wrong things added in