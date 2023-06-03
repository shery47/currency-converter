#! /usr/bin/env node
import inquirer from "inquirer";
import figlet from "figlet";

// welcome
console.log(figlet.textSync("Currency Converter"));

let conversion = {
    "PKR" :{
        "USD": 0.0035,
        "GBP": 0.0028,
        "PKR": 1
    },
    "GBP" :{
        "USD": 1.25,
        "PKR": 357.54,
        "GBP": 1
    },
    "USD" :{
        "PKR": 285.64,
        "GBP": 0.80,
        "USD": 1
    },
}

const answer : {
    from: "PKR" | "USD" | "GBP",
    to: "PKR" | "USD" | "GBP",
    amount: number
} = await inquirer.prompt([
    {
        type: "list",
        name: "from",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your Currency"
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "USD", "GBP"],
        message: "Select your Conversion Currency"
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your Amount"
    },
    
]);

const {from, to, amount} = answer;
if (from && to && amount){
    let result = conversion[from][to] * amount;
    console.log(`You conversion from ${from} to ${to} is ${result}`)
}
else{
    console.log("invalid input!")
}