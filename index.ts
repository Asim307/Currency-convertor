#! /usr/bin/env node
import inquirer from "inquirer";
const currency:any={
    USD:1,
    EUR:0.91,
    GBP:0.76,
    INR:74.57,
    DHR:3.67,
    PKR:280
};
let answer= await inquirer.prompt([
    {
        name:"from",
        message:"enter from currency",
        type:"list",
        choices:["USD","EUR","GBP","INR","DHR","PKR"],
    },
            {
                name:"to",
                message:"enter to currency",
                type:"list",
                choices:["USD","EUR","GBP","INR","DHR","PKR"],
    },
    {
        name:"amount",
        message:"enter amount",
        type:"number"
    },
]);
let fromAmount=currency[answer.from]
let toAmount= currency[answer.to]
let Amount=answer.amount
let basedAmount=Amount / fromAmount
let convertedAmount= basedAmount * toAmount
console.log(convertedAmount);
