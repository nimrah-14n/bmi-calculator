#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
let yourName = await inquirer.prompt([
    {
        name: "Name",
        type: "input",
        message: (chalk.magenta("Please Enter Your Name")),
    }
]);
let weightinKilogram = await inquirer.prompt([
    {
        name: "weight",
        type: "number",
        message: (chalk.blue("Enter Your Weight In Kilogram")),
    }
]);
let heightinMeter = await inquirer.prompt([
    {
        name: "height",
        type: "number",
        message: (chalk.yellow("Enter Your Height In Meter")),
    }
]);
let BMI = weightinKilogram.weight / (heightinMeter.height * heightinMeter.height);
console.log(`hello ${chalk.green(yourName.Name)}!, BMI IS ${BMI}`);
if (BMI < 18.5) {
    console.log(chalk.red("YOU ARE UNDERWEIGHT"));
}
else if (BMI < 25) {
    console.log(chalk.bgCyan("YOUR WEIGHT IS NORMAL"));
}
else if (BMI < 30) {
    console.log(chalk.green("YOU ARE OVERWEIGHT"));
}
else {
    console.log(chalk.bgGray("YOU ARE OBESE"));
}
;
