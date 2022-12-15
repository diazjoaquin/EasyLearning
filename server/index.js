const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");

conn.sync({ force: false }).then(async () => {
  server.listen(3001, () => {
    console.log("Server listening at 3001");
  });
  await axios.post("http://localhost:3001/test");
});
