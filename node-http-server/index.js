import { createServer } from "http";
import guitars from "./data.js";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const content = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<h2> My Guitars </h2>
<ul>
${guitars.map(createListItem).join("\n")}
</ul>
</body>
</html>
  `;
  res.end(content);
});

const createListItem = ({ make, model }) => `<li>${make} ${model} </li>`;

server.listen(5000, () => {
  console.log(`server running on port 5000`);
});
