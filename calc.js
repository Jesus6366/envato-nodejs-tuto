// listen
process.stdin.on("data", (chunk) => {
  // converting into a string
  const input = chunk.toString().trim();

  if (input === "quit") {
    process.exit(0);
  }

  try {
    const value = eval(input);

    console.log(`${value}`);
  } catch (exception) {
    console.log("I dont know how to do that");
  }

  process.stdout.write("Enter your simple equation: ");
});

// ask or print
process.stdout.write("Enter your simple equation: ");
