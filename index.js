const express = require("express");
const server = express();
const router = require("./src/routes/indexRouter");
const cors = require("cors");

const PORT = 3000;
const HOST = "127.0.0.1";

server.use(cors());
server.use("/api", router);
server.get("/", (req, res) => res.send("Corriendo server"));

/*server.listen(PORT, HOST, () => {
  console.log(`Server running at http://${HOST}:${PORT}/`);
});*/

server.listen(PORT, () => {
  console.log(`Server running at port:${PORT}`);
});
