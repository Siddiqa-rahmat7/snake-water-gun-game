const prompt = require("prompt-sync")({ sigint: true });
let player = prompt("Enter snake , water , gun :")
let randomChoice = Math.floor(Math.random()*3);
let bot_choice = ["snake","water","gun"]
let bot = bot_choice[randomChoice];

const match = (player,bot) => {
    if(player === bot){
        return "Draw"
    }
    else if (player === "water" && bot === "snake"){
        return "Bot Win"
    }
    else if (player === "gun" && bot === "snake"){
        return "You Win"
    }
    else if (player === "water" && bot === "gun"){
        return "You Win"
    } 
      else if (player === "snake" && bot === "gun"){
        return "Bot Win"
    }
    else if (player === "snake" && bot === "water"){
        return "You Win"
    }
    else if (player === "gun" && bot === "water"){
        return "Bot Win"
    }
}
let result = match(player,bot)
console.log(`Bot:${bot} and player:${player}`)
console.log(`The winner is ${result}`)