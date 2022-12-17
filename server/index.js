const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const { test } = require("./src/Routes/test/controllers.js");

conn.sync({ force: true }).then(async () => {
  await test();
  server.listen(3001, () => {
    console.log(`Server listening at ${3001}`);
  });
  // await axios.post("http://localhost:3001/test");
});
