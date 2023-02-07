
alert("YOOO")
let l = [];
let input = prompt("What do you wanna do?")
console.log("Hello world")
while(input !== "quit" && input !== "q"){
    if( input == "new" ){
        let item = prompt("Okay what do you wanna add to your list?")
        l.push(item);
    }
    else if( input == "list"){
        console.log("***************")
        for (let n = 0; n < l.length; n++){
            console.log(`${n} : ${l[n]}`)
        }
        console.log("***************")
    }
    else if( input == "delete"){
        let i = prompt("Okay enter the index of the item you want to delete")
        console.log(`${l[i]} has been deleted`)
        l.splice(i, 1);
    }
    else if( input == "quit"){
        break;
    }
    input = prompt("What do you wanna do?")
}

console.log("you've quit the game")

