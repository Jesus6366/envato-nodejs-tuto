const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
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
