import * as readline from "readline";
import { stdin as input, stdout as output } from "process";

const rl = readline.createInterface({
  input: input,
  output: output,
});

function question() {
  rl.question("Enter your simple equation: ", (input) => {
    if (input === "quit") {
      rl.close();
    } else {
      try {
        const value = eval(input);
        console.log(`${value}`);
      } catch (exception) {
        console.log("I dont know how to do that");
      }
      question();
    }
  });
}

question();
