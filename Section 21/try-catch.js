function yell(msg){
    try {
        console.log(msg.toUpperCase());
    }
    catch (e){
        console.log(e); //this is the canon error message for the error
    }
}