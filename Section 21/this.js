const cat = {
    name : "Vodevi",
    colour : "grey",
    breed : "tabby",
    meow() {
        "${this.name} squeaks"
    }
}

const hen = {
    name : "Helen",
    eggCount : 0,
    layAnEgg : function(){
        this.eggCount += 1;
        return( "EGG" )
    }
}

const layAnEgg2 = hen.layAnEgg; //this will call this.eggCount as a completely different object - the window object where everything is nested inside