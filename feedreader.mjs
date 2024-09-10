import { getLinks, saveLinks } from "./feed-manager.mjs";
import { question, close } from "./rl.mjs";

const feeds = await getLinks();

let input = await question("Enter command (list,add, del, read, quit): ");

while (input !== "quit") {
  let cmdParts = input.trim().split(" ");
  let cmd = cmdParts[0];
  // list
  if (cmd === "list") {
    feeds.forEach((url, index) => console.log(`${index}\t${url}`));
  }
  // add url
  if (cmd === "add") {
    if (cmdParts.length < 2) {
      console.log("Please include the url with the add command. ");
    } else {
      feeds.push(cmdParts[1]);
    }
  }
  // delete index
  if (cmd === "del") {
    if (cmdParts.length < 2) {
      console.log("Please include the index of the link to be deleted ");
    } else {
      let index = parseInt(cmdParts[1], 10);
      if (index > -1 && index < feeds.length) {
        feeds.splice(index, 1);
        console.log(`${index} deleted`);
      } else {
        console.log("the provided index is out of range ");
      }
    }
  }

  // read index

  input = await question("Enter command (list,add, del, read, quit): ");
}

await saveLinks(feeds);
close();
