import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.bold("\n\t-------------------------------------"));
console.log(chalk.bold.blue("\n\tWelcome to Student Management System"));
console.log(chalk.bold("\n\t-------------------------------------"));
const randomNumber = Math.floor(10000 + Math.random() * 90000);
let accountBalance = 0;
let answer = await inquirer.prompt([
    {
        name: "student",
        type: "input",
        message: chalk.bold.cyan.bgYellowBright("Enter student name : "),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.bold.red("Please enter non-empty value.");
        },
    },
    {
        name: "courses",
        type: "list",
        message: chalk.bold.cyan.bgYellowBright("Select the course to enrolled : "),
        choices: [
            "MS.Office",
            "HTML",
            "CSS",
            "Javascript",
            "Typescript",
            "Python",
            "Web Development",
            "Mobile Development",
            "Data Science",
        ],
    },
]);
const tutionFee = {
    "MS.Office": 2000,
    "HTML": 2000,
    "CSS": 2500,
    "Javascript": 3000,
    "Typescript": 5000,
    "Python": 6000,
    "Web Development": 10000,
    "Mobile Development": 10000,
    "Data Science": 15000,
};
console.log(chalk.bold.green(`\nTution Fee: ${tutionFee[answer.courses]}`));
console.log(chalk.bold.green(`\nAccount Balance: ${accountBalance}`));
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: chalk.bold.blue("Select the payment type: "),
        choices: ["Cash", "Bank Transfer", "Easypaisa", "Jazzcash"],
    },
    {
        name: "amount",
        type: "input",
        message: chalk.bold.cyan.bgYellowBright("Transfer Money : "),
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return chalk.bold.red("Please enter non-empty value.");
        },
    },
]);
console.log(chalk.bold.green(`\nYou select payment method: ${paymentType.amount}}`));
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (paymentAmount === tutionFees) {
    console.log(chalk.bold.green("\nCongratulations, You have successfully enrolled in " + answer.courses));
    let options = await inquirer.prompt([
        {
            name: "select",
            type: "list",
            message: chalk.bold.cyan.bgYellowBright("What would you like to do next?"),
            choices: ["View status", "Exit"],
        },
    ]);
    if (options.select === "View status") {
        console.log(chalk.bold.grey(`\t*_**_*`));
        console.log(chalk.bold.green(`\tStatus`));
        console.log(chalk.bold.gray(`\t*_**_*`));
        console.log(chalk.bold.green(`\tStudent ID: ${randomNumber}`));
        console.log(chalk.bold.green(`\tStudent Name: ${answer.student}`));
        console.log(chalk.bold.green(`\tCourse: ${answer.courses}`));
        console.log(chalk.bold.green(`\tTution Fees Paid: ${paymentAmount}`));
        console.log(chalk.bold.green(`\tAccount Balance: ${(accountBalance += paymentAmount)}`));
    }
    else {
        console.log(chalk.bold.green("\nExiting Student Management System\n"));
        console.log(chalk.bold.green("\nThank you for using our service\n"));
    }
}
else {
    console.log(chalk.bold.red("\nInvalid amount due to course\n"));
}
