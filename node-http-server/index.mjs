import { createServer } from "http";

const server = createServer((req, res) => {
  let content = "Hello world";

  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  res.end(content);
});

server.listen(5000, () => {
  console.log(`server running on port 5000`);
});
