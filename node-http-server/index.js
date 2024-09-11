import { createServer } from "http";
import guitars from "./data.js";

const server = createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  const url = new URL(req.url, "http://localhost");

  const id = url.searchParams.get("id");

  const content = `
  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
 ${id ? getGuitarContent(id) : createList()}
</body>
</html>
  `;
  res.end(content);
});

const createList = () => `<h2> My Guitars </h2>
<ul>
${guitars.map(createListItem).join("\n")}
</ul>`;

const createListItem = ({ id, make, model }) =>
  `<li><a href="?id=${id}">${make} ${model}</a> </li>`;

const getGuitarContent = (id) => {
  const guitar = guitars.find((g) => g.id == id);

  if (guitar) {
    return `<h2> ${guitar.make} ${guitar.model} </h2>`;
  } else {
    return `<p>Guitar does not exist </p>`;
  }
};

server.listen(5000, () => {
  console.log(`server running on port 5000`);
});
