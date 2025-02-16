#!/usr/bin/env -S npx tsx

import inquirer, { Answers } from "inquirer";
import chalk from "chalk";
import yosay from "yosay";

console.log(chalk.blue("\nHello visitor, please enter you details:\n"));

const questions: Answers = [
  {
    type: "input",
    name: "name",
    message: "What's your name?",
    required: true,
  },
  {
    type: "list",
    name: "salutation",
    message: "How should I refer to you?",
    choices: ["Mr.", "Mrs.", "none"],
  },
  {
    type: "confirm",
    name: "isEverythingOk",
    message: "Is the entered information correct?",
    default: true,
    transformer: (answer: boolean) => (answer ? "👍" : "👎"),
  },
];

inquirer.prompt(questions).then((answers) => {
  const { isEverythingOk, salutation, name } = answers;

  if (!isEverythingOk) {
    console.log(
      `\n${chalk.red("[Error]:")} please try again with the correct information`
    );
    return false;
  }
  console.log(`\n${chalk.green("[SUCCESS]:")} information entered was correct`);

  const person: string[] = [name];
  if (salutation !== "none") person.unshift(salutation);

  console.log(yosay(`Hallo ${person.join(" ")}!`));
});
