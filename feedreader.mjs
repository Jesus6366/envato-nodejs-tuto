import { getLinks, saveLinks } from "./feed-manager.mjs";
import { question, close } from "./rl.mjs";
import axios from "axios";
import Parser from "rss-parser";

const feeds = await getLinks();
const parser = new Parser();

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

  if (cmd === "read") {
    if (cmdParts.length < 2) {
      console.log("Please include the index of the link to be read ");
    } else {
      let index = parseInt(cmdParts[1], 10);
      if (index > -1 && index < feeds.length) {
        let { data } = await axios.get("https://www.reddit.com/r/node.rss");

        console.log(data);

        let feed = await parser.parseString(data);

        feed.items.forEach((item) => console.log(item.title));
      } else {
        console.log("the provided index is out of range ");
      }
    }
  }

  input = await question("Enter command (list,add, del, read, quit): ");
}

await saveLinks(feeds);
close();
