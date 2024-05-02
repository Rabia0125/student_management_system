#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold(`"\n~*~*~ WELCOME TO THE STUDENT MANAGEMENT SYSTEM ~*~*~\n`))
const randomNumber : number = Math.floor(10000 + Math.random() * 10000)
let myBalance : number = 0;
let answer = await inquirer.prompt(
    [
        {
            name: "student",
            message: "Enter Student name:",
            type: "input",
            validate: function(value){
                if (value.trim() !== ""){
                    return true;
                }
                return "Please enter a student name!"
            },
        },
        {
            name: "course",
            message: "Select the course to enrolled:",
            type: "list",
            choices: ["HTML","CSS","JAVASCRIPT","PYTHON","TYPESCRIPT"]
        }
    ]
);
const tutionFee: {[key:string]:number}={
    "HTML":2000,
    "CSS":3000,
    "JAVASCRIPT":4000,
    "PYTHNON":5000,
    "TYPESCRIPT":10000
}
console.log(`\n Tution fees : ${tutionFee[answer.course]}`)
console.log(`Balance: ${myBalance}`);

let paymentType = await inquirer.prompt(
    [
        {
            name: "payment",
            message: "Seiect your payment method:",
            type: "list",
            choices: ["EasyPaisa","Jazzcash","Bank Transfer"]
        },
        {
            name: "amount",
            message: "Enter your amount:",
            type: "input",
            validate: function(value){
                if(value.trim() !== ""){
                    return true;
                }
                return "Please enter your amount"
            },
        }
    ]
)
console.log(`\n Your select payment type is : ${paymentType.payment}\n`)
const tutionFees = tutionFee[answer.course]
const paymentAmount = parseFloat(paymentType.amount)
if (tutionFees === paymentAmount){
           console.log(`You have successfully enrolled in ${answer.course}`)

let next = await inquirer.prompt(
    [
        {
            name: "next",
            message: "Do you want to continue?",
            type: "list",
            choices: ["View status","EXIT"]
        }
    ]
)
if(next.next === "View status"){
    console.log(chalk.blueBright.bold("\n~~~~~~~~YOUR SATATUS~~~~~~~~\n"));
    console.log(`Student Name : ${answer.student}`);
    console.log(`Student ID : ${randomNumber}`);
    console.log(`Course : ${answer.course}`);
    console.log(`Tution fees Paid : ${paymentAmount}`);
    console.log(`Balance : ${myBalance += paymentAmount}`);
    console.log(chalk.greenBright.bold(`~~~~~~~~~~~~ THANK YOU ~~~~~~~~~~~~~~`));
}else{
    console.log(chalk.gray.bold(`\n***Exiting Student Management System***\n`));
    console.log(chalk.bgGreenBright.bold(`~~~~~~~~~~~~ THANK YOU ~~~~~~~~~~~~~~`));
}
}else{
    console.log(`Invalid amount\n`)
}