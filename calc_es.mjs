import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input: input,
  output: output,
});

function question(query) {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
}

let answer = await question("Enter your simple equation: ");

while (answer != "quit") {
  try {
    const value = eval(answer);
    console.log(`${value}`);
  } catch (exception) {
    console.log("I dont know how to do that");
  }

  answer = await question("Enter your simple equation: ");
}

rl.close();
