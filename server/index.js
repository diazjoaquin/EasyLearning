const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");

conn.sync({ force: false }).then(async () => {
  server.listen(process.env.PORT, () => {
    console.log(`Server listening at ${process.env.PORT}`);
  });
  await axios.post("http://localhost:3001/test");
});
